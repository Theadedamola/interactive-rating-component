var buttonEls = document.querySelectorAll(".rating");



buttonEls.forEach(buttonEl => {
    buttonEl.addEventListener("click", function(){
        $(".rating-selected").removeClass("rating-selected")
        buttonEl.classList.add("rating-selected");
        var buttonText = this.textContent;
        // localStorage.setItem("buttonText", buttonText);
        //     localStorage.getItem("buttonText", buttonText);
            $(".rate-result").html("You selected " + buttonText + " out of 5");
    });
});
buttonEls.forEach(buttonEl => {
    buttonEl.addEventListener("mouseover", function(){
        $(".ratinghover").addClass("ratinghover")
        buttonEl.classList.add("ratinghover");
        
    });
    buttonEl.addEventListener("mouseout", function(){
        $(".ratinghover").removeClass("ratinghover")
        
    });
});



$(".submit-btn").hover(function(){
    $(".submit-btn").addClass("submit-btnhover")
}, function(){
    $(".submit-btn").removeClass("submit-btnhover")
})

$(".submit-btn").click(function(){
    
    $(".rate-container").replaceWith(function(){
        $(".ty-container").show(); 
    });
    
    // location.href = "thankyou.html";
    
    // localStorage.getItem("buttonText", buttonText);
    // $(".rate-result").html("You selected " + buttonText + " out of 5");
    
    
})
