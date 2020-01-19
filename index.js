// Add your code here


function submitData(name, email){
    let configObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            name: "Steve", 
            email: "steve@steve.com"})
      };

    return fetch("http://localhost:3000/users", configObject)
    .then(function(response) {
        return response.json();
      })
    .then(function(object) {
        document.body.innerHTML = object[ "id" ]
      })
      .catch(function(error){
          alert("A Curse!");
          document.body.innerHTML = (error.message);
      })
    
}