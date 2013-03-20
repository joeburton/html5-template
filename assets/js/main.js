

/* if console.log undefined create it */
if (typeof console == "undefined") {
    this.console = { 
		log: function (msg) { 
			alert(msg); 
		}
	};
}

/* add a new object to the global window
if (typeof frog == "undefined") {
    this.frog = { 
		parts: function (msg) { 
			alert(msg); 
		}
	};
}

frog.parts("mainly legs");
*/
 
 
/*
push document.getElementById to $ 

function $(id) { 
	return document.getElementById(id); 
}

function somewhereSpecial(e) {
	console.log("x:position: " + e.x + " y:position: " + e.y + " what's this's value: " + this);
}

var somewhere = $("somewhere");

somewhere.addEventListener("click", somewhereSpecial, false)
*/


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


/*
Constructor Pattern

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
*/


/*
Object literal pattern

var chocolate = {

	colour: "dark",
	weight: "500",
	brand: "Joe's Chocolate",
	returnDetails: function() {
	
		console.log("the colour: " + this.colour + " the weight: " + this.weight + " the brand: " + this.brand);
	
	}
	
};

chocolate.returnDetails();
*/


/*
function Numbers () {

	this.o = {
		first: "first",
		second: "second",
		third: "third",
		fourth: "fourth",
		fith: "fith",
		somethingdiff: ["a", "b", "c"],
		someobj: {"object": "really"}
	}
	
}

Numbers.prototype.item = function() {
	return ("something");
}

var myNumbers = new Numbers();

var someText = myNumbers.item();

console.log("text: ", someText, myNumbers, myNumbers.item);
*/


var o = {
	first: "first",
	second: "second",
	third: "third",
	fourth: "fourth",
	fith: "fith",
	somethingdiff: ["a", "b", "c"],
	someobj: {"object": "really"}
};

if (typeof Object.prototype.clone === "undefined") {
	Object.prototype.clone = function() {
		alert('cloning begins');
	}
}

for (name in o) {
	
	if (o.hasOwnProperty(name)) {
		console.log(name, o[name]);
	}
	
}

//console.log("Object: ", Object.clone);





