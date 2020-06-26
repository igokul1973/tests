let a = 'a';

function foo() {
    console.log(a); // => ???
    let a = 'b';
}

foo();

// Что выведет console.log()?