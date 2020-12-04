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
const NUM_OF_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 100;
/// UC3 Checks for the employee type Using Function.
function GetWorkingHours(employeecheck)
{
switch(employeecheck)
    {
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
let totalEmpHrs = 0;
let totalWorkingDays = 0;
// UC5 Replacing the for loop with the while loop and then evaluating the employee wage
while(totalEmpHrs <= MAX_WORKING_HOURS && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let employeecheck = Math.floor(Math.random() * 10) % 3;    
    totalEmpHrs += GetWorkingHours(employeecheck);    
}
/// Calculates Employee wage for a day.
let empWage = totalEmpHrs * WAGE_PER_HOUR;
/// Prints Employee wage.
console.log("Total Days: " + totalWorkingDays+ " Total working hours: " +totalEmpHrs+ 
             " Employee wage is: " + empWage);