const url = new URL(window.location.href)
const params = url.searchParams;
const nama_tamu_all = document.querySelectorAll('#nama_tamu')


const param_name = params.get('to');
nama_tamu_all.forEach((nama_tamu)=>{
    nama_tamu.innerText = param_name;
})

// fitur salin
const copys = document.querySelectorAll('#gift .salin')
const text_salin_all = document.querySelectorAll('#gift .text_salin')

copys.forEach((copy_btn,index)=>{
    copy_btn.addEventListener('click',()=>{
        const text_copy = text_salin_all[index].textContent

        navigator.clipboard.writeText(text_copy)
       
        copy_btn.innerHTML='<i class="far fa-copy"></i> Text berhasil disalin'
        setTimeout(()=>{
            copy_btn.innerHTML=' <i class="far fa-copy"></i> Salin Rekening'
        },1500)
    })

})


// fitur kirim wa
const form_wa = document.querySelector('#rsvp #form_wa')
const kirim = document.querySelector('#rsvp #kirim_wa')

kirim.addEventListener('click',(e)=>{
    e.preventDefault();
    const nama =document.getElementById('nama').value
    const kehadiran = document.querySelector('input[name="kehadiran"]:checked').value
    const pesan =document.getElementById('pesan').value
    
    const link_wa = `https://wa.me/62895352825628?text=Nama: ${nama}%0AKehadiran: ${kehadiran}%0APesam: ${pesan}`

    window.open(link_wa,'_blank')
})



// checked box rsvp
const datang = document.querySelector('#datang')
const tidakDatang = document.querySelector('#tidak_datang')
datang.addEventListener('change',function(){
    if(datang.checked){
        tidakDatang.checked = false
    }
})
tidakDatang.addEventListener('change',function(){
    if(tidakDatang.checked){
        datang.checked = false
    }
})


// PUTAR MUSIK
const musik = document.querySelector('.musik')
const iconMusik = document.querySelector('.musik i')
const sound = document.querySelector('audio')
let jalan = false

musik.addEventListener('click',function(){
  console.log('ok')
  if(jalan){
    sound.pause()
    musik.classList.remove('muter')
    iconMusik.classList.add('fa-play')
}else{
    musikPutar()
    iconMusik.classList.remove('fa-play')
    musik.classList.add('muter')
  }
  jalan = !jalan
    
})


// penutup layer
const btn = document.querySelector('#tutup a')
const tutup = document.querySelector('#tutup')


btn.addEventListener('click',function(){
    tutup.classList.add('move')
    musikPutar()
    jalan = true
    
})


// fungsi mutar musik
function musikPutar(){
    sound.play()
    sound.volume = .4
}


