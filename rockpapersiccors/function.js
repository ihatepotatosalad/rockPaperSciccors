const userChoice = document.querySelectorAll('[data-selection]')

userChoice.forEach(userChoices =>{
userChoices.addEventListener('click', e =>{
    const choiceName = userChoices.dataset.selection
    makeSelection(choiceName)
})
})
function makeSelection(selection){
    console.log(selection)
}