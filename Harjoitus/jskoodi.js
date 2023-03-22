function homelink(){
    document.getElementById("home").style.display = "block";
    document.getElementById("products").style.display = "none";
    document.getElementById("contact").style.display = "none";
}
function productlink(){
    document.getElementById("home").style.display = "none";
    document.getElementById("products").style.display = "block";
    document.getElementById("contact").style.display = "none";
}
function contactlink(){
    document.getElementById("home").style.display = "none";
    document.getElementById("products").style.display = "none";
    document.getElementById("contact").style.display = "block";
}
