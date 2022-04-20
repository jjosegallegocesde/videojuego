let menu=document.getElementById("menu")

window.addEventListener("scroll",function(){

    if(document.documentElement.scrollTop<=150){

        menu.classList.add("menu")
        menu.classList.remove("menu2")

    }else{

        menu.classList.add("menu2")
        menu.classList.remove("menu")

    }

})