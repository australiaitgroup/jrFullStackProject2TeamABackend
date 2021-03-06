const Jwt = require('../utils/jwt')
const auth = require('../services/auth')
const { responseFormatter } = require('../utils/helpers')

module.exports = async (req, res) => {
	console.log(req.body)
	const { email, password } = req.body;
	const user = await auth({ email, password });
	if (user) {
		const userId = user._id;
		const role = user.role;
		const token = Jwt.createToken({
			userId,
			role
		})
		return responseFormatter(res, { userId, role, token },200)
	} else {
		return responseFormatter(res, { email }, 400, "invalid email or password")
	}
}