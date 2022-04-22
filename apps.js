//dropdown Menu
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


//comment form
const formEl = document.querySelector(".commentForm");
const commentEl = document.querySelector(".userComments");
const inputElements = Array.from(formEl.elements);


formEl.addEventListener("submit", function(event){
    event.preventDefault();

    const userName = document.querySelector("input[name=userName]");
    const userNameInput = userName.value;

    const userEmail = document.querySelector("input[name=userEmail]");
    const userEmailInput = userEmail.value;

    const userMessage = document.querySelector("textarea");
    const userMessageInput = userMessage.value;
    
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }
    
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

        let date = new Date();
        let userDate = (date.toLocaleDateString("en-US", options));
        const userHeading = document.createElement("h5");
        userHeading.textContent = `${userDate} by ${userNameInput}`;

        const userPara = document.createElement("p");
        userPara.textContent = userMessageInput;

        userComment.appendChild(userHeading);
        userComment.appendChild(userPara);
        commentParent.appendChild(userComment);
    }    
});
