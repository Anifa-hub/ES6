const classes={
    size:76,
    table:5,
    name:'seniors',
    [Symbol.iterator](){
        let i = 0
        let array = Object.keys(classes)
        return {
            next(){
                if(i<array.length){
                    return {value:array[i++], done:false}
                    }else{
                    return {done:true}
                    }
                }
            }
        }
        
    }
    

for (const student of classes){
console.log(`${student}:${classes[student]}`)
}