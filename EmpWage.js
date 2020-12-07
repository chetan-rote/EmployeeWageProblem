// UC1 Check Employee Presence
/// Variable
const IS_ABSENT = 0;
/// Generates 0 or 1 randomly.
let empcheck = Math.floor(Math.random() * 10) % 2;
/// Checks Employee is present or not.
if (empcheck == IS_ABSENT) {
    // Prints Employee is absent when random number is 0.
    console.log("Employee is Absent.");
    return;
}
else {
    // Prints Employee is Present when random number is 1.
    console.log("Employee is Present.");
}
// UC 2 Check for daily wage based on whether the employee is part time or full time
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 100;
/// UC3 Checks for the employee type Using Function.
function GetWorkingHours(employeecheck) {
    switch (employeecheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        default:
            return 0;
    }
}
// UC6:- Calculate daily wage
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
// UC5 Replacing the for loop with the while loop and then evaluating the employee wage
while (totalEmpHrs <= MAX_WORKING_HOURS && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let employeecheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += GetWorkingHours(employeecheck);
}
/// Calculates Employee wage for a day.
let empWage = totalEmpHrs * WAGE_PER_HOUR;
/// Prints Employee wage.
console.log("UC6 Total Days: " + totalWorkingDays + " Total working hours: " + totalEmpHrs +
    " Employee wage is: " + empWage);
// UC7A Array helper function
let totalempWage = 0;
function sum(dailyWage) {
    totalempWage += dailyWage;
}
empDailyWageArr.forEach(sum)
console.log("UC7A- Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp wage: " + totalempWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A - Emp wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

// UC7B- Show the Day along with daily wage using array map helper Function.
let dailyCounter = 0;
function mapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter + "=" + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

// UC7C - Shows Days when full time wage of 160 were earned using filter function.
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C- Daily wage filter when fulltime wage earned.");
console.log(fullDayWageArr);

// UC7D - Find the first occurence when full time wage was earned using find function.
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7D - First time full time wage was earned on Day: " + mapDayWithWageArr.find(findFullTimeWage));

// UC7E Check if Every element of full time wage is truelly holding full time wage.
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7E - Check all elements have full time wage : " + fullDayWageArr.every(isAllFullTimeWage));

//UC7F Check if there is any part time wage 
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC7F Check If Any part time Wage: " + mapDayWithWageArr.some(isAnyPartTimeWage));

//UC7G Find the number of Days the employee worked.
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("UC7G Num of days employee worked: " + empDailyWageArr.reduce(totalDaysWorked, 0));