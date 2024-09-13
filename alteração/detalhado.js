function obterIdProduto() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

async function detalharProduto() {
  const idProduto = obterIdProduto();
  console.log(idProduto);
  const baseUrl = "http://localhost:3001";
  
  const res = await fetch(`${baseUrl}/produtos/?id=${idProduto}`);
  const produtos = await res.json();

  const container = document.getElementById("produto_detalhado");
  container.innerHTML = ` 
  <section class="card  bg-light">
                <a href="" class=" position-absolute p-2 text-dark ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-heart" viewBox="0 0 16 16">
                        <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                </a>
                <div id="imagemProduto">
                    <img src="${produtos[0].imgSrc}">
                </div>
                <div class="card-header">
                    <h3 class="card-title"> ${produtos[0].title}</h3>
                    <h5> R$ ${produtos[0].valor}</h5>
                </div>
                <div class="card-body">
                    <p class="card-text truncate-3l"><strong>Descrição:</strong>
                        ${produtos[0].description}
                    </p>
                </div>
    
                <div class="card-footer  text-center">
                    <form class="d-block ">
                        <button class="btn btn-dark">
                            Adicionar ao carrinho
                    </form>
                </div>
            </section>`;

  document.getElementById('add-to-cart').addEventListener('click', () => {
    document.location.href = `carrinho.html?id=${idProduto}`;
  });
}
detalharProduto()
