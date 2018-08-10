document.addEventListener('DOMContentLoaded', function() {
	var imageContainer = document.querySelector('.image-container');
	var horsesLink = imageContainer.querySelector('a');
	var rect = imageContainer.getBoundingClientRect();
	window.addEventListener('resize', function() {
		rect = imageContainer.getBoundingClientRect();
	});
	window.addEventListener('click', function(e) {
		if(e.clientX >= rect.left && e.clientX < rect.right && e.clientY >= rect.top && e.clientY < rect.bottom) {
			horsesLink.click();
		}
	});
});
