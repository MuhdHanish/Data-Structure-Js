const recrusiveFibanacci = (num) =>{
 if(num<2){
  return num
 }
 return recrusiveFibanacci(num-1) + recrusiveFibanacci(num-2)
}

console.log(recrusiveFibanacci(6))