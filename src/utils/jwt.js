const jwt = require('jsonwebtoken');
require("envdotjson").load();

const privateKey = process.env.PRIVATEKEY
const createToken = (payload) => {
	const { userId, role } = payload;
	const token = jwt.sign(
		{ userId, role },
		privateKey,
		{ algorithm: "HS256", expiresIn: 60 * 300 });
	return token;
}

const validateToken = (token) => {
	console.log(token)
	console.log(privateKey)
	try {
		return jwt.verify(token, privateKey)
	}
	catch (err) {
		console.log(err)
		return null;
	}
}




module.exports = {
	createToken,
	validateToken
};