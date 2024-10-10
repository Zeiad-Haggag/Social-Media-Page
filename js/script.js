var acc = document.getElementsByClassName("accordion_btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// model
var span=document.getElementsByClassName("close")[0];
var model=document.getElementById("myModel");
function onClick(element){
  model.style.display="block";
  document.getElementById("img01").src=element.src;
}
span.onclick=function(){
  model.style.display="none";
}
