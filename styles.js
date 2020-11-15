function openSideBar(){
    document.getElementById("sidebar").style.transform = "translateX(0%)";
}

function closeSideBar(){
    document.getElementById("sidebar").style.transform = "translateX(-200%)";
    document.getElementById("main").style.display = "block";
}