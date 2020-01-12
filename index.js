// Add your code here

document.addEventListener("DOMContentLoaded", function() {
  // document.querySelector('form').addEventListener('submit', function(e){
    // debugger;
    e.preventDefault();
    // submitData(e.currentTarget.elements[0].value,e.currentTarget.elements[1].value )
    submitData();
  // })
 });
 

function submitData (name, email){
  
  let formData = {
    name:  name,
    email: email
  }
  
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(function(response){
      return response.json();
    })
    .then(function(object){
    //  debugger
      // let newId;
      // for (const key in object) {
      //   if (key == 'id'){
      //     newId = object[key];
      //   }
      // }
      let p = document.createElement("p");
      // p.innerHTML = object["id"];
      let textNode = document.createTextNode(object["id"]);
      p.appendChild(textNode);
      document.body.appendChild(p);
      // document.body.innerHTML = object["id"];
    })
    .catch(function(error) {
      let p = document.createElement("p");
      // p.innerHTML = "Unauthorized Access";
      p.innerHTML = error.message;
      document.body.appendChild(p);
      // document.body.innerHTML = error.message;
      
    });
}