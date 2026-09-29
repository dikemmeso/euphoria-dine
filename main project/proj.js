my_diary = {
    table_contents: ["About Me", "My Friends", "About my school"],

    about_me: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum nisi quo corrupti velit a necessitatibus. Impedit, cumque quas dolorum unde voluptatum tenetur odit. Aperiam animi sunt consequuntur perferendis culpa ad!",
    my_friends: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque a eligendi inventore placeat distinctio minus aliquid, cumque veniam sunt incidunt.",
    about_my_school: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos fugit quae maiores cupiditate esse rem explicabo nam harum nisi magnam!",
};
    
let table_contents=document.querySelectorAll(".table_contents li");
let about_me= document.querySelector(".about_me");
let my_friends= document.querySelector(".my_friends");
let about_my_school= document.querySelector(".about_my_school");

about_me.textContent =my_diary.about_me;
my_friends.textContent=my_diary.my_friends;
about_my_school.textContent=my_diary.about_my_school;

table_contents.forEach(function(elements, index){
    elements.textContent=my_diary.table_contents[index];
});