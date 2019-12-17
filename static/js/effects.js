// Expandable content list
function expandableList(event) {
  var explst = document.getElementsByClassName('exp');
  Array.prototype.forEach.call(explst, function(el) {
  	el.addEventListener(event, function() {
      var parent = el.parentElement;
  	  parent.parentElement.classList.toggle('active');
  	}, false);
  });
}

(function() {
	window.addEventListener('load', function() {
		expandableList('click');
		expandableList('touchend');
	}, false);
})();
