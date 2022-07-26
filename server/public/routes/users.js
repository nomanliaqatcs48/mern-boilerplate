"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const router = require('express').Router();
const { User: UserModal } = require('../models/User');
router.get("/auth", (req, res) => {
    res.send('/auth');
});
router.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    let user = {
        "name": body.name,
        "email": body.email,
        "password": body.password,
        "lastname": body.lastname,
        "role": body.role,
        "image": body.image,
        "token": body.token,
        "tokenExp": body.tokenExp
    };
    UserModal.create(user).then((createdUser) => {
        res.send(createdUser);
    })
        .catch((error) => {
        res.send('Not Send Due To....\n\n' + error);
    });
}));
router.get('/test', (req, res) => {
    res.send(`

        <h1>Welcome to the API!</h1>
        <code style='background-color: #d4d4d4; padding: 4px'>/login for login details</code>
        <br/><br/>
        <code style='background-color: #d4d4d4; padding: 4px'>/logout for logout details</code>
    
    `);
});
router.post("/login", (req, res) => {
    res.send(200);
});
router.get("/logout", (req, res) => {
    res.send(200);
});
module.exports = router;
