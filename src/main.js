// const ninjaUl = document.getElementById('ninjas')
// const handleFetch = async () => {
//     const url = 'https://naruto-api.herokuapp.com/api/v1/characters';
//     const response = await fetch(url);
//     // console.log(response);
//     const data = response.json();
    
//     // console.log(data);
    
//     data
//         .then((ninjas) => {
//             const listNinjas = ninjas.map(({name, id, images}) => ({
//                 name,
//                 id,
//                 images
//             }));
//             // console.log(listNinjas[0].images[0]);

//             handleNames(listNinjas);

//         })
    
    
    
// }

// const handleNames = (ninja) => {
//     const render = ninja.map(({name, id, images}) => 
//     `<li>${id}º ninja: ${name}</li>
//     <img class="card-image" src="${images[0]}"/> 
//     `).join('')

//     ninjaUl.innerHTML = render;
// }


// handleFetch();

// ---------------------- Divisão. dos métodos

const url = 'https://naruto-api.herokuapp.com/api/v1/characters';
const ninjaUl = document.getElementById('ninjas')

const validate = ninjaData => {
    console.log(ninjaData)
if (!ninjaData.ok) {
        throw new Error(`HTTP error, status ${ninjaData.status}`)
    }
    return ninjaData.json();
}

const handleError = (error) => {
    console.log(error.message)
}

const handleNinjas = ninjas => {
    const listNinjas = ninjas.map(({name, id, images}) => ({
        name,
        id,
        images
    }));
    // console.log(listNinjas[0].images[0]);
    
    handleCreateElement(listNinjas);
}

const handleCreateElement = (ninja) => {
    const render = ninja.map(({name, id, images}) => 
    `<li>${id}º ninja: ${name}</li>
    <img class="card-image" src="${images[0]}"/> 
    `).join('')
    
    ninjaUl.innerHTML = render;
}


fetch(url)
    .then(validate)
    .then(handleNinjas)
    .catch(handleError)
    