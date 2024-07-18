// 09/07/24

function Employee(mobile, brand ,year, waranty){
    this.mobile = mobile
    this.brand = brand
    this.year = year
    this.waranty = waranty
}
Employee.prototype.section ="II"

const e1 =new Employee("apple i ", "15 pro max", 2023, 3)
console.log(e1);
console.log(e1.section);



