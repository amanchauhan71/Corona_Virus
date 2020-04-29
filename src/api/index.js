<<<<<<< HEAD
import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
=======
import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';



export const fetchData = async (country)=>{

  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try{
    const {data :{confirmed,recovered ,deaths,lastUpdate}} = await axios.get(changeableUrl);
    
    return {confirmed,recovered ,deaths,lastUpdate};
  }
  catch(error){

  }
}
  export const fetchDailyData = async ()=>{
    
    try{
      const { data } = await axios.get(`${url}/daily`);
      
      const modifiedData = data.map((dailyData) =>({
        confirmed : dailyData.confirmed.total,
        deaths : dailyData.deaths.total,
        date: dailyData.reportDate,

      }) );

      return modifiedData;
    }
    catch(error){

    }

  }
  export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
  
      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
  };
  
>>>>>>> c4f4d33962bc25c1d0371882b04664ceeca6053e
