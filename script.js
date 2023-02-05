const html = document.documentElement;
const div = document.querySelector("div");
const div_width = div.offsetWidth;
/** Angle max que va accomplir ma div lors de la rotation*/
let angleDestination = 5;

/**
 * Lorsque la souris bouge
 */
document.documentElement.addEventListener("mousemove",(e)=>{
    
        /**
         * Je concaténe le resultat de float y(x)
         * comme ceci
         * "ydeg";
         */
        html.style.setProperty("--var-angle",`${y(e.clientX)}deg`)
        /**
         * TODO
         * J'essaye de faire bouger le vecteur de direction 
         * de l'angle avec le curseur de la souris
         * Problème : les varible css --var-x et --var-y ne semble pas 
         * se mettre à jours correctement
         */
        const mousePos = getMousePosition(e);
        html.style.setProperty("--var-x",`${mousePos.x}`)
        html.style.setProperty("--var-y",`${mousePos.x}`)
});

function y(x){
    /**
     * Je deplace l'ordonnée a l'origine x de div_width/2 (la
     *  largeur de mon image)
     * Je fais un produit en croix de ce x soit
     * div_width/2 -> angleDestination
     * x - > x * angleDestination/(div_width/2)
     * Soit y(x) = x * *angleDestination/(div_width/2)
     */
    return (x-div_width/2)*angleDestination/(div_width/2);
}


function getMousePosition(e){
   
    const x = e.clientX - window.innerWidth/2;
    const y = e.clientY- window.innerHeight/2;
    const finalPos = {
        x : parseFloat((x/(window.innerWidth/2)).toFixed(2)),
        y : parseFloat((y/(window.innerHeight/2)).toFixed(2))
    }
    return finalPos;
}