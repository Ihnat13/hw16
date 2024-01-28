const btns = document.querySelectorAll(`.btn`)

const evenBtns = []
const oddBtns = []

btns.forEach((item,i)=>{
    item.textContent = i+1
    if((i+1) % 2 === 0) {
        oddBtns.push(item)
        
    }else{
        evenBtns.push(item)
    }
})

const evenBtnsPromise = evenBtns.map(btn => {
    return new Promise(resolve => {
        btn.onclick = () => resolve(btn.classList.add('active'),
        btn.disabled = true)
    })
})
const oddBtnsPromise = oddBtns.map(btn => {
    return new Promise((resolve) => {
        btn.onclick = () => resolve(
            btn.classList.add('active'),
            btn.disabled = true)
}
)})

const allPromiseEvenBtn = Promise.all(evenBtnsPromise)
.then(()=>{
    alert('even digits are all active')
})

const allPromiseOddBtn = Promise.all(oddBtnsPromise)
.then(()=>{
    alert('odd digits are all active')
})


Promise.all([allPromiseEvenBtn,allPromiseOddBtn])
    .then(()=>{
        alert('all digits are active')
    }) 


