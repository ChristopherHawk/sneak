
const gridPicture = document.getElementById('gridPicture');
const btnBarsMenu = document.getElementById('btnBarsMenu');
const menuResponsive1 = document.getElementById('menuResponsive1');
const menuResponsive2 = document.getElementById('menuResponsive2');
const menuResponsive3 = document.getElementById('menuResponsive3');
const menuResponsive4 = document.getElementById('menuResponsive4');
const downBtn = document.getElementById('downBtn');



//OPEN MENU

btnBarsMenu.addEventListener('click', ()=>{ 
  var openMenu = false
  let menuValue = document.documentElement.style.getPropertyValue('--openMenu');
  if(openMenu === false){
    document.documentElement.style.setProperty('--openMenu', '246px');
    openMenu = true    
  }
  if(menuValue === '246px'){
    document.documentElement.style.setProperty('--openMenu', '0px');
    openMenu = false
  }  
})
//SELECT OPTIONS MENU
menuResponsive1.addEventListener('click', ()=>{
  document.documentElement.style.setProperty('--openMenu', '0px');
})
menuResponsive2.addEventListener('click', ()=>{
  document.documentElement.style.setProperty('--openMenu', '0px');
})
menuResponsive3.addEventListener('click', ()=>{
  document.documentElement.style.setProperty('--openMenu', '0px');
})
menuResponsive4.addEventListener('click', ()=>{
  document.documentElement.style.setProperty('--openMenu', '0px');
})

//SHOW MORE GRID
downBtn.addEventListener('click', ()=>{
  var showMore = false
  let showMoreValue = document.documentElement.style.getPropertyValue('--showMore');
  if(showMore === false){
    document.documentElement.style.setProperty('--showMore', '100%');
    downBtn.innerHTML='SHOW ME LESS'
    showMore = true;
  }
  if(showMoreValue === '100%'){
    document.documentElement.style.setProperty('--showMore', '200px');
    downBtn.innerHTML='SHOW ME MORE'
    showMore = false;    
  }  
  
})
//GET JSON
function getData(){const xhttp= new XMLHttpRequest();
  
xhttp.open('GET', '/resources/data.json', true);
xhttp.send();

xhttp.onreadystatechange = function(){

if(this.readyState == 4 && this.status == 200){
let newVar =JSON.parse(this.responseText);
gridPicture.innerHTML='';

for(let item of newVar){
    gridPicture.innerHTML +=`
    <div id='pictures' style="background-image: url('${item.image}')" > 
    <div id="infoPicture">
    <h1 id='textInfo1'>${item.titulo}</h1>
    <h4 id='textInfo2'> ${item.lugar}</h4>  
    </div></div>`   
  }
 }
}}


getData()


