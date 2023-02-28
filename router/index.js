const EmailController= require("../controller/email-controller");
const Router = require('express').Router;
const router = new Router();
const { body } = require('express-validator');



router.post("/sendemails", EmailController.sendMails);
module.exports = router;