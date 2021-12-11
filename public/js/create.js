
let form = document.querySelector("#submitForm");
let title = document.querySelector("#title");
let body = document.querySelector("#body");
let author = document.querySelector("#author")
let message = document.querySelector("#message");


const submitForm = (e) => {
    e.preventDefault();
    let error = false;
    //vaildation
    if(!title.value){
        error = true 
        message.innerText = "Title field is required";
    }
    else if(!body.value){
        error = true 
        message.innerText = "Body field is required";
    }
    else if(body.value.length < 100){
        message.innerText = "Body field is too short need more than 100 Characters";
    }
    else if(!author.value){
        error = true 
        message.innerText = "Author field is required";
    }
    else{
        let snippet = body.value.slice(0,100);
        message.innerText = null;
        let url = window.location.origin + '/add-blog';

        let data = {
            title:title.value,
            snippet: snippet,
            body:body.value,
            author:author.value
        }

        fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
              },
        })
        .then(result => {
            window.location.href = window.location.origin;
        })
        .catch(error => {
            console.error('Error:', error);
        });

    }



}

form.addEventListener("submit", submitForm)

