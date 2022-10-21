
const registerButtonDisabler = () => {
    document.getElementById("registerBttn").disabled = true;
    
    document.getElementById("rpPassword").addEventListener("input", ()=>{
    
        const passInputValue = document.getElementById("rpPassword").value;
    
        if (passInputValue !== null && passInputValue !== '') {
          
            document.getElementById("registerBttn").disabled = false;
          } else {
            
            document.getElementById("registerBttn").disabled = true;
          }
    })
    }
export {registerButtonDisabler}