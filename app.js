function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa")

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  if (!campoPesquisa){
    section.innerHTML = "nada encontrado" 
   return
  }
  
  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados HTML
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";  

  // Itera sobre cada dado na lista de resultados
  for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
   if (titulo.includes(campoPesquisa)||descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {

    resultados += `<div class="item-resultado">
      <img src=${dado.foto} width="100px" height="100px">
      <div>
        <h2>
          <a href=${dado.link} target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
      </div>
    </div>`

   }
    
  }

  if (!resultados) {
    resultados = "nada encontrado"
  }

  // Atribui o HTML completo da lista de resultados à seção
  section.innerHTML = resultados
}
