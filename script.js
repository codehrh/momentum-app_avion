// Code for name update + greeting
function editName (event){
  event.preventDefault();

  let name = document.querySelector("#name").value;
  let header = document.querySelector(".header");

  var today = new Date();
  var h = today.getHours();
  var greeting;

  if (h < 12){
    greeting = "Good morning";
  } else if (h < 18){
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  
  header.innerHTML = `${greeting}, ${name}`

  form.style.display = "none"
}

let form = document.getElementById("updateName");
form.addEventListener("submit", editName);

// Code for digital clock

function clock(){
  var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  var dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

  var today = new Date();

  document.getElementById('date').innerHTML = (dayNames[today.getDay()] + ', ' + monthNames[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear());

  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var day = h<11 ? 'AM': 'PM';

  // Formatting hour into the 12-hour format
  h = h % 12;
  h = h ? h : 12;

  // Below is for formatting the numbers into two tens
  //h = h < 10? '0'+ h : h; 
  m = m < 10? '0'+ m : m;
  s = s < 10? '0'+ s : s;

  document.getElementById('hours').innerHTML = h;
  document.getElementById('mins').innerHTML = m;
  document.getElementById('secs').innerHTML = s;
  document.getElementById('day').innerHTML = day;
} 

var inter= setInterval(clock,1000);

//code for main Focus

function editFocus (event){
  event.preventDefault();

  let focus = document.querySelector("#focus").value;
  let focusHeader = document.querySelector(".focusHeader");

  focusHeader.innerHTML = `Your main focus for today is ${focus}`

  mainFocus.style.display = "none"
}

let mainFocus = document.getElementById("mainFocus");
mainFocus.addEventListener("submit", editFocus);

//code for To do List

let toDoList = document.getElementById("todo");
let listBox = document.getElementById("listBox");
let list = document.getElementById("list");
let numberOfToDo = 0;

function addItem(event) {
  event.preventDefault();

  let itemContainer = document.createElement("div");

  let todo = document.createElement("input");
  todo.setAttribute("type", "checkbox");
  todo.setAttribute("id", `id${numberOfToDo}`);

  let label = document.createElement("label");
  label.innerHTML = listBox.value;
  label.setAttribute("for", `id${numberOfToDo}`);
  
  todo.addEventListener("change", function (event) {

    let checkbox = event.target; 
    let label = document.querySelector(`label[for="${checkbox.id}"]`);
    if (checkbox.checked) {
      label.style.textDecoration = "line-through";
    } else {
      label.style.textDecoration = "none";
    }
  });
  
  list.append(todo, label, itemContainer);
  numberOfToDo++;
  listBox.value = "";
}

toDoList.addEventListener("submit", addItem);

// randomQuote code

let quoteArray = [ 
  `"The only way to do great work is to love what you do." -Steve Jobs` , 
  `"Believe you can and you're halfway there." - Theodore Roosevelt` , 
  `"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill` , 
  `"Don't watch the clock; do what it does. Keep going." - Sam Levenson` , 
  `"You are never too old to set another goal or to dream a new dream." - C.S. Lewis` , 
  `"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt` , 
  `"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt` ,
  `"Hardships often prepare ordinary people for an extraordinary destiny." - C.S. Lewis` , 
  `"The best way to predict the future is to create it." - Abraham Lincoln` ,
  `"Success is not how high you have climbed, but how you make a positive difference to the world." - Roy T. Bennett` 
];

let addQuoteForm = document.getElementById("addQuoteForm");
let randomQuoteButton = document.getElementById("randomQuoteButton");
let randomQuoteDisplay = document.querySelector(".randomQuote");

addQuoteForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let quoteInput = document.querySelector("#quote");
  let newQuote = quoteInput.value;

  quoteArray.push(newQuote);
  quoteInput.value = "";
});

randomQuoteButton.addEventListener("click", function() {

  let randomIndex = Math.floor(Math.random() * quoteArray.length);
  let randomQuote = quoteArray[randomIndex];
  randomQuoteDisplay.innerHTML = `${randomQuote}`;

});