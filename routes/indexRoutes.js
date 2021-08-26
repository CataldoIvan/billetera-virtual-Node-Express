const { Router } = require("express");
const router = Router();
const {actividadCtrlr ,newActivity,getActivitys } = require("../controllers/activityControler");
const {homeCtrlr} = require("../controllers/indexControler");

router.get("/", homeCtrlr);
//router.get("/", getActivitys);
//router.post("/", newActivity);
router.get("/getActivity", actividadCtrlr);

router.get("/home", getActivitys);
router.post("/home", newActivity);
module.exports = router;
