const express = require('express');
const router = express.Router();

// ...rotas de emissores, eventos, relatórios...
router.get('/', (req, res) => res.json({ status: 'API rodando' }));

module.exports = router;
