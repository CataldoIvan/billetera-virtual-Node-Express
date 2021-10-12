const { Router } = require("express");
const cors = require("cors");
const router = Router();
const {

  getOwnoperations,
  newOwnOperation,
  editOwnOneOperation,
  saveEditOwnOperation,
  deleteOwnForId,
  getAllOwnOperations
} = require("../controllers/operationsOwnControler");
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

/*RUTAS DE DESARROLLO */
//router.get("/", homeCtrlr);
//router.get("/", getoperations);
//router.post("/", newOperation);
router.get("/getActivity", actividadCtrlr);
router.get("/home/getAll", getAllOperations);
//router.get("/edit/:id", editOneOperation);
router.post("/addTrans", addNewTransaction);
router.get("/getTrans", getTransactions);
router.get("/getStatus", getStatus);
router.post("/addStatus", addStatus);
router.post("/edit", saveEditOperation);
/* FIN RUTAS DE DESARROLLO */

router.get("/", getoperations);
router.post("/", newOperation);
router.patch("/:id", editOneOperation);
router.delete("/", deleteForId);

router.get("/me", getOwnoperations);
router.post("/me", newOwnOperation);
router.patch("/me/:id", editOwnOneOperation);
router.delete("/me", deleteOwnForId);

module.exports = router;
