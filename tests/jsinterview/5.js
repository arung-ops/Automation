const tests = [
    {
        name: 'Login',
        status: "passed"
    },
    {
        name: 'test2',
        status: "failed"
    },
    {
        name: 'test3',
        status: "passed"
    },
    {
        name: 'test4',
        status: "failed"
    }
];
const failedtessts=tests.filter(
    test =>test.status === "failed"
);
console.log(failedtessts);
