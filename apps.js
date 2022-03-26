//target dropdown menu for mobile in html
    //querySelector 
    //access and store that data
//have a conditional statment that says if the user clicks on dropdown
    //add eventlistener

const parentMenu = document.querySelector('.dropdown');
const subMenu = Array.from(parentMenu.querySelectorAll('li'));

function toggleDropdown(){
    for (let i = 0; i < subMenu.length; i++) {
        let listItem = subMenu[i];
        
        if(listItem.style.visibility === "hidden") {
            listItem.style.visibility = "visible";
        } else {
            listItem.style.visibility = "hidden";
        }
}};


