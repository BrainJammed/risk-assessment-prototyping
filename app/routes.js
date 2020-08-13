const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/dashboard', function (req, res) {
  res.render('offender-dashboard', { message: 'Hello world' })
})

module.exports = router
