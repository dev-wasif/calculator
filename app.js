let inp = document.getElementById('inp')
inp.value='0'



function setNumber(val) {
   
    if (inp.value == 0){
     inp.value = val
     
      
    }else{
        inp.value += val
    
    }

}

function cal() {
    try {
        let output = eval(inp.value)
        inp.value = output

        if (output == 0) {
            document.getElementById('modal').classList.add('show')
        }

    } catch (error) {
        document.getElementById('modal-er').classList.add('show')
    }
}
    


function ac() {
    inp.value = '0'
}

function clearOne() {
    inp.value = (inp.value.slice(0, -1))
}

document.addEventListener('keydown', function(e) {
    const calculatorKeys = ['0','1','2','3','4','5','6','7','8','9',
                           '.', '+', '-', '*', '/', 'Enter', 'Escape', 'Backspace']
    
    if (calculatorKeys.includes(e.key)) {
        e.preventDefault()  // ✅ Sirf calculator keys block hongi
    }
    
    if (e.key >= '0' && e.key <= '9') setNumber(e.key)
    else if (e.key === '.') setNumber('.')
    else if (e.key === '+') setNumber('+')
    else if (e.key === '-') setNumber('-')
    else if (e.key === '*') setNumber('*')
    else if (e.key === '/') setNumber('/')
    else if (e.key === 'Enter') cal()
    else if (e.key === 'Escape') ac()
    else if (e.key === 'Backspace') clearOne()
})



function closeModal() {
    document.getElementById('modal').classList.remove('show')
}


document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) closeModal()
})



function closeModal_er() {
    document.getElementById('modal-er').classList.remove('show')
}


document.getElementById('modal-er').addEventListener('click', function(e) {
    if (e.target === this) closeModal_er()
})