const towerOfHanoi = (n,fromRoad,toRoad,usingRoad) =>{
 if(n===1){
  console.log(`Move disk ${n} form ${fromRoad} to ${toRoad}`)
  return;
 }
 towerOfHanoi(n-1,fromRoad,usingRoad,toRoad)
 console.log(`Move disk ${n} form ${fromRoad} to ${toRoad}`)
 towerOfHanoi(n-1,usingRoad,toRoad,fromRoad)
}

towerOfHanoi(2,'A','B','C') 