
const modalSection = document.getElementById("modalSection")


const editFunction = async (title, content) => {
    const editBttn = document.getElementById("editPost")

    editBttn.addEventListener("click", async (e)=>{

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
                            <button class="cancelEdit">Cancelar</button>
                            <button class="confirmEdit">Salvar alterações</button>
                        </div>
                    </form>
                </main>
            </section>
        </section>

    `)

    const closeModalBttn = document.getElementById("closeModal")
    closeModalBttn.addEventListener('click', ()=>{
        modalSection.innerHTML=''

    })

})
}
export { editFunction }
