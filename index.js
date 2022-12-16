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
    let li = document.createElement("li"); //creating an li to list all the quotes added to favourite
    li.innerHTML = data.content;
    let p = document.createElement("p");
    p.innerHTML = data.author; 
    p.setAttribute("class", "authorName")
    let div = document.getElementById("listFavourite")
    div.append(li);  
    div.append(p);
},{once: true})
  
    quoteBtn.innerText = "New Quote"  //when the quote loads the button text changes to new quote
    likeBtn.style.color = "#7b2cbf"  // the color of the likebutton changed back to the original color when a new quote is displayed 
    favouriteBtn.style.color = "#7b2cbf" // the color of the favouritebutton changed back to the original color when a new quote is displayed 
    })
  let copyBtn = document.querySelector(".copy") // to copy the quote to clipboard
  copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText)
  })


  function searchQuote(){
    document.querySelector("form#search-author").addEventListener("submit", function(e){
        e.preventDefault()
        let name = e.target.searchinput.value
        let authors = document.querySelectorAll("div#listFavourite p.authorName")
        let contents = document.querySelectorAll("div#listFavourite li")
        console.log(authors)
        for(let author of authors){
        let nameCheck = author.textContent
          if(name === nameCheck){
            for (let content of contents){
          content.scrollIntoView()
          content.style.color = "red"
          author.style.color = "red"
          console.log(author)
            }
          
          }
        }

    })
}
searchQuote()


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

      function feedBackForm(){
        document.querySelector("section#feedback-form").style.display = "none"
        document.querySelector("p#leave-feedback").addEventListener("click",function(){
         document.querySelector("section#feedback-form").setAttribute("style","")
        })
        document.querySelector("form#feedback").addEventListener("submit",function()
        {
       document.querySelector("section#feedback-form").style.display = "none"
       alert("Thank you for your feedback")
        })
       }feedBackForm()

      function submitAlert() {
        function alertTimeout() {
          alert("Thank you for signing up");
        }
        setTimeout(alertTimeout, 5);
      }
























































































































































































































































