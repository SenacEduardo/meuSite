const selectInput = document.querySelector(".valorDaBorda")  
const btnEnviar = document.querySelector(".btnEnviar")

selectInput.addEventListener("change", () => {
  const selectValue = document.querySelector(".valorDaBorda").value  
  btnEnviar.style.borderRadius = `${selectValue}px`
})
