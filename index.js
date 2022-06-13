const { bodyParser } = require("json-server");

// Add your code here
function submitData (name, email) {
    return fetch( 'http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify( {
            name,
            email
        } )
    } )
    .then( response =>response.json())
    .then( object => document.body.innerHTML = object['id']
    )
    .catch(error => document.body.innerHTML = error.message
    )

}
