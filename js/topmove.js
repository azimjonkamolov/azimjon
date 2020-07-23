// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("gotoTop").style.display = "block";
	} else {
		document.getElementById("gotoTop").style.display = "none";
	}
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	$('html, body').animate({scrollTop:0}, 'slow');
}
var timeOnEachText1 = 2000; // Milliseconds to spend on each before moving to next
var text1 = [' Azimjon ', ' Problem ', 'Web'];
var counter1 = 0;
var elem1 = document.getElementById("fadeOne");
function changeOne() {
  jQuery(elem1).delay(timeOnEachText1).fadeTo(2000, 0, function() {
	this.innerHTML = text1[counter1];
	counter1 = ++counter1 % text1.length;
	jQuery(this).fadeTo(2000, 1, changeOne)
  })
}
changeOne()

var timeOnEachText2 = 2000; // Milliseconds to spend on each before moving to next
var text2 = ['Kamolov', ' Solver ', 'Developer'];
var counter2 = 0;
var elem2 = document.getElementById("fadeTwo");
function changeTwo() {
  jQuery(elem2).delay(timeOnEachText2).fadeTo(2000, 0, function() {
	this.innerHTML = text2[counter2];
	counter2 = ++counter2 % text2.length;
	jQuery(this).fadeTo(2000, 1, changeTwo)
  })
}
changeTwo()