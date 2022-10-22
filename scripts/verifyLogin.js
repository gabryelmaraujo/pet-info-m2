
const verifyLogin = () =>{

    const loggedUser = JSON.parse(localStorage.getItem("@Petinfo/userAccess"))

    if(loggedUser == ''){
        window.location.href='/index.html'
    }


}

export { verifyLogin }