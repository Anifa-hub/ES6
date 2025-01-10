let student ={
    name:"anifa",
    age:23
}
let helper ={
    get(obj,value){
    console.log(`${obj[value]}`)
    }
}
let prx = new Proxy (student,helper)
prx.place='kigali'// we were able to add place
console.log(prx)