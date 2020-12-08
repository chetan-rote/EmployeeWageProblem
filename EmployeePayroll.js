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
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is incorrect!';
    }

    // Method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id: " + this.id + " ,name: " + this.name + " ,salary: " + this.salary + " ,gender: " + this.gender + " ,startDate: " + empDate;
    }
}

let employeePayroll = new EmployeePayroll(1, "Shubham", 30000);
console.log(employeePayroll.toString());
try {
    employeePayroll.id = 2;
    employeePayroll.name = "kunal";
    console.log(employeePayroll.toString());
}
catch (e) {
    console.error(e);
}
let newEmployeePayroll = new EmployeePayroll(3, "Aashish", 40000, "M", new Date());
console.log(newEmployeePayroll.toString());
