
let get = "hi"

function getMood (animo) {
if (animo === "happy") {
    return  "Good Job"
}else if (animo ==="sad"){
    return "Every cloud has a silver lining"
}else if (typeof animo === "number"){
    return "beepbeepboop"
} else {
     return  "I'm sorry, I'm still learning about feelings!" 
}
}
    console.log(getMood(get))
