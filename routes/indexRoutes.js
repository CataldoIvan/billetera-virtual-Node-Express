const { Router } = require("express");
const router = Router();
const {
  actividadCtrlr,
  newOperation,
  getoperations,
  editOneOperation,
  saveEditOperation,
  deleteForId,
} = require("../controllers/operationsControler");
const { homeCtrlr } = require("../controllers/indexControler");
const {
  addNewTransaction,
  getTransactions,
} = require("../controllers/transactionController");

router.get("/", homeCtrlr);
//router.get("/", getoperations);
//router.post("/", newOperation);
router.get("/getActivity", actividadCtrlr);

router.get("/home", getoperations);
router.post("/addOperation", newOperation);
router.post("/deleteOperation", deleteForId);
router.get("/edit/:id", editOneOperation);
router.post("/edit", saveEditOperation);
router.post("/addTrans", addNewTransaction);
router.get("/getTrans", getTransactions);
module.exports = router;
