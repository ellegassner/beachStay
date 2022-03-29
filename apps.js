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
const commentEl = document.querySelector(".userComments");
const inputElements = Array.from(formEl.elements);
// console.log(inputElements);

// inputElements.forEach(function (input) {
//     const task = input.value;
//     console.log(task);
// })


// const inputName = document.querySelector('input');
// const task = inputElement.value;
const userName = document.querySelector("input[name=userName]");
const userNameInput = userName.value;

const userEmail = document.querySelector("input[name=userEmail]");
const userEmailInput = userEmail.value;

const userMessage = document.querySelector("textarea");
const userMessageInput = userMessage.value;
console.log(userMessageInput);



formEl.addEventListener("submit", function(event){
    event.preventDefault();

    
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let dayNumber = date.getDate();
    let year = date.getFullYear();
    

    if (userNameInput){
        userName.value = "";
        userEmail.value = "";
        userMessage.value = "";

        const commentParent = document.createElement("div");
        commentParent.classList.add("user");

        commentEl.appendChild(commentParent);

        const userImage = document.createElement("div");
        userImage.classList.add("userImage");
        const img = document.createElement("img");
        img.src = "http://placekitten.com/300/300";

        commentParent.appendChild(userImage);
        userImage.appendChild(img);

        const userComment = document.createElement("div");
        userComment.classList.add("userComment");

        const userHeading = document.createElement("h5");
        userHeading.textContent = `${day} ${month} ${dayNumber}th, ${year} by ${userNameInput}`;

        const userPara = document.createElement("p");
        userPara.textContent = userMessageInput;

        userComment.appendChild(userHeading);
        userComment.appendChild(userPara);
        commentParent.appendChild(userComment);

    }    
})
