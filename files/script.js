$(document).ready(function () {
  // info 1 - pobieramy wezły drzewa HTML, zyskujemy dostęp do tych obiektów. Używanie w nazwach zmiennych $ jest konwencją stosowaną przy zmiennych w których przechowujemy obiekty jQuery.
  var $doc = $(document); //var bo mobilne starsze jeszcze ecma6 nie mają i nei pójdzie tam :).
  var $header = $("header");
  var $slide = $(".slide");
  var $courses = $("#courses");
  var $harmo = $("#harmo");
  var $reason = $("#reason");
  var $faq = $(".faq");
  var $newsletter = $('.newsletter')
  var $contact = $("#contact");
  var $main = $("main");
  var $logo = $('.logo');


  //STRZAŁKA NA GÓRZE
  $arrowDown = $(".arrow");
  $arrowDown.on("click", function () {
    $('body,html').animate({
      scrollTop: $main.offset().top
    }, 1500, function () {})
  });

  //ZAPISZ SIĘ
  $signUp = $(".signup");
  $signUp.on("click", function () {
    $('body,html').animate({
      scrollTop: $reason.offset().top
    }, 2000, function () {})
  });

  //MENU
  $('li.courses').click(function () {
    $('body,html').animate({
      scrollTop: $courses.offset().top
    }, 1000, function () {})
  });

  $('li.harmo').click(function () {
    $('body,html').animate({
      scrollTop: $harmo.offset().top
    }, 1000, function () {})
  });

  $('li.reason').click(function () {
    $('body,html').animate({
      scrollTop: $reason.offset().top
    }, 1000, function () {})
  });

  $('li.questions').click(function () {
    $('body,html').animate({
      scrollTop: $faq.offset().top
    }, 1000, function () {})
  });

  $('li.contact').click(function () {
    $('body,html').animate({
      scrollTop: $newsletter.offset().top
    }, 1000, function () {})
  });

  $('li.signUp').click(function () {
    $('body,html').animate({
      scrollTop: $newsletter.offset().top
    }, 1000, function () {})
  });

  //OPACITY NA SCROLOWANIE (I STRZAŁKĘ)
  $doc.on('scroll', function () {
    var scrollPos = $doc.scrollTop(); //jak daleko przewineliśmy
    var sectionOffset = $main.offset().top; //gdzie jest dany element, na jakiej wysokoscio od początku strony się zaczyna.
    //console.log(scrollPos);
    //console.log(sectionOffset);

    if (scrollPos < sectionOffset) {
      $header.css('opacity', 1 - 1.2 * scrollPos / sectionOffset);
    }
  });

  // WIĘCEJ W HARMONOGRAMIE

  $('.showMeMore').on(
    "click",
    function () {
      $(this).toggleClass("vis");
      var change = $(this).parent().parent();

      $('.moreInfo', change).toggleClass("hide")
    });


  /* Pytanie - otwieranie */

  $('.question').on(
    "click",
    function () {
      if ($('.show', this).text() === "+") {
        console.log("+");
        $('.name', this).addClass('open')
        $('div.open + article', this).slideDown();
        $('.show', this).text("-");
      } else if ($('.show', this).text() === "-") {
        console.log("-");
        $('.name', this).removeClass('open')
        $('article', this).slideUp();
        $('.show', this).text("+");
      }

    });
  /*
  $('.question').on(
    "click",
    function () {
      if ($('.show', this).text() === "+") {
        console.log("+");
        $('.name', this).addClass('open')
        $(this).addClass('open')
        $('div.open + article', this).slideDown();
        $('.show', this).text("-");
      } else if ($('.show', this).text() === "-") {
        console.log("-");
        $('.name', this).removeClass('open')
        $(this).removeClass('open')
        $('article', this).slideUp();
        $('.show', this).text("+");
      }

    });
*/
  // hamburger

  $('.navIcon').click(function () {
    $(this).toggleClass('open');
    $('.mobile ul').toggleClass('hide');
    $('.mobile ul').toggleClass('open');
  });

  $('.mobile li').click(function () {
    $('.navIcon').removeClass('open');
    $('.mobile ul').addClass('hide');
    $('.mobile ul').removeClass('open');
  });


  //SLIDER
  /*
  setInterval(function () {
    $header = $('header section').css("background-color");
    console.log($header)
    if ($header == "rgb(77, 155, 156)") {
      $('header section').css("background-color", "rgb(0,0,0)");
    } else if ($header == "rgb(0, 0, 0)") {
      $('header section').css("background-color", "rgb(34, 12, 32)");
    } else {
      $('header section').css("background-color", "rgb(77, 155, 156)");
    }

  }, 8000)
  */

  //Wybór kursu
  $(".study1 figure:nth-child(1)").on("click", function () {
    $(".study1 figure").removeClass("selected");
    $(this).addClass("selected");
    $(".study1 div.art").removeClass("selected");
    $(".study1 div.art:nth-child(1)").addClass("selected");
  });

  $(".study1 figure:nth-child(2)").on("click", function () {
    $(".study1 figure").removeClass("selected");
    $(this).addClass("selected");
    $(".study1 div.art").removeClass("selected");
    $(".study1 div.art:nth-child(2)").addClass("selected");
  });

  $(".study1 figure:nth-child(3)").on("click", function () {
    $(".study1 figure").removeClass("selected");
    $(this).addClass("selected");
    $(".study1 div.art").removeClass("selected");
    $(".study1 div.art:nth-child(3)").addClass("selected");
  });


  //Wybór kursu dwa

  $(".study2 figure:nth-child(1)").on("click", function () {
    $(".study2 figure").removeClass("selected");
    $(this).addClass("selected");
    $(".study2 div.art").removeClass("selected");
    $(".study2 div.art:nth-child(1)").addClass("selected");
  });

  $(".study2 figure:nth-child(2)").on("click", function () {
    $(".study2 figure").removeClass("selected");
    $(this).addClass("selected");
    $(".study2 div.art").removeClass("selected");
    $(".study2 div.art:nth-child(2)").addClass("selected");
  });

  $(".study2 figure:nth-child(3)").on("click", function () {
    $(".study2 figure").removeClass("selected");
    $(this).addClass("selected");
    $(".study2 div.art").removeClass("selected");
    $(".study2 div.art:nth-child(3)").addClass("selected");
  });

  /*console.log(this);
  console.log($("figure:nth-child(2)"));

  if (this == $("figure:nth-child(2)")) {
    $(".art:nth-child(2)").toggleClass("selected");
  }
  */


}); //zamykamy funkcje w ready jQ
