// --------------> BEST DEALS
let buttonContainer = document.querySelector('.buttons');
let coverAppartment = document.getElementById('coverAppartment');
let coverPentHouse = document.getElementById('coverPentHouse');
let coverVillaHouse = document.getElementById('coverVillaHouse');

function show(element){
    element.classList.add('show');
    element.classList.remove('delete');
}

function hide(element){
    element.classList.add('hide');
    element.classList.remove('show');
}

buttonContainer.addEventListener('click',function(event){
    let buttonText = event.target.innerText.toLowerCase();

    if(buttonText === 'appartment'){
        show(coverAppartment);
        hide(coverVillaHouse);
        hide(coverPentHouse);
    }
    else if(buttonText === 'villa house'){
        show(coverVillaHouse);
        hide(coverAppartment);
        hide(coverPentHouse);
    }
    else if(buttonText === 'pent house'){
        show(coverPentHouse);
        hide(coverAppartment);
        hide(coverVillaHouse);
    }

})