class cars{
    constructor(name,years,city){
        this.name=name
        this.years=years
        this.city=city
    }
    method1 (){
        console.log(`${this.name} was the first car in ${this.years} in ${this.city} city `)
    }
    method2(){
        console.log(` ${this.name} was the second car in ${this.years} in ${this.city} city`)
    }
   
}
let first = new cars('Toyota','2003','Kigali')
let second = new cars('Rav4','2010','Musanze');

first.method1()
second.method2()