 const axios = require('axios');

 const exerciseOptions = {
  method: 'GET',
  url: 'https://gym-fit.p.rapidapi.com/exercises/exercise/%7Bid%7D',
  headers: {
    'X-RapidAPI-Key': '303734754bmsh87018701cfb50abp12e5fajsn5d8c60f1144e',
    'X-RapidAPI-Host': 'gym-fit.p.rapidapi.com'
  }
};
try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

const fetchData = async (url, options) => {
    const response = await fetch(url,options)
    const data = await response.json()
    return data
}