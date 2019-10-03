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
document.write('<h3>'+ Shaimaa +'</h3>');
document.write('<h3>'+ age +'</h3>');
document.write('<h3>'+ z +'</h3>');
document.write('<h3>'+ owner +'</h3>');


var yourAge = prompt (' Inter your ِAge , please');
var word ;
if (yourAge > 50) {
    word = 'over Age';
} else if (yourAge > 20 && yourAge < 50) {
    word = 'average';
} else if (yourAge < 20) {
    word = 'skinny';   
} else {
    word = 'error';
}
