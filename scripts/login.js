

const baseUrl = "http://localhost:3333/"

async function loginFunction(){

    try{

        const logar = await fetch(baseUrl + "login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify(body)
        })

        const response = await logar.json()

        console.log(response)

    }catch (err){
        console.log(err)
    }

}

export {loginFunction}