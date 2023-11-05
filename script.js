window.addEventListener("scroll", function() {
  var scrollbawah = document.getElementById("scrollbawah");
  if (window.scrollY > 100) { 
    scrollbawah.style.display = "block"; 
  } else {
    scrollbawah.style.display = "none"; 
  }
});

const colorChangingText = document.getElementById("color-changing-text");
const colors = ["#FFFF00", "#364f6b", "#008080", "#FF007F", "#800080"];
let colorIndex = 0;

function changeColor() {
  colorChangingText.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
  setTimeout(changeColor, 1000); 
}

changeColor(); 
