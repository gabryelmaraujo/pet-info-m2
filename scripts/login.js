



async function loginFunction(){

    const baseUrl = "http://localhost:3333/"

    const form = document.querySelector('form')
    const elementos = form.elements
    const arrElementos = Array.from(elementos)



    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        
        try{

            const logar = await fetch(baseUrl + "login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
    
                },
                body: JSON.stringify({

                    "email": arrElementos[0].value,
                    "password": arrElementos[1].value
                  
                  })
            })
    
            const response = await logar.json()
    

             if(response.message == 'O email está incorreto'){

                arrElementos[2].setAttribute("class", "qtip tip-bottom")

                setTimeout(() => {
                    arrElementos[2].classList.remove("qtip")
                  }, "1500")

            }else if(response.message == 'A senha está incorreta'){

                const wrongPassParag = document.querySelector('.passwordError')

                wrongPassParag.classList.remove('hide')
                
                setTimeout(() => {
                    wrongPassParag.classList.add("hide")
                  }, "3000")

            }else{

                localStorage.setItem("@Petinfo/userAccess", JSON.stringify(response))

                const acessText = document.querySelector('.spanAcessLoginBttn')
                acessText.classList.add('hide')

                const spinner = document.querySelector('.loadingSpinner')
                spinner.classList.remove('hide')

                setTimeout(() => {

                    window.location.href="/pages/blog/index.html"
                  }, "1500")

            }
    
        }catch (err){
            console.log(err)
        }
    
    })
    
}

export {loginFunction}

