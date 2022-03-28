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

formEl.addEventListener("submit", function(event){
    event.preventDefault();

    
    const userName = document.getElementById("userName").value;
    const userMessage = document.getElementById("userMessage").value;
    const userEmail = document.getElementById("userEmail").value;


    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let dayNumber = date.getDate();
    let year = date.getFullYear();
    

    if (userName){

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
        userHeading.textContent = `${day} ${month} ${dayNumber}th, ${year} by ${userName}`;

        const userPara = document.createElement("p");
        userPara.textContent = userMessage;

        userComment.appendChild(userHeading);
        userComment.appendChild(userPara);
        commentParent.appendChild(userComment);

    }    
})
