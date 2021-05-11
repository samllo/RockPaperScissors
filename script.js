
let compScore = 1;
let userScore = 1;

const uScore = document.getElementById('userScore');
const pcScore = document.getElementById('pcScore');

const buttons = document.querySelectorAll('.select button');
const displayIcon = document.querySelector('.show i');
const pcIcon = document.querySelector('.PC i');

const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors"];
const text = document.getElementById('demo');



console.log(buttons);

console.log(userScore)




const game = () => {
  buttons.forEach(btn =>{
    btn.addEventListener('click',(e)=>{
      let clickedbutton = e.target.className;
      displayIcon.className = clickedbutton; // assign clicked icon to display in "show i" div

      let randomNum = Math.floor(Math.random()* randomClasses.length);
      console.log(randomNum);
      pcIcon.className = randomClasses[randomNum]; // assigns computer icon from randomclasses array based on random number generated between 0-2

      // if game is a draw/ same icons
      if (displayIcon.className === pcIcon.className){
        uScore.innerHTML = uScore.innerHTML;
        pcScore.innerHTML = pcScore.innerHTML; // scores stay the same
        text.innerHTML= "Its a draw";
        text.style.color='orange';
      } 

      // if its not a draw
      else if (displayIcon.className === randomClasses[0] && pcIcon.className === randomClasses[2]){
        uScore.innerHTML = userScore;
        userScore++;
        text.innerHTML= "YOU WIN!";
        text.style.color = 'green';
      }else if (displayIcon.className === randomClasses[1] && pcIcon.className === randomClasses[0]){
        uScore.innerHTML = userScore;
        userScore++;
        text.innerHTML= "YOU WIN!";
        text.style.color = 'green';
      }else if (displayIcon.className === randomClasses[2] && pcIcon.className === randomClasses[1]){
        uScore.innerHTML = userScore;
        userScore++;
        text.innerHTML= "YOU WIN!";
        text.style.color = 'green';
      }
      
      
      else if(displayIcon.className === randomClasses[0] && pcIcon.className === randomClasses[1]){
        pcScore.innerHTML = compScore;
        compScore++;
        text.innerHTML = "You Lost";
        text.style.color = 'red';
      }else if(displayIcon.className === randomClasses[1] && pcIcon.className === randomClasses[2]){
        pcScore.innerHTML = compScore;
        compScore++;
        text.innerHTML = "You Lost";
        text.style.color = 'red';
      }else if(displayIcon.className === randomClasses[2] && pcIcon.className === randomClasses[0]){
        pcScore.innerHTML = compScore;
        compScore++;
        text.innerHTML = "You Lost";
        text.style.color = 'red';
      }
    });
  });
}

game(); // calls function

