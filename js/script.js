$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $("div.red-box").fadeTo(1000, 0.5);
  // $("div.green-box").fadeTo(1000, 0.65);
  // $("div.blue-box").fadeTo(1000, 0.55);
  // $("div.green-box").fadeToggle();
  // $("div.green-box").fadeToggle();

  /// a pitfall
  // $("div.green-box").fadeOut(1000);
  // $("div.green-box").fadeTo(1000, 0.5);
  
  
  // $("div.green-box").fadeTo(1000, 0.0);
  // $("div.green-box").fadeTo(1000, 0.5);
  
  
  // $("div.green-box").hide(1000);
  // $("div.green-box").show(1000);
  
  // $("div.blue-box").slideUp(2000);
  // $("div.blue-box").slideDown(2000);


  // $("div.blue-box").slideToggle(2000);
  // $("p").hide();
  // $("p").slideDown(1000);
  
  // $("h2").hide();
  // $("h2").slideDown(1000);


  // $(".blue-box").animate({
  //   "margin-left": "+=200px",
  // }, 1000, "linear");
  
  // $(".blue-box").animate({
  //   "margin-left": "+=200px",
  // }, 1000, "swing");

  // $(".red-box").fadeTo(1000,0.2);
  // $(".green-box").delay(1000).fadeTo(1000,0.5);
  // $(".blue-box").delay(2000).fadeTo(1000,0.6).fadeOut().delay(500).fadeIn();


  // $(".red-box").fadeTo(1000, 0, function() {
  //   alert("this is a callback");
  // });

  // $(".red-box").fadeTo(500, 0, function() {
  //   $(".green-box").fadeTo(500, 0, function() {
  //     $(".blue-box").fadeTo(500, 0);
  //   })
  // });

  // $(".lightbox").delay(500).fadeIn(1000);


  // $("p").css("background-color", "rgba(180, 180, 30, 0.8");
  // $(".red-box").css("background-color", "rgba(180, 180, 30, 0.8");
  // $("#list").css("background-color", "rgba(180, 180, 30, 0.8");
  // $("input[type='email'").css("background-color", "rgba(180, 180, 30, 0.8");
  // $("p, h2, input").css("background-color", "rgba(180, 180, 30, 0.8");
  // $("li:li").css("background-color", "rgba(180, 180, 30, 0.8");
  // $("li:odd").css("background-color", "rgba(180, 180, 30, 0.8");
  // $("li:even").css("background-color", "rgba(180, 180, 30, 0.8");
  //$("input:email").css("background-color", "rgba(180, 180, 30, 0.8"); ** email is not included in jquery
  // $("input:text").css("background-color", "rgba(180, 180, 30, 0.8");
  // $("input:radio").css("background-color", "rgba(180, 180, 30, 0.8");
  // $("input:checked").css("background-color", "rgba(180, 180, 30, 0.8");
  // $("input:selected").css("background-color", "rgba(180, 180, 30, 0.8");
  // $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8"); // selects children recursively
  // $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8"); // only direct children of list
  // $("#list").parents().css("background-color", "rgba(180, 180, 30, 0.8"); 
  // $("#list").parents("div").css("background-color", "rgba(180, 180, 30, 0.8"); 
  // $("#list").parents("body").css("background-color", "rgba(180, 180, 30, 0.8"); 
  // $("#list").parent().css("background-color", "rgba(180, 180, 30, 0.8");  // only the direct parent
  // $("#list").siblings().css("background-color", "rgba(180, 180, 30, 0.8"); // only elements that have the same parent
  // $("#list").siblings("p").css("background-color", "rgba(180, 180, 30, 0.8");
  // $("#list").siblings(":header").css("background-color", "rgba(180, 180, 30, 0.8"); // h1, h2, etc
  // $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8");
  // $("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8");

  //all direct element comes next header element, only the first
  // $(":header").next().css("background-color", "rgba(180, 180, 30, 0.8"); 

  
  // $("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8");  // selects every second list item
  // $("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8");  // selects every second list item

  // $("li").filter(function(index) {
  //   return index % 3 === 2;
  // }).css("background-color", "rgba(180, 180, 30, 0.8"); ;
  
  // $("li").first().css("background-color", "rgba(180, 180, 30, 0.8");
  // $("li").last().css("background-color", "rgba(180, 180, 30, 0.8");
  // $("li").eq(7).css("background-color", "rgba(180, 180, 30, 0.8");
  // $("li").eq(4).css("background-color", "rgba(180, 180, 30, 0.8");
  // $("li").eq(-2).css("background-color", "rgba(180, 180, 30, 0.8");
  // $("li").not(":first").css("background-color", "rgba(180, 180, 30, 0.8");
  // $("li").not(function(index) {
  //   return index % 3 === 3;
  // }).css("background-color", "rgba(180, 180, 30, 0.8");

  ///////// DOM MANIPULATION

  // $("ul ul:first").append('<li>I´m the last element</li>');
  // $("<li>I´m gonna be the last item</li>").appendTo($("ul ul:first"));
  // $("ul ul:first").prepend('<li>I´m the first element</li>');
  // $("<li>I´m gonna be the first item</li>").prependTo($("ul ul:first"));

  // $("<h4>Helder Sousa</h4>").prependTo("#content");
  // $(".red-box").after("<div class='red-box'>Another red</div>"); // inserts after the red-box, not inside it
  // $(".blue-box").before("<div class='blue-box'>Blue friend</div>"); // inserts before the blue-box, not inside it
  // $(".blue-box").before(function() {
  //   return "<div class='blue-box'>Blue 2</div>";
  // });
  // $(".blue-box").before($(".red-box").clone());

  // $("p").after($("#list"));

  // $("li").replaceWith("<li>Replaced</li>");
  // $("li").replaceWith(function() {
  //   return "<li>Replaced with function</li>";
  // });

  // let firstListItem = $("li:first");
  // $("p:first").replaceWith(firstListItem);

  // $(".red-box, .blue-box").replaceWith("<div class='green-box'>More green</div>");
  // $(".red-box, .blue-box").replaceWith($('.green-box').clone());
  // $("<div class='green-box'>More green</div>").replaceAll(".red-box, .blue-box");
  
  // $("ul").remove();
  // $("form").children().not("input:text, textarea, br").remove();
  

  // var detachedListItem = $("li").detach();
  // $("#content").append(detachedListItem);

  // $("p:first").empty();
  // $(".red-box, .green-box, .blue-box").empty();

  // attr(), prop(), val()
  // var specialLink = $("#special-link");
  // console.log(specialLink.attr("href"));
  // // specialLink.attr("href", "http://www.google.com");
  // // specialLink.attr("target", "_blank");
  // specialLink.attr({
  //   target: "_blank",
  //   href: "https://www.google.com"
  // });


  // var checkbox = $("input:checkbox");
  // console.log(checkbox.prop("checked")); // true
  // console.log(checkbox.attr("checked")); // always return 'checked'

  // var textInput = $("input:text");
  // textInput.val("Helder Carvalho de Sousa"); //when multiple elements are found, only returns the value of the first one
  // console.log(textInput.val());

  // var rangeInput = $("input[type='range']")
  // console.log(rangeInput.val());

  ///////////// gallery
  // var galeryImage = $(".gallery").find("img").first();
  // var images = [
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg",
  // ];

  // var i=0;
  // setInterval(function() {
  //   i = (i + 1) % images.length; // 0,1,2,0,1,2,0,1...
  //   galeryImage.fadeOut(function() {
  //     $(this).attr("src", images[i]);  //$(this) takes the galeryImage element
  //     $(this).fadeIn();
  //   });
  // }, 2000);


  
  // var redBox = $(".red-box");
  // console.log(redBox.css("width"));
  // console.log(redBox.width());
  // redBox.css("background-color", "#AA7700");
  // $("p").css("font-size", "18px");
  // redBox.css("width", "+=100px"); // relative value
  
  // var properties = $("p").css(["font-size", "line-height", "color"]); //get access to a collection of properties
  // console.log(properties);
  // console.log(properties["font-size"]);
  
  // redBox.css("user-select", "none"); // avoids user´s text selection
  // redBox.css("user-select", function(){
  //   return "none";
  // }); 
  
  
  // $("a").addClass("fancy-link");
  // $("p:first").addClass("large emphasize");
  
  // $("li li").addClass(function(index) {
  //   $(this).addClass("item-" + index);
  // });  
  
  // $("div").addClass(function(index, currentClass) {
  //   // console.log(index);
  //   if (currentClass === "dummy") {
  //     return "red-box";
  //   }
  // }); 
  
  // $(".red-box").removeClass("red-box").addClass("blue-box");
    
          
  // $(".gallery").css("display", "none"); // .hide
  
  // var gallery = $(".gallery");
  // var images = [
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg",
  // ];
  // gallery.data("availableImages", images);
  // console.log(gallery.data("availableImages"));
  // gallery.data("name", "The awesome gallery");
  // console.log(gallery.data());
  // gallery.removeData("name");

  // var firstPar = $("p:first");
  // console.log(firstPar.data("mydata")); //my data is definied direct inside HTML tag


  /////  text(), html()
  // var firstPar = $("p:first");
  // console.log(firstPar.text());
  // console.log(firstPar.html());
  // console.log($("p").html()); //only prints the first P element
  // // firstPar.text("<strong>Hello</strong> world!"); // it prints html code to the page
  // firstPar.html("<strong>Hello</strong> world!"); 
  // firstPar.html(firstPar.html() + " this was just appended");


  ////////////////// HANDLING EVENTS

  // $("#btn-click").click(function() {
  //   alert("button clicked");
  // })

  // $("#btn-click").click(function(event) {
  //   console.log(event);
  //   alert("button clicked");
  // });

  // $(".red-box").click(function() {
  //   $(this).fadeTo(500,0.5);
  // })
  // $(".red-box").click(); // executes the click event

  // $("#btn-hover").hover(function() {
  //   alert("hover");
  // });

  // $(".green-box").hover(function() {
  //   $(this).text("I was hovered");
  // })


  // var blueBox = $(".blue-box");
  // // blueBox.mouseenter(function() {
  // //   $(this).stop().fadeTo(500,0.5); //stop stops any animation running
  // // });
  // // blueBox.mouseleave(function() {
  // //   $(this).stop().fadeTo(500,1); //stop stops any animation running
  // // });
  
  // //// hover(handlerIn, handlerOut)
  // blueBox.hover(function(){
  //   $(this).stop().fadeTo(500,0.5); //stop stops any animation running
  // }, function() {
  //   $(this).stop().fadeTo(500,1); //stop stops any animation running
  // });


  //// .on("click", funciton(){...})
  
  // $("html").on("click keydown", logEvent);

  // function logEvent() {
  //   console.log("Mouse was clicked or key was pressed");
  // }

  //// gallery on click
  // var images = [
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg",
  // ];
  // var i = 0;
  // $(".gallery").find("img").on("click", function () {  
  //   i = (i+1) % images.length;
  //   $(this).fadeOut(function() {
  //     $(this).attr("src", images[i]).fadeIn();
  //   });
  // });


  ///// gallery on click 2
  // var i = 0;
  // var galleryImage = $(".gallery").find("img");
  // galleryImage.on("click", clickGallery);

  // var images = [
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg",
  // ];
  // function clickGallery() {  
  //   i = (i+1) % images.length;
  //   galleryImage.fadeOut(function() {
  //     galleryImage.attr("src", images[i]).fadeIn();
  //   });
  // }


  ///// DELEGATED EVENTS
  // $("p").click(function() {
  //   $(this).slideUp();
  // });
  ////// click func does not work here
  // $("#content").append("<p>this was dinnamically added paragraph</p>"); 

  // $("#content").on("click", "p", function() { // all p children of #content, even if added dinamically, will have this event
  //   $(this).slideUp();
  // });
  // $("#content").append("<p>this was dinnamically added paragraph</p>");

  // $("body").on("mouseenter", "li", function() {
  //   $(this).css("color", "red");
  // });
  // $("ul:first").append("<li>new element</li>");


  //// PASSING ADDITIONAL DATA TO EVENTS
  // $("#btn-click").click({
  //   user:"Helder"
  // }, function(event) {
  //   greetUser(event.data);
  // });
  // function greetUser(userdata) {
  //   var userName = userdata.user || "Anonymous";
  //   alert("Welcome back " + userName + "!");
  // }


  ///// CREATING AN IMAGE GALLERY WITH LIGHTBOX
  // var galleryItems = $(".gallery2").find("img");
  // galleryItems.css("width", "33%").css("opacity", "0.7");
  // galleryItems.mouseenter(function() {
  //   $(this).stop().fadeTo(500,1);
  // })
  // galleryItems.mouseleave(function() {
  //   $(this).stop().fadeTo(500,0.7);
  // })
  // galleryItems.click(function() {
  //   var source = $(this).attr("src");
  //   var image = $("<img>").attr("src", source).css("width", "100%"); // creates a new image
  //   $(".lightbox").empty().append(image).fadeIn(2000);
  // });
  // $(".lightbox").click(function() {
  //   $(this).stop().fadeOut();
  // })


  /////// KEYDOWN AND KEYUP
  ///// KEYPRESSE is EVIL!
  // $("html").keydown(function(event) {
  //   console.log(event.which);
  // });

  // var ARROW_RIGHT = 39;
  // $("html").keydown(function(event) {
  //   if (event.which == ARROW_RIGHT) {
  //     $(".blue-box").stop().animate({
  //       marginLeft: "+=10px"
  //     }, 50);
  //   }
  // });


  //////// FORMS events
  // var inputFields = $("input:text, input:password, textarea");
  // inputFields.focus(function() {
  //   $(this).css("box-shadow", "0 0 4px #666");
  // });

  // inputFields.blur(function() {
  //   $(this).css("box-shadow", "none");
  // });

  // $("#name").blur(function() {
  //   var text = $(this).val();
  //   if (text.length < 3) {
  //     $(this).css("box-shadow", "0 0 4px #811");
  //   } else {
  //     $(this).css("box-shadow", "0 0 4px #181");

  //   }
  // })

  // $("#checkbox").change(function() {
  //   var isChecked = $(this).is(":checked"); // equals to .prop("checked")
  //   if (isChecked) {
  //     $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181");
  //   } else {
  //     $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811");
  //   }
  // });

  // $("#selection").change(function() {
  //   var selectedOption = $(this).find(":selected").text();
  //   alert(selectedOption);
  // });

  // $("#form1").submit(function(event) {
  //   var textarea = $("#message");
  //   if (textarea.val().trim() == "") {
  //     textarea.css("box-shadow", "0 0 4px #811");
  //     event.preventDefault();
  //   }
  // });

  $("ul").click(function() {
    $(this).slideUp();
  });


  ///// FAST FEEDBACK FORM
  // var name= $("#name");
  // var password = $("#password");
  // var textarea = $("#message");
  // var checkbox = $("#checkbox");//.is(":checked");

  // $("#form1").submit(function(event) {
  //   validateName(name, event);
  //   validatePassword(password, event);
  //   validateTextarea(textarea, event);
  //   validateCheckbox(checkbox, event);
  // });

  // name.blur(function(event) {
  //   validateName($(this), event);
  // });
  // password.blur(function(event) {
  //   validatePassword($(this), event);
  // });
  // textarea.blur(function(event) {
  //   validateTextarea($(this), event);
  // });
  // checkbox.change(function(event) {
  //   validateCheckbox($(this), event);
  // });

  // function validateName(nameElement, event) {
  //   var name = nameElement.val(); 
  //   var valid = name.trim().length >= 2;;
  //   if (!valid) {
  //     $("#name-feedback").text("Please enter at least two characters");
  //     nameElement.css({
  //       "box-shadow": "0 0 4px #811",
  //       "border": "1px solid #600"
  //     });
  //     event.preventDefault();
  //   } else {
  //     $("#name-feedback").text("");
  //     nameElement.css({
  //       "box-shadow": "0 0 4px #181",
  //       "border": "1px solid #060"
  //     });
  //   }
  // }

  // function validatePassword(passwordElement, event) {
  //   var password = passwordElement.val();
  //   var valid = password.length >= 5 && /.*[0-9].*/.test(password);
  //   if (!valid) {
  //     $("#password-feedback").text("Must enter at least 5 characters and contain a number");
  //     passwordElement.css({
  //       "box-shadow": "0 0 4px #811",
  //       "border": "1px solid #600"
  //     });
  //     event.preventDefault();
  //   } else {
  //     $("#password-feedback").text("");
  //     passwordElement.css({
  //       "box-shadow": "0 0 4px #181",
  //       "border": "1px solid #060"
  //     });
  //   }
  // }

  // function validateTextarea(textareaElement, event) {
  // var textarea = textareaElement.val();
  //   if (textarea.trim().length < 10) {
  //     $("#message-feedback").text("Please enter at least 10 character");
  //     textareaElement.css({
  //       "box-shadow": "0 0 4px #811",
  //       "border": "1px solid #600"
  //     });
  //     event.preventDefault();
  //   } else {
  //     $("#message-feedback").text("");
  //     textareaElement.css({
  //       "box-shadow": "0 0 4px #181",
  //       "border": "1px solid #060"
  //     });
  //   }
  // }

  // function validateCheckbox(checkedElement, event) {
  //   var checked = checkedElement.is(":checked");
  //   if (!checked) {
  //     $("#checkbox-feedback").text("Please agree to this!");
  //     checkedElement.add("label[for='cb']").css({
  //       "box-shadow": "0 0 4px #811",
  //       "border": "1px solid #600"
  //     });
  //     event.preventDefault();
  //   } else {
  //     $("#checkbox-feedback").text("");
  //     checkedElement.add("label[for='cb']").css({
  //       "box-shadow": "0 0 4px #181",
  //       "border": "1px solid #060"
  //     });
  //   }
  // }



  /////// AJAX
  // $("#code").load("js/script.js"); //gets a file in the local machine

  // $("#code").load("idontexist.php", function(response, status) {
  //   if (status == "error") {
  //     alert("Could not find idontexist.php");
  //   }
  //   console.log(response);
  // });

  ////// flickr
  // var flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  // $.getJSON(flickrApiUrl, {
  //   tags: "sun, beach",
  //   tagmode: "any",
  //   format: "json"
  // }).done(function(data) {
  //   //success
  //   // console.log(data);
  //   $.each(data.items, function (index, item) {
  //     console.log(item.media.m);
  //     $("<img>").attr("src", item.media.m).appendTo("#flickr");
  //     if (index == 4)
  //       return false; // stops iterating over the next elements (jQuery specification)
  //   })
  // }).fail(function() {
  //   alert("ajax call failed");
  // });


  ///// pockeapi
  var pokeapiurl = "https://pokeapi.co/api/v2/generation/1";
  var pokemonByName = "https://pokeapi.co/api/v2/pokemon/";

  $.getJSON(pokeapiurl).done(function(data) {
    console.log(data);
    $.each(data.pokemon_species, function(index, pokemon) {
      var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      var link = $("<a>").attr("id", pokemon.name).attr("href", "#").append($("<strong>").text(name));
      var par = $("<p>").html("Pokémon species no. " + (index+1) + " is ").append(link);
      link.click(function(event) {
        $.getJSON(pokemonByName + pokemon.name)
        .done(function(details) { 
          console.log(details);
          var pokemonDiv = $("#pokemon-details");
          pokemonDiv.empty();
          pokemonDiv.append("<h2>" + name + "</h2>");
          pokemonDiv.append("<img src='" + details.sprites.front_default + "'>")
          pokemonDiv.append("<img src='" + details.sprites.front_shiny + "'>")
          pokemonDiv.append("<img src='" + details.sprites.back_default + "'>")
          pokemonDiv.append("<img src='" + details.sprites.back_shiny + "'>")
        });
        event.preventDefault();
      });
      par.appendTo("#pokemon");
    })
  }).fail(function() {
    console.log("Request to api failed.");
  }).always(function() {
    console.log("Pokémon is awesome.");
  });
});