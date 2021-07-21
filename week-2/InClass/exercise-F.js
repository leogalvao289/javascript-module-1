let login = "picapauamarelo"

function getPairs (user) {

 if (  user.length > 5 && user.length < 10) {
 return "Username valid"; 
 } else if ("admin" || "manager")  {
    return "Username valido" ;
 } else {
   return "Username invalid"
 }

}
console.log(getPairs(login))