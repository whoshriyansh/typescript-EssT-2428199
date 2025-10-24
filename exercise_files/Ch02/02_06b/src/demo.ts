interface Contact {
    id: number;
    name: string;
}


function clone(source: Contact): Contact {
    return Object.apply({}, source);
}

function clone2(source: number):number{
    return source
}

//Now using the generics
function clone3<Type>(val: Type): Type{
    return val;
}

function clone4(val: any): any{
    return val;
}

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone(a)

const a2 = 12;
const b2 = clone2(a2);

const a3 = {"name": "Shriyansh", "age": 12};
const b3 = clone3(a3);

const a4 = true;
const b4 = clone4(a4);


//The only diffreence between any and generics is that generics locks the value, but in the case of any, it does not.

//Now we have the power to define our own interface and then we can pass on to the function