const yearBorn = [1964, 2008, 1999, 2005, 1978, 1985, 1986]

let age = yearBorn.filter(birthYear => 2021 - birthYear)
 if ( age >= 18){
    console.log("These are the birth years of people who can drive")
}else {
    console.log( "remember, you can drive if you are 17 years or older")
}

console.log(age)