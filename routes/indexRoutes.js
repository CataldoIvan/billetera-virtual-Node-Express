const { Router } = require("express");
const router = Router();
const { homeCtrlr} = require("../controllers/indexControler");
const { actividadCtrlr} = require("../controllers/activityControler");

router.get("/", homeCtrlr);
router.get("/getActivity", actividadCtrlr);
module.exports = router;
