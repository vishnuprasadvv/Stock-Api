const mongoose = require('mongoose');

const stockShema = new mongoose.Schema({
    symbol: {type: String, required: true},
    date : { type: String, required : true},
    closingPrice : {type: Number, required: true},

});

module.exports = mongoose.model('Stock', stockShema);