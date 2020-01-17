// Add your code here
function submitData(name, email){
    let formData = {
        name: name,
        email: email
    }
    
    let configObj = {
        method: "POST",
        // default GET; tell fetch() that this is a POST request
        //add metadata
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData) 
        //JSON.stringify(): method for converting objects to strings
      };
       
    return fetch("http://localhost:3000/users", configObj)
        //An amazing feature of fetch() is that if you return it, other functions can tack-on their own then() and catch() calls.
        .then(function (response) {
          return response.json();
        })
        .then(function (object) {
          console.log(object);
          document.body.innerHTML += object.id;
        })
        .catch(function (error) {
            console.log(error.message);
            document.body.innerHTML = error.message
        }) //to display a message in the DOM for a user, rather than leave them with nothing
};