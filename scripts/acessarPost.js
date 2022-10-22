
const acessarPost = async () =>{
    
    const showPostBttn = document.getElementById("showPostBttn")

    showPostBttn.addEventListener('click', async (e)=>{
        e.preventDefault()
        const showPostDiv = e.target.parentElement
        const postMain = showPostDiv.parentElement
        const postTitle = postMain.childNodes[1].innerText
        const postDesc = postMain.childNodes[3].childNodes[1].innerText
        const postSection = postMain.parentElement
        const postCreator = postSection.childNodes[1].childNodes[1].childNodes[3].innerText
        const creatorAvatar = postSection.childNodes[1].childNodes[1].childNodes[1].children[0].currentSrc
        const postDate = postSection.childNodes[1].childNodes[1].childNodes[7].innerText



        const modalSection = document.getElementById('modalSection')

        modalSection.insertAdjacentHTML('beforeend', `
        
            <section class="viewPostContainer">
                <section class="postViewer">
                    <header class="viewPostHeader">
                        <div class="postInfos">
                            <div class="avatarDivPost">
                                <img src="${creatorAvatar}" class="creatorAvatar">
                            </div>
                            <p class="postedBy">
                                ${postCreator}
                            </p>
                            <span class="divisor"></span>
                            <p class="postedIn">
                                ${postDate}
                            </p>
                        </div>
                        <button class="closeModal" id="closeModal">X</button>
                    </header>
                    <main class="viewPostMain">
                        <h2 class="viewPostTitle">${postTitle}</h2>
                        <p class="postDescription">
                            ${postDesc}
                        </p>
                    </main>
                </section>
            </section>

        `)

        const closeModal = document.getElementById("closeModal")
        closeModal.addEventListener('click', ()=>{
            modalSection.innerHTML=''
        })

    })


}

export { acessarPost }