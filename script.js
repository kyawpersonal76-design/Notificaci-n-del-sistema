function generate(){

let title =
document.getElementById("title").value;


let message =
document.getElementById("message").value;


let status =
document.getElementById("status").value;



document.getElementById("showTitle").innerHTML =
title || "Notificación del Sistema";


document.getElementById("showMessage").innerHTML =
message || "Mensaje de ejemplo...";


document.getElementById("showStatus").innerHTML =
status || "Pendiente";

}



function downloadImage(){

let card =
document.getElementById("card");


html2canvas(card).then(canvas=>{


let link =
document.createElement("a");


link.download =
"notificacion.png";


link.href =
canvas.toDataURL();


link.click();


});

}
