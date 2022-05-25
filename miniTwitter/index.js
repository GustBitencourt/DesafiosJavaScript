const miniTwitter = {
    usuarios: [
        {
            username: 'GustBitencourt'
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'GustBitencourt',
            content: 'Vou xingar muito no twitter'
        }
    ]
}

//create
function createPost(data) {
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: data.owner,
        content: data.content
    });
    
}

createPost({owner: 'GustBitencourt', content: 'Acorda Pedrinho!!'});

console.log("Create", miniTwitter.posts);

//Read
function getPosts() {
    return miniTwitter.posts;
}

console.log("Read", getPosts());

/**
 * @author Gustavo Bitencourt
 * @param {number} id 
 * @param {string} newContent
 * @return {array} [{posts}]
 * 
 * @description Altera o conteúdo do post, pegando todos os post através da funçao read, utilizando a função    find para encontrar o post com o id passado por parametro e alterando o conteúdo do post
 */
//Update
function updateContentPost(id, newContent) {
    const postWillUpdate = getPosts().find((post) => {
        return post.id === id;
    })

    //trocando o conteudo do post antigo
    return postWillUpdate.content = newContent;
    
}

console.log("Update", updateContentPost(1, 'Atualizando conteudo do post'));

/**
 * @author Gustavo Bitencourt
 * @param {number} id
 * @return {array} [posts]
 * @description Deleta o post com o id passado por parametro, utilizando a função filter retornar todos os post com id diferente do id passado por parametro
 */
//Delete
function deletePost(id) {
    const postWillDelete = getPosts().filter((postAutal) => {
        return postAutal.id !== id;
    })
    
    return postWillDelete;
}

console.log("Delete", deletePost(2));



