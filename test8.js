// Regular function declaration
function regular() {
	console.log(this);
}
// Function expression with arrow function
const arrow = () => {
	console.log(this);
};

regular.bind({ a: 1 }).bind({ a: 2 }).call({ a: 3 });
arrow.bind({ a: 1 }).bind({ a: 2 }).call({ a: 3 });


// Что выведут console.log()
// => ???
