
// function combine(question1, question2, question3, question4, question5) {
//   (question1 + question2 + question3 + question4 + question5)
// };
var array = [];




$(document).ready(function() {
  $("form").submit(function(){
    console.log("yo1");
    let question1 = array.push($('#question1Input').val());
    let question2 = array.push($('#question2Input').val());
    let question3 = array.push($('#question3Input').val());
    let question4 = array.push($('#question4Input').val());
    let question5 = array.push($('#question5Input').val());

    console.log("yo2");

    // array.push(question1, question2, question3, question4, question5);
    console.log("yo3");

    // let result = ""
    $(".display-food").text("your favorite food is " + array[0]);
    $(".display-book").text("your favorite book is " + array[1]);

    $(".display-color").text("your favorite color is " + array[2]);

    $(".display-sport").text("your favorite sport is " + array[3]);

    $(".display-music").text("your favorite music is " + array[4]);
    console.log("4")

    event.preventDefault();

  });
});
