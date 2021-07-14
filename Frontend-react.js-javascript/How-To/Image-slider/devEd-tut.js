// var colr = ["#222fe3" , "#5f27cd" , "#ee5253" ,"#222fe3" ];
// var i = 0;
// document.querySelector(".btni button ").addEventListener("click" , function(){
//     i = i < colr.length ? ++i : 0;
//     document.querySelector("body").style.backgroundColor = colr[i]
// })

const carosel_slide = document.querySelector('.carosuel')
// const carosel = document.querySelector(' class or id of the element jisko apnko store krna hai ess container meh ')

const carosel_img = document.querySelector('.carosuel img')
// thus toh mtlb apnne sari sabhi images ess carosel_img meh store kr li hai.
// yeh function ek array return krta hai. 

const nextbtn = document.querySelector('.nextbtn')
const prevbtn = document.querySelector('.prevbtn')
const para = document.querySelector('.goog')
para.style.backgroundColor = "#222f3e";

// counter 
//(now aab apn counter banayenge:) 
let counter = 1;
// const size = carosel_img[0].clientWidth
let size = 500
// size = 800;

// carosel_slide.style.transform = 'translateX(' + (-size * counter) + ' px)';
// carosel_slide.style.transform = 'translateX(' + (size) + ' px)';
// carosel_slide.style.transform = 'translateX(-500px)'
// nextbtn.style.backgroundColor = "#5f27cd";

nextbtn.addEventListener('click', ()=>{
    carosel_slide.style.transition = " transform 1s ease-in-out"
    counter++;
      console.log(counter)
      // carosel_slide.style.transform = 'translateX(-500px)';
      carosel_slide.style.transform = 'translateX('+ (-size*counter)+'px )';
      
    })
    
    prevbtn.addEventListener('click', ()=>{
        if(counter <= 0) return;
        carosel_slide.style.transition = " transform 1s ease-in-out"
        counter--;
       
        console.log(counter)
    // carosel_slide.style.transform = 'translateX(' + (-size * counter) + ' px)';
    carosel_slide.style.transform = 'translateX('+ (-size*counter)+'px)'
})

carosel_slide.addEventListener('transitionend', ()=>{
    console.log("fired")
    // mtlb jaise hi yeh tranistion end hoga then vaha yeh function run hojayega.
    console.log(carosel_img[counter])
    console.log("the value is ")
    console.log(carosel_img.length)
    console.log("yes it is undefined")
    if(carosel_img[7].id == 'last_clone'){
       
        carosel_slide.style.transition = "none";
        counter = carosel_img.length -2;
        carosel_slide.style.transform = 'translateX('+ (-size*counter)+'px)'
    }
    if(carosel_img[7].id == 'first_clone'){
       
        carosel_slide.style.transition = "none";
        counter = carosel_img.length -counter;
        carosel_slide.style.transform = 'translateX('+ (-size*counter)+'px)'
    }
})
