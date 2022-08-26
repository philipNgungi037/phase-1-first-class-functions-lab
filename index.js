const returnFirstTwoDrivers = function (driverList) {
    return driverList.slice(0, 2)
};

const returnLastTwoDrivers = function (driverList) {
    return driverList.slice(-2);
};

let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

function createFareMultiplier(mult) {
    return function (fare) {
       return fare*mult
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (arrayOfDrivers, returnDrivers) {
    return returnDrivers(arrayOfDrivers)
}