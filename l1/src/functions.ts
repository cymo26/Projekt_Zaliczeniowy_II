import {Book, Employee, Reader} from "./types";

// Zad 1
export const getDevelopers = (employees: Employee[]) => {
    return employees.filter(e => e.position === "Developer");
}

export const findEmployees = (employees: Employee[], name: string) => {
    return employees.find(e => e.firstName.includes(name) || e.lastName.includes(name));
}

export function addExperience(employee: Employee, language: string) {
    employee.programmingLanguages.push(language);
}

export function addExperiences(employees: Employee[], language: string) {
    return employees.map(e => e.programmingLanguages.push(language));
}

// Zad 2
export function findBook(catalog: Book[], title: string) {
    return catalog.find(e => e.title === title);
}

export function getAvailableBooks(catalog: Book[]) {
    return catalog.filter(e => !e.isBorrowed);
}

export function borrowBook(books: Book[], title: string, reader: Reader) {
    return books.map((book) => {
        if (book.title === title && !book.isBorrowed) {
            return {
                ...book,
                isBorrowed: true,
                borrower: reader,
            };
        }
        return book;
    });
}