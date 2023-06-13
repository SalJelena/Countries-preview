import {Countries} from "./Components/Countries.js"
import {Country} from "./Components/Country.js"
import {getAllCountries} from "./service.js"
import {
    main,
    btnPrevious,
    btnNext,
    btnBack,
    divButtons,
    btnPrevSpan,
    btnBackSpan,
    btnNextSpan, divInput, inputFilter, form, divSelect
} from "./constants.js"
import Select from "./Components/Select";

let countries = []
let countriesAll = []

let filteredCountries = [...countriesAll]

getAllCountries().then((res) => {
    main.innerHTML = ''
    countries = res.data
    countriesAll = Array.from(countries)
    main.append(...Countries(countriesAll, false))

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        filteredCountries = countries.filter(country => country.name.toLocaleLowerCase().includes(inputFilter.value.toLowerCase()))

        main.innerHTML = ''
        main.append(...Countries(filteredCountries, false))
        inputFilter.value = ""
    })

    main.addEventListener('click', (e) => {

        if (e.target.tagName === 'IMG') {
            let parentBlock = e.target.parentNode
            let index = [...parentBlock.parentElement.children].indexOf(parentBlock)


            for (let i = 0; i < countriesAll.length; i++) {
                if (i === index) {
                    main.innerHTML = ''
                    if (filteredCountries.length > 0) {
                        main.append(Country(filteredCountries[index], index, true))
                    } else {
                        main.append(Country(countriesAll[index], index, true))
                    }
                }
            }

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
                filteredCountries = countriesAll
                main.append(...Countries(countriesAll, false))
            })

            btnPrevious.addEventListener('click', () => {
                if (index > 0) {
                    index = --index
                    main.innerHTML = ''
                    main.append(Country(countriesAll[index], index, true))
                    divButtons.append(btnPrevious, btnBack, btnNext)
                    main.append(divButtons)
                }
            })

            btnNext.addEventListener('click', () => {
                if (index < countriesAll.length - 1) {
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
//
// const generateSelect = (arr) => {
//
//     let options = new Set(countries.map(country => {
//         if (!country.region) {
//             return 'Other'
//         }
//         return country.region
//     }))
//
//     divSelect.innerHTML = ''
//     let select = Select(options)
//
//     select.addEventListener('change', () => {
//         main.innerHTML = ''
//         arr = arr.filter(country => {
//             if (select.value === 'Other') {
//                 return country.region.trim().toLowerCase() === ''
//             } else {
//                 return country.region.toLowerCase() === select.value.toLowerCase()
//             }
//         })
//
//         main.append(...Countries(arr, false))
//     })
//
//     divSelect.append(select)
// }
