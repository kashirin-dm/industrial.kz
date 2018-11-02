$(document).ready(function() {
    /*
    Function catch scroll and replace classes for main-menu
    when vertical scroll position over 40px or 0px only for big screen
    */
    function mainMenuEffects() {
        // Check screen size
        if ($(window).width() > 900) {
            // Function for catch scroll if screen size over 900px
            if ($(window).scrollTop() <= 40) {
                $('.main-menu').removeClass('js__main-menu__add-bg');
                // Only for index.html. MODx parser include class .main-menu__black-cover
                $('.js__main-menu__black-cover').addClass('js__main-menu-white'); // White text
                $('.js__main-menu__black-cover>.main-menu__logo').addClass('js__main-menu__white-logo'); // White logo
            }
            else {
                $('.main-menu').addClass('js__main-menu__add-bg'); // White bg
                // only for index.html
                $('.js__main-menu__black-cover').removeClass('js__main-menu-white');
                $('.js__main-menu__black-cover>.main-menu__logo').removeClass('js__main-menu__white-logo');
            };
        }
        else {
            // No catch scroll
            $('.main-menu').addClass('js__main-menu__add-bg'); // White bg
            // only for index.html
            $('.js__main-menu__black-cover').removeClass('js__main-menu-white');
            $('.js__main-menu__black-cover>.main-menu__logo').removeClass('js__main-menu__white-logo');
        };
    };
    mainMenuEffects();
    $(window).scroll(function() {
        mainMenuEffects(); // Call when scroll
    });
    $(window).resize(function() {
        mainMenuEffects(); // Call when screen resize
    });

    //

    // Lazy Load
    $(function() {
            $('.lazy').show().lazy({
              effect: "fadeIn",
              effectTime: 500,
              threshold: 0
            });
        });

    //

    // Yandex Map
    // Variable to enable / disable load indicator
    var spinner = $('.ymap-container').children('.loader');
    // Variable to determine if Yandex.Map has been loaded at least once (to avoid reloading when hovering)
    var check_if_load = false;
    // Necessary variables in order to set coordinates on Yandex.Map
    var myMapInd;
    // Function of creating a map and then inserting it into a block with ID "map-yandex"
    function init () {
      var myMapInd = new ymaps.Map("map-yandex", {
        size: [500, 450],
        scrollZoom: false,
        center: [43.246995397273324, 76.84481159814969], // Coordinates of the center on the map
        zoom: 17 // Map proximity ratio
      });
      myMapInd.behaviors.disable('scrollZoom')

    // Label for Industrial
    var IndPoint = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [43.24650913525486, 76.84619025358344] // Ind coordinates
        },
        properties: {iconCaption: 'Компания «Industrial»'}
    },
    {preset: 'islands#nightFactoryIcon'});
    myMapInd.geoObjects.add(IndPoint); // Put Ind label on the map
    // Метка для магазина Voltman
    var VoltPoint = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [43.248056325289234, 76.84388355383086] // Volt coordinates
        },
        properties: {iconCaption: 'Магазин «Voltman»'}
    },
    {preset: 'islands#blackDotIcon'});
    myMapInd.geoObjects.add(VoltPoint); // Put Volt label on the map
    // Метка для Жигер
    var ZigerPoint = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [43.247797515824054, 76.84404985078815] // Zhiger coordinates
        },
        properties: {iconCaption: 'Въезд на территорию «Жигер»'}
    },
    {preset: 'islands#grayCircleDotIcon'});
    myMapInd.geoObjects.add(ZigerPoint); // Put Zhiger label on the map
    // Line on Raimbek
    var RaimbekLine = new ymaps.GeoObject({
        geometry: {
            type: "LineString",
            coordinates: [
            [43.24758808767567, 76.84205687947725],
            [43.24823119600801, 76.84347308583713],
            [43.24781552920892, 76.84381104417301]
        ] // line coordinates
        },
    },
    { strokeColor: '#1e98ffe6', strokeWidth: 5});
    myMapInd.geoObjects.add(RaimbekLine); // Put the line on the map
    // Line on the territory of Zhiger
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
        ] // line coordinates
        },
    },
    {strokeColor: '#0e4779e6', strokeWidth: 3});
    myMapInd.geoObjects.add(ZigerLine); // Put the line on the map
    // Rectangle Gearbox Zhiger
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
               ] // Rectangle coordinates
           }
       }, {
           fillColor: '#ed4543e6',
           strokeColor: '#ed4543e6',
           strokeWidth: 5
       });

    myMapInd.geoObjects.add(ZigerPoly); // Put a rectangle on the map
    // Rectangle Gearbox Zhiger
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
               ] // Rectangle coordinates
           }
       }, {
           fillColor: '#ed454399',
           strokeColor: '#ed4543e6',
           strokeWidth: 5
       });

    myMapInd.geoObjects.add(ZigerPoly); // Put a rectangle on the map
    // Rectangle Territory Ind
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
               ] // Rectangle coordinates
           }
       }, {
           fillColor: '#0e477933',
           strokeColor: '#0e477980',
           strokeWidth: 5
       });
    myMapInd.geoObjects.add(IndPoly); // Put a rectangle on the map

      // We get the first copy of the collection of layers, then the first layer of the collection
      var layer = myMapInd.layers.get(0).get(0);

      // Callback solution to determine full map load
      waitForTilesLoad(layer).then(function() {
        // Hide download indicator after full map load
        spinner.removeClass('is-active');
      });
    }

    // The function to determine the full load of the map (in fact, the loading of tiles)
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

    // The download function of the Yandex.Maps API on demand (in our case, when hovering)
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
      } else {  // Other browsers
        script.onload = function(){
          callback();
        };
      }

      script.src = url;
      document.getElementsByTagName("head")[0].appendChild(script);
    }

    // The main function that checks when we hover over the block with the class "ymap-container"
    var ymap = function() {
      $('.ymap-container').mouseenter(function(){
          if (!check_if_load) { // We check whether Yandex.Map is loaded for the first time, if yes, then we load

              // To avoid reloading the map, we change the value of the variable.
            check_if_load = true;

            // Show the download indicator until the map loads.
            spinner.addClass('is-active');

            // Downloading Yandex.Maps API
            loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
               // As soon as the Yandex.Maps API has loaded, we immediately create a map and place it in a block with the identifier "map-yandex"
               ymaps.load(init);
            });
          }
        }
      );
    }

    $(function() {
      ymap(); // We start the main function
    });

    //
    // Scroll to Top Button
    $(window).scroll(function(){
        // Show button if scroll position more 500px
        if ($(this).scrollTop() > 500) {
        $('.scrollup').fadeIn();
        } else {
        $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 400); // Animation speed 400
        return false;
    });
});
