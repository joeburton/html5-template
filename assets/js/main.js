
if (typeof console == "undefined") {
    this.console = { log: function (msg) { alert(msg); } };
}

function somewhereSpecial(e) {

	console.log('somewhere special', e.x, e.y, this);

}

function $(id) { 
	return document.getElementById(id); 
}

var somewhere = $("somewhere");

somewhere.addEventListener("click", somewhereSpecial, false)

/*
$('*[data-selection-id]').each(function() {
	
    var id = $(this).data('selection-id');
    
    $(this).html(id);
    
});

var mapStuff = {
    
    details: function () {
        return $('*[data-selection-id]').map(function() {
            console.log($(this).data());
        });
    }
    
};

mapStuff.details();
*/


/*
Constructor Pattern
*/
function Chocolate () {

	this.colour = "dark";
	this.weight = "500";
	this.brand = "Joe's Chocolate";
	this.toString = function() {
		console.log("the colour: " + this.colour + " the weight: " + this.weight + " the brand: " + this.brand);
	}

}

Chocolate.prototype.price = "69";
Chocolate.prototype.sellby = "04/10/2014";

var chocolateBar = new Chocolate();
var chocolateCake = new Chocolate();

chocolateBar.price = "20";

console.log(chocolateBar.toString());


/*
Object literal pattern
*/
var chocolate = {

	colour: "dark",
	weight: "500",
	brand: "Joe's Chocolate",
	returnDetails: function() {
	
		console.log("the colour: " + this.colour + " the weight: " + this.weight + " the brand: " + this.brand);
	
	}
	
};

chocolate.returnDetails();
