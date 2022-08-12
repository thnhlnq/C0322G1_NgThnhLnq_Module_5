function fibonacci(n: number): number {
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("10 số fibonacci đầu tiên là: ");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log("Tổng của 10 số fibonacci đầu tiên là: " + sum);
