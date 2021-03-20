const axios = require('axios')

const getDataFromApi = (url) => {
    return axios.get(url)
        .then(({ data }) => {
            return data
        })
}

module.exports = { getDataFromApi }

