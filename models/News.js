const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    newsText: { type: String, required: true },
    timeStamp: { type: String, required: true }
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
