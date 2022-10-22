

function registerFunction(){
    const baseUrl = "http://localhost:3333/users/create"

    const registerForm = document.getElementById("rpForm")
    const inputs = Array.from(registerForm.elements)

    
registerForm.addEventListener('submit', async (e)=>{
        e.preventDefault()

        const userBody = {
            username: inputs[0].value,
            email: inputs[1].value,
            avatar: inputs[2].value,
            password: inputs[3].value
          }

        try{

            const register = await fetch(baseUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userBody)
            })

            const response = await register.json()

            console.log(response)
            if(response.message == "Username já cadastrado, favor informar um username que não pertença a um usuário já cadastrado"){
                console.log("caiu no username")
            }else if(response.message == "Email já cadastrado, favor informar um email que não pertença a um usuário já cadastrado"){
                console.log("caiu no email")
            }else{
                const registerText = document.querySelector('.registerBttnText')
                registerText.classList.add('hide')

                const spinner = document.querySelector('.loadingSpinner')
                spinner.classList.remove('hide')

                const modalSection = document.querySelector(".modalSection")
                modalSection.classList.remove('hide')

                setTimeout(() => {

                    window.location.href="/index.html"
                  }, "2000")
            }
            

        }catch(err){
            console.log(err)
        }


    })

}
registerFunction()