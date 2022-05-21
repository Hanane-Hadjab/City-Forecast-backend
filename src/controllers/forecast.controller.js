const {getForecastOf} = require('../repositories/forecast.repository');

/**
 * Get forecast of city id
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getForecast = async (req, res) => {
    if(req.params.insee) {
        try {
            const data = await getForecastOf(req.params.insee);
            if (data) {
                res.json(data);
            } else {
                res.json({message: 'No data returned'})
            }
        } catch (e) {
            res.json({error: e});
        }
    }
};

module.exports = {
    getForecast
};
