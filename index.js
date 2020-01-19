// Add your code here
function submitData(userName, userEmail){
  let formData = {
    name: userName,
    email: userEmail
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(function(resp){
      return resp.json();
    })
    .then(function(object){
      console.log(object);
      document.body.innerHTML += object.id;
    })
    .catch(function(error){
      console.log(error.message);
      document.body.innerHTML = error.message
    })
}
