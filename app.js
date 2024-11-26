let btn = document.querySelector("button");
let ip=document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    let del = document.createElement("button");
    // let br = document.createElement("br");
    item.innerText = ip.value;
    del.innerText = "Delete";
    del.classList.add("delete");                                                                    
    ul.appendChild(item)
    item.appendChild(del);
    // ul.appendChild(br);
    console.log(ip.value);
    ip.value ="";        // IP-box reset value 
}); 


//deletion
ul.addEventListener("click",function (event){
    
    if(event.target.nodeName=="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
    
})



// let dels = document.querySelectorAll(".delete");
// for(dl of dels ){
//     dl.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove(); 

//     });
// }
