interface Person {
    firstName: string;
    lastName: string;
}
let person1: Person = { firstName: "Anders", lastName: "B" }; 

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!', // string
        name: 'Anders',
        prime: 14593, // number
        weekdays: ['Monday', 'Tuesday', 'Wednesday'], // array of strings
        person2: { firstName: "John", lastName: "Doe" }, // object
        teachers: [person1, { firstName: "Jamshid", lastName: "E" }, { firstName: "Michael", lastName: "H" }],
        counter: 0,
        myNumber: 0,
        inputMessage: "",
        outputMessage: "",
        anotherMessage: "",
        checked: false
    },
    methods: {
        reverse(): void { // side effects
            this.outputMessage = this.inputMessage.split('').reverse().join('');
        },
        reverseProperFunction(m: string) { // proper function, no side effects
            return m.split('').reverse().join('');
        },
        updateCounter(): void { // side effects
            this.counter++
        },
        next(n: number): number {
            return n + 1;
        }
    }
})