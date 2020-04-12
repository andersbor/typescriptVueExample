//import Vue from 'vue'

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
        anotherMessage: "",
        checked: false,
        age: 0
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
            this.prime = 11
        },
        updateCounter: function () {
            this.counter++
        }
    }
})

/*
function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let element: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
element.innerHTML = greeter(user);
*/