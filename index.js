function submitData(name, email){
  let formData = {
    name, 
    email
  }

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json" 
    },
    body: JSON.stringify(formData)
  }
  
  return fetch("http://localhost:3000/users", configObj)
    .then(function(resp) {
      return resp.json()
    })
    .then(function(obj) {
      // console.log(obj)
      document.body.innerHTML = obj["id"]
    })
    .catch(function(error) {
      document.body.innerHTML = error.message
    })
};