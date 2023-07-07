const { Router } = require('express');


const { getLogs, downloadLogs } = require('../controllers/logs');



const router = Router();

router.get('/',getLogs);
router.get('/download/:name',downloadLogs);


module.exports = router;