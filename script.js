//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

const test = [1,2,3,4,5,6,7,8,9,0]

function createPhoneNumber(array){
    if (array.length < 10) return console.log('phone number must be 10 digits')
   
   return(`(${array.slice(0,3).join('')}) ${array.slice(3,6).join('')}-${array.slice(6,10).join('')}`) 
   
}

createPhoneNumber(test)