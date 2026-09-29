//DOM
//Selecting Elements In Javascript  - by Id, queryselector

let heading = document.getElementById('heading_id');
heading.textContent = "Change by JS"
heading.style = "color:red; background:black"

let content =document.querySelector(".content");
content.textContent ="this is text content"
content.style ="color:pink; background:green"

let allItemLists = document.querySelectorAll('.item li');

allItemLists.forEach(function(elem,index){
    elem.textContent = "Changed "+index;
});

