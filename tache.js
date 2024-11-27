
let form= document.getElementById("task-form"); //le id du form c'est task form


//tout ca c'est pour empecher le rafraichissement de la page et ajouter un li dans le ul
form.addEventListener("submit", function(event){//adeventlistener est un element d'evenement exemple: ajouter un element dans une liste en cliquant sur le bouton ajouter
    event.preventDefault();//element pour empecher un rafraichissement
    let input= document.getElementById("task-input"); //le id de l'input c'est yask input
    let inputValue= input.value //recuperer la valeur de ce qu'il y a dans le input ce que va taper l'utilisateur
    let li= document.createElement("li");//pour creer un li dans le ul
    li.textContent=inputValue;// pour ajouter a la liste affichee
    let ul =document.getElementById("task-list");// le id du ul c'est task-list
    ul.appendChild(li);//c'est pour appeler l'enfant (ici li) pour le mettre dans le parent (ici ul)
    let button= document.createElement("button");
    button.textContent="supprimer";
    li.appendChild(button);
    button.addEventListener("click", function(a){
    ul.removeChild(li); })
    let buton=document.createElement("button");
    buton.textContent="modifier";
    buton.addEventListener("click",function(i){
    let input=document.createElement("input")
    ul.firstChild(li) ;})
    li.appendChild(buton);
    input.addEventListener("click",function(e){
        let input=document.createElement("input")
    })
    form.appendChild(input);


})
