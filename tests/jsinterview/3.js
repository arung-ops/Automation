// const fs = require('fs');
// const filePath = '..//jsinterview/data.json';
// const jsondata = fs.readFileSync(filePath, 'utf-8');
// const data = JSON.parse(jsondata);
// const failedpayments=data.payments.filter(payment => payment.status === 'failed');
// console.log(failedpayments);

// failedpayments.forEach(payment => {
//     console.log(`Payment ID: ${payment.id}, Amount: ${payment.amount}, Status: ${payment.status}`);
// });
const fs = require('fs');
const filePath = '..//jsinterview/data.json';
const jsondata = fs.readFileSync(filePath, 'utf-8');
const data = JSON.parse(jsondata);

// Filter for failed payments
const failedpayments = data.payments.filter(payment => payment.status === 'failed');

// Calculate the total sum of failed payments
const totalFailedAmount = failedpayments.reduce((sum, payment) => sum + payment.amount, 0);

// Log individual failed transactions
failedpayments.forEach(payment => {
    console.log(`Payment ID: ${payment.id}, Amount: ${payment.amount}, Status: ${payment.status}`);
});

// Print the total sum
console.log(`\nTotal Sum of Failed Transactions: ${totalFailedAmount}`);
