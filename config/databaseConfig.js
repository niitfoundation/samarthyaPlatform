const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/SamarthyaDB');

module.exports = mongoose;