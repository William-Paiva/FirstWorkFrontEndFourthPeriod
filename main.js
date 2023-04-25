let contador = 1

setInterval(function(){
    document.getElementById("slide" + contador).checked = 1
    contador++
    if(contador>4)
        contador = 1
}, 4000)

const theme = document.getElementById('check')
const bg = document.getElementById('theme')

theme.addEventListener('change', () => {
    
    if(theme.checked){
        bg.classList.add('dark_theme')
        bg.classList.remove('light_theme') 
    }else{   
        bg.classList.add('light_theme')
        bg.classList.remove('dark_theme') 
    }
})






