const express = require("express");
const router = express.Router({ mergeParams: true });
const { getNotes, addNotes } = require("../controllers/noteController");

const { protect } = require("../middleware/authMiddleware");

// api/tickets/:ticketId/notes
router.route("/").get(protect, getNotes).post(protect, addNotes);

module.exports = router;
