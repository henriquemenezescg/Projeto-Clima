document.querySelector('.busca').addEventListener('submit',(event)=>{
  event.preventDefault();

  let input = document.querySelector('#searchInput').value;

  if(input !== ''){
    showWarning('Carregando...');

    let url  = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=729a06ff655b1ed34a796a982231dabf&units=metric&lang=pt_br`;
  }

});

function showWarning(msg){
  document.querySelector('.aviso').innerHTML = msg;
}