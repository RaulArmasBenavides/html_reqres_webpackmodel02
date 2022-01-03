'use strict'
import './css/estilos.css';
import 'normalize.css';

//buttons
let btnweb = document.getElementById("btnweb");
let btnapi = document.getElementById("btnapi");
let btndes = document.getElementById("btndes");

btnweb.addEventListener("click",()=> {
    // Get the elements with class="column"
   let elements = document.getElementsByClassName("row");
   let elementsweb=   document.getElementsByClassName("web");
   //hide
   // elements.style.display = 'none';
   hide(elements);
});

btnapi.addEventListener("click",()=> {
    // Get the elements with class="column"
   let elements = document.getElementsByClassName("des");
   console.log(elements);
   let elementsapi=   document.getElementsByClassName("api");
   console.log(elementsapi);
   hide(elements);
   show(elementsapi);
   //hide
   // elements.style.display = 'none';

});

btndes.addEventListener("click",()=> {
    // Get the elements with class="column"
   let elements = document.getElementsByClassName("row");
   document.getE
   //hide
   // elements.style.display = 'none';
   hide(elements);
});


//show
//elements.style.display = 'block';

function hide (elements) {
    elements = elements.length ? elements : [elements];
    for (var index = 0; index < elements.length; index++) {
      elements[index].style.display = 'none';
    }
  }

function show (elements, specifiedDisplay) {
    elements = elements.length ? elements : [elements];
    for (var index = 0; index < elements.length; index++) {
      elements[index].style.display = specifiedDisplay || 'block';
    }
  }
  // Usage:
//hide(document.querySelectorAll('.target'));
//hide(document.querySelector('.target'));
//hide(document.getElementById('target'));



// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}

/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}






