READ firebase.js and this doc first

1. Tool used: 
- firebase: 
trevortrinh28899@gmail.com > firebase-react

- install firebase: 
$ npm install firebase --save

- install react router dom: 
$ npm install --save react-router react-router-dom

- install material UI (optional): 
$ npm install @material-ui/core
$ npm install @material-ui/icons

2. Guide: 
- Look at firebase.js, here is an example in register of how to 
use it: 

async function onRegister() {
    try {
      await firebase.register(name, email, password);
      await firebase.addQuote(quote);
      await firebase.addUser(email);
      props.history.replace("/dashboard");
    } catch (error) {
      alert(error.message);
    }
}

- You can also add more helper function into firebase.js
to handler more of your requests

3. Resources: 
- Complete React, firebase: 

https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial#firebase-realtime-database-in-react

- Official firebase web Guide: 
https://firebase.google.com/docs/database/web/read-and-write

- To update users password, we can delete the current user
and create a new user with new password, read this doc for
more info: 

https://firebase.google.com/docs/auth/web/manage-users