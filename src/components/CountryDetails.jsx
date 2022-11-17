import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function CountryDetails() {
    
    const { code } = useParams();
    const [countries, setCountries] = useState(null);

    useEffect(() => {
        const apiData = async () => {
            try {
              const dataFromApi = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${code}`);
              console.log(dataFromApi)  
            }
            catch (err) {
                console.log(err)
            }
        }
        apiData();
    }, [code])

    return (
        <div>
        </div>
    )
}
