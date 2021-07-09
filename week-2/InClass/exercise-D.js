function getMood (animo) {
if (animo === "Happy") {
    return "Good Job"
}else if (animo==="sad"){
    return "Every cloud has a silver lining"
}else if (typeof animo === "number"){
    return "beepbeepboop"
} else {
    default;
}
}