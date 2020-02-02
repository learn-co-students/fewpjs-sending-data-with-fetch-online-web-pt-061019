// Add your code here
function submitData(name, email) {
    let info = {
      name: name,
      email: email
    };
  
      let configObj = {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        },
      body: JSON.stringify(info)
    };
  
      return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          let p = document.createElement('p');
          p.innerHTML = json.id;
          document.body.appendChild(p);
          console.log(json);
        })
        .catch(function(error) {
          let p = document.createElement('p');
          p.innerHTML = error.message;
          document.body.appendChild(p);
          alert(error.message);
        });
  }