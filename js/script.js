
function change(){
    if(window.pageYOffset > 450){
        document.getElementById('nav').style.display= "none";
        document.getElementById('navv').style.display= "block";
        document.getElementById('navv').style.transition= "0.1s";
    }
    else{
        document.getElementById('navv').style.display="none";
        document.getElementById('nav').style.display= "block";
        
    }
    
    
}
$('.count').counterUp({
        delay:10,
        time:3000,
    }
)
