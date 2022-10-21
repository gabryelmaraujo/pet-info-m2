/* Aqui a gente recebe as informações do usuário: */


async function receiveUserData(){
    const profileUrl = "http://localhost:3333/users/profile"

    const loggedUser = await JSON.parse(localStorage.getItem("@Petinfo/userAccess"))

    const userInfos = await fetch(profileUrl, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${loggedUser.token}`
        }
    })

    const response = await userInfos.json()


    const userId = response.id
    const userName = response.username 
    const userEmail = response.email
    const userAvatar = response.avatar


    const userData = {userId, userName, userEmail, userAvatar}


    return userData


}

export {receiveUserData}