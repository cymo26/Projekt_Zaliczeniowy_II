import {MyEvent} from "./MyEvent";

export class EventQueue<T> {
    private eventTable: MyEvent<T>[] = [];

    enqueue(event: MyEvent<T>): void {
        this.eventTable.push(event);
    }
    dequeue(): MyEvent<T> | null {
        return this.eventTable.shift() || null;
    }
    process (callback: (event: MyEvent<T>) => void): void {
        while (!this.isEmpty())
        {
            const event = this.dequeue();
            if (event) callback(event);
        }
    }
    clear (): void {
        this.eventTable = [];
    }
    isEmpty(): boolean {
        return this.eventTable.length === 0;
    }
    size (): number {
        return this.eventTable.length;
    }
}