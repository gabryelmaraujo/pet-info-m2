

async function renderPosts(){

    const postsUrl = "http://localhost:3333/posts"

    const loggedUser = await JSON.parse(localStorage.getItem("@Petinfo/userAccess"))

    const getPosts = await fetch(postsUrl, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${loggedUser.token}`
        }
    })

    const response = await getPosts.json()

    //CRIANDO POSTS

    const ulPosts = document.querySelector(".ulPosts")

    response.forEach((e) => {
        console.log(e)
        const postId = e.id;
        const postTitle = e.title;
        const postContent = e.content;
        const postData = new Date(e.createdAt);
        const postCreator = e.user
            const creatorAvatar = postCreator.avatar
            const creatorName = postCreator.username
            const creatorId = postCreator.id

            // const pos = new Date(e.createdAt);
            const dataMonth = monthConverter(postData);
            const dataYear = postData.getFullYear();

            console.log(dataMonth, dataYear);


        ulPosts.insertAdjacentHTML("beforeend", `

        <li class="post" id="idpost">
                    <header class="postHeader">
                        <div class="postInfos">
                            <div class="avatarDivPost">
                                <img src="${creatorAvatar}" class="creatorAvatar">
                            </div>
                            <p class="postedBy">
                                ${creatorName}
                            </p>
                            <span class="divisor"></span>
                            <p class="postedIn">
                                ${dataMonth} de ${dataYear}
                            </p>
                        </div>

                        <div class="postBttnsDiv">
                            <button class="editPost">Editar</button>
                            <button class="deletePost">Excluir</button>
                        </div>
                    </header>
                    <main class="postMain">
                        <h1 class="postTitle">
                            ${postTitle}
                        </h1>
                        <p class="postDesc">
                            ${postContent}
                        </p>
                        <div class="showPostDiv">
                            <button class="showPostBttn">Acessar publicação</button>
                        </div>
                    </main>
                </li>

        `)

    });



}
renderPosts()

function monthConverter(data){

    const dataMonth = data.getMonth()

    if(dataMonth == '0'){
        return 'Janeiro'
    }else if(dataMonth == '1'){
        return 'Fevereiro'
    }else if(dataMonth == '2'){
        return 'Março'
    }else if(dataMonth == '3'){
        return 'Abril'
    }else if(dataMonth == '4'){
        return 'Maio'
    }else if(dataMonth == '5'){
        return 'Junho'
    }else if(dataMonth == '6'){
        return 'Julho'
    }else if(dataMonth == '7'){
        return 'Agosto'
    }else if(dataMonth == '8'){
        return 'Setembro'
    }else if(dataMonth == '9'){
        return 'Outubro'
    }else if(dataMonth == '10'){
        return 'Novembro'
    }else if(dataMonth == '11'){
        return 'Dezembro'
    }
}