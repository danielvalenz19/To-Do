const input = document.querySelector('input'); //DONDE VA IR EL TO DO BASICAMENTE   
const addBtn= document.querySelector('.btn-add');//BOTON PARA AÑADIR UNA TAREA 
const ul = document.querySelector("ul");//LA LISTA DONDE SE AGREGARA TODOS LOS ELEMENTOS
const empty= document.querySelector('.empty');//PARRAFO QUE MOSTRARA CUANDO NO ESTARA UN TO DO 

addBtn.addEventListener('click', (e) =>{
    e.preventDefault();


    const text = input.value;

    if(text !== ""){
        const li=document.createElement('li');
        const p=document.createElement('p');
        p.textContent=text;
    
        li.appendChild(p);
        li.appendChild(addDelete()); 
        ul.appendChild(li);
    
        input.value =" ";
        empty.style.display="none";
    }

})

function addDelete(){
    const deleteBtn =document.createElement('button');

    deleteBtn.textContent="x";
    deleteBtn.className="btn-delete";
    
    deleteBtn.addEventListener('click', (e) =>
    {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll('li');
        if(items.length === 0){
            empty.style.display="block";
        }

    })
    return deleteBtn;
}