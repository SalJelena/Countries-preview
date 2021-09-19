
//creating one country info

// import { main } from "../constants.js"

//as one more parameter I am using index to be able to identify the right country, I am also adding a bit of classes to be able to play with it in CSS
export const Country = (country, index, onlyCountry)=>{
    
    const divCountry = document.createElement('div')
    divCountry.className = 'div-one-country'
    //aded this to be able to work with it later in index.js, and select the right divCountry
    divCountry.id = index

    const p = document.createElement('p')
    p.className = 'name-country'
    p.textContent = `${country.name}`


    const capital = document.createElement('p')
    capital.textContent = `Capital: ${country.capital}`

 
    const img = document.createElement('img')
    img.src = country.flag
    img.alt = `Flag of ${country.name}`

    //More languages in a country, so I needed a foreach
    const languages = document.createElement('p')
    let namesLang = `Languages: `
    country.languages.forEach(language => {
        namesLang += language.name + ` `
    })
    languages.textContent = namesLang

    //The same for Timezones
    const timezones = document.createElement('p')
    let times = `Timezones: `
    country.timezones.forEach(timezone => {
        times += timezone + ` `
    })
    timezones.textContent = times

    
    //*****I'll create these in the index.js - to avoid spaghetti code, it makes more sense there than here ::*******
    // const btnPrevious = document.createElement('button')
    // btnPrevious.textContent = '< Previous'
    // btnPrevious.className = 'previous'
    // const btnNext= document.createElement('button')
    // btnNext.textContent = 'Next >'
    // btnNext.className = 'next'
    // const btnBack = document.createElement('button')
    // btnBack.textContent = 'Go Back'
    // btnBack.className = 'back'
   
        
    // })

   if(onlyCountry){
       divCountry.append(p, capital, languages, timezones, img)
       divCountry.className = 'only-country-show'
   }else{
        divCountry.append(p, capital, img)
   }
       
    return divCountry
}


