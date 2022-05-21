const db = require('../config/database');
const axios = require('axios');
const process = require('process');
const dotenv = require('dotenv');

dotenv.config();

const insertForecast =  (data) => {
    const POP_FORECAST = `insert into forecast (date, insee, details) values ('${data.update}', '${data.city.insee}', '${data.forecast}')`;
    db.run(POP_FORECAST);
}


/**
 * Get forecast of city id
 * @param forecastId
 * @returns {Promise<unknown>}
 */

const getForecastOf = async (insee) => {
    try {
        const data = await db.get(`select details from forecast where insee ='${insee}'`);
        if (!data) {
            const config = {
                method: 'GET',
                url: 'http://api.meteo-concept.com/api/forecast/daily?token='+process.env.METEO_TOKEN+'&insee='+insee,
            };

            const response = await axios(config);

            if (response.status === 200) {
                insertForecast(response.data);

                return response.data;
            }
        }

        return data;

    } catch (e) {
        throw new Error('Error retrieving all cities');
    }
};

module.exports ={
    getForecastOf
};