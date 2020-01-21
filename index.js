// Add your code here
function submitData(name, email) {
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }, body: JSON.stringify({
      name: name,
      email: email
    })
  };
  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object.id);
      let p = document.createElement("p");
      let body = document.querySelector("body");
      p.innerHTML = object["id"];
      body.appendChild(p);
      // document.body.innerHTML = object["id"]
    })
    .catch(function(error) {
      // document.body.innerHTML = error["message"]
      let p = document.createElement("p");
      let body = document.querySelector("body");
      p.innerHTML = error.message;
      body.appendChild(p);

    });
};


