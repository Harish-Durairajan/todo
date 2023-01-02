
(function() {
    let leftMenu = [{text:"My Day", icon: '<i class="fa-regular fa-sun"></i>'},
                    {text:"Important", icon: '<i class="fa-regular fa-star"></i>'},
                    {text:"Planned", icon: '<i class="fa-solid fa-calendar-days"></i>'},
                    {text:"Assigned to me", icon: '<i class="fa-regular fa-user"></i>'},
                    {text:"Flagged email", icon: '<i class="fa-regular fa-flag"></i>'},
                  {text:"Tasks", icon: '<i class="fa-solid fa-house"></i>'}]
    function init() {
        currentDay();
        newList();
        leftSideMenu();
       rightSidetask();

}


function currentDay(){
    const months = ["January", "February", "March", "April",
     "May", "June", "July", "August", "September", "October",
      "November", "December"];
    const days = ["Sunday","Monday","Tuesday","Wednesday",
    "Thursday","Friday","Saturday"];
    const currentDate = new Date();
    let currentMonth = months[currentDate.getMonth()];
    let currentDay = days[currentDate.getDay()];
    let date = currentDate.getDate();
    document.getElementById("day").innerHTML = currentDay + ","+currentMonth+" "+date;
}

function newList() {
    let input = document.getElementById("list");
    input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    const node = document.createElement("li");
    node.innerHTML= '<i class="fa-solid fa-list-ul"></i>';
    const text = document.createTextNode(input.value);
    node.appendChild(text);
    document.getElementById("myList").appendChild(node);
    let beforeList = document.getElementById("myList");
    beforeList.insertBefore(node,beforeList.children[0]);
    input.value='';
    }});
}

function leftSideMenu() {
    for(i=0;i<leftMenu.length;i++) {
    let listContainer = document.createElement("li");
    listContainer.className = "left-menu-details";
    let leftContainerIcons = document.createElement("div");
    leftContainerIcons.className = "left-menu-icon";
    leftContainerIcons.innerHTML = leftMenu[i].icon;
    let leftContainerText = document.createElement("div");
    leftContainerText.className = "left-menu-text";
    leftContainerText.innerHTML = leftMenu[i].text;
    listContainer.appendChild(leftContainerIcons);
    listContainer.appendChild(leftContainerText);
    let mainContainer = document.getElementById("left-menu-category");
    mainContainer.appendChild(listContainer);
    }
}

function rightSidetask() {
 
    let input = document.getElementById("task");
    input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    const node = document.createElement("div");
    node.innerHTML= '<i class="fa-regular fa-circle"></i>';
    const text = document.createTextNode(input.value);
    node.appendChild(text);
    document.getElementById("new-task").appendChild(node);
    input.value='';
    const starIcon = document.createElement("div");
    starIcon.innerHTML='<i class="fa-regular fa-star"></i>';
    let newTask=document.getElementById("new-task");
    newTask.appendChild(starIcon);
    }});
}

init();
})();