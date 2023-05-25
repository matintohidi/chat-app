module.exports = mongoose => {
    var userSchema = mongoose.Schema({
        name: {
            type: String,
            required: true,
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 8
        },
        profile: {
            type: String,
            default: "default.png"
        }
    } , { versionKey: false })

    return  mongoose.model("User" , userSchema);
};