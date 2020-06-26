setTimeout(() => console.log(1));

const b = new Promise((resolve, reject) => {
	console.log(2);
    resolve();
    reject();
});

for (let i = 0; i < 10; i++) {
	b.then(() => console.log(3));
}

console.log(4);

// Обозначьте последовательность выводов данных логов в консоле
// => ???