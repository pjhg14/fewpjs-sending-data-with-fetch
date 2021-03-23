// Add your code here
function submitData(name, email) {
    let body = document.querySelector("body")

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(res => res.json())
        .then(newUser => {
            // let p = document.createElement("p")
            // p.innerText = newUser.id

            body.append(newUser.id)
        }).catch(err => body.append(err.message))
}