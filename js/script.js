// toggle navbar
/*select .nav-toggler class*/
const navToggler = document.querySelector(".nav-toggler");
/*add toggleNav named function to click listner*/
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    /*toggle the active class on nav-toggler*/ 
    navToggler.classList.toggle("active");
    /* toggle the open class on the .nav class*/
    document.querySelector(".nav").classList.toggle("open");
}

// close nav when clicking on a nav item

document.addEventListener("click", function(e){
    //finds a node that matches the provided selector string 
    if(e.target.closest(".nav-item")){
        toggleNav();
    }
});

// sticky header effect

window.addEventListener("scroll", function(){
    //if page is greater than pageYOffset 60 then add sticky drop down translateY otherwise remove
    if(this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky");
    }
    else {
        document.querySelector(".header").classList.remove("sticky"); 
    }
});


/*---------menu tabs---------- MAKE COMMENTS ON THIS WHOLE SCRIPT PAGE*/
/* select menu-tabs class */
const menuTabs = document.querySelector(".menu-tabs");
//add click listener to .menu-tabs
menuTabs.addEventListener("click", function(e){
    //if menu-tab-item class and not active class are the tab clicked
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        //get the id attribute data target for each menu tab
        const target = e.target.getAttribute("data-target");

        console.log(target);
        //get the .menu-tabs that is active and remove active class on it (i.e the main color on text)
        menuTabs.querySelector(".active").classList.remove("active");
        //e.target = the clicked item, add the active class on the newly clicked item or same item if same one is clicked
        e.target.classList.add("active");
        //select the menu-section class (I.E selecting the menu items)
        const menuSection = document.querySelector(".menu-section"); 
        //select the menu-tab-content.active class html items, and remove the css active class reverting it to the .menu-tab-content css properties
        menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
        //add the active part to the data-target (i.e .row .menu-tab-content class on each)
        menuSection.querySelector(target).classList.add("active");
    }
});

/*---------catering menu items click handler for new text to appear (i.e package item list)----------*/
/* select #cateringItems class to group all data-targets of the similar click functionalities */
const menuItemCatering = document.querySelector("#cateringItems");

//click handler
menuItemCatering.addEventListener("click", function(e){

        if(e.target.classList.contains("menu-item-catering")){

            const target = e.target.getAttribute("data-target");

            //use if instead of switch as target keeps switching    
            if (target == "#menuItemCateringOne") {
                                            
                    e.target.innerHTML = "Chicken Biryani / Chicken Palau" + "<br />" + "Chicken Karahi / Chicken Korma" + "<br />" + "Raita" ;

             }
             if (target == "#menuItemCateringTwo") {
                    
                    e.target.innerHTML = "Veal Biryani / Veal Palau" + "<br />"  + "Chicken Karahi / Chicken Korma" + "<br />" + "Raita" ;

             }
             if (target == "#menuItemCateringThree") {
                    
                e.target.innerHTML = "Chicken Biryani / Chicken Palau" + "<br />" + "Chicken Karahi / Chicken Korma" + "<br />" + "Chicken tikka / Seekh Kabab" + "<br />" + "Raita +" + " Salad"; 
            }
            if (target == "#menuItemCateringFour") {
                    
                e.target.innerHTML = "Chicken Biryani / Chicken Palau" + "<br />" + "Chicken Karahi / Chicken Korma" + "<br />" + "Chicken tikka / Seekh Kabab" + "<br />" + "ChickPeas Salan" + "<br />" + "Kheer / Sheer-Korma" + "<br />" + "Raita +" + " Salad"; 
            }
            if (target == "#menuItemCateringFive") {
                    
                e.target.innerHTML = "Veal Biryani / Veal Palau" + "<br />" + "Chicken Karahi / Chicken Korma" + "<br />" + "Chicken tikka / Seekh Kabab" + "<br />" + "ChickPeas Salan" + "<br />" + "Kheer / Sheer-Korma" + "<br />" + "Raita +" + " Salad"; 
            }
            if (target == "#menuItemCateringSix") {
                    
                e.target.innerHTML = "Veal Biryani / Veal Palau" + "<br />" + "Nehari" + "<br />" + "Chicken tikka / Seekh Kabab" + "<br />" + "ChickPeas Salan" + "<br />" + "Kheer / Sheer-Korma" + "<br />" + "Raita +" + " Salad"; 
            }

        }

    });