import { Countries } from "./Components/Countries.js"
import { Country } from "./Components/Country.js"
import { getAllCountries } from "./service.js"
import { main, btnPrevious, btnNext, btnBack, divButtons, btnRandom, btnPrevSpan, btnBackSpan, btnNextSpan} from "./constants.js"
// import { compareByCapital, compareByRegion } from "./Functions.js"
// import Select from "./Components/Select.js";

let countries = []
let countriesAll = []
let viewCountries = new Set()

const randomCountriesView = (countries) => {
    let showCountries = new Set()

    if(countries.length != 1)
        while(showCountries.size < 15){
            let random = Math.floor(Math.random() * countries.length)
            showCountries = showCountries.add(countries[random])
        }

    showCountries = Array.from(showCountries)
    
    return showCountries
}

getAllCountries().then((res) => {
    main.innerHTML = ''
    countries = res.data
    viewCountries = randomCountriesView(countries)
    countriesAll =  Array.from(viewCountries)
    main.append(...Countries(countriesAll, false))

    btnRandom.addEventListener('click', () => {
        main.innerHTML = ''
        viewCountries = randomCountriesView(countries)
        countriesAll =  Array.from(viewCountries)
        main.append(...Countries(countriesAll, false))    
    })

    main.addEventListener('click', (e) => {

        if(e.target.tagName == 'IMG'){
            let index = e.target.closest('div').id
            main.innerHTML = ''

            main.append(Country(countriesAll[index], index, true))



            btnPrevSpan.textContent = '< Previous'
            btnBackSpan.textContent = 'Go Back'
            btnNextSpan.textContent = 'Next >'

            btnPrevious.append(btnPrevSpan)
            btnBack.append(btnBackSpan)
            btnNext.append(btnNextSpan)

            divButtons.append(btnPrevious, btnBack, btnNext)
            main.append(divButtons)

            btnBack.addEventListener('click', () => {
                main.innerHTML = ''
                main.append(...Countries(countriesAll, false))
            })

            btnPrevious.addEventListener('click', () => {
               if(index > 0){
                    index = --index
                    main.innerHTML = ''
                    main.append(Country(countriesAll[index], index, true))
                    divButtons.append(btnPrevious, btnBack, btnNext)
                    main.append(divButtons)
               }
            })

            btnNext.addEventListener('click', () => {
                if(index < countriesAll.length - 1){
                    index = ++index
                    main.innerHTML = ''
                    main.append(Country(countriesAll[index], index, true))
                    divButtons.append(btnPrevious, btnBack, btnNext)
                    main.append(divButtons)
                }
            })
        }
    })
})



// //Generator of different select options
// const generateSelect = (countries) => {

//     let filter = []
//     divSelect.innerHTML = ''

//     let select = Select(countries.map(country => country.region))

//     select.addEventListener('change', ()=> {
//       filter = countries.filter(country => country.region == select.value)
//       showCountries = filter
//       main.innerHTML = ''
//       main.append(...Countries(filter))
//       generateInput(filter) 
//     })

//     divSelect.append(select)
// }


// function generateInput(countries){
//     divInput.innerHTML = ''
    
//     inputFilter.addEventListener('input',()=>{
//         let filter = countries.filter(country => country.name.toLocaleLowerCase().includes(inputFilter.value.toLowerCase()))
//         showCountries = filter
//         generateSelect(filter)
//         main.innerHTML = ''
//         main.append(...Countries(filter))
//     })

//     divInput.append(inputFilter)
// }

// selectSort.addEventListener('change', ()=>{
//     if (selectSort.value == 'capital') {
//         showCountries.sort(compareByCapital)
//     } else if (selectSort.value == 'region') {
//         showCountries.sort(compareByRegion)
//     }

//     main.innerHTML = ''

//     main.append(...Countries(showCountries))
// })