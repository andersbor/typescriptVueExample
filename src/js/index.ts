interface Person {
    firstName: string;
    lastName: string;
}
let user: Person = { firstName: "Anders", lastName: "B" };

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!', // string
        name: 'Anders',
        prime: 14593, // number
        weekdays: ['Monday', 'Tuesday', 'Wednesday'], // array of strings
        person: { firstName: "John", lastName: "Doe" }, // object
        teachers: [user, { firstName: "Jamshid", lastName: "E" }, { firstName: "Michael", lastName: "H" }],
        counter: 0,
        myNumber: 0,
        inputMessage: "",
        outputMessage: "",
        anotherMessage: "",
        checked: false,
        age: 0
    },
    methods: {
        reverse() { // side effects
            this.outputMessage = this.inputMessage.split('').reverse().join('');
        },
        reverseProperFunction(m: string) { // proper function, no side effects
            return m.split('').reverse().join('');
        },
        updateCounter() { // side effects
            this.counter++
        },
        next(n: number): number {
            return n + 1;
        }
    }
})