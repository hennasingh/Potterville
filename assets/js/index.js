const accordions = document.getElementsByClassName("accordion");
/**
 * Adding Click listener to each section 
 * of the accordion class item.
 */
for (let acc of accordions) {
    acc.addEventListener('click', function () {

        /* Toggle between hiding and showing the active panel */
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}