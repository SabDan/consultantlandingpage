function myFuntion(){
    let navBar = document.querySelector('nav-nav');
    if(navBar.className ==='nav-nav'){
        navBar.className += 'responsive';
    } else{
        navBar.className = 'nav-nav'
    }
}




let quoteTestimony = document.querySelectorAll('.reco-quote'),
 nextButton = document.querySelector('#nextButton'),
 prevButton = document.querySelector('#prevButton'),
 currentQuote = 0;


// clear all quotes to display none
// loop through quotes
function reset(){
    for(let i = 0; i < quoteTestimony.length; i++){
        quoteTestimony[i].style.display = "none";
    }
}

function startQuote(){
    reset();
    quoteTestimony[0].style.display = "block";
}

// show prev

function prevQuote(){
    reset();
    quoteTestimony[currentQuote - 1].style.display = "block";
    currentQuote--;
}

// prevButton events
prevButton.addEventListener('click', function(){
    if(currentQuote === 0){
        currentQuote = quoteTestimony.length;
    }
    prevQuote();
});


// show next
function nextQuote(){
        reset();
        quoteTestimony[currentQuote + 1].style.display = "block";
        currentQuote++;
    }


// nextButton events
nextButton.addEventListener('click', function(){
    if(currentQuote === quoteTestimony.length -1){
       currentQuote = -1;
    }
    nextQuote();
});

startQuote();
