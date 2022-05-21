const {getAllCities} = require('../repositories/city.repository');

/**
 * Get all cities from data base
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getCities = async (req, res) => {
    try {
        const data = await getAllCities();
        res.json(data);
    } catch (e) {
        res.json({message: e});
    }
};

module.exports = {
    getCities
};
