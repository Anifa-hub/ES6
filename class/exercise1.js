class Table{
    constructor (name,size,age){
        this.name=name
        this.size=size
        this.age=age
    }
    check(){
        console.log(`the table's name is ${this.name} and it's size is${this.size}`)
    }
    seter(ge){
      this.age = ge  
    }
}

let tables = new Table('Gedeon',5.7)
console.log(tables)
console.log(tables.name)
tables.check()
tables.seter(23)
console.log(tables)