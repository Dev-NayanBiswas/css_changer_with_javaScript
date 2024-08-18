const inputFields = document.querySelectorAll(".range__container input");

inputFields.forEach(input=>{
    input.addEventListener("change",updateCss)
})


function updateCss(){

    let cssUnits = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`,this.value + cssUnits);
    console.log(this.dataset.sizing);
}