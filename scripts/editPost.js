

const editFunction = async (title, content) => {
    
    const modalSection = document.getElementById("modalSection")

    const editBttn = document.getElementById("editPost")

    editBttn.addEventListener("click", async (e)=>{
        const divButtons = e.target.parentElement
        const header = divButtons.parentElement
        const post = header.parentElement
        console.log(post.id)

    modalSection.insertAdjacentHTML("beforeend", `
    
    <section class="editPostContainer">
            <section class="postEditer">
                <header class="editPostHeader">
                    <h1>Editar</h1>
                    <button class="closeModal" id="closeModal">X</button>
                </header>
                <main class="editPostMain">
                    <form>
                        <label for="postTitleEdit">Titulo do post</label>
                        <input type="text" name="postTitleEdit" id="postTitleEdit" value="${title}">

                        <label for="postDescriptionEdit">Conteúdo do post</label>

                        <textarea name="postDescription" id="postDescriptionEdit" cols="30" rows="10">${content}</textarea>

                        <div class="formButtons">
                            <button class="cancelEdit" id="cancelEdit">Cancelar</button>
                            <button class="confirmEdit" id="confirmEdit">
                                <p class="confirmText">Salvar alterações</p>
                                <img src="/images/spinner.svg" alt="" class="loadingSpinner hide">
                            </button>
                        </div>
                    </form>
                </main>
            </section>
        </section>

    `)
    const cancelEdit = document.getElementById("cancelEdit")
    cancelEdit.addEventListener('click', ()=>{
        modalSection.innerHTML=''

    })

    const closeModalBttn = document.getElementById("closeModal")
    closeModalBttn.addEventListener('click', ()=>{
        modalSection.innerHTML=''

    })

    const confirmEdit = document.getElementById("confirmEdit")
    confirmEdit.addEventListener('click', async (e)=>{
        e.preventDefault()

        const postsUrl = "http://localhost:3333/posts/"
        
        const loggedUser = await JSON.parse(localStorage.getItem("@Petinfo/userAccess"))

        const postTitleEdit = document.getElementById("postTitleEdit")
        const postDescriptionEdit = document.getElementById("postDescriptionEdit")

        const editBody = {
            "title": `${postTitleEdit.value}`,
            "content": `${postDescriptionEdit.value}`
        }

        const submitEdit = await fetch(postsUrl + `${post.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${loggedUser.token}`
            },
            body: JSON.stringify(editBody)
        })

        const response = await submitEdit.json()
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
export { editFunction }
