const mongoose = require("mongoose") 
    const schema = mongoose.Schema({ 

        title: {
            type: String,
            required: true
        },
        imgsrc: {
            type: String,
           
        },
        desc: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        comments: 
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment"
            }
    }) 

     

    module.exports = mongoose.model("Post", schema)