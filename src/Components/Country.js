export const Country = (country, index, onlyCountry) => {
    
    const divCountry = document.createElement('div')
    divCountry.className = 'list__item'
    divCountry.id = index

    const p = document.createElement('p')
    p.className = 'list__title'
    p.textContent = `${country.name}`

    const capital = document.createElement('p')
    capital.textContent = `Capital: ${country.capital}`
    capital.className = 'list__desc'

    const img = document.createElement('img')
    img.src = country.flag
    img.alt = `Flag of ${country.name}`
    img.className = 'list__img'

    const languages = document.createElement('p')
    let namesLang = `Languages: `
    country.languages.forEach(language => {
        namesLang += language.name + ` `
    })
    languages.textContent = namesLang

    const timezones = document.createElement('p')
    let times = `Timezones: `
    country.timezones.forEach(timezone => {
        times += timezone + ` `
    })
    timezones.textContent = times

   if (onlyCountry) {
       divCountry.append(p, capital, languages, timezones, img)
       divCountry.className = 'list__single-item'
   } else {
        divCountry.append(p, capital, img)
   }
       
    return divCountry
}


