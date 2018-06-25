

// module pattern
var MODULE = MODULE || {};

MODULE.sub = (function () {
	var my = {
		it: new Object(),
		at: {}
	};
	return my;
})();

// self invoking anonymous function
(function () {

	var firstname; // private
	var middlename = 'n/a'; // private
	var surname; // private
	var hairColour;
	var weight = 100;
	var counter = 10;
	
	person.createPerson = function (firstname, surname, hairColour) {
		counter += 1;
		console.log(firstname, middlename, surname, hairColour, weight, counter);
	};

})(window.person = window.person || {});

person.createPerson('Joe', 'Burton', '#000');
person.createPerson('Gail', 'Chantily', '#ffcc00');
person.createPerson('Sue', 'Folley', '#ffcc00');

console.log('\n');


(function() {
	
	person.removePerson = function (firstname, surname) {
		console.log(firstname, surname);
	};

})(window.person = window.person || {});


// singleton pattern
var singleton = (function () {
    var instance;
 
    function createInstance() {
        var obj = {
            someData: {
            	'1': 1, 
            	'2': 2
        	}
        };
        return obj;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();


// prototypical inheritance / constructor function
function Person (firstname, middlename, surname, hairColour, alive) {

	var firstname; // private
	var middlename = middlename || ''; // private
	var surname; // private
	var hairColour; // private
	var weight = 100; // private
	this.counter = 10; // public
	this.alive = alive;
	this.counter += 1;

	this.resetCounter = function () {
		this.counter = 0;
	}

	this.counterIncrement = function () {
		this.counter += 1;
	}
	
	console.log(firstname, middlename, surname, hairColour, weight, this.counter);

}

Person.prototype.alive = 'yes';

var person1 = new Person('Joe', '', 'Burton', '#000', 'no');
var person2 = new Person('Gail', '', 'Burton', '#ffcc00');
var person3 = new Person('Solomon', 'Hugh', 'Burton', '#ffcc00');

console.log('\n');

// playing with Object.create
var myData = {
	name: 'Joe',
	age: 35	
};

var data = Object.create(myData, {
	add: function (a, b) {
		return a + b;
	}
});

var Car2 = {
  getInfo: function() {
    return 'A ' + this.color + ' ' + this.desc + '.';
  }
};
 														
var car2 = Object.create(Car2, {
  //value properties
  color:   { writable: true,  configurable:true, value: 'red' },
  //concrete desc value
  rawDesc: { writable: false, configurable:true, value: 'Porsche boxter' },
  // data properties (assigned using getters and setters)
  desc: { 
    configurable:true, 
    get: function () { return this.rawDesc.toUpperCase();  },
    set: function (value) { this.rawDesc = value.toLowerCase(); }  
  }
}); 

car2.color = 'blue';
console.log(car2.getInfo()); //displays 'A RED PORSCHE BOXTER.'


// use of Object.create and problems with 
// linked prototype being overwritten
function Foo() {

	this.myOtherMethod = function () {
		alert('myOtherMethod');
	}

};

Foo.prototype.say = function() {
   console.log('Foo');
};

Foo.prototype.colour = 'red';

Foo.newMethod = function () {
	alert('hello');
}

var foo = new Foo();


function Bar() {

};

//Bar.prototype = Foo.prototype; //links the prototypes which is bad, use Object.create copies prototype
Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.say = function() {
    console.log('Bar');
};

Bar.prototype.colour = 'green';

foo.say(); // alerts 'Bar'

var bar = new Bar();


// hasOwnProperty
Object.prototype.test = 'really';

o = {};
o.prop1 = 'property one';
o.prop2 = 'property two';

console.log(o.hasOwnProperty('prop1'));             // returns true
console.log(o.hasOwnProperty('prop2'));             // returns true
console.log(o.hasOwnProperty('toString'));         // returns false
console.log(o.hasOwnProperty('hasOwnProperty'));   // returns false

for (val in o) {
	if (o.hasOwnProperty(val)) {
    	console.log(o[val]);
  	}
	else {
    	console.log('inherited: ', val, o[val]);
	}
}

// using hasOwnProperty
function Ship () {
    this.weight = 100;
    this.length = 45;
}

Ship.prototype.speed = function (speed) {
    return 'this ship travels at ' + speed + ' per hour';
}

var smallShip = new Ship();

for (item in smallShip) {
    if (smallShip.hasOwnProperty(item)) {
        console.log('specific to this object', smallShip[item]);
    } else {
        console.log('inherited: ' + item, smallShip[item]);
    }
}


function Joe () {
	this.name = 'joe james burton';
}

Joe.prototype = {
	age: 35,
	gender: 'male'
};
	
function Bryan() {

}

Bryan.prototype = Object.create(new Joe());
Bryan.prototype.sport = 'kayaking';

var bryan = new Bryan();
bryan.name = "Bryan Paul Czapp";



(function () {
	var container = document.getElementById('container');
	container.innerHTML = '<a href="">Hello World</a>';
	container.addEventListener('click', function () {
		alert(container.innerHTML);
		return false;
	});

	function start () {
		alert(this);
	}

	return {
		myClassicJS: start
	};

})();

function add () {
	var total = 0;
	for (var i = 0; i < arguments.length; i++) {
		total += arguments[i];
	}
	return total;
}

console.log(add(1,2,3,4,5));
