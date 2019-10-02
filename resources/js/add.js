function createGreeting() {
    // input
    var hourNow ;
    var greeting;
  
    // processing:
    if (hourNow > 18) {
      greeting = 'Good evening, Class!';
    } else if (hourNow >= 12) {
      greeting = 'Good afternoon, Class!';
    } else if (hourNow >= 0) {
      greeting = 'Good morning!';
    } else {
      greeting = 'Welcome!';
    }
  
    //output:
    return greeting;
  }
var Shaimaa ,age
Shaimaa = 'My name is Shaimaa'
age = 'My age is'
var x, y, z;
x = 10;
y = 15;
z = x + y;
var owner
owner = 'Iam the owner of this website'
document.write('<h3>'+ dania +'</h3>');
document.write('<h3>'+ age +'</h3>');
document.write('<h3>'+ z +'</h3>');
document.write('<h3>'+ owner +'</h3>');


var yourweight = prompt (' Inter your weight in Kg, please');
var word ;
if (yourweight > 100) {
    word = 'over weight';
} else if (yourweight > 50 && yourweight < 100) {
    word = 'average';
} else if (yourweight < 50) {
    word = 'skinny';   
} else {
    word = 'error';
}
