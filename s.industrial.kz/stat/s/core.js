/* Функция ловит события скролла и передает прозрачность верхнему меню,
когда позиция ниже 40px.
Анимания происходит через CSS */
function main_menu_opacity_bg() {
    if ($(window).scrollTop() <= 40) {
        $('#main-menu').css('background', 'rgba(255,255,255,0)');
        $('#main-menu').css('box-shadow', 'none');
    }
    else {
        $('#main-menu').css('background', 'rgba(255,255,255,1)');
        $('#main-menu').css('box-shadow', 'rgba(0, 0, 0, .2) 0px 1px 3px');
    }
}
main_menu_opacity_bg();
$(window).scroll(function() {
    main_menu_opacity_bg();
});

//Ленивая загрузка
$(function() {
        $('.lazy').show().lazy({
          effect: "fadeIn",
          effectTime: 500,
          threshold: 0
        });
    });
$(function() {
    $('.slider-for').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     fade: true,
     lazyLoad: 'ondemand',
     asNavFor: '.slider-nav'
   });
   $('.slider-nav').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     lazyLoad: 'ondemand',
     asNavFor: '.slider-for',
     dots: true,
     centerMode: true,
     focusOnSelect: true
   });
});

$(function() {
    $('.cart-slider-reviews').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      variableWidth: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
});

$(function() {
    $('.cart-slider-clients').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 6,
      variableWidth: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 6
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        }
      ]
    });
});
// Yandex Map
//Переменная для включения/отключения индикатора загрузки
var spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapInd;
//Функция создания карты сайта и затем вставки ее в блок с идентификатором "map-yandex"
function init () {
  var myMapInd = new ymaps.Map("map-yandex", {
    size: [500, 450],
    scrollZoom: false,
    center: [43.246995397273324, 76.84481159814969], // координаты центра на карте
    zoom: 17 // коэффициент приближения карты
  });
  myMapInd.behaviors.disable('scrollZoom')
// Метка для Industrial
var IndPoint = new ymaps.GeoObject({
    geometry: {
        type: "Point",
        coordinates: [43.24650913525486, 76.84619025358344] // координаты Ind
    },
    properties: {iconCaption: 'Компания «Industrial»'}
},
{preset: 'islands#nightFactoryIcon'});
myMapInd.geoObjects.add(IndPoint); // помещаем метку Ind на карту
// Метка для магазина Voltman
var VoltPoint = new ymaps.GeoObject({
    geometry: {
        type: "Point",
        coordinates: [43.248056325289234, 76.84388355383086] // координаты Volt
    },
    properties: {iconCaption: 'Магазин «Voltman»'}
},
{preset: 'islands#blackDotIcon'});
myMapInd.geoObjects.add(VoltPoint); // помещаем метку Volt на карту
// Метка для Жигер
var ZigerPoint = new ymaps.GeoObject({
    geometry: {
        type: "Point",
        coordinates: [43.247797515824054, 76.84404985078815] // координаты Жигер
    },
    properties: {iconCaption: 'Въезд на территорию «Жигер»'}
},
{preset: 'islands#grayCircleDotIcon'});
myMapInd.geoObjects.add(ZigerPoint); // помещаем метку Жигер на карту
// Линия на Райымбека
var RaimbekLine = new ymaps.GeoObject({
    geometry: {
        type: "LineString",
        coordinates: [
        [43.24758808767567, 76.84205687947725],
        [43.24823119600801, 76.84347308583713],
        [43.24781552920892, 76.84381104417301]
    ] // координаты линии
    },
},
{ strokeColor: '#1e98ffe6', strokeWidth: 5});
myMapInd.geoObjects.add(RaimbekLine); // помещаем линию на карту
// Линия на территории Жигер
var ZigerLine = new ymaps.GeoObject({
    geometry: {
        type: "LineString",
        coordinates: [
        [43.247686931112234, 76.84408203729744],
        [43.24761634575025, 76.84431270727272],
        [43.24817710496467, 76.84558407434574],
        [43.24744380340751, 76.84624926218147],
        [43.24703205264622, 76.8458791173374],
        [43.24669480708935, 76.84580937990296],
        [43.24631050167092, 76.84583620199314],
        [43.24634971664171, 76.84614197382085]
    ] // координаты линии
    },
},
{strokeColor: '#0e4779e6', strokeWidth: 3});
myMapInd.geoObjects.add(ZigerLine); // помещаем линию на карту
// Прямоугольник КПП Жигер
var ZigerPoly = new ymaps.GeoObject({
       geometry: {
           type: "Polygon",
           coordinates: [
               [
                   [43.24770909695606, 76.8436797059455],
                   [43.247877717075774, 76.84410885938782],
                   [43.24777968223371, 76.84417323240419],
                   [43.24760714030901, 76.84374944337975],
                   [43.24770909695606, 76.8436797059455]
               ]
           ] // координаты прямоугольника
       }
   }, {
       fillColor: '#ed4543e6',
       strokeColor: '#ed4543e6',
       strokeWidth: 5
   });

myMapInd.geoObjects.add(ZigerPoly); // помещаем прямоугольник на карту
// Прямоугольник КПП Жигер
var ZigerPoly = new ymaps.GeoObject({
       geometry: {
           type: "Polygon",
           coordinates: [
               [
                   [43.24770909695606, 76.8436797059455],
                   [43.247877717075774, 76.84410885938782],
                   [43.24777968223371, 76.84417323240419],
                   [43.24760714030901, 76.84374944337975],
                   [43.24770909695606, 76.8436797059455]
               ]
           ] // координаты прямоугольника
       }
   }, {
       fillColor: '#ed454399',
       strokeColor: '#ed4543e6',
       strokeWidth: 5
   });

myMapInd.geoObjects.add(ZigerPoly); // помещаем прямоугольник на карту
// Прямоугольник Территории Ind
var IndPoly = new ymaps.GeoObject({
       geometry: {
           type: "Polygon",
           coordinates: [
               [
                   [43.246632848827026, 76.84595421919002],
                   [43.24623677862189, 76.84615806707508],
                   [43.24631913003321, 76.84647456773884],
                   [43.24671912121668, 76.84624926218167],
                   [43.246632848827026, 76.84595421919002]
               ]
           ] // координаты прямоугольника
       }
   }, {
       fillColor: '#0e477933',
       strokeColor: '#0e477980',
       strokeWidth: 5
   });
myMapInd.geoObjects.add(IndPoly); // помещаем прямоугольник на карту

  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapInd.layers.get(0).get(0);

  // Решение по callback-у для определния полной загрузки карты
  waitForTilesLoad(layer).then(function() {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.removeClass('is-active');
  });
}

// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов)
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}

function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}

// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");

  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

// Основная функция, которая проверяет когда мы навели на блок с классом "ymap-container"
var ymap = function() {
  $('.ymap-container').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

      // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true;

    // Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');

    // Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором "map-yandex"
           ymaps.load(init);
        });
      }
    }
  );
}

$(function() {

  //Запускаем основную функцию
  ymap();

});
