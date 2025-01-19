export class DataProcessor<T> {
    private data: T[] = [];

    /**
     * Dodawanie obiektu do tablicy
     * @param item {T} Dodawany obiekt
     * @return {void} Nic nie zwraca
     */
    addData(item: T): void {
        this.data.push(item);
    }

    /**
     * Wykonanie przesłanej funkcji na wszystkich elementach
     * @param callback {void} Przesłana funkcja
     * @return {void} Nic nie zwraca
     */
    processData(callback: (dataItem: T) => void): void {
        this.data.forEach(callback);
    }

    /**
     * Filtrowanie elementów przy pomocy przesłanej funckcji
     * @param callback {boolean} Przesłana funkcja
     * @return {T[]} Posortowana tablica
     */
    filterData(callback: (dataItem: T) => boolean): T[] {
        return this.data.filter(callback);
    }
}