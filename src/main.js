const ninjaUl = document.getElementById('ninjas')
const handleFetch = async () => {
    const url = 'https://naruto-api.herokuapp.com/api/v1/characters';
    const response = await fetch(url);
    const data = response.json();

    data
        .then((ninjas) => {
            const ninjasNome = ninjas.map(({name, id}) => ({name, id}));
            // console.log(ninjasNome);

            handleNames(ninjasNome);

        })
    
    
    
}

const handleNames = (ninja) => {
    const render = ninja.map(({name, id}) => `<li>${id}º ninja: ${name}</li>`).join('')

    ninjaUl.innerHTML = render;
}


handleFetch();
