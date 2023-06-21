 class Home {

    constructor(){} 
    
    btnAdd(){
        let p:HTMLElement=document.getElementById("p1")
        p.innerHTML="mel"
    }
}
(<any>window).Home = new Home()

