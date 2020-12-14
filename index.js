var readlineSync=require("readline-sync");
var username=readlineSync.question("what is your name ?  ")
console.log("welcome "+username+" to do you know zeeshan");
var score=0;

var highscore = [
  {name:"zeeshan",
  score:3},
  {name:"danish",
  score:2}
];


function play(question,answer){
 var userans=readlineSync.question(question);
 if(userans===answer){
   console.log("right");
score++;

 }
  else{
    console.log("wrong");
    score--;
  }
  console.log("your score is :",score);
  console.log(".......");

}
var questions=[{
   question:"where do you live ?",
answer:"delhi"},
{question :"who is my favourite hero ? ",
answer:"ironman"},
{question :"where do I study? ",
answer:"alfalah"}];
for ( var i=0;i<questions.length;i++){
  var currentques=questions[i];
  play(currentques.question,currentques.answer);
}
 {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores=3, if you should be there ping me and I'll update it");

 
 
}

;