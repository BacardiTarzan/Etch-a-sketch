const container = document.querySelector('#container');

container.style.display = 'grid';

function shakeEtch(){
    while (container.firstChild){
        container.removeChild(container.lastChild);
    }
    for(let i = 0; i <= 100; i++){
       for(let i = 0; i <= 100; i++){
        let newDiv = document.createElement('div');
        newDiv.addEventListener('mouseover', (e) => e.target.style.backgroundColor = 'black')
        newDiv.style.height = '100%';
        newDiv.style.width = '100%';
        container.appendChild(newDiv);
      }
   }    
}
