let date = "Monday 2019-3-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = 1;
let weatherStatus = "clear";
let clearForTakeOff = "YES";

let theLine = ("-------------------------------------")

console.log(theLine);
console.log("> LC04 - LAUNCH CHECKLIST");
console.log(theLine);
console.log("Date: " + date);
console.log("Time: " + time);
console.log();
console.log(theLine);
console.log("> ASTRONAUT INFO");
console.log(theLine);
console.log("* count: " + astronautCount);
console.log("* status: " + astronautStatus);
console.log();
console.log(theLine);
console.log("> FUEL DATA");
console.log(theLine);
console.log("* Fuel temp celsius: " + fuelTempCelsius + " C");
console.log("* Fuel level: " + fuelLevel + "00%");
console.log()
console.log(theLine);
console.log("> MASS DATA");
console.log(theLine);
console.log("* Crew mass: " + crewMassKg + " kg");
console.log("* Fuel mass: " + fuelMassKg + " kg");
console.log("* Shuttle mass: " + shuttleMassKg + " kg");
console.log("* Total mass: " + totalMassKg + " kg");
console.log()
console.log(theLine);
console.log("> FLIGHT PLAN");
console.log(theLine);
console.log("* weather: " + weatherStatus);
console.log()
console.log(theLine);
console.log("> OVERALL STATUS");
console.log(theLine);
console.log("* Clear for takeoff: " + clearForTakeOff);


