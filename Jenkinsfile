pipeline {
    agent {
        docker {
            image 'node:24-bookworm'
            args '--ipc=host'
        }
    }

    options {
        timestamps()
        skipDefaultCheckout(true)
        disableConcurrentBuilds()
        buildDiscarder(logRotator(numToKeepStr: '20'))
    }

    parameters {
        string(
            name: 'BASE_URL',
            defaultValue: 'https://hq.nyovate.dev',
            description: 'Application URL used by the Playwright tests'
        )
    }

    environment {
        CI = 'true'
        BASE_URL = "${params.BASE_URL}"
        PLAYWRIGHT_BROWSERS_PATH = "${WORKSPACE}/.cache/ms-playwright"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Verify Node') {
            steps {
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright browser') {
            steps {
                sh 'npx playwright install --with-deps chromium'
            }
        }

        stage('TypeScript check') {
            steps {
                sh 'npm run typecheck'
            }
        }

        stage('Run Playwright tests') {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        always {
            archiveArtifacts(
                artifacts: 'reports/**, test-results/**, screenshots/**, videos/**',
                allowEmptyArchive: true,
                fingerprint: true
            )
        }
        success {
            echo 'Playwright test run completed successfully.'
        }
        failure {
            echo 'Playwright test run failed. Download the archived reports and traces for details.'
        }
    }
}
