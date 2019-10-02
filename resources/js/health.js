  
'use strict'

var foodpicture = function() {
  // input
  var choice = prompt('What is the type of food that you are eating most? is it junk food or healthy food');
  var picture; 
  while (choice !== 'junk meals' && choice !== 'healthy meals'){
   choice = prompt( 'please enter that again' )
   }
  // processing
  if (choice === 'junk meals') {
    picture = '<img src="https://w.ndtvimg.com/sites/30/2017/03/28093135/Eat-Home-Cooked-Food-Skip-TV-During-Meals-To-Avoid-Obesity-Study.jpg">'
  } else if (choice === 'healthy meals') {
    picture = '<img src="https://www.nsaem.net/wp-content/uploads/2018/09/%D8%A7%D9%84%D8%A3%D9%83%D9%84-%D8%A7%D9%84%D8%B5%D8%AD%D9%8A-1-648x300.jpg">'
  }


  
  // output
  return picture;
}

var showOrder = function() {
  // input
  var order = prompt('What do you think is better "junk meals" or "healthy meals"?');
  var picture = ''; 
  var total = NaN;

  // processing
  while (order !== 'junk meals' && order !== 'healthy meals') {
    order = prompt('Please enter "junk meals" or "healthy meals"...');
  }

  while(isNaN(total)) {
    total = prompt('How many times you eat junk meals in a week?');
  }
  
  for(var i = 0; i < total; i = i + 1) {
    if (order === 'junk meals') {
      picture = picture + '<p><img src="https://ilhyh.com/wp-content/uploads/2018/08/%D8%A3%D8%B3%D9%88%D8%A3-%D9%88%D8%B8%D8%A7%D8%A6%D9%81-%D9%81%D9%8A-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85.png"></p>'
    } else if (order === 'healthy meals') {
      picture = picture + '<p><img src="http://www.balagh.co/watermark/show.php?path=../images/texes/2.good-mood.jpg"></p>'
    }
  }

  // output
  return picture;
}