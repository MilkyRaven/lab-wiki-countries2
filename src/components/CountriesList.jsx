import React from 'react'
import { Link } from 'react-router-dom'

export default function CountriesList(props) {
    const { countriesData } = props
    return (
        <div className="countries-list">
            <div>
                {countriesData.map((country) => {
                    return (
                        <ul key={country.alpha3Code}>
                            <li className="list-group">
                                <img alt='flag' src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                                <Link className='link' to={`${country.alpha3Code}`} >{country.name.common}</Link>
                            </li>
                        </ul>
                    )
                })}

            </div>
        </div>
    )
}