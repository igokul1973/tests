test = 'module is called';

let o = {
    name: 'Mary',
    test: 'object is called'
}

function foo() {
    console.log(this.test);
}

foo.call();
foo.call(this);
foo.call(o);

// Что выведет console.log()
// => ???  