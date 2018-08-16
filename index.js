// Code your solution in this file.

// const driver=['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function lowerCaseDrivers(drivers){
  return drivers.map(drivers=>drivers.toLowerCase())
}


// function nameToAttributes(drivers){
 
// return drivers.map(drivers=>{
//   let driverNames=drivers.split(" ");
   
//   return { 'firstName': driverNames[0],   'lastName': driverNames[1]  }
// }) 
// }


function nameToAttributes(drivers){
 
return drivers.map(function(drivers){
   let driverNames=drivers.split(" ");
   
   return { 'firstName': driverNames[0],   'lastName': driverNames[1]  }
 }) 
}


function attributesToPhrase(drivers){
  return driver.map(drivers=>{
    return '${drivers.name} is from ${drivers.}'}
    )
  
}
