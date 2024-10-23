// Code your solution in this file!
const drivers = [`Antonia`,`Nuru`,`Amari`,`mo`];
const returnFirstTwoDrivers =function(drivers){
    return[...drivers].slice(null,2)
}
const returnLastTwoDrivers =function(drivers) {
    return[...drivers].slice(2)
}
const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]
console.log(selectingDrivers);
function createFareMultiplier(multiplier){
    return function(fare){
        return multiplier*fare
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, selectionfunction){
    return selectionfunction(drivers)
}