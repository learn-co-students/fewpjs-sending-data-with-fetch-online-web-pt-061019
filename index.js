// Add your code here

// configurationObject can be given certain properties to change fetch's behavior
// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// }
 
// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// }

// fetch("http://localhost:3000/dogs", configObj)
//   .then(function(response) {
//     return response.json()
//   })
//   .then(function(object) {
//     console.log(object)
//   })
//   .catch(function(error) {
//     alert("Bad things! Ragnarők!")
//     console.log(error.message)
//   })


function submitData(name, email) {
  let formData = {
    name: name,
    email: email
  }
  
  let obj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }

  return fetch("http://localhost:3000/users", obj)
    .then(function(response) {
      return response.json()
    })
    .then(function(object) {
      console.log(object)
      document.body.innerHTML += object.id
    })
    .catch(function(error) {
      console.log(error.message)
      document.body.innerHTML = error.message
    })
}