console.log("hello World")

const whichSchool = (age) => {
if (age < 13) {
  return("Elementary School")
}
else if (age > 13 && age < 18) {
  return("I should be Secondary School")
}
else {
  return("I will be going to Lighthouse Labs")
}

}


console.log(whichSchool(15))


