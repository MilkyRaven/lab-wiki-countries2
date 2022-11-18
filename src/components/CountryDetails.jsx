import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function CountryDetails() {
    
    const { code } = useParams();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        const apiData = async () => {
            try {
              const res = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${code}`);
              setCountry(res.data)
              console.log(res)
            }
            catch (err) {
                console.log(err)
            }
        }
        apiData();
    }, [code])

    return (
        <div>
            { country && (
                <div>
                <img alt='flag' src={`https://ih-countries-api.herokuapp.com/countries/${country.alpha3Code}`} />
                <h1>{country.name.common}</h1>
                <p>Capital {country.capital}</p>
                <hr/>
                <p>Area {country.area} km2</p>
                <hr/>
                <p>Borders {
                country.borders.map((border)=>{
                    return  <p>{border}</p>
                })}</p>

                </div>

            ) }
        </div>
    )
}
