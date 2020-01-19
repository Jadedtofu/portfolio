// console.log('javaScript connected');

function projectLinkPress() {   // event handler for project link click
    $('nav').on('click', '.js-projects-link', function(event) {
        event.preventDefault(); // prevents default behavior of snapping to #
        let targetHref = $(this).attr('href');
        // console.log('projectLinkPress ran');
        linkPressedScroll(targetHref);
    });
}

function contactLinkPress() {   // event handler for contact link click
    $('nav').on('click', '.js-name-contact-link', function(event) {
        event.preventDefault(); // prevents default behavior of snapping to #
        let targetHref = $(this).attr('href');
        // console.log('contactLinkPress ran');
        linkPressedScroll(targetHref);
    });
}

function linkPressedScroll(destination) {   // scroll to element clicked
    // console.log('linkpressedScroll ran');
    $('html, body').animate({
        scrollTop: $(destination).offset().top }, 500); // 0.5 second scroll time
}

function handleStartPortfolio() {   // document ready function
    projectLinkPress();
    contactLinkPress();
}
$(handleStartPortfolio); // $ is not defined
