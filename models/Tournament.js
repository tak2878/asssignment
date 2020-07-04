const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TournamentSchema = new Schema({
    created_date: {
        type: Date,
        default: new Date()
    },
    tournament_name: String,
    users: [{
        type: Schema.Types.ObjectId,
        ref:'User'
    }]
});

module.exports = mongoose.model('Tournament', TournamentSchema);