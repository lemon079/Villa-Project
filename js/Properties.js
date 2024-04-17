// Selecting individual card elements instead of NodeLists
let card__appartment = document.querySelectorAll('.card__appartment');
let card__villa = document.querySelectorAll('.card__villa');
let card__penthouse = document.querySelectorAll('.card__penthouse');
let buttonContainer = document.querySelector('.buttons');

let appartmentCard_Array = Array.from(card__appartment);
let penthouseCard_Array = Array.from(card__penthouse);
let villahouseCard_Array = Array.from(card__villa);

function hide(element){
   element.forEach(element=>{
        element.classList.add('hide');
        element.classList.remove('show');
    })
}

function show(element){
   element.forEach(element=>{
        element.classList.add('show');
        element.classList.remove('hide');
    })
}

buttonContainer.addEventListener('click', (event) => {
    let buttonText = event.target.innerText.toLowerCase();
            if(buttonText === 'show all'){
                show(appartmentCard_Array);
                show(penthouseCard_Array);
                show(villahouseCard_Array);
            }
            else if(buttonText === 'appartment'){
                show(appartmentCard_Array);
                hide(penthouseCard_Array); 
                hide(villahouseCard_Array);
            }
            else if(buttonText === 'villa house'){
                show(villahouseCard_Array);
                hide(appartmentCard_Array);
                hide(penthouseCard_Array);
            }
            else if(buttonText === 'pent house'){
                show(penthouseCard_Array);
                hide(villahouseCard_Array);
                hide(appartmentCard_Array);
            }
});
