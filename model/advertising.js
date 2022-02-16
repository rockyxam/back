const mongoose = require("mongoose");
const advertisingSchema = new mongoose.Schema(
    {
        title: { type: String ,required:true,unique: true},
        description:{ type: String,required:true},
        address:{ type: String ,required:true},
        city:{ type: String ,required:true},
        phone:{ type: String,required:true},
        price:{ type: Number,required:true},
            img:{ type: String,required:true},
    },
);
const Advertising = mongoose.model("advertising", advertisingSchema);
module.exports = Advertising;