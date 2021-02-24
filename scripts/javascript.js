//id list of side nav bar
const homePage = document.getElementById("welcomePage")
const signUp = document.getElementById("signup-area")
const logIn = document.getElementById("login-area")
const about = document.getElementById("about")
const services = document.getElementById("services")
const contact = document.getElementById("contacts")
const transaction = document.getElementById("transaction-area")

//invisible area enable
function invisibleArea() {
    signUp.classList.add("d-none")
    logIn.classList.add("d-none")
    about.classList.add("d-none")
    homePage.classList.add("d-none")
    services.classList.add("d-none")
    contact.classList.add("d-none")
    transaction.classList.add("d-none")
}

//visible area handler
const menuBtnHandler = (id) => {
    invisibleArea()
    let visibleArea = document.getElementById(id)
    visibleArea.classList.remove("d-none")
}

const depositeBtn = document.getElementById("addDeposit")
depositeBtn.addEventListener("click", function () {
    const depositNumber = getInputNumber("depositAmount")
    updateSpanText("currentDeposit", depositNumber)
    updateSpanText("currentBalance", depositNumber)
    document.getElementById("depositAmount").value = ""
})
//withdraw button handler
const withdrawBtn = document.getElementById("addWithdraw")
withdrawBtn.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmount")
    updateSpanText("currentWithdraw", withdrawNumber)
    updateSpanText("currentBalance", -1 * withdrawNumber)
    document.getElementById("withdrawAmount").value = ""
})
//capture input and transform into number type from user
function getInputNumber(id) {
    const amount = document.getElementById(id).value
    const amountNumber = parseFloat(amount)
    if(amountNumber>0){
        return amountNumber
    }
    else{
        alert("Value can't be negative")
        location.reload()
    }
}
//update total balance after deposite
function updateSpanText(id, addedNumber) {
    const current = document.getElementById(id).innerText
    const currentNumber = parseFloat(current)
    const totalAmount = addedNumber + currentNumber
    document.getElementById(id).innerText = totalAmount
}