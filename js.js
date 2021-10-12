let firstname = 'mohamed'
/* console.log(firstname) */
const lastname = "yehia"
/* console.log(lastname) */
const val = 42;
// console.log(val)


const arr = [
     'mohamed',
     "yehia",
     42,
     function(){console.log('hi')}
]

/* console.log(arr[1])
arr[3]() */

for (let i=0 ; i<arr.length ; i ++){
// console.log(arr[i])

}



// console.log(typeof String(val))
// console.log(typeof val.toString())
// console.log(typeof null)


const o = new Object()
o.first= "mohamed"  
o.last  ='yehia'
o.ismarred = true
o.msg = function(){
  console.log('hi!!')
}

const o2 ={}
o2.firstname = 'mohamed'
o2.lastname = 'yehia'
const key = 'ismarred'
o2[key] = 'false'
o2['grate'] = function() {
  console.log('hi!!!')
}


const o3 ={
  1 : 'test',
  firstname :'mohamed',
  lastnamr : 'yehia',
  ismarred : true,
  grate : function(){
    console.log('hi!!!')
  }  ,
  address : {
    street : 'main St',
    number : '123'
  }

} 
// console.log(o3)
// console.log(o3.address)
// console.log(o3.address.number)
// console.log(o3.address['number'])

// const key10 = 'number'
// console.log(o3.address[key10] + 10)
// console.log(o3["1"]) 
// console.log(o3[1])




