import { Countries } from "./Components/Countries.js"
import { Country } from "./Components/Country.js"
import { getAllCountries } from "./service.js"
import { main, btnPrevious, btnNext, btnBack, divButtons} from "./constants.js"
// // import { compareByCapital, compareByRegion } from "./Functions.js"
// import Select from "./Components/Select.js";



///**
// * Za domaci kreirati api za drzave koji smo radili na casu
// * ispisati sliku, naziv i glavni grad
// * 
// *  prikazati 15 RANDOM drzava
// * 
// * na klik na zastavu treba da se ukloni prikaz drzava i da se na ekranu izlistaju samo informacije o jednoj dzavi
// * slika, naziv, glavni grad, SVI JEZICI, opis, timezone -- ima ih vise//, populacija
// * 
// * pored informacija o drzavi kreirati i 3 dugmeta (next, back, previous)
// * klik na next ispisuje informacije o narednoj drzavi iz niza
// * klik na previous ispisuje informacije o prethodnoj drzavi iz niza
// * klik na back vraca na punu listu sa umanjenim informacijama
// */

//ZASTAVA = IMG tagName





let countries = []
//I must first set it to the set to avoid duplicates, then I'll extract array from it
let showCountries = new Set()
//to avoid trying to spread later the new set
let countriesAll = []



//randomizer of the countries
const randomCountriesView = (countries) => {
if(countries.length != 1)
//I must select .size, cause if new Set
    while(showCountries.size <= 15){

        let random = Math.floor(Math.random() * countries.length)
        showCountries = showCountries.add(countries[random])

    }

    showCountries = Array.from(showCountries)
    
  
    return showCountries
}



getAllCountries().then((res) => {
    main.innerHTML = ''
    countries = res.data
    showCountries = randomCountriesView(countries)
    countriesAll =  Array.from(showCountries)
    // console.log(countriesAll);
   
    main.append(...Countries(countriesAll, false))
  
   

    main.addEventListener('click', (e) => {
        console.log(e.target.tagName)


        //I tried adding this to COUNTRY file, but it won't compile. I could not select otherwise the property but by the tags and event targets. 
        //MDN says: For tagNames in JS: for example, if the element is an <img>, its tagName property is "IMG"
        //So I used that option here


        if(e.target.tagName == 'IMG'){
            let index = e.target.closest('div').id
            console.log(index)
            main.innerHTML = ''

            main.append(Country(countriesAll[index], index, true))

            
            btnPrevious.textContent = '< Previous'
            btnBack.textContent = 'Go Back'
            btnNext.textContent = 'Next >'
            divButtons.append(btnPrevious, btnBack, btnNext)
            main.append(divButtons)

            btnBack.addEventListener('click', ()=> {
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







































// //PRETHODNI DOMACI

// //Generator of different select options
// const generateSelect = (countries) => {

//     let filter = []
//     divSelect.innerHTML = ''


//     let select = Select(countries.map(country => country.region))

//     //event listener on Select
//     select.addEventListener('change', ()=> {

//       filter = countries.filter(country => country.region == select.value)
//       showCountries = filter
//       main.innerHTML = ''
//       main.append(...Countries(filter))
//       //refreshing the ''only one country'' option
      
//       generateInput(filter) 

//   })

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

//     if(selectSort.value == 'capital'){
//         showCountries.sort(compareByCapital)
//     }else if(selectSort.value == 'region'){
//         showCountries.sort(compareByRegion)
//     }

//     main.innerHTML = ''

//     main.append(...Countries(showCountries))

// })









