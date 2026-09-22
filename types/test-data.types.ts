export type LoginCaseType = 'positive' | 'negative' | 'boundary';

export interface LoginCase {
	id: string;
	type: LoginCaseType;
	username: string;
	password: string;
	expected: 'accepted-format' | 'rejected-format' | 'empty-values' | 'not-authenticated';
}

export interface UsersData {
	loginCases: LoginCase[];
}
