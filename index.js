// Add your code here

// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// }

// configurationObject has 3 main components - method (http verb), headers (metadata), body (data from inputs field, must be string)
// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)   // converts Object to string
// }

// fetch("http://localhost:3000/dogs", configObj)

// represents what server destination sends back to us, .json method converts body of response from JSON to vanilla JS object
//   .then(function(response) {
//     return response.json()
//   })

// argument is whatever was returned from response.json()
//   .then(function(object) {
//     console.log(object)
//   })

// will run if there is an error or unexpected results
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