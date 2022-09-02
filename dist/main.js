const links = document.querySelectorAll("#navLinks a");
const url = window.location.href

links.forEach(link => {
    if( link.href == url) link.style.color = "rgb(21,94,117)";
    return;
});