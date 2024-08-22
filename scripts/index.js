(function($){
    $(function(){
        
        /* Scroll to sections */
        $(".jq--scroll-staff-team").click(function(){
            $("html, body").animate({scrollTop: $(".jq--staff-team").offset().top}, 2000);
        });
    });
})(jQuery);

window.onload = function() {
    const randomNumber = Math.floor(Math.random() * 250) + 1;
    const randomNumberdiv = document.getElementById('randomNumberDisplay');

    if (randomNumberdiv) {
        randomNumberdiv.textContent = randomNumber + ' lidí';
    } else {
        console.error('Element with ID randomNumberDisplay was not found.');
    }
};

