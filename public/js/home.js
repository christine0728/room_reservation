/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')




 const headingElement = document.getElementById('typewriter-heading');
 const subheadingElement = document.getElementById('typewriter-subheading');
 const paragraphElement = document.getElementById('typewriter-paragraph');
 const headingText = "Welcome to InnoGen Solutions";
 const subheadingText = "'Turning Visions For All Generations'";
 const paragraphText = "Empowering individuals and businesses with innovative web solutions that transcend generations.";
 let headingIndex = 0;
 let subheadingIndex = 0;
 let paragraphIndex = 0;

 function typeHeading() {
     if (headingIndex < headingText.length) {
         headingElement.textContent += headingText[headingIndex];
         headingIndex++;
         setTimeout(typeHeading, 100); // Adjust the typing speed (milliseconds)
     } else {
         // Once typing is complete, start typing the subheading
         setTimeout(typeSubheading, headingText.length * 100); // Delay subheading typing
     }
 }

 function typeSubheading() {
     if (subheadingIndex < subheadingText.length) {
         subheadingElement.textContent += subheadingText[subheadingIndex];
         subheadingIndex++;
         setTimeout(typeSubheading, 100); // Adjust the typing speed (milliseconds)
     } else {
         // Once subheading is complete, start typing the paragraph
         setTimeout(typeParagraph, subheadingText.length * 100); // Delay paragraph typing
     }
 }

 function typeParagraph() {
     if (paragraphIndex < paragraphText.length) {
         paragraphElement.textContent += paragraphText[paragraphIndex];
         paragraphIndex++;
         setTimeout(typeParagraph, 100); // Adjust the typing speed (milliseconds)
     }
 }

 // Trigger the typewriter effect when the page loads
 window.onload = function() {
     typeHeading();
 };

 
 // GSAP Animation for CTA button
gsap.from(".cta-button", {
   opacity: 0,
   y: 50,
   duration: 1,
   ease: "power2.out",
   delay: 1
});




