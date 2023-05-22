const express = require('express');

const authenticateController = require('../middleware/authenticate')
const chatController = require('../controllers/chat')
const router  = express.Router();

router.post('/send', authenticateController.authenticate, chatController.postChat)

module.exports = router;