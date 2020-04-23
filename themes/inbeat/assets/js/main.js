// Open the menu overlay on click
var menuBtn = document.getElementById('menu-icon');
menuBtn.addEventListener('click', function(e) {
    if (!menuBtn.classList.contains('is-active')) {
        menuBtn.classList.add('is-active');
        document.body.classList.add('with-menu');
    } else {
        menuBtn.classList.remove('is-active');
        document.body.classList.remove('with-menu');
    }
});

// Animations in the features section
var homeAnimations = ['search-animation', 'pick-animation', 'export-animation'];
homeAnimations.forEach(function(iconName) {
    var ctn = document.getElementById(iconName);
    bodymovin.loadAnimation({
        container: ctn, // Required
        path: '/animations/placeholder.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: iconName, // Name for future reference. Optional.
    });
}); 

// Icons in the extras section
var homeIcons = ['unlimited-searches', 'blazingly-fast'];
homeIcons.forEach(function(iconName) {
    var icon = document.getElementById(iconName);
    var anim = bodymovin.loadAnimation({
        container: icon, // Required
        path: '/animations/' + iconName + '.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: false, // Optional
        name: iconName, // Name for future reference. Optional.
    });
    icon.addEventListener('mouseenter', function(e) {
        anim.play();
    });
    icon.addEventListener('mouseleave', function(e) {
        anim.stop();
    }); 
});

// Vanilla JS Smooth Scroll
(function() {
	scrollTo();
})();

function scrollTo() {
	var links = document.querySelectorAll('.scroll');
	links.forEach(function (each) {
        each.onclick = scrollAnchors
    });
}

function scrollAnchors(e, respond) {
	var distanceToTop = function(el) { return Math.floor(el.getBoundingClientRect().top) };
	e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	var targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	var originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	var checkIfDone = setInterval(function() {
		var atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = '-1';
			targetAnchor.focus();
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
}
