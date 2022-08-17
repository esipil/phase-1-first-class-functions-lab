
const returnFirstTwoDrivers = function (drivers) {
    const newDrivers = drivers.slice(0, 2);
    return newDrivers; 
}

const returnLastTwoDrivers =drivers => {
    return drivers.slice(2);
}
const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (number) {
     return function (x){
        return number * x
     }
}

const fareDoubler = createFareMultiplier (2);
const fareTripler = createFareMultiplier (3);

function selectDifferentDrivers(drivers, selectingDrivers ) {
    return selectingDrivers(drivers);
}