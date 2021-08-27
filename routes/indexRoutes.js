const { Router } = require("express");
const router = Router();
const {actividadCtrlr ,newActivity,getoperations,addNewTransaction} = require("../controllers/activityControler");
const {homeCtrlr} = require("../controllers/indexControler");

router.get("/", homeCtrlr);
//router.get("/", getoperations);
//router.post("/", newActivity);
router.get("/getActivity", actividadCtrlr);

router.get("/home", getoperations);
router.post("/home", newActivity);
router.post("/addTrans",addNewTransaction)
module.exports = router;
