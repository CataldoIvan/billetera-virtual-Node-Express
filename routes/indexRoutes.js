const { Router } = require("express");
const router = Router();
const { homeCtrlr,postUser} = require("../controllers/indexControler");
const { actividadCtrlr} = require("../controllers/activityControler");

router.get("/", homeCtrlr);
router.post("/", postUser);
router.get("/getActivity", actividadCtrlr);
module.exports = router;
