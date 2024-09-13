class Componente extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    const div = document.createElement('div');  
    div.className = "card mb-3 mt-3";
    div.innerHTML = `
    <div class="row">
      <div class="card text-center bg-light">
        <a href="" class=" position-absolute p-2 text-dark ">
          <svg xmlns="http://www.w3.org/2000/svg" wIdth="24" height="24" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
            <pathd="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
          </svg>
        </a>
        <a href="link">
          <img src="${this.getAttribute("imgSrc")}" class="card-img-top" alt="...">
          <div class="card-header"> R$ ${this.getAttribute("valor")} </div>
        </a>
        <div class="card-body">
          <h5 class="card-title"> ${this.getAttribute("title")} </h5>
          <p class="card-text truncate-3l"> ${this.getAttribute("description")} </p>
        </div>
        <div class="card-footer">
          <form class="d-block ">
              <button class="btn btn-dark">
                 <a href="carrinho.html?id=${this.getAttribute('id')}"> Adicionar ao carrinho </a> 
          </form>
        </div>
        <small>${this.getAttribute("estoque")}</small>
        <a href="post_detalhado.html?id=${this.getAttribute('id')}"> veja mais </a>
      </div>
    </div>
    `;
    this.appendChild(div);
  }
}
customElements.define("componente-novok", Componente);
