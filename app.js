const counter = document.getElementById('count')
const counterBtn = document.querySelector('.counter-btn')
let count = 0
let alertCount = 1

const handleAlert = () => {
    if (count === (10 * alertCount)) {
        alertCount += 1
        console.log(alertCount)
        alert(`You clicked ${count} time!`)
    }
}

counterBtn.addEventListener('click', () => {
    count += 1
    counter.innerText = count
    handleAlert()
})