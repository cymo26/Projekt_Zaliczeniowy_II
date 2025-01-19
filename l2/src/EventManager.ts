import {EventQueue} from "./EventQueue";
import {MyEvent} from "./MyEvent";

export class EventManager<T> {
    private eventQueue: EventQueue<T> = new EventQueue<T>();

    pushEvent(event: MyEvent<T>): void {
        this.eventQueue.enqueue(event);
    }
    processEvents(callback: (event: MyEvent<T>) => void): void {
        this.eventQueue.process(callback);
    }
    clearEvents(): void {
        this.eventQueue.clear();
    }
    hasEvents(): boolean {
        return !this.eventQueue.isEmpty();
    }
    eventCount(): number {
        return this.eventQueue.size();
    }
}