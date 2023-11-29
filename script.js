const Personnage = document.querySelector('.perso')
const Lieux = document.querySelector('.lieu')
const Episodes = document.querySelector('.epis')

const carteperso = document.createElement('div')
const cartelieux = document.createElement('div')
const carteepisodes = document.createElement('div')


carteperso.className = "lesPersonnages"
cartelieux.className = "lesLieux"
carteepisodes.className = "lesEpisodes"


Personnage.addEventListener ('click', () => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => {

        console.log(data.info);

        carteperso.style.display = "flex"
        cartelieux.style.display = "none"
        carteepisodes.style.display = "none"

        for (let i=0; i <= 19 ;i++) {

            const cartepers = document.createElement('div')
            cartepers.className = "lesPersonnage"

            const creernom = document.createElement('p')
            creernom.textContent = data.results[i].name

            const creerimage = document.createElement('img')
            creerimage.src = data.results[i].image

            document.body.appendChild(carteperso)
            carteperso.appendChild(cartepers)
            cartepers.appendChild(creernom)
            cartepers.appendChild(creerimage)
        }
    })
})

Lieux.addEventListener('click', () => {
    fetch('https://rickandmortyapi.com/api/location')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        carteperso.style.display = "none"
        cartelieux.style.display = "flex"
        carteepisodes.style.display = "none"

        for (let i=0; i <= 19 ;i++){

            const cartelieu = document.createElement('div')
            cartelieu.className = "leLieu"

            const creernom = document.createElement('p')
            creernom.textContent = data.results[i].name

            const creerdimension = document.createElement('p')
            creerdimension.textContent = data.results[i].dimension

            // const creerresidents = document.createElement ('p')
            // creerresidents.textContent = data.results[i].residents

            document.body.appendChild(cartelieux)
            cartelieux.appendChild(cartelieu)
            cartelieu.appendChild(creernom)
            cartelieu.appendChild(creerdimension)
            // cartelieu.appendChild(creerresidents)
        
        }
    })
})

Episodes.addEventListener('click', () => {
    fetch('https://rickandmortyapi.com/api/episode')
    .then(response => response.json())
    .then(data => {
        
        console.log(data)

        carteperso.style.display = "none"
        cartelieux.style.display = "none"
        carteepisodes.style.display = "flex"

        for (let i=0; i <= 19 ;i++){

            const carteepisode = document.createElement('div')
            carteepisode.className = "lEpisode"

            const numepi = document.createElement('p')
            numepi.textContent = data.results[i].episode

            const creernom = document.createElement('p')
            creernom.textContent = data.results[i].name

            const creerdatedesortie = document.createElement('p')
            creerdatedesortie.textContent = data.results[i].air_date
        
            document.body.appendChild(carteepisodes)
            carteepisodes.appendChild(carteepisode)
            carteepisode.appendChild(numepi)
            carteepisode.appendChild(creernom)
            carteepisode.appendChild(creerdatedesortie)
        }
    })
})

// fetch('https://rickandmortyapi.com/api/location')
// .then(response => response.json())
// .then(data => {
//      console.log(data.results[0])
// });



