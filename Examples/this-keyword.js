// global.name = 'Global';

let objA = {
    name: 'Bangladesh',
    funcA: function() {
        this.funcB();
    },
    funcB: function() {
        console.log(`Name=${this.name}`);
        console.log(`this=${this}`);
    },
    funcC: () => {        
        console.log(`Name=${this.name}`);
        console.log(`this=${this}`);
    }
};

// objA.funcC();

let objB = {
    name: 'USA'
}
objB.funcC = objA.funcC;

//objB.funcC();

function callbackExample(cb) {
    cb();
}

callbackExample(objA.funcC);


