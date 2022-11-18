import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function CountryDetails() {
    
    const { code } = useParams();
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const apiData = async () => {
            try {
              const res = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${code}`);
              setCountry(res.data)
            //   console.log(country)
            }
            catch (err) {
                console.log(err)
            }
        }
        apiData();
    }, [code])

    return (
        <div>
            {country.name.common}
        </div>
    )
}
