const router = require("express").Router();
const  User  = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		const {email, password} = req.body
		const user = await User.findOne({email });
		if (!user)
			return res.status(401).send({ message: `Email notog'ri ${email}!` });

		const validPassword = await bcrypt.compare(
			password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Parol notog'ri! " });

		res.status(200).send({ message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});


module.exports = router;
