const { Router } = require("express");
const router = Router();
const {
  actividadCtrlr,
  newActivity,
  getoperations,
  addNewTransaction,
  getTransactions,
  editOneTransaction,
  saveEditTransaction
} = require("../controllers/activityControler");
const { homeCtrlr } = require("../controllers/indexControler");

router.get("/", homeCtrlr);
//router.get("/", getoperations);
//router.post("/", newActivity);
router.get("/getActivity", actividadCtrlr);

router.get("/home", getoperations);
router.post("/home", newActivity);
router.get("/edit/:id", editOneTransaction);
router.post("/edit/:id/:comentario", saveEditTransaction);
router.post("/addTrans", addNewTransaction);
router.get("/getTrans", getTransactions);
module.exports = router;
