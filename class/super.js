class car{
    constructor(name,year){
        this.name=name
        this.year=year
    }
    method(){
        console.log(`this new car ${this.name} in this year ${this.year}`)
    }
}
let vision = new car ('toyota',2024)
    console.log(vision)
vision.method()
class Child extends car{
    constructor(name,year,model){
        super(name,year),
        this.model=model
}
}
let hoder = new Child('Rav',2025,'kg23117')
console.log(hoder)
