const user = document.querySelector(".input")
const button = document.querySelector(".btn")
button.addEventListener("click", (event) => {
    if(user.value === "") {
    return
}
    alert(`Здраствуйте  ${user.value} !`)
    user.value = ""
})
