this.test = "attached to the module";
var foo = { test: "attached to an object" };

foo.method = function(name, cb){ 
    // bind the value of "this" on the method 
    // to try and force it to be what you want 
    this[name] = cb.bind(this);
};

foo.method("arrow", () => {
    console.log(this.test); // => ???
});
foo.method("regular", function () {
    console.log(this.test);; // => ???
});

foo.arrow();
foo.regular();

// Что выведут console.log()
// => ???