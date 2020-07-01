class A {
    f1 = () => {
        console.log(this); // => ???
    };
    f2 = function () {
        console.log(this); // => ???
    };
}

const b = new A();

b.f1();
b.f2();

const c = b.f1;
const d = b.f2;

c();
d();
