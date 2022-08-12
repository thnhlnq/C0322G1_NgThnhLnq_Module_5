function fibonacci(n) {
    if (n <= 2)
        return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("100 số fibonacci đầu tiên là: ");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log("Tổng của 100 số fibonacci đầu tiên là: " + sum);
//# sourceMappingURL=main.js.map