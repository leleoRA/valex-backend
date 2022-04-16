import joi from "joi";

const activateCardSchema = joi.object({
    securityCode: joi.string().pattern(/^[0-9]{3}$/).required(),
    password: joi.string().pattern(/^[0-9]{4}$/).required()
});

export default activateCardSchema;