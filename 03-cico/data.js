const MongoUtil = require('./MongoUtil')

async function getFoodRecordByID(foodRecordID){
    const db = MongoUtil.getDB();
    let foodRecord = await db.collections('food_reocrds').findOne({
        '_id':ObjectId(foodRecordID)
    })
    return foodRecord;
}

module.exports = {
    getFoodRecordByID
}