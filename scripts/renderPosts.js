import { receiveUserData } from "../../scripts/receiveUserData.js";
import { editFunction } from "../../scripts/editPost.js"



async function renderPosts(){
    const userData = await receiveUserData()


    const postsUrl = "http://localhost:3333/posts"

    const loggedUser = await JSON.parse(localStorage.getItem("@Petinfo/userAccess"))

    const getPosts = await fetch(postsUrl, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${loggedUser.token}`
        }
    })

    const response = await getPosts.json()
    
    if(response.length != 0){

        const ulPosts = document.querySelector(".ulPosts")

        response.forEach((e) => {
    
            const postId = e.id;
            const postTitle = e.title;
            const postContent = e.content;
            const postData = new Date(e.createdAt);
            const postCreator = e.user
                const creatorAvatar = postCreator.avatar
                const creatorName = postCreator.username
                const creatorId = postCreator.id
    
                const dataMonth = monthConverter(postData);
                const dataYear = postData.getFullYear();
    
    
            ulPosts.insertAdjacentHTML("afterbegin", `
    
            <li class="post" id="${postId}">
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
                                <button class="editPost hide" id="editPost">Editar</button>
                                <button class="deletePost hide" id="deletePost">Excluir</button>
                            </div>
                        </header>
                        <main class="postMain">
                            <h1 class="postTitle">
                                ${postTitle}
                            </h1>
                            <div class="postDescDiv">
                                <p class="postDesc">
                                    ${postContent}
                                </p>
                            </div>
                            <div class="showPostDiv">
                                <button class="showPostBttn" id="showPostBttn">Acessar publicação</button>
                            </div>
                        </main>
                    </li>
    
            `)
    
            
            if(userData.userId == creatorId){
                const editBttn = document.getElementById("editPost")
                editBttn.classList.remove('hide')
                editFunction(postTitle, postContent)
                const deleteBttn = document.getElementById("deletePost")
                deleteBttn.classList.remove('hide')
            }
    
             
        });

    }





    


}


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

export { renderPosts }