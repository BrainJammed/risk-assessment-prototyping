const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/dashboard', function (req, res) {
  res.render('offender-dashboard', { message: 'Hello world' })
})

// prototype v2 pagesc
router.get('/proto-v2/', function (req, res) {
  res.redirect('/proto-v2/subject')
})
router.get('/proto-v2', function (req, res) {
  res.redirect('/proto-v2/subject')
})
router.get('/proto-v2/subject', function (req, res) {
  res.render('proto-v2/subject.njk')
})
router.post('/subject', function (req, res) {
  res.redirect('/proto-v2/longterm')
})
router.get('/proto-v2/longterm', function (req, res) {
  res.render('proto-v2/longterm.njk')
})
router.post('/longterm', function (req, res) {
  res.redirect('proto-v2/positives')
})
router.get('/proto-v2/positives', function (req, res) {
  res.render('proto-v2/positives.njk')
})
router.post('/positives', function (req, res) {
  res.redirect('proto-v2/people-affected')
})

router.get('/proto-v2/people-affected', function (req, res) {
  res.render('proto-v2/people-affected.njk')
})
router.post('/people-affected', function (req, res) {
  res.redirect('proto-v2/effect-indiv')
})

router.get('/proto-v2/effect-indiv', function (req, res) {
  res.render('proto-v2/effect-indiv.njk')
})
router.post('/effect-indiv', function (req, res) {
  res.redirect('proto-v2/suicide-risk')
})

router.get('/proto-v2/suicide-risk', function (req, res) {
  res.render('proto-v2/suicide-risk.njk')
})
router.post('/suicide-risk', function (req, res) {
  res.redirect('proto-v2/self-harm-risk')
})

router.get('/proto-v2/self-harm-risk', function (req, res) {
  res.render('proto-v2/self-harm-risk.njk')
})
router.post('/self-harm-risk', function (req, res) {
  res.redirect('proto-v2/effect-victim')
})

router.get('/proto-v2/effect-victim', function (req, res) {
  res.render('proto-v2/effect-victim.njk')
})
router.post('/effect-victim', function (req, res) {
  res.redirect('proto-v2/risk-child')
})

router.get('/proto-v2/risk-child', function (req, res) {
  res.render('proto-v2/risk-child.njk')
})
router.post('/risk-child', function (req, res) {
  res.redirect('proto-v2/action-areas')
})

router.get('/proto-v2/action-areas', function (req, res) {
  res.render('proto-v2/action-areas.njk')
})

router.get('/proto-v2/pakc-interventions', function (req, res) {
  res.render('proto-v2/pakc-interventions.njk')
})
router.post('/pakc-interventions', function (req, res) {
  res.redirect('proto-v2/pakc-monitoring')
})

router.get('/proto-v2/pakc-monitoring', function (req, res) {
  res.render('proto-v2/pakc-monitoring.njk')
})
router.post('/pakc-monitoring', function (req, res) {
  res.redirect('proto-v2/pakc-supervision')
})
router.get('/proto-v2/pakc-supervision', function (req, res) {
  res.render('proto-v2/pakc-supervision.njk')
})
router.post('/pakc-supervision', function (req, res) {
  res.redirect('proto-v2/pakc-safety')
})

router.get('/proto-v2/pakc-safety', function (req, res) {
  res.render('proto-v2/pakc-safety.njk')
})
router.post('/pakc-safety', function (req, res) {
  res.redirect('proto-v2/action-areas')
})

router.get('/proto-v2/end-proto', function (req, res) {
  res.render('proto-v2/end-proto.njk')
})

module.exports = router
