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