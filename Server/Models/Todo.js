const mongoose = require('mongoose')

const Todo = new mongoose.Schema({
    task:String,
    done:{
        type:Boolean,
        default:false
    }
})
module.exports=mongoose.model('todos',Todo)