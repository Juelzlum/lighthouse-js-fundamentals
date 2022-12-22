/*const chorus = "lets Dance"
let repeat = 0 
while (repeat < 10) {
  if (repeat === 5) {
    console.log('change key') 
  }
  else{
  console.log(chorus)
  }
  repeat ++ 
}

const song = 'lets dance'
for (let x = 0 ; x < 10 ; x++) {
  console.log(song)
}


for (i = 100 ; i <= 200 ; i ++ ){ 
  if( i % 3 == 0 && i % 4 == 0 ){
    console.log('LoopyLighthouse')
  }
  else if (i % 4 == 0) {
    console.log('Lighthouse')
  }
  else if (i % 3 == 0 ) {
    console.log('Loopy')
  }
  else {
  console.log(i)
}
}




const reverseString = (reversedMe) => {
  let reversed = '' 
  for (let i = reversedMe.length -1 ; i >= 0 ; i--) {
    reversed += reversedMe[i]; 
  }
  return reversed
}
console.log(reverseString('Julian'))


  const laugh = (num) => {
    let sound = ''
    for(x=0 ; x < num ; x++) {
      sound = sound + 'ha' ;
    }
    sound + '!'
    return sound
  }

console.log(laugh(3))

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

const makeTriangle = (length) => {
  let triangle = ''
  let getLines = 1 
  for (getLines = 1 ; getLines <= length ; getLines++) {
  triangle = triangle + makeLine(getLines)
 }
 return triangle
}


console.log(makeTriangle(10))

*/


 const cry = function (string) {
 string = 'boohoo!'
 return string
 }

 console.log(cry())


 const laugh =  function(num) {
  let sound = ''
  for (x = 0 ; x < num ; x++ ) {
  sound = sound + 'ha'
  }
  sound = sound + '!'
  return sound
 }

 function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

const isEven = function (num) {
  return num % 2 == 0 
}

