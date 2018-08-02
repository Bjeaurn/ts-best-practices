// This is an example of a function that will return of a casted type.
// Example is borrowed from what like an Angular HttpClient might do underwater type-wise.

export function getHttp<T>(url: string, exampleData?: T): T {
    return exampleData as T;
}

const data: any = {
    bliep: 'bloep',
    herp: 'derp'
}

export type Test = {
    bliep: string;
    herp: number;
}

export class Another {
    readonly bliep: string;
    readonly herp: string;

    constructor(obj: Another) {
        this.bliep = obj.bliep;
        this.herp = obj.herp;
    }
}

const test1 = getHttp<Test>('', data);
const test2 = getHttp<Another>('', data);
const test3 = new Another(data);

// Autocompletion from the type system works for all three. 
// Only test3 has the actual `typeof` respond with `Object Another {}`, 
// which is an upside to the other 2 options.

// test1.bliep
// test2.bliep
// test3.bliep

console.log(typeof test1, test1); // object { bliep: 'bloep', herp: 'derp' }
console.log(typeof test2, test2); // object { bliep: 'bloep', herp: 'derp' }
console.log(typeof test3, test3); // object Another { bliep: 'bloep', herp: 'derp' }