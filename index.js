const BaseUrl = "http://api.quotable.io/random"

function randomQuote(){
    fetch(BaseUrl) // geting the API
    .then(res => res.json()) //brings data as a promise
    .then(data => {console.log(data);//returns the data
    })}randomQuote()


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