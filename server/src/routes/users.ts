const router = require('express').Router();
const { User: UserModal } = require('../models/User')

router.get("/auth", (req: any, res: any) => {

    res.send('/auth')
    
});

router.post("/create", async (req: any, res: any) => {

    const { body } = req;
    
    let user: Object = {
        "name": body.name,
        "email": body.email,
        "password": body.password,
        "lastname": body.lastname,
        "role" : body.role,
        "image": body.image,
        "token" : body.token,
        "tokenExp" : body.tokenExp  
    }

    UserModal.create(user).then((createdUser: any) => {
        res.send(createdUser)
    })
    .catch((error: Error) => {
        res.send('Not Send Due To....\n\n' + error)
    })

});

router.get('/test', (req: any, res: any) => {

    res.send(`

        <h1>Welcome to the API!</h1>
        <code style='background-color: #d4d4d4; padding: 4px'>/login for login details</code>
        <br/><br/>
        <code style='background-color: #d4d4d4; padding: 4px'>/logout for logout details</code>
    
    `)

})

router.post("/login", (req: any, res: any) => {
    res.send(200)
});

router.get("/logout", (req: any, res: any) => {

    res.send(200)
});

module.exports = router;
