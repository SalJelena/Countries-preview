import {Country} from "./Country.js"

// creating countries
export const Countries = (countries, onlyCountry) => {
    return countries.map((country, index) => {
        return Country(country, index, onlyCountry)
    })
}

