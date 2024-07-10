class Employee{
    public id:number;
    public name:string;
    public salary:number;

    constructor(id:number,name:string,salary:number){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }

    getid():number{
        return this.id
    }

    getname():string{
        return this.name
    }

    getsalary():number{
        return this.salary
    }

    setid(id:number):void{
        this.id=id
    }

    setname(name:string):void{
        this.name=name
    }

    setsalary(salary:number):void{
        this.salary=salary
    }

}

let emp=new Employee(1,"Gadha",5000)
console.log(emp.getname());
emp.getsalary();
console.log(emp.getsalary());


