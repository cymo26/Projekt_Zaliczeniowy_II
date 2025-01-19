// Zad 1
export type PositionType = "Developer" | "Manager" | "Designer";

export type Employee = {
    firstName: string;
    lastName: string;
    age: number;
    position: PositionType;
    programmingLanguages: string[];
}

// Zad 2
export type Reader = {
    firstName: string;
    lastName: string;
    libraryCardNumber: number;
}
export type Book = {
    title: string;
    author: string;
    year: Date;
    borrower: Reader | null;
    isBorrowed: boolean;
}