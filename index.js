var dragDrop=document.querySelector(".AppBody");
var dragText=dragDrop.querySelector("h3");
let button=dragDrop.querySelector("button");
let input=dragDrop.querySelector("input");
let file;


button.addEventListener("click",()=>{
    input.click();
});

input.addEventListener("change", function(){
    file=this.files[0];
    dragDrop.classList.add("active")
    myShow();

});

dragDrop.addEventListener("dragover", (event)=>{
    event.preventDefault();
    dragText.textContent="Release to Upload File";
    dragDrop.classList.add("active");
});



dragDrop.addEventListener("dragleave", function(){
    dragDrop.classList.remove("active");
    dragText.textContent="Drag & Drop";
});

dragDrop.addEventListener("drop", (event)=>{
    event.preventDefault();
    file=event.dataTransfer.files[0];
    myShow();
})

function myShow(){
    let filShow=file.type;
    let valid=["image/png", "image/jpg"];

    if(valid.includes(filShow)){
        let reader=new FileReader();
        reader.addEventListener("load", function(){
            let imgageUrl=reader.result;
            let img=`<img src="${imgageUrl}" alt="">`;
            dragDrop.innerHTML=img
        })

        reader.readAsDataURL(file);
    }else{
        alert("Not Valid")
        dragDrop.classList.remove("active");
        dragText.textContent="Drag & Drop";


    }
}
    
