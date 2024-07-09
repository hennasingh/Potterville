let accordions = document.getElementsByClassName("accordion");

/**
 * Adding Click listener to each section 
 * of the accordion.
 */
for(let acc of accordions) {
    acc.addEventListener('click', function() {
        /* Toggle between adding and removing the 'active' class
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        let panel = this.nextElementSibling;
        if(panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}