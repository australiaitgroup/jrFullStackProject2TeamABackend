/*follow the structure of 
{
    "user_id":"",
    "email_id":"",
    "name":"",
    "phone":"",
    "address":"string",
    "leave":[],
    "role":["user","admin"]
}
 */
const mongoose = require('mongoose');
const Joi = require('joi')
const Schema = mongoose.Schema;

const personSchema = new Schema({
	emailId: {
		type: String,
		validate: {
			validator: email => !Joi.validate(email, Joi.string().email().error()).error,
			message: "Invalid email format"
		}
	},
	currentLocale: {
		type: String,
		minlength: 2,
	},
	firstName: {
		type: String,
		trim: true,
		minlength: 2,
	},
	lastName: {
		type: String,
		trim: true,
		minlength: 2,
	},
	phone: {
		type: Number,
		validate: {

		}
	},
	address: "string",
	leavestatus: {
		type: boolean,

	},
	roles: {
		type: String
	},
	__v: { type: Number, select: false },
	createdAt: { type: Date, select: false },
	updatedAt: { type: Date, select: false }
},
	{
		timestamps: true,
		toObject: {
			virtuals: true
		},
		toJSON: {
			virtuals: true
		},
	}
);
personSchema.statics.searchQuery = async () => {

}
personSchema.method.countAllLeaving = async () => {

}

module.exports = mongoose.model("Person", personSchema);