const express = require('express');

const authenticateController = require('../middleware/authenticate')
const chatController = require('../controllers/chat')
const router  = express.Router();

router.get('/get', authenticateController.authenticate, chatController.getChat)
router.post('/send', authenticateController.authenticate, chatController.postChat)

module.exports = router;