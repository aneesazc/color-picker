const themes = document.getElementById('themes')
const colorPicker = document.getElementById('color-picker')
const colorBtn = document.getElementById('color-btn')

colorBtn.addEventListener('click', function(){
    
    const hexVal = colorPicker.value.slice(1, colorPicker.value.length)
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexVal}&mode=${themes.value}&count=5`)
        .then(res => res.json())
        .then(data => {
            let html = ""
            for (colorObj of data.colors){
                const displayColor = colorObj.hex.value
                html += 
                `<div class="card-container">
                    <div class="card" id= "${displayColor}" style="background-color:${displayColor}">
                    </div>
                    <p>${displayColor}</p>
                 </div>` 
            }
            document.getElementById('colors-container').innerHTML = html
            })
        
    
})