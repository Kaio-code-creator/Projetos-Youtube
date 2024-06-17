const clickedElement = 
document.querySelector(".menu-icon");

clickedElement.addEventListener('click', function()
{
    clickedElement.classList.toggle("active");
});