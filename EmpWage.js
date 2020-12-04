// UC1 Check Employee Presence
/// Variable
const IS_ABSENT = 0;
/// Generates 0 or 1 randomly.
let empcheck = Math.floor(Math.random() * 10) % 2;
/// Checks Employee is present or not.
if(empcheck == IS_ABSENT)
{
    console.log("Employee is Absent.");
    return;
}
else
{
    console.log("Employee is Present.")
}