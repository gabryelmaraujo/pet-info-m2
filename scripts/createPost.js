


const createPost = async ()=>{
    
    const createBttn = document.getElementById("createPost")
    createBttn.addEventListener("click", async ()=>{
        const modalSection = document.getElementById("modalSection")

        modalSection.insertAdjacentHTML("beforeend", `
            <section class="createPostContainer">
                <section class="postCreator">
                    <header class="creatorHeader">
                        <h1>Criando novo post</h1>
                        <button class="closeModal" id="closeModal">X</button>
                    </header>
                    <form>
                        <label for="newPostTitle">Título do post</label>
                        <input type="text" name="newPostTitle" id="newPostTitle" required>

                        <label for="newPostDesc">Conteúdo do post</label>
                        <textarea name="newPostDesc" id="newPostDesc" required></textarea>

                        <div class="formButtons">
                            <button class="cancelNewPost" id="cancelNewPost">Cancelar</button>
                            <button class="confirmNewPost" id="confirmNewPost">
                                <p class="confirmText">Publicar</p>
                                <img src="/images/spinner.svg" alt="" class="loadingSpinner hide">
                            </button>
                        </div>
                    </form>
                </section>
            </section>
        `)

        const closeModal = document.getElementById("closeModal")
        closeModal.addEventListener("click", ()=>{
            modalSection.innerHTML=""
        })

        const cancelNewPost = document.getElementById("cancelNewPost")
        cancelNewPost.addEventListener("click", ()=>{
            modalSection.innerHTML=""
        })

        const confirmNewPost = document.getElementById("confirmNewPost")
        confirmNewPost.addEventListener("click", async (e)=>{
            e.preventDefault()

            const createUrl = "http://localhost:3333/posts/create"
            const loggedUser = await JSON.parse(localStorage.getItem("@Petinfo/userAccess"))

            const titleInput = document.getElementById("newPostTitle")
            const contentInput = document.getElementById("newPostDesc")

            const postBody = {
                title: titleInput.value,
                content: contentInput.value
              }

            const creatingPost = await fetch(createUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${loggedUser.token}`
                },
                body: JSON.stringify(postBody)
            })

            const response = await creatingPost.json()
            console.log(response)

            if(response.id){
                
                const confirmText = document.querySelector('.confirmText')
                confirmText.classList.add('hide')
    
                const spinner = document.querySelector('.loadingSpinner')
                spinner.classList.remove('hide')
                setTimeout(() => {
                    location.reload()
    
                  }, "2000")

            }

        })

    })




}

export { createPost }