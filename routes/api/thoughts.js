const router = require("express").Router();
const thoughtsController = require("../../controllers/thoughtsController");

router
  .route("/")
  .get(thoughtsController.getThoughts)
  .post(thoughtsController.createThought);

router
  .route("/:thoughtId")
  .get(thoughtsController.getSingleThought)
  .put(thoughtsController.updateThought)
  .delete(thoughtsController.deleteThought);

router.route("/:thoughtId/reactions").post(thoughtsController.addReaction);

router
  .route("/:thoughtId/reactions/:reactionId")
  .delete(thoughtsController.deleteReaction);

module.exports = router;
