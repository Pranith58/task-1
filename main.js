var navtoggle=document.getElementById("nav_toggle")
var detailcontainer=document.querySelector(".detail-container")

function show_toggle(event){
    navtoggle=event.preventDefault()
    if (detailcontainer.style.display === "flex") {
        detailcontainer.style.display = "none";
    } else {
        detailcontainer.style.display = "flex";
    }

}