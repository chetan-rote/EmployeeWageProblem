class EmployeePayroll {
    //property
    id;
    salary;
    gender;
    startDate;

    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    // getter and setter mwthods
    get id() { return this._id }
    set id(id) {
        let idRegex = RegExp('^[1-9]{1,}$');
        if (idRegex.test(id))
            this._id = id;
        else throw 'Invalid Id';
    }
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is incorrect!';
    }
    get salary() { return this._salary }
    set salary(salary) {
        let salaryRegex = RegExp('^[1-9]+[0-9]{1,}$');
        if (salaryRegex.test(salary))
            this._salary = salary;
        else throw 'Invalid salary';
    }
    get gender() { return this._gender; }
    set gender(gender) {
        let genderRegex = RegExp('^[MF]$');
        if (genderRegex.test(gender))
            this._gender = gender;
        else throw 'Invalid gender';
    }
    get startDate() { return this._startDate; }
    set startDate(startDate) {
        let currentDate = new Date();
        if (startDate <= currentDate)
            this._startDate = startDate;
        else throw 'Invalid date';
    }
    // Method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id: " + this.id + " ,name: " + this.name + " ,salary: " + this.salary + " ,gender: " + this.gender + " ,startDate: " + empDate;
    }
}
let employeePayroll = new EmployeePayroll(1, "Shubham", 30000, 'M', new Date());
console.log(employeePayroll.toString());
try {
    employeePayroll.id = -1;
    console.log(employeePayroll.toString());
}
catch (e) {
    console.error(e);
}
try{
    employeePayroll.name = "kunal";
    console.log(employeePayroll.toString());
}
catch (e) {
    console.error(e);
}
try{
    employeePayroll.salary = -45000;
    console.log(employeePayroll.toString());
}
catch(e){
    console.error(e);
}
try {
    employeePayroll.gender = 'h';
    console.log(employeePayroll.toString());
}
catch(e){
    console.error(e);
}
try{
    employeePayroll.startDate = new Date();
    console.log(employeePayroll.toString());
}
catch(e){
    console.error(e);
}
let newEmployeePayroll = new EmployeePayroll(3, "Aashish", 40000, "M", new Date());
console.log(newEmployeePayroll.toString());
