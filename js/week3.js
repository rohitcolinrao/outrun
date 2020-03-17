
// ARRAY
let arrDaysOfTheWeek = [ 
  "Sunday", 
  "Monday", 
  "Tuesday", 
  "Wednesday", 
  "Thursday", 
  "Friday", 
  "Saturday"
]

// OBJECT
let objDayNumbers = {
  first: "Sunday",
  second: "Monday",
  third: "Tuesday",
  fourth: "Wednesday",
  fifth: "Thursday",
  sixth: "Friday",
  seventh: "Saturday"
}


// FUNCTIONS
let loopArray = () => {
  console.log( arrDaysOfTheWeek.length )
  for(let i=0; i<arrDaysOfTheWeek.length ; i++){
    console.log( arrDaysOfTheWeek[i] )
  }
}

let loopObject = () => {
  for(key in objDayNumbers){
    console.log(key, objDayNumbers[key])
  }
}

let returnDayByKey = (key) => {
  return objDayNumbers[key]
}

console.log("*** first function results")
loopObject()

console.log("*** second function results")
console.log(returnDayByKey("first"))



