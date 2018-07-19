// Collapsible content list
function collapsibleList(event) {
  var collap = document.getElementsByClassName('collap');
  Array.prototype.forEach.call(collap, function(el) {
  	el.addEventListener(event, function() {
  		this.parentElement.classList.toggle('active');
  	}, false);
  });
}

(function() {
	window.addEventListener('load', function() {
		collapsibleList('click');
		collapsibleList('touchend');
	}, false);
})();