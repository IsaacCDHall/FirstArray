
// function combine(question1, question2, question3, question4, question5) {
//   (question1 + question2 + question3 + question4 + question5)
// };




// var array = [];


$(document).ready(function() {
  $("form").submit(function(event){
    var blanks = ["question1", "question2","question3","question4","question5"];
    console.log(blanks);
    blanks.forEach(function(bb){
      //below gives us a value for each input form submission by targetting the input form + id
      var userInput = $("input#" + bb).val();
      //below "." calls that class to then manipulate dom to display text of their input there
      $("." + bb).text(userInput);
      var testing = ("." + bb);
      console.log(testing);
      console.log(userInput);
    });
    event.preventDefault();
  });
});

// console.log("yo1");
// array.push($('input#question1').val());
// array.push($('input#question2').val());
// array.push($('input#question3').val());
// array.push($('input#question4').val());
// array.push($('input#question5').val());
//
// console.log("yo2");
//
// // array.push(question1, question2, question3, question4, question5);
// console.log("yo3");
//
// // let result = ""
// $(".display-food").text("your favorite food is " + array[0]);
// $(".display-book").text("your favorite book is " + array[1]);
//
// $(".display-color").text("your favorite color is " + array[2]);
//
// $(".display-sport").text("your favorite sport is " + array[3]);
//
// $(".display-music").text("your favorite music is " + array[4]);
