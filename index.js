const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".name")
let quoteBtn = document.querySelector("button#quote")
let favouriteBtn = document.querySelector("#Favourite")
let likeBtn = document.querySelector(".like")


const BaseUrl = "http://api.quotable.io/random" // gets the API

function randomQuote(){
  quoteBtn.innerText = "loading Quote..." // while a new quote is loading, the text in the quotebtn reads loading Quote...
    fetch(BaseUrl) // gets the API
    .then(res => res.json()) //brings data as a promise
    .then(data => {console.log(data); //returns the data
    quoteText.innerText = data.content;
    authorName.innerText = data.author;
    
    likeBtn.addEventListener("click", ()=>{
      likeBtn.style.color = "Red" //changing the like button to red when clicked
    })

    favouriteBtn.addEventListener("click", ()=>{
    favouriteBtn.style.color ="Red"//changing the favourite button to red when clicked
  },{once: true})
  
    quoteBtn.innerText = "New Quote"  //when the quote loads the button text changes to new quote
    likeBtn.style.color = "#7b2cbf"  // the color of the likebutton changed back to the original color when a new quote is displayed 
    favouriteBtn.style.color = "#7b2cbf" // the color of the favouritebutton changed back to the original color when a new quote is displayed 
    })
  let copyBtn = document.querySelector(".copy") // to copy the quote to clipboard
  copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText)
  })

quoteBtn.addEventListener("click", randomQuote); // when clicked a new quote is dispalyed
}randomQuote()


    function signupForm() {
        document.querySelector("section#signUp").style.display = "none";
        let signUp = document.querySelector("p#sign-up-nav-bar");
        signUp.addEventListener("click", function () {
          document.querySelector("section#signUp").setAttribute("style", "");
          let Submit = document.querySelector("button#sign-up-button");
          Submit.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector("section#signUp").style.display = "none";
          });
        });
      }
      signupForm();

      function submitAlert() {
        function alertTimeout() {
          alert("Thank you for signing up");
        }
        setTimeout(alertTimeout, 5);
      }
