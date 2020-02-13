function submitData(name, email) {
    let users = {name: "Steve", email: "steve@steve.com"}
    let obj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(users)
    }

    return fetch("http://localhost:3000/users", obj) 
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        document.body.innerHTML = object.id
    })
    .catch(function(error) {    
        document.body.innerHTML = error.message;
    })    
}