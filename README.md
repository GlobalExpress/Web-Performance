# Web-Performance

Udacity Web Performance Project 4 

In order to run the project open index.html from your browser. 
A gruntfile is included however the grunt packages are not included. Run npm install grunt-responsive-images within the project folder.

PART 1  - PAGESPEED OF AT LEAST 90 FOR INDEX.HTML.

CSS was inlined and the analytics script was given the async attribute. The main change was optimizing the image sizes.
This was accomplished using grunt. Gruntfile included in the uploads. 

PART 2 - FRAMRATE FOR PIZZA.HTML 

The main changes to the functions within main.js:

resizePizzas - Within this function another function called changeSliderLabel was edited to include a new var newWidth which stores a percentage value. This value is then used within the function changePizzaSizes. 

updatePositions - The main change here was to remove the FSL by doing the ScrollTop calculation outside the main loop. style.transform was added as this should enhance performance over the style.left method. 

Finally the eventListener 'DOMCOntentLoaded' - var numberofPizzas added to calculate the number according to window.innerHeight. 
The items var was moved into this loop using the getElementsByClassName method. 
requestAnimationFrame introduced at the end running the updatePositions function. 





