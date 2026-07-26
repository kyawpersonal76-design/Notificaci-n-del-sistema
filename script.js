function generate(){

let title =
document.getElementById("title").value;

let message =
document.getElementById("message").value;

let amount =
document.getElementById("amount").value;

let status =
document.getElementById("status").value;


document.getElementById("showTitle").innerHTML =
title || "System Notification";


document.getElementById("showMessage").innerHTML =
message || "Your message here...";


document.getElementById("showAmount").innerHTML =
amount || "$0";


document.getElementById("showStatus").innerHTML =
status || "Pending";

}



function downloadImage(){

let card =
document.getElementById("card");


html2canvas(card).then(canvas=>{

let link =
document.createElement("a");

link.download =
"notification.png";

link.href =
canvas.toDataURL();

link.click();


});

}