const { Router } = require("express");
const router = Router();
const { homeCtrlr,postUser,getUsers } = require("../controllers/indexControler");
const { actividadCtrlr} = require("../controllers/activityControler");

//router.get("/", homeCtrlr);
router.get("/", getUsers);
router.post("/", postUser);
router.get("/getActivity", actividadCtrlr);
module.exports = router;
