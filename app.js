function search(){
    let section = document.getElementById('container-main')
    let searchInput = document.getElementById('search-input').value.toLowerCase();

    let resultados = [];
    let foundMatch = false;

    function createResultHTML(serie) {
        return `
            <div class="conteudo">
            <h2 class="titulo">${serie.titulo}</h2>
            <p class="sinopse">
                ${serie.descricao}
            </p>
            <p class="genero">Genero: ${serie.genero}</p>
            <p class="streaming">Onde encontrar: ${serie.streaming}</p>
            <p class="temporadas">Temporadas: ${serie.temporadas}</p>
            <p class="exibicao">Exibição: ${serie.exibicao}</p>
            <div class="recomendacoes">
            <p class="recomendadas">Séries recomendadas:</p>
            <ul>
            <li>
                <p class="recomendadas">${serie.recomended1}</p>
            </li>
            <li>
            <li>
                <p class="recomendadas">${serie.recomended2}</p>
            </li>
            <li>
                <p class="recomendadas">${serie.recomended3}</p>
            </li>
            </ul>
          </div>
        </div>
        `;
      }

    if (searchInput !== ''){
        for (let serie of dados) {
            if (serie.titulo.toLowerCase().includes(searchInput)) {
                resultados.push(createResultHTML(serie))
                foundMatch = true;
        }
    }
    if (!foundMatch) {
        for (let serie of dados) {
            for (let genre of serie.genero) {
                if (genre.toLowerCase().includes(searchInput)) {
                resultados.push(createResultHTML(serie))
                foundMatch = true;
            break; 
        }
    }
    }
}
}
    section.innerHTML = resultados
}

