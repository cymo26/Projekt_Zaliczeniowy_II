import {DataProcessor} from "./data-processor";
import {EventManager} from "./EventManager";

// Zad 1
console.log("\n[ Zad 1 ]\n");
const proc = new DataProcessor<string>();
proc.addData("X");
proc.addData("13");

proc.processData((d)=>{
    console.log(d);
});

const filtered = proc.filterData((d)=> d.length >= 2);
console.table(filtered);

// Zad 2
console.log("\n[ Zad 2 ]\n");
const eventManager = new EventManager();
eventManager.pushEvent({ type: "click", data: "Button1" });
eventManager.pushEvent({ type: "hover", data: "Image2" });
eventManager.pushEvent({ type: "submit", data: "Form3" });
console.log("Processing events:");
eventManager.processEvents((event)=>{
    console.log(`Event Type: ${event.type}, Event Data: ${event.data}`);
});
console.log(`Has Events: ${eventManager.hasEvents()}`);
eventManager.pushEvent({ type: "scroll", data: "Page1" });
console.log(`Event Count: ${eventManager.eventCount()}`);
eventManager.clearEvents();
console.log(`Has Events after clear: ${eventManager.hasEvents()}`);