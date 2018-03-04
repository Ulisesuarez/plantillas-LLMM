function esconderDiv() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

window.onload=function(){

    alert("Bienvenida");
}

function agranda(){
    element=document.getElementById("verde");
    styleel=document.defaultView.getComputedStyle(element,null); // segundo parametro ej:null, "hover", "first-letter" taicionero con hover  
    //if (parseInt(styleel.height)<300){
    element.style.height=(parseInt(styleel.height)+5)+'px';
    //}
    //else{
       // console.log(parseInt(styleel.height));
       // document.getElementById("verde").innerHTML = '<p>TAS PASAU!</p>';
        
    //}
        
    
    }
