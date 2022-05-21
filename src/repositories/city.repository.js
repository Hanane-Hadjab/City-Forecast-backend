const db = require('../config/database');

/**
 * Get All cities from data base
 * @param req
 * @param res
 * @returns {Promise<unknown>}
 */
const getAllCities = async () => {
    try {
        const data = await db.all('select * from city');
        return data;
    } catch (e) {
        throw new Error('Error retrieving all cities');
    }
};

module.exports ={
    getAllCities
};
