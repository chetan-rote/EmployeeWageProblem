// UC1 Check Employee Presence
/// Variable
const IS_ABSENT = 0;
/// Generates 0 or 1 randomly.
let empcheck = Math.floor(Math.random() * 10) % 2;
/// Checks Employee is present or not.
if(empcheck == IS_ABSENT)
{
    // Prints Employee is absent when random number is 0.
    console.log("Employee is Absent.");
    return;
}
else
{
    // Prints Employee is Present when random number is 1.
    console.log("Employee is Present.");
}
// UC 2 Check for daily wage based on whether the employee is part time or full time
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;
/// Generates random variable 0,1 & 2.
empcheck = Math.floor(Math.random() * 10) % 3;
/// Checks for the employee type.
switch(empcheck)
{
    case IS_PART_TIME:
         empHrs = PART_TIME_HOURS;
         break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
        break;
}
/// Calculates Employee wage for a day.
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee wage is: " + empWage);