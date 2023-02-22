$('.my-slider').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.ma-slider').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: '<img src="icons/resourses/prev.svg" alt="prev" class="prev">',
    nextArrow: '<img src="icons/resourses/next.svg" alt="next" class="next">',
    autoplay: true,
    autoplaySpeed: 2000
  });



$('.mi-slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  arrow: false,
  autoplay: true,
  autoplaySpeed: 2000
});


window.addEventListener('DOMContentLoaded', function() {

let acc = document.getElementsByClassName("accordion"),
    i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
     panel.classList.toggle('panel_active');
  });
}

const menu = document.querySelector('.menu'),
menuItem = document.querySelectorAll('.menu__item'),
hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    })
})

});

//validate
function validateForms(form){
  $(form).validate({
      rules: {
          email: {
              required: true,
              email: true
          }
      },
      messages: {
          email: {
            required: "Enter your email",
            email: "Email address entered incorrectly"
          }
      }
  });
};

validateForms('#newsletter form');

//send form 
$('form').on('submit', function(e) {
  e.preventDefault();
  $.ajax({
      type: "POST",
      url: "./mailer/smart.php",
      data: $(this).serialize()
  }).done(function() {
      $(this).find("input").val("");
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
  });
  return false;
});

$('.modal__close').on('click', function() {
  $('.overlay, #thanks').fadeOut('slow');
});


