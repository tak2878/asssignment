const express = require('express');

const { addNewTournament, fetchAllTournaments, updateTournament } = require('../controllers/tournaments');

const router = express.Router();


router.get('/alltournaments', fetchAllTournaments);

router.post('/add-tournament',addNewTournament);

router.post('/update-tournament',updateTournament);

module.exports = router;