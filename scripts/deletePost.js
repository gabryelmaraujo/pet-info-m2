
async function deletePost(){
    
    const deletePost = document.getElementById("deletePost")
    
    deletePost.addEventListener("click", (e)=>{
        const divButtons = e.target.parentElement
        const header = divButtons.parentElement
        const post = header.parentElement
        console.log(post.id)

        const modalSection = document.getElementById("modalSection")

        modalSection.insertAdjacentHTML("beforeend", `

        <section class="confirmDeleteContainer">
            <section class="confirmDelete">
                <header class="confirmHeader">
                    <h1>Confirmação de exclusão</h1>
                    <button class="closeModal" id="closeModal">X</button>
                </header>
                <main class="confirmMain">
                    <h2>Tem certeza que deseja excluir este post?</h2>
                    <p>Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir</p>
                </main>
                <div class="confirmButtons">
                    <button class="cancelDelete" id="cancelDelete">Cancelar</button>
                    <button class="confirmBttn" id="confirmBttn">
                        <p class="confirmText"> Sim, excluir este post</p>
                        <img src="/images/spinner.svg" alt="" class="loadingSpinner hide">
                    </button>
                </div>

            </section>

        </section>

        `)
        const cancelDelete = document.getElementById("cancelDelete")
        cancelDelete.addEventListener('click', ()=>{
            modalSection.innerHTML=''
    
        })

        const closeModalBttn = document.getElementById("closeModal")
        closeModalBttn.addEventListener('click', ()=>{
            modalSection.innerHTML=''
    
        })


        const confirmDelete = document.getElementById("confirmBttn")

        confirmDelete.addEventListener("click", async (e)=>{
            e.preventDefault()

            const postsUrl = "http://localhost:3333/posts/"

            const loggedUser = await JSON.parse(localStorage.getItem("@Petinfo/userAccess"))

            const deletingPost = await fetch(postsUrl + `${post.id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${loggedUser.token}`
                }

            })
            
            const response = await deletingPost.json()
            console.log(response)

            if(response.message == "Post deletado com sucesso"){

                const confirmText = document.querySelector('.confirmText')
                confirmText.classList.add('hide')
    
                const spinner = document.querySelector('.loadingSpinner')
                spinner.classList.remove('hide')


                    setTimeout(() => {
                        const popUp = document.querySelector(".popUpContainer")
                        popUp.classList.remove('hide')
        
                      }, "1000")

                    setTimeout(() => {
                        location.reload()
        
                      }, "2500")

            }

        })


    })



}

export { deletePost }