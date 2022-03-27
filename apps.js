//target dropdown menu for mobile in html
    //querySelector 
    //access and store that data
//have a conditional statment that says if the user clicks on dropdown
    //add eventlistener

const parentMenu = document.querySelector(".dropdown");
const subMenu = Array.from(parentMenu.querySelectorAll("li"));

function toggleDropdown(){
    for (let i = 0; i < subMenu.length; i++) {
        let listItem = subMenu[i];
        
        if(listItem.style.visibility === "hidden") {
            listItem.style.visibility = "visible";
        } else {
            listItem.style.visibility = "hidden";
        }
}};


// get info from user
    //querySelectors for the form to store that info
    //access and store data
    //code will go in an evemt listener

// create form elements from the user

//display to the page

const formEl = document.querySelector(".commentForm");

formEl.addEventListener("submit", function(event){
    event.preventDefault();

    
    const userName = document.getElementById("userName").value;
    const userMessage = document.getElementById("userMessage").value;
    // let date = new Date();

    



    console.log(userName);
    console.log(userMessage);
    console.log(userInputsDisplays);
    console.log(date);


})