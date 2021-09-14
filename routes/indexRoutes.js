const { Router } = require("express");
const cors = require("cors");
const router = Router();
const {
  actividadCtrlr,
  newOperation,
  getoperations,
  editOneOperation,
  saveEditOperation,
  deleteForId,
  getAllOperations
} = require("../controllers/operationsControler");
const { homeCtrlr } = require("../controllers/indexControler");
const {
  addNewTransaction,
  getTransactions,
} = require("../controllers/transactionController");

const {
  addStatus,
  getStatus
} = require("../controllers/estadosController");

router.get("/", homeCtrlr);
//router.get("/", getoperations);
//router.post("/", newOperation);
router.get("/getActivity", actividadCtrlr);

router.get("/home?:id", getoperations);
router.get("/home/getAll", getAllOperations);
router.post("/addOperation", newOperation);
router.post("/deleteOperation", deleteForId);
//router.get("/edit/:id", editOneOperation);
router.post("/edit", saveEditOperation);
router.patch("/edit/:id", editOneOperation);
router.post("/addTrans", addNewTransaction);
router.get("/getTrans", getTransactions);
router.post("/addStatus", addStatus);
router.get("/getStatus", getStatus);
module.exports = router;
