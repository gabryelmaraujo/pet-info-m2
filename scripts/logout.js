import { receiveUserData } from "./receiveUserData.js"
const userData = await receiveUserData()

const deslogarFunction = async () => {

    const avatarBttn = document.getElementById("avatarButton")

    avatarBttn.addEventListener("click", (e)=>{
        e.preventDefault()
        const logoutModal = document.getElementById("logoutModal")

        if(logoutModal.classList.contains('hide')){
            logoutModal.classList.remove('hide')
        }else{
            logoutModal.classList.add('hide')
        }

        
        const userName = document.getElementById("userName")
        userName.innerHTML=`@${userData.userName}`

        const logoutButton = document.getElementById("logoutBttn")

        logoutButton.addEventListener('click', ()=>{
            const logout = ''
            localStorage.setItem("@Petinfo/userAccess", JSON.stringify(logout))

            window.location.href="/index.html"
        })

    })

    
}

export { deslogarFunction }