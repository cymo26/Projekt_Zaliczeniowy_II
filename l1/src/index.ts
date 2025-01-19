import {Book, Employee} from "./types";
import {employees, catalog, readers} from "./data";
import {
    addExperience,
    getDevelopers,
    addExperiences,
    findEmployees,
    findBook,
    getAvailableBooks,
    borrowBook
} from "./functions"

// Zad 1
console.log("\n[ Zad 1 ]\n");
console.log("employees:\n", employees);
const developers: Employee[] = getDevelopers(employees);
console.log("\ndevelopers:\n", developers);
const Robert = findEmployees(employees, "Robert");
if (Robert) addExperience(Robert, "java");
addExperiences(developers, "C");

// Zad 2
console.log("\n[ Zad 2 ]\n");
const Hobbit = findBook(catalog, "Hobbit");
if (Hobbit) console.log("Found:\n", Hobbit);
const available: Book[] = getAvailableBooks(catalog);
console.log("\nAvailable books:\n", available);
const borrowedBooks: Book[] = borrowBook(catalog, "Hobbit", readers[2]);
const changedHobbit = findBook(borrowedBooks, "Hobbit");
if (changedHobbit) console.log("Found:\n", changedHobbit);