const BaseUrl = "http://api.quotable.io/random"

function randomQuote(){
    fetch(BaseUrl) // geting the API
    .then(res => res.json()) //brings data as a promise
    .then(data => {console.log(data);//returns the data
    })}randomQuote()