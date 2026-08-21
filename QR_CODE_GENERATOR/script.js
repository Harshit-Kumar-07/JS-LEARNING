let link = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`

function generateQR(){
    let text = document.getElementById('input').value
    let final_link = link + text
    document.getElementById('image').src = final_link
}


document.getElementById('search_btn')
.addEventListener('click',generateQR)

document.getElementById('input')
.addEventListener('keydown',function(event){
    if(event.key==='Enter')generateQR()
})

