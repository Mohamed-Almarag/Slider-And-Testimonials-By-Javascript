// MAKE  SLIDER WITH JAVASCRIPT 

// Get images that you will sue in slider
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get number of slide
var slideCount = sliderImages.length;

// Set current slide
var currentSlide = 1;

//Slide number element
var slideNumberElement = document.getElementById('slider-number');

// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

//Handel click on next and previous buttons
nextButton.onclick = nextslide;
prevButton.onclick = prevslide;


// create paginationElement Ul ==== polits 
var paginationElement = document.createElement('ul');

// set attribute in pagination ul 
paginationElement.setAttribute('id','pagination-ul');


//  loop to create li item to put them in ul you created
for(var i = 1; i <= slideCount; i++) {

    // create li  
    var paginationItem = document.createElement('li');

    // set attribute in li 
    paginationItem.setAttribute('data-index', i);

    //create text And ***** put it in li 
    paginationItem.appendChild(document.createTextNode(i));

    // put li with all things(attribute, textnode, Etc) in Ul
    // Append li to ul
    paginationElement.appendChild(paginationItem);

}

// append paginationElement to  indecators in body  the Page
document.getElementById('indicators').appendChild(paginationElement);

// Get the created  Ul 
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get pagination Bullets that you will sue in slider
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop through all bullets 
for(var i = 0; i < paginationBullets.length; i++) {

    // get data-indext for every element
    // parseInt***************** to convert and cut sting to number

    paginationBullets[i].onclick = function() {

        currentSlide = parseInt(this.getAttribute('data-index'));

        theChecker();
        
    }
}

// Trigger the ckecker function
theChecker();


// next slide function
function nextslide() {
    
    if(nextButton.classList.contains('disabled')) {

        // Do Nothing
        return false;

    } else {

        // Go To THE next
        currentSlide++;

        theChecker();

    }
}

// previous slide function
function prevslide() {
    
    if(prevButton.classList.contains('disabled')) {

        // Do Nothing
        return false;

    } else {

        // Go To THE next
        currentSlide--;

        theChecker();

    }
}


// The Checker function 

function theChecker() {

    // Set slideNumberElement to write text in it
    slideNumberElement.textContent = '# Slide ' + (currentSlide) + ' of ' + (slideCount);

    // Remove all active class
    removerAllctiveClass();

    // Set active class on current slide
    sliderImages[currentSlide - 1].classList.add('active');

    // Set active class on pagination ul bullets
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');

    // Check if the current slide is the first ****
    if(currentSlide == 1) {

        // Add disabled class on previous Button
        prevButton.classList.add('disabled');
    } else {

        // Remove disabled class from previous Button
        prevButton.classList.remove('disabled');
    }

    // Check if the current slide is the last ****
    if(currentSlide == slideCount) {

        // Add disabled class on nextButton Button
        nextButton.classList.add('disabled');
    } else {

        // Remove disabled class from nextButton Button
        nextButton.classList.remove('disabled');
    }


}


// Remove active class from sliderImages and pagination bullets
function removerAllctiveClass() {

    // loop on sliderImages to remove class active--- images
    sliderImages.forEach(function(img) {

        img.classList.remove('active');
    });

    // Loop on paginationBullets--- li
    paginationBullets.forEach(function(bullet) {

        bullet.classList.remove('active');
    });
}

// END  SLIDER WITH JAVASCRIPT 


///                 *******     start testimonials          ********

// get  testimonals  div in array 
let testimonials = Array.from(document.querySelectorAll('.testimonials .first')),

    testimonialsLength = testimonials.length,

    testimonialsCount = 1,

    //bulletmainUl =document.querySelector('.bullets-pointer .span-bullets ul');

    bulletsLi = Array.from(document.querySelectorAll('.bullets-pointer .span-bullets ul li'));


// Loop on bullets to change number of bullet with number of div

for(let  i = 0; i < testimonialsLength;  i++) {

    bulletsLi[i].onclick = function() {

        testimonialsCount = parseInt(this.getAttribute('data-pass'));

        theMainFunction();
    }

}

// Trigger the main funcyion
theMainFunction();

// The Main function to do anything in testemonials
function theMainFunction() {
    
    // Remove active class from divs and bllets
    RemoveActive();

    // Remove active class from divs
    testimonials[testimonialsCount - 1].classList.add('active');

    // Remove active class from bllets
    bulletsLi[testimonialsCount - 1].classList.add('active');

    
}


// Remove all active class from div and bullets
function RemoveActive() {

    // Loop on testimonials div to remove active class
    testimonials.forEach(div => div.classList.remove('active'));

    // Loop on testimonials bullets-pointer to remove active class
    bulletsLi.forEach(bulet => bulet.classList.remove('active'));
    
}


////     ******   end testimonials      *******************************


// Start About
let about = document.getElementById('about'),

    feature = document.getElementById('feature');

about.appendChild(feature.cloneNode(true));
about.appendChild(feature.cloneNode(true));

let aboutnodediv2 = about.children[1].firstElementChild;

aboutnodediv2.textContent  = 'jack sba';

let aboutnodediv3 = about.children[2].firstElementChild;

    aboutnodediv3.textContent  = 'marcos';

// End About
