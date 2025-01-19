import {Book, Employee, Reader} from "./types";

// Zad 1
export const employees: Employee[] = [
    {
        firstName: "Robert",
        lastName: "Baran",
        age: 23,
        position: "Developer",
        programmingLanguages: ["C#", "TypeScript"]
    },
    {
        firstName: "Anna",
        lastName: "Kowalska",
        age: 27,
        position: "Designer",
        programmingLanguages: []
    },
    {
        firstName: "Jan",
        lastName: "Nowak",
        age: 21,
        position: "Developer",
        programmingLanguages: ["C#", "TypeScript", "Java", "Rust"]
    },
    {
        firstName: "Katarzyna",
        lastName: "Wiśniewska",
        age: 24,
        position: "Manager",
        programmingLanguages: []
    },
    {
        firstName: "Michał",
        lastName: "Zieliński",
        age: 28,
        position: "Developer",
        programmingLanguages: ["java"]
    }
];

// Zad 2
export const readers: Reader[] = [
    {
        firstName: "Anna",
        lastName: "Kowalska",
        libraryCardNumber: 1001,
    },
    {
        firstName: "Jan",
        lastName: "Nowak",
        libraryCardNumber: 1002,
    },
    {
        firstName: "Maria",
        lastName: "Wiśniewska",
        libraryCardNumber: 1003,
    },
];
export const catalog: Book[] = [
    {
        title: "Władca Pierścieni",
        author: "J.R.R. Tolkien",
        year: new Date("1954-07-29"),
        borrower: readers[0],
        isBorrowed: true,
    },
    {
        title: "Hobbit",
        author: "J.R.R. Tolkien",
        year: new Date("1937-09-21"),
        borrower: null,
        isBorrowed: false,
    },
    {
        title: "Pan Tadeusz",
        author: "Adam Mickiewicz",
        year: new Date("1834-06-28"),
        borrower: readers[2],
        isBorrowed: true,
    },
    {
        title: "Harry Potter i Kamień Filozoficzny",
        author: "J.K. Rowling",
        year: new Date("1997-06-26"),
        borrower: null,
        isBorrowed: false,
    },
];