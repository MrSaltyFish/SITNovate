const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    firstname, lastname, email, password,
    color, capacity, plate, vehicalType, licenseNumber
}) => {
    if(!firstname || !lastname || !email || !password || !color || !capacity || !plate || !vehicalType || !licenseNumber){
        throw new Error('All fields are required');
    }
    const captain = await captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password, 
        vehical: {
            color,
            capacity,
            plate,
            vehicalType
        },
        licenseNumber
    })

    return captain;
}