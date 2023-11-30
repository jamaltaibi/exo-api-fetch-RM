const Personnage = document.querySelector('.perso');
const Lieux = document.querySelector('.lieu');
const Episodes = document.querySelector('.epis');

const carteperso = document.createElement('div');
const cartelieux = document.createElement('div');
const carteepisodes = document.createElement('div');


carteperso.className = "lesPersonnages" ; 
cartelieux.className = "lesLieux" ; 
carteepisodes.className = "lesEpisodes" ; 

const nbrpageperso = 42 ;
const nbrpagelocation = 7 ;
const nbrpageepi = 3 ;


Personnage.addEventListener ('click', () => {
        
    for (let i= 1; i <= nbrpageperso; i++) {
        fetch(`https://rickandmortyapi.com/api/character?page=${i}`)
        .then(response => response.json())
        .then(data => {

            console.log(data.info);
            carteperso.style.display = "flex"
            cartelieux.style.display = "none"
            carteepisodes.style.display = "none"
    
            data.results.forEach(element => {
                const cartepers = document.createElement('div')
                cartepers.className = "lesPersonnage"

                const creernom = document.createElement('h2')
                creernom.textContent = element.name

                const creerimage = document.createElement('img')
                creerimage.src = element.image

                document.body.appendChild(carteperso)
                carteperso.appendChild(cartepers)
                cartepers.appendChild(creernom)
                cartepers.appendChild(creerimage)
            });
        });
    };
});

Lieux.addEventListener('click', () => {

    for (let i= 1; i <= nbrpagelocation; i++) {
        fetch("https://rickandmortyapi.com/api/location?page="+i)
        .then(response => response.json())
        .then(data => {
        
        carteperso.style.display = "none"
        cartelieux.style.display = "flex"
        carteepisodes.style.display = "none"

            data.results.forEach(element => {

                const cartelieu = document.createElement('div')
                cartelieu.className = "leLieu"

                const creernom = document.createElement('h1')
                creernom.textContent = element.name

                const creerdimension = document.createElement('h2')
                creerdimension.textContent = element.dimension

                const resident = document.createElement('div')
                resident.className = "residents"

                    element.residents.forEach(element2 => {
                        fetch(element2)
                        .then(response => response.json())
                        .then(data => {
                        
                        const creerresidents = document.createElement ('p')
                        creerresidents.textContent = data.name

                        document.body.appendChild(cartelieux)
                        cartelieux.appendChild(cartelieu)
                        cartelieu.appendChild(resident)
                        resident.appendChild(creerresidents)
                    })  
                document.body.appendChild(cartelieux)
                cartelieux.appendChild(cartelieu)
                cartelieu.appendChild(creernom)
                cartelieu.appendChild(creerdimension)
                cartelieu.appendChild(resident)

                });
            })
        })
    }
})

Episodes.addEventListener('click', () => {
    
    for (let i= 1; i <= nbrpageepi; i++) {
        
        fetch("https://rickandmortyapi.com/api/episode?page="+i)
        .then(response => response.json())
        .then(data => {
        
            console.log(data.results)

            carteperso.style.display = "none"
            cartelieux.style.display = "none"
            carteepisodes.style.display = "flex"

            data.results.forEach(element => {

                const carteepisode = document.createElement('div')
                carteepisode.className = "lEpisode"

                const numepi = document.createElement('p')
                numepi.textContent = element.episode

                const creernom = document.createElement('p')
                creernom.textContent = element.name

                const creerdatedesortie = document.createElement('p')
                creerdatedesortie.textContent = element.air_date
        
                document.body.appendChild(carteepisodes)
                carteepisodes.appendChild(carteepisode)
                carteepisode.appendChild(numepi)
                carteepisode.appendChild(creernom)
                carteepisode.appendChild(creerdatedesortie)
            })
        })
    }
})



