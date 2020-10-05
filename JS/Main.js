let tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 750,
  });
  tl.add({
    targets: ".menu-img1",
    duration: 2000,
    rotate:"3turn",
    delay: anime.stagger(200),
  });

let menuOpen = () => {
  let tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 750,
  });
  tl.add({
    targets: ".menu-img1",
    duration: 200,
    opacity:0,
    delay: anime.stagger(200),
  });
  tl.add({
    targets: ".nav-div",
    duration: 700,
    right:'0',
    opacity:1,
    delay: anime.stagger(200),
  });
   tl.add({
    targets: ".links",
    duration: 1000,
    opacity:1,
    delay: anime.stagger(200),
  });
  

}

let menuClose = () => {
let navDiv = document.querySelector(".nav-div");
navDiv.style.right = '-100' + "%";
let tl = anime.timeline({
  easing: "easeOutExpo",
  duration: 750,
});
tl.add({
  targets: ".menu-img1",
  duration: 500,
  opacity:1,
  delay: anime.stagger(200),
});
}

let signUpForm  = () =>{
  let tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 750,
  });
  tl.add({
    targets: ".sign-up-form",
    duration: 500,
    left:'-10',
    opacity:1,
    delay: anime.stagger(200),
  });
}

let loginForm = ()  =>{
  let tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 750,
  });
  tl.add({
    targets: ".sign-up-form",
    duration: 500,
    left:'-1000',
    opacity:1,
    delay: anime.stagger(200),
  });
}

/*Form Validation 
(Client Side) */
//Sign Up
let  validation = () =>{
let email = document.getElementById("semail").value;
let password = document.getElementById("spwd").value;
let con_Password = document.getElementById("cpwd").value;
let regexForEmail = /^([a-z A-Z 0-9 \. -]+)@([a-z A-Z 0-9 -]+).([a-z]{2,20}).([a-z]{2,10})?$/;
if(!regexForEmail.test(email)){
  Swal.fire({
    icon: 'error',
    title: 'Invalid Email Address',
    text: 'Try Again', 
  })
  return false;
}
if(password < 6){
  Swal.fire({
    icon: 'warning',
    title: 'Password Is Too Weak',
    text: 'Give Atleast 6 Chars ', 
  })
  return false;
}
if(password != con_Password ){
  Swal.fire({
    icon: 'question',
    title: 'Oops',
    text: 'Password And Confirm Password Must Be Same! ', 
  })
  return false;
}

}

//Contact Form Validation
let  contactFormSub = () =>{
  let email = document.getElementById("conEmail").value;
  let name = document.getElementById("conName").value;
  let phone = document.getElementById("conPhone").value;
 
  let regexForEmail = /^([a-z A-Z 0-9 \. -]+)@([a-z A-Z 0-9 -]+).([a-z]{2,20}).([a-z]{2,10})?$/;
  if(!regexForEmail.test(email)){
    Swal.fire({
      icon: 'error',
      title: 'Invalid Email Address',
      text: 'Try Again', 
    })
    return false;
  }

  let regexForPhone = /^([6-9])([0-9]{9,9})$/;
  if(!regexForPhone.test(phone)){
    Swal.fire({
      icon: 'error',
      title: 'Invalid Phone No!',
      text: 'Try Again', 
    })
    return false;
  }

}







//Counter JS 
$(document).ready(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
})
