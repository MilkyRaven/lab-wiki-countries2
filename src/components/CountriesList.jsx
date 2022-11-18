import React from 'react'
import {Link} from 'react-router-dom'

export default function CountriesList(props) {
    const {countriesData} = props
    return (
        <div className="">
            <div className="list-group">
                {countriesData.map((country)=> {
                    return (
                        <ul key={country.alpha3Code}>
                            <li>
                                <Link to={`/countries/${country.alpha3Code}`} >{country.name.common}</Link>
                            </li>
                        </ul>
                    )
                })}
                 
            </div>
        </div>
    )
}