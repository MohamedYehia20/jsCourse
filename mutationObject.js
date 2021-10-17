const o = {
  a   :'a',
  b   : 'b',
  obj : {
     key : 'key'
  }
}
//  console.log(o.a)
//  const o2 = Object.assign({} , o)
// o2.a = 'new value'
// console.log(o.a)
// console.log(o2.a)
// o2.obj.key = 'new value'
// console.log(o.obj.key)


function deepCopy(obj) {
  //check if values are object
  //if so. copy that  object (deep copy)
  //else return the value
  const keys = Object.keys(obj)
  const newobject = {}
   for (let i = 0 ; i<keys.length ; i++){
        const key = keys[i]

        if (typeof obj[key] === 'object'){
        newobject[key] = deepCopy(obj[key])
        
      
        }
        else{
          newobject[key] = obj[key]
        }
   }
  return newobject
}









const o3 = deepCopy(o)

 o.obj.key = 'new value'
 console.log(o3.obj.key)
 console.log(Object.keys(o3) )
 console.log(o3)

