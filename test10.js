const a = 90100;

function my() {
    if (true) {
        const a = 1;
    } else {
        const b = 2;
    }
    console.log(a);
    console.log(b);
}

my();

// Что выведут console.log()?
// => ???