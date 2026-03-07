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
    let output = eval(inp.value)
    inp.value = output
    if (inp.value == 0 ){
        document.getElementById('modal').classList.add('show')
    } 
    else {
        let output = eval(inp.value)
        inp.value = output
    }
    }
    


function ac() {
    inp.value = '0'
}

function clearOne() {
    inp.value = (inp.value.slice(0, -1))
}

inp.blur()  

document.addEventListener('keydown', function(e) {
    e.preventDefault()  
    
    if (e.key >= '0' && e.key <= '9') setNumber(e.key)
    else if (e.key === '.') setNumber('.')
    else if (e.key === '+') setNumber('+')
    else if (e.key === '-') setNumber('-')
    else if (e.key === '*') setNumber('*')
    else if (e.key === '/') setNumber('/')
    else if (e.key === 'Enter') cal()
    else if (e.key === 'Escape') ac()
    else if (e.key === 'Backspace') clearLast()
})






function closeModal() {
    document.getElementById('modal').classList.remove('show')
}


document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) closeModal()
})