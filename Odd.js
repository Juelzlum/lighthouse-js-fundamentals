const isOdd = function(num) {
  return num % 3 == 0 
  
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(9));


const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

/*const chooseStations = function(stations){
  let goodStation = []

  for(const station of stations) {
   const capacity = station[1]
  if(capacity >= 20) {
    console.log(stations[0])
  }
  
  }
}
console.log(chooseStations(stations))
*/



const packingList = ["tent", "bug spray", "sleeping bag"];
for (let i = 0; i < packingList.length; i++) {
  console.log(i)
}
let i = 0 ;
while(i<packingList.length) {
  console.log(i)
  i++ 
}