$(document).ready(function() {
  // MODAL
  var modalText = {
    yugiohpricechecker: {
      title: 'YugiohPriceChecker',
      tag: 'Full Card Catalogue Data Aggregator.',
      detail:
        'Utilizes yugiohprices and YugiohWikiApi in order to analyze market data and additional card information.',
      link: 'https://github.com/richardle17/YugiohPriceChecker'
    },
    tcgplayerscraper: {
      title: 'TCGPlayerScraper',
      tag: 'Automated Web Scraper for TCG Pricing Data.',
      detail:
        'TCGPlayerScraper is an automated Web Scraper using Selenium WebDriver and data parsing scripts to congregate pricing data of any amount and any specified cards based on user configs.',
      link: 'https://github.com/richardle17/TCGPlayerScraper'
    },
    covid19slackbot: {
      title: 'COVID-19 Slack Bot',
      tag: 'Specific Statistics at your Fingertips.',
      detail:
        'A Slack Bot programmed to provide COVID-19 Statistics at your command. Integrates well with work and community slack channels as a way to show data to present members. Developed in Python with Slack API.',
      link: 'https://github.com/richardle17/COVID19-SlackBot'
    },
    covid19dashapp: {
      title: 'COVID-19 Dashboard',
      tag: 'Track the curve. Save lives.',
      detail:
        'A COVID-19 statistics visualizer using python and Dash web app Plotly. Allows for easy selection of region and provides accurate, intuitive data. By analysing the curve of Covid-19 cases, we can flatten it and save lives.',
      link: 'https://github.com/richardle17/COVID19-DashApp'
    },
    covid19map: {
      title: 'COVID-19 Global Tracker Map',
      tag: 'A Global View of COVID-19.',
      detail:
        'A Global view of COVID-19 cases. Easily see the bigger picture when using the Global Tracker Map. Uses python and pyecharts for statistics processing and data visualization respectively.',
      link: 'https://github.com/richardle17/zorona-zirus-zracker'

    },
    dsa: {
      title: 'Data Structure & Algorithm Practice',
      tag: 'Mastering the fundamentals.',
      detail:
        "A collection and documentation of my studies of data structures and algorithms implemented in python. This repository's goal is to archive what I've learned and practiced. Mastering the fundamentals will yield in the highest quality results.",
      link: 'https://github.com/richardle17/data-structures-algorithms-practice'
    },
    website: {
      title: 'Richard Le Software Portfolio',
      tag: 'It all begins here.',
      detail:
        'Throughout my entire engineering career, I never really had a chance to look at web development from a graphical design or technical perspective. This is my first take on web development. Made using HTML and Javascript with open source web templates. But Im not an artist.',
      link: 'https://github.com/richardle17/richardle17.github.io'
    },
    awscamera: {
      title: 'AWS IoT Security Camera',
      tag: 'Monitoring and tracking when no one else can.',
      detail:
        'Security camera created using a Raspberry Pi Model 3B+. Developed using Python and AWS and Technologies such as S3, SES, SNS, and OpenCV'
    },

    supremebot: {
      title: 'Supreme Checkout Bot',
      tag: 'First to cop. Guaranteed.',
      detail:
        'An AHK (AutoHotKey) script designed to purchase a highly coveted Supreme item on drop day. Checkout is near instantaneous and the purchase will be guaranteed.'
    },
    osrspricegetter: {
      title: 'OSRS Price Getter',
      tag: 'Price up and Gear up. Without lifting a finger.',
      detail:
        'A tool to instantly price up item sets based on user configs. Built with Python and OSRS WikiApi. Features the ability to import any set of items configured.',
      link: 'https://github.com/richardle17/data-structures-algorithms-practice'
        },
//    kirby: {
//      title: 'Kirby Platformer',
//      tag: 'Have what it takes to win?',
//      detail:
//        'A simple yet challenging platformer video game based on the popular series: Kirby. Developed entirely in Java.',
//      link: 'https://github.com/richardle17/Kirby-Platformer'
//        },
    cryptobot: {
      title: 'Cryptocurrency Tracker Bot',
      tag: 'Currency of the Future.',
      detail:
        'A bot scripted to retrieve pricing data on cryptocurrencies. Never miss the chance to ride the cryptocurrency hype. Developed with python and integrated with Slack API..',
      link: 'https://github.com/richardle17/cryptobot'
        },
    aqislackbot: {
        title: 'Air Quality Slack Bot',
        tag: 'Accurate information and alerts at your command',
        detail:
        'An Air quality slack bot designed to retrieve accurate data with breezometer API. Configured to also send text message alerts using Twilio API.',
        link: 'https://github.com/richardle17/AirQualitySlackBot'
        }
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
