// Add your code here
const page = document.querySelector('body');
const p = document.createElement('p');

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then((response) => {
        return response.json();
    })
    .then((object) => {
        const objectId = object.id;
        p.innerHTML = objectId;
        page.appendChild(p);
    })
    .catch((error) => {
        let errorMessage = error.message;
        p.innerHTML = errorMessage;
        page.appendChild(p);
    })
};
