const userModel = require("../models/user.model")

module.exports.register = async (req, res) => {

    const { username, email, password } = req.body;

    try {

        const hashPassword = await userModel.hashPassword(password);

        const user = await userModel.create({
            username,
            email,
            password: hashPassword
        })

        const token = user.generateToken();

        delete user._doc.password;

        res.status(201).json({ token, user });


    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}

module.exports.login = async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await userModel
            .findOne({ email })
            .select('+password')

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = user.generateToken();

        delete user._doc.password;

        res.status(200).json({ token, user });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

