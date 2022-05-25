const miniTwitter = {
  usuarios: [
    {
      username: "GustBitencourt",
    },
  ],
  posts: [
    {
      id: Date.now(),
      owner: "GustBitencourt",
      content: "Vou xingar muito no twitter",
    },
  ],
  loadPosts() {
    //Read
    miniTwitter.posts.forEach(({ id, owner, content }) => {
      miniTwitter.createPost({ id, owner, content }, true);
    });
  },
  createPost(data, htmlOnly = false) {
    const idInterno = Date.now();
    //não criando o html na memória para não duplicar na hora do read
    if (!htmlOnly) {
      //posts na memória JS
      miniTwitter.posts.push({
        id: dados.id || idInterno,
        owner: data.owner,
        content: data.content,
      });
    }
    //criando post no html
    const $listaDePosts = document.querySelector(".listaDePosts");
    //inserindo posts na lista
    $listaDePosts.insertAdjacentHTML("afterbegin", `
      <li data-id="${idInterno}">
        <span contenteditable>
        ${data.content}
        </span>
        <button class="btn-delete">Delete</button>
      </li>

    `);
  },
  getPosts() {
    return miniTwitter.posts;
  },
  updateContentPost(id, newContent) {
    const postWillUpdate = miniTwitter.posts.find((post) => {
      return post.id === Number(id);
    });

    //trocando o conteudo do post antigo
    return (postWillUpdate.content = newContent);
  },
  deletePost(id) {
    const postWillDelete = miniTwitter.posts.filter((postAutal) => {
      return postAutal.id !== Number(id);
    });

    miniTwitter.posts = postWillDelete;
  },
};

//READ
miniTwitter.loadPosts();

//Create
const $form = document.querySelector("form");
$form.addEventListener("submit", function handleCreatePost(event) {
  event.preventDefault();

  const $inputCriaPost = document.querySelector('input[name="inputCriaPost"]');
  miniTwitter.createPost({
    owner: "GustBitencourt",
    content: $inputCriaPost.value,
  });

  $inputCriaPost.value = "";
});

//DELETE
document.querySelector(".listaDePosts").addEventListener("click", function (event) {
  const elementoAtual = event.target;
  const btnDeleteClick = event.target.classList.contains('btn-delete')
  // apagando elemento após clique no botão e removendo a li
  if(btnDeleteClick) {
    //pegando id do elmento clicado
    const id = elementoAtual.parentNode.getAttribute('data-id');
    //apagando
    // Manipula server
    miniTwitter.deletePost(id);
    //Manipula View
    elementoAtual.parentElement.remove();
  }
})

//UPDATE 
document.querySelector(".listaDePosts").addEventListener("input", function(e) {
  const elementoAtual = e.target;
  const id = elementoAtual.parentNode.getAttribute('data-id');

  //editando conteudo
  miniTwitter.updateContentPost(id, elementoAtual.innerText);
})


