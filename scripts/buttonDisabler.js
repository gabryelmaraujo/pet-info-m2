

const buttonDisabler = () => {
document.getElementById("lpLoginBttn").disabled = true;

document.getElementById("lpPassInput").addEventListener("input", ()=>{

    const passInputValue = document.getElementById("lpPassInput").value;

    if (passInputValue !== null && passInputValue !== '') {
      
        document.getElementById("lpLoginBttn").disabled = false;
      } else {
        
        document.getElementById("lpLoginBttn").disabled = true;
      }
})
}

export {buttonDisabler}