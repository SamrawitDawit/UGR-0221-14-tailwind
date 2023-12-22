var mIcon = document.getElementById("menuIcon");
mIcon.addEventListener("click", function(){
var myMenu = document.querySelector(".menuList");
if (myMenu.style.display === "block") {
    myMenu.style.display = "none";
} else {
    myMenu.style.display = "block";
}
})


var dropdowns = document.querySelectorAll('.dropDown');
dropdowns.forEach(function(dropdown) {
var icon = dropdown.querySelector('.drop-down');
var content = dropdown.querySelector('.project__description');

icon.addEventListener('click', function() {
    if (content.style.display === "flex") {
        content.style.display = "none";
    } else {
        content.style.display = "flex";
    } 
});
});


document.querySelector('#contact-form').addEventListener('submit', function (event) {

    event.preventDefault(); 
    document.getElementById('confirmation-popup').style.display = 'block'; 
    setTimeout(function () {
        document.getElementById('confirmation-popup').style.display = 'none'; 
    }, 5000); 
    document.getElementById('contact-form').reset();
});