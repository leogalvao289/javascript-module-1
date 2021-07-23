let login = "Picapauamarelo"

function getPairs (user) {

 if (user.indexOF().toUppercase()  && user.length > 5 && user.length < 10) {
 return "Username valid"; 
 } else if ("admin" || "manager")  {
    return "Username valido" ;
 } else {
   return "Username invalid"
 }

}
console.log(getPairs(login))