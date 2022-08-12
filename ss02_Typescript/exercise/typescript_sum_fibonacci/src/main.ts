function fibonacci(number: number): number {
    if (number == 0) return 0;
    if (number == 1) return 1;
    return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log("10 số fibonacci đầu tiên là: ");
let sum = 0;
for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log("Tổng của 10 số fibonacci đầu tiên là: " + sum);
