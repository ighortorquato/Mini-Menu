const list = document.querySelectorAll('.list')
function activeLink(){
    list.forEach((i) => i.classList.remove('active'));
    this.classList.add('active')
}
list.forEach((i)=>i.addEventListener('click',activeLink))