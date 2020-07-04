const Tournament = require('../models/Tournament');
const User = require('../models/User');
const tournaments = [];
exports.fetchAllTournaments = async (req, res) => {
    try {
        const fetchedTournaments = await Tournament.find();
        tournaments.push(fetchedTournaments);
        res.json({ tournaments });
    } catch (err) {
        res.status(404).json({ err });
    }
}

exports.addNewTournament = async (req, res) => {
    const { tournament_name } = req.body;
    if (!tournament_name) return res.status(401).json({ err: 'Tournament name is required' });
    const tournament = new Tournament({tournament_name});
    try {
        const newTournament = await tournament.save();
        tournaments.push(newTournament);
        res.json({ tournaments });
    } catch (err) {
        res.status(404).json({ err });   
    }
}


exports.fetchTournamentById = async (req, res) => {
 
};


exports.updateTournament = async (req, res) => {
    const { id, userId } = req.body;
    if (!id || !userId) return res.json({ err: "Tournament and User Id is required" });

    try {
        const userExists = await User.findById(userId);
        if (!userExists) {
            return res.status(404).json({ msg: 'User not Found' });
        }

        const updatedTournament = await Tournament.findOneAndUpdate({ _id: id }, {
            $push: { users: userId }
        });        

        res.status(200).json({ updatedTournament });
    } catch (err) {
        res.status(500).json({ err });
    }


}