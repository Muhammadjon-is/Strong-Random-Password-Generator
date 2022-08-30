
   

    // Parse a password wtring into a numeric value 
    //string password
    // return number 
    
    let evaluatePassword = (password) => {
        let score =0;
        score = password.length
        score = (password.match(/[!]/gmi)) ? score + (password.match(
            /[!]/gmi).length * 3) :score;
            score = (password.match(/[A-Z]/gm)) ? score + 3 : score;
          score = ( password.match(/[1-9]/gmi)) ? score +3 : score;
          return score;
        };


  // convert a numeric score into an object of DOM update data.

  
  let scoreToData = (score) => {
    if(score >= 30) {
        return{
            width:"100%",
            color:'#26de81',
            label:'Strong',
    };
    }
    else if (score >= 20) {
     return{
        width:'66%',
        color: '#fd9644',
        label:'Medium'
     };
    }
     else {
   return {
    width:'33%',
    color:'#fc5c65',
    label: 'Weak'
   }
    }
  }
 window.addEventListener("DOMContentLoaded", () => {
    // get Elemenent  refs.
  let p = document.querySelector('.js--password');
  let b = document.querySelector('.js--password-bar');
  let d = document.querySelector(".js--password-text");
  // Listen for updaates to password field
   p.addEventListener("input", () => {
    // Convert current value to data.
    let data = scoreToData(evaluatePassword(p.value));
    // Update DOM
    b.style.width = data.width;
    b.style.background = data.color;
    d.innerText = data.label;

 

})


})

    
function seePassword() {
    var pass = document.getElementById("password");
    if(pass.type === "password" ){
        pass.type = 'text';

    } else {
        pass.type = "password"
    }
 } 


