const { Router } = require("express");
const router = Router();
const {
  actividadCtrlr,
  newOperation,
  getoperations,
  addNewTransaction,
  getTransactions,
  editOneOperation,
  saveEditOperation
} = require("../controllers/activityControler");
const { homeCtrlr } = require("../controllers/indexControler");

router.get("/", homeCtrlr);
//router.get("/", getoperations);
//router.post("/", newOperation);
router.get("/getActivity", actividadCtrlr);

router.get("/home", getoperations);
router.post("/addOperation", newOperation);
router.get("/edit/:id", editOneOperation);
router.post("/edit/:id/:comentario", saveEditOperation);
router.post("/addTrans", addNewTransaction);
router.get("/getTrans", getTransactions);
module.exports = router;
