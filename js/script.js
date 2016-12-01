function c(e){
  console.log(e)
}

$(document).ready(function(){
  window.sr = ScrollReveal({reset:true});
  $("#fullpage").fullpage({
    anchors: ['first','second','third','fourth','fifth'],
    menu: '#nav',
    scrollingSpeed: 1000,
    scrollBar:true,
    afterLoad:function(a,i){
      sr.reveal('h1',{duration:600,origin:'left',distance:'100%',delay:500})
      sr.reveal('p',{duration:600,origin:'bottom',distance:'100%',scale:1,delay:700})
    }
  })

  $(".preloader").stop().fadeOut(500)
})
