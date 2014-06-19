// Mí lógica de negocio
var Index = {//"http://appphp.esy.es/" hostinger
    // http://www.artlikeall.com/demo/applikt_server/  servidor de artlike
    // "http://localhost:60/projects/SENAPP/s/" de local
    // "http://localhost:8888/SENAPP/SENAPP/s/"
    SERVER: "http://www.artlikeall.com/demo/applikt_server/",
    filter: 4,
    initSplash: 0,
    init: function() {
        Index.setListeners();
        /*
         if(Index.initSplash === 0){
         Lungo.Router.section("splach");
         }else{
         Index.isLogued();       
         }        */
        //Index.isLogued();
        var user = localStorage.getItem("myuser");
        if (user === undefined || user === "" || user === null ||
                JSON.parse(user).length === 0)
        {
            Lungo.Router.section("splash");
        }
        else {
            Lungo.Router.section("home");
        }
    },
    isLogued: function() {
        // Existe el usuario del aplicativo?        
        var user = localStorage.getItem("myuser");
        if (user === undefined || user === "" || user === null ||
                JSON.parse(user).length === 0)
        {
            Lungo.Router.section("splash");
        }
    },
    setListeners: function() { // Aquì se ponen los eventos de los controles 
        $("section").on("load", function() {
            Index.isLogued();
        });
        $("a#salir").on("click", function() {
            localStorage.setItem("myuser", null);
            Lungo.Router.section("splash");
        });
        $("input#txtWord").on("focus", function() {
            Index.setVisibleFilter(1);
        });
        $("input#txtWord2").on("focus", function() {
            Index.setVisibleFilter2(1);
        });
		$("input.txtWord3").on("focus", function() {
            Index.setVisibleFilter3(1);
        });
		$("input.txtWord4").on("focus", function() {
            Index.setVisibleFilter4(1);
        });
        	$("input.txtWord5").on("focus", function() {
            Index.setVisibleFilter5(1);
        });
                $("input.txtWord6").on("focus", function() {
            Index.setVisibleFilter6(1);
        });
	
        $("button#btnSearch").on("click", Index.getBooks);
        $("button#btnSearch2").on("click", Index.getPdfs);
        $("button#btnAuthor").on("click", function() {
            Index.filter = 1;
        });
        $("button#btnTitle").on("click", function() {
            Index.filter = 2;
        });
        $("button#btnTopic").on("click", function() {
            Index.filter = 3;
        });
        $("button#btnAll").on("click", function() {
            Index.filter = 4;
        });
        // Capturo evento clic del botón login        
        $("button#btnLogin").on("click", Index.getUser);
        $("button#goToMain").on("click", function() {
            Lungo.Router.section("searcher");
        });
        $("section.paginaprincipal").on("click", Index.setTimeRedirect);
        $("a#goToMenu").on("click", Index.refreshReserves);
        $("section#detail  header nav a#goToMain").on("click", function() {
            Lungo.Router.section("searcher");
        });
        $("section#reserves").on("load", Index.paintReserves);
        $('#input').on("keyup", Index.searchKeyUp);
	$('#inputP').on("keyup", Index.searchKeyUp2);
        $('#inputV').on("keyup", Index.searchKeyUp3);
        $('#inputC').on("keyup", Index.searchKeyUp4);

    },
    setTimeRedirect: function() {
        window.setTimeout(function() {
            Lungo.Router.section("splash");
        }, 4000)
    }, // Método para buscar en una lista de elemento cuando se escriba una letra
    searchKeyUp: function() {
        // get the value from text field
        var input = $(this).val();
        // check wheather the matching element exists
        // by default every list element will be shown
        $(".filter li").show();
        // Non related element will be hidden after input
        $(".filter li").not("[label*=" + input + "]").hide();

        // For Search Variable, total number of lists and number of matched elements
        var total = $(".filter li").length;
        var matched = $(".filter li[label*=" + input + "]").length;
        if (input.length > 0) {
            $('.input').show();
            $('.input').html('Resultado para "' + input + '" (' + matched + ' Coincide de ' + total + ' )');
        } else {
            $('.input').hide();
            $(".filter li").show();
        }
		
	
		
    },
	 searchKeyUp2: function() {
		 	 // get the value from text field
        var input2 = $(this).val();
        // check wheather the matching element exists
        // by default every list element will be shown
        $(".filterP li").show();
        // Non related element will be hidden after input
        $(".filterP li").not("[label*=" + input2 + "]").hide();

        // For Search Variable, total number of lists and number of matched elements
        var total2 = $(".filterP li").length;
        var matched2 = $(".filterP li[label*=" + input2 + "]").length;
        if (input2.length > 0) {
            $('.inputP').show();
            $('.inputP').html('Resultado para "' + input2 + '" (' + matched2 + ' Coincide de ' + total2 + ' )');
        } else {
            $('.inputP').hide();
            $(".filterP li").show();
        }		 
	 },
	
        searchKeyUp3: function() {
		 	 // get the value from text field
        var input3 = $(this).val();
        // check wheather the matching element exists
        // by default every list element will be shown
        $(".filterV li").show();
        // Non related element will be hidden after input
        $(".filterV li").not("[label*=" + input3 + "]").hide();

        // For Search Variable, total number of lists and number of matched elements
        var total3 = $(".filterV li").length;
        var matched3 = $(".filterV li[label*=" + input3 + "]").length;
        if (input3.length > 0) {
            $('.inputV').show();
            $('.inputV').html('Resultado para "' + input3 + '" (' + matched3 + ' Coincide de ' + total3 + ' )');
        } else {
            $('.inputV').hide();
            $(".filterV li").show();
        }		 
	 },
                 
       searchKeyUp4: function() {
		 	 // get the value from text field
        var input4 = $(this).val();
        // check wheather the matching element exists
        // by default every list element will be shown
        $(".filterC li").show();
        // Non related element will be hidden after input
        $(".filterC li").not("[label*=" + input4 + "]").hide();

        // For Search Variable, total number of lists and number of matched elements
        var total4 = $(".filterC li").length;
        var matched4 = $(".filterC li[label*=" + input4 + "]").length;
        if (input4.length > 0) {
            $('.inputC').show();
            $('.inputC').html('Resultado para "' + input4 + '" (' + matched4 + ' Coincide de ' + total4 + ' )');
        } else {
            $('.inputC').hide();
            $(".filterC li").show();
        }		 
	 },
                 
    getBooks: function() {
        // Sin geolocalización
        var latitude = null;
        var longitude = null;
        // Desde bogotá
//        var latitude = 4.63952;        
//         var longitude = -74.0656;
        //Desde el valle
//         var latitude = 3.45064;        
//         var longitude = -76.5488;
        // Obtiene la locaclización
        navigator.geolocation.getCurrentPosition(
                // En caso de que sea correcto
                        function(position) {
                            latitude = position.coords.latitude;
                            longitude = position.coords.longitude;

                        }, // En caso de error
                        function() {
                            console.log("No se ha podido ubicar a tu dispositivo");
                        });
                var value = $("input#txtWord").val();
                if (latitude === null && longitude === null) {
                    $.ajax({
                        "crossDomain" : "true",
                        "url": Index.SERVER + "getBooks.php",
                        "type": "POST",
                        "data": {"word": value, "filter": Index.filter},
                        "success": Index.paintBooks,
                        "error": function(error) {
                            console.log(error);
                        }
                    });
                } else {
                    $.ajax({
                        "crossDomain" : "true",
                        "url": Index.SERVER + "getBooks.php",
                        "type": "POST",
                        "data": {"word": value, "filter": Index.filter,
                            "lat": latitude, "lon": longitude},
                        "success": Index.paintBooks,
                        "error": function(error) {
                            console.log(error);
                        }
                    });
                }
            },
    getPdfs: function() {
        var value = $("input#txtWord2").val();
        $.ajax({
            "crossDomain" : "true",
            "url": Index.SERVER + "getPdfs.php",
            "type": "POST",
            "data": {"word": value},
            "success": Index.paintPdfs,
            "error": function(error) {
                console.log(error);
            }
        });
    },
    paintBooks: function(data) {
        // Desactivo el filtro
        Index.setVisibleFilter(0);
        if (JSON.parse(data).length === 0) {
            $("ul#booksList").html('');
            $("ul#booksList").append(
                    $("<li>").append($("<span>").text("No hay resultados")));
        }
        else {

            var json = JSON.parse(data);
            $("ul#booksList").html('');
            $(json).each(function(i, item) {
                $("ul#booksList").append(
                        $("<li>").append(
                        $("<img>").attr("src", Index.SERVER + item.image)
                        .css({"width": "100px"})
                        )
                        .append(
                                $("<p>")
                                .css({"float": "right", "width": "40%",
                                    "text-align": "left"})
                                .append($("<span>") // Preguntar porque?
                                        .addClass("block text bold")
                                        .attr({"data-action": "loading"})
                                        .on("click", function() {
                                            Index.getBook(item.idLibroHasLibrary);
                                        })
                                        .text(item.title)
                                        .attr({"data-view-section": "detail", "href": "#"})
                                        )
                                .append($("<div>")
                                        .append($("<span>").text(item.library.formationCenter))
                                        .append($("<br/>"))
                                        .append($("<span>").text(item.library.department.departmentName))
                                        .append($("<br/>"))
                                        .append($("<button>").text("Reservar")
                                                .on("click", function() {
                                                    Lungo.Notification.confirm({
                                                        icon: 'book',
                                                        title: 'Confirmación',
                                                        description: "¿Está seguro \n\
                                                        que desea reservar el libro " + item.title + "?",
                                                        accept: {
                                                            icon: 'checkmark',
                                                            label: 'Aceptar',
                                                            callback: function() {
                                                                Index.toReserveBook2(item.idLibroHasLibrary);
                                                            }
                                                        },
                                                        cancel: {
                                                            icon: 'close',
                                                            label: 'Cancelar',
                                                            callback: function() {
                                                                //alert("No!");
                                                            }
                                                        }
                                                    });
                                                })
                                                )
                                        )
                                )
                        .append(
                                $("<p>").append($("<span>")
                                .css({"clear": "both"})
                                )
                                )
                        );
            });
        }
    },
    paintPdfs: function(data) {
        // Desactivo el filtro
        Index.setVisibleFilter2(0);
        if (JSON.parse(data).length === 0) {
            $("ul#booksList").html('');
            $("ul#booksList").append(
                    $("<li>").append($("<span>").text("No hay resultados")));
        }
        else {
            var json = JSON.parse(data);
            $("ul#pdfsList").html('');
            $(json).each(function(i, item) {
                $("ul#pdfsList").append(
                        $("<li>").append(
                        $("<img>").attr("src", Index.SERVER + item.image)
                        .css({"width": "100px"})
                        )
                        .append(
                                $("<p>")
                                .css({"float": "right", "width": "40%",
                                    "text-align": "left"})
                                .append($("<span>") // Preguntar porque?
                                        .addClass("block text bold")
                                        .on("click", function() {
                                            Index.getEBook(item.idBook);
                                        })
                                        .text(item.title)
                                        .attr({"data-view-section": "detailEbook", "href": "#"})
                                        )
                                .append($("<div>")
                                        .append($("<br/>"))
                                        .append($("<a>").text("Descargar")
                                                .click(function(){
                                                    // Cambiar el source del frame
                                            $("section#pdfvisor article#articleVisor iframe")//item.route
                                                    .attr({"src" :  Index.SERVER + item.route})
                                                    })
                                                .addClass("button")
                                                .attr({"data-view-section":  "pdfvisor", "href" : "#"})
                                                )
                                        )
                                )
                        .append(
                                $("<p>").append($("<span>")
                                .css({"clear": "both"})
                                )
                                )
                        );
            });
        }
    },
    getBook: function(idBookLibrary) {
        $.ajax({
            
            "url": Index.SERVER + "getBook.php",
            "type": "POST",
            "data": {"idbl": idBookLibrary},
            "success": function(data) {
                Index.getBookInfo(data);
            },
            "error": function(error) {
                console.log("" + error);
            }
        });
    },
    getEBook: function(idBook) {
        $.ajax({
            "url": Index.SERVER + "getEbook.php",
            "type": "POST",
            "data": {"idb": idBook},
            "success": function(data) {
                Index.getEbookInfo(data);
            },
            "error": function(error) {
                console.log("" + error);
            }
        });
    },
    getUser: function() {
        var isValid = true;
        var user = $("input#txtUser").val().trim();
        var password = $("input#txtPassword").val().trim();
        // Validar que los campos estén completos       
        if (user === "" && password === "") {
            console.log("campos vacíos");
            isValid = false;
        } else {
            if (user === "") {
                console.log("campo usuario vacío");
                isValid = false;
            }
            if (password === "") {
                console.log("campo Clave vacío");
                isValid = false;
            }
        }
        if (isValid === false) {

        } else {
            $.ajax({
                "url": Index.SERVER + "getUser.php",
                "type": "POST",
                "data": {"u": user,
                    "p": password},
                "success": function(data) {
                    if (JSON.parse(data).length === 0) {
                        console.log("El usuario o la clave ingresada no es correcta");
                    } else {
                        $("input#txtUser").val("");
                        $("input#txtPassword").val("");
                        localStorage.setItem("myuser", data);
                        Index.initSplash = 1;
                        Lungo.Router.section("home");
                    }
                },
                "error": function(error) {
                    console.log("" + error);
                }
            });
        }
    },
    getBookInfo: function(myBook) {
        var json = JSON.parse(myBook);
        // Ubicar el detalle
        var detail = $("section#detail article#detail-article");
        // Limpio el anterior contenido
        detail.html("");
        // Creo los elementos de la lista
        var unorderedList = $("<ul>");
        $(json).each(function(i, item) {
            // Formateo los autores
            var autors = "";
            $(item.authors).each(function(i, item) {
                autors += item.authorName + ",";
            });
            // Formateo los temas
            var topics = "";
            $(item.topics).each(function(i, item) {
                topics += item.topicName + ",";
            });
            //.append($("<p>").text("Fecha de reservacion: "))
            // Crear el li
            /*
             unorderedList.append($("<li>").css({"text-align": "center"})
             .append($("<p>")
             .append($("<b>").text("Centro de formacion: "))
             .append(item.library.formationCenter)
             )
             .append($("<p>").text("Direccion de la biblioteca: " + item.library.adress))
             .append($("<p>").text("Titulo: " + item.title))
             .append($("<p>").text("Autores: " + autors))
             .append($("<p>").text("Temas: " + topics))
             .append($("<p>").text("Descripcion: " + item.description))
             .append($("<p>").text("Lugar editorial: " + item.place))
             .append($("<p>").text("Fecha de publicación: " + item.publicationDate))
             .append($("<p>").text("Descripción física: " + item.physicalDescription))
             .append($("<p>").text("Idioma: " + item.language))
             );*/
            unorderedList
                    .append($("<li>").addClass("feature")
                            .append($("<div>").addClass("on-right")
                                    .text("Centro de formación")
                                    )
                            .append($("<strong>").addClass("text bold")
                                    .text(item.library.formationCenter)
                                    )
                            .append($("<small>").text(item.library.adress))
                            )
                    .append($("<li>").addClass("feature")
                            .append($("<div>").addClass("on-right")
                                    .text("Título")
                                    )
                            .append($("<div>").addClass("text small")
                                    .text(item.title)
                                    )
                            )
                    .append($("<li>").addClass("feature")
                            .append($("<div>").addClass("on-right")
                                    .text("Autores")
                                    )
                            .append($("<small>")
                                    .text(autors)
                                    )
                            )
                    .append($("<li>").addClass("feature")
                            .append($("<div>").addClass("on-right")
                                    .text("Temas")
                                    )
                            .append($("<div>").addClass("text small")
                                    .text(topics)
                                    )
                            )
                    .append($("<li>").addClass("feature")
                            .append($("<div>").addClass("on-right")
                                    .text("Descripción")
                                    )
                            .append($("<div>").addClass("text small")
                                    .text(item.description)
                                    )
                            )
                    .append($("<li>").addClass("feature")
                            .append($("<p>").text("Lugar editorial: " + item.place))
                            .append($("<p>").text("Fecha de publicación: " + item.publicationDate))
                            .append($("<p>").text("Descripción física: " + item.physicalDescription))
                            .append($("<p>").text("Idioma: " + item.language))
                            );
        });
        // Agrego la lista llenada
        detail.append(unorderedList);
        // Creo el botón de reseva
        var button = $("<button>").addClass("anchor margin-bottom")
                .text("Reservar")
                .on("click", function() {
                    Lungo.Notification.confirm({
                        icon: 'book',
                        title: 'Confirmación',
                        description: "¿Está seguro \n\
                                que desea reservar el libro " + json.title + "?",
                        accept: {
                            icon: 'checkmark',
                            label: 'Aceptar',
                            callback: Index.toReserveBook
                        },
                        cancel: {
                            icon: 'close',
                            label: 'Cancelar',
                            callback: function() {
                                alert("No!");
                            }
                        }
                    });
                });
        // Agrego el botón
        detail.append(button);
    },
    getEbookInfo: function(myBook) {
        var json = JSON.parse(myBook);
        // Ubicar el detalle
        var detail = $("section#detailEbook article#detail-article");
        // Limpio el anterior contenido
        detail.html("");
        // Creo los elementos de la lista
        var unorderedList = $("<ul>");
        $(json).each(function(i, item) {
            // Formateo los autores
            var autors = "";
            $(item.authors).each(function(i, item) {
                autors += item.authorName + ",";
            });
            // Formateo los temas
            var topics = "";
            $(item.topics).each(function(i, item) {
                topics += item.topicName + ",";
            });
            //.append($("<p>").text("Fecha de reservacion: "))
            // Crear el li
            /*
             unorderedList.append($("<li>").css({"text-align": "center"})
             .append($("<p>")
             .append($("<b>").text("Centro de formacion: "))
             .append(item.library.formationCenter)
             )
             .append($("<p>").text("Direccion de la biblioteca: " + item.library.adress))
             .append($("<p>").text("Titulo: " + item.title))
             .append($("<p>").text("Autores: " + autors))
             .append($("<p>").text("Temas: " + topics))
             .append($("<p>").text("Descripcion: " + item.description))
             .append($("<p>").text("Lugar editorial: " + item.place))
             .append($("<p>").text("Fecha de publicación: " + item.publicationDate))
             .append($("<p>").text("Descripción física: " + item.physicalDescription))
             .append($("<p>").text("Idioma: " + item.language))
             );*/
            unorderedList
                    .append($("<li>").addClass("feature")
                            .append($("<div>").addClass("on-right")
                                    .text("Título")
                                    )
                            .append($("<div>").addClass("text small")
                                    .text(item.title)
                                    )
                            )
                    .append($("<li>").addClass("feature")
                            .append($("<div>").addClass("on-right")
                                    .text("Autores")
                                    )
                            .append($("<small>")
                                    .text(autors)
                                    )
                            )
                    .append($("<li>").addClass("feature")
                            .append($("<div>").addClass("on-right")
                                    .text("Temas")
                                    )
                            .append($("<div>").addClass("text small")
                                    .text(topics)
                                    )
                            )
                    .append($("<li>").addClass("feature")
                            .append($("<div>").addClass("on-right")
                                    .text("Descripción")
                                    )
                            .append($("<div>").addClass("text small")
                                    .text(item.description)
                                    )
                            )
                    .append($("<li>").addClass("feature")
                            .append($("<p>").text("Lugar: " + item.place))
                            .append($("<p>").text("Idioma: " + item.language))
                            );
        });
        // Agrego la lista llenada
        detail.append(unorderedList);
        // Creo el botón de reseva
        /*var button = $("<button>").addClass("anchor margin-bottom")
                .text("Descargar")
                .on("click", function() {
                   Lungo.Router.section("pdfvisor");
                });*/
        // Agrego el botón
        detail.append(button);
    },
    toReserveBook: function() {
        var rBooks = localStorage.getItem("reservedBooks");
        if (rBooks === null || rBooks === undefined || rBooks === "") {
            localStorage.setItem("reservedBooks", JSON.stringify([]));
        }
        var rBooks = JSON.parse(localStorage.getItem("reservedBooks"));
        var selectedBook = JSON.parse(localStorage.getItem("selectedbook"));
        var myuser = JSON.parse(localStorage.getItem("myuser"));
        var date = (new Date()).getTime();
        rBooks.push(selectedBook);
        localStorage.setItem("reservedBooks", JSON.stringify(rBooks));
        $.ajax({
            
            "url": Index.SERVER + "toReserve.php",
            "type": "POST",
            "data": {"idbl": selectedBook.idLibroHasLibrary,
                "idu": myuser.idUser,
                "dt": date},
            "success": function() {
                Lungo.Notification.success('Reserva exitosa',
                        'Encontrará sus reservas en el menú principal', 'ok', 5);
                Lungo.Router.section("searcher");
            },
            "error": function(error) {
                console.log("" + error);
            }
        });
    },
    toReserveBook2: function(idBookLibrary) {
        // Solicitud ajax para obtener los datos del libro
        $.ajax({
            "url": Index.SERVER + "getBook.php",
            "type": "POST",
            "data": {"idbl": idBookLibrary},
            "success": function(data) {
                var rBooks = localStorage.getItem("reservedBooks");
                if (rBooks === null || rBooks === undefined || rBooks === "") {
                    localStorage.setItem("reservedBooks", JSON.stringify([]));
                }
                var rBooks = JSON.parse(localStorage.getItem("reservedBooks"));
                var selectedBook = JSON.parse(data);
                var myuser = JSON.parse(localStorage.getItem("myuser"));
                var date = (new Date()).getTime();
                rBooks.push(selectedBook);
                localStorage.setItem("reservedBooks", JSON.stringify(rBooks));
                $.ajax({
                    "url": Index.SERVER + "toReserve.php",
                    "type": "POST",
                    "data": {"idbl": selectedBook.idLibroHasLibrary,
                        "idu": myuser.idUser,
                        "dt": date
                    },
                    "success": function() {
                        Lungo.Notification.success('Reserva exitosa',
                                'Encontrará sus reservas en el menú principal', 'ok', 5);
                        Lungo.Router.section("searcher");

                    },
                    "error": function(error) {
                        console.log("" + error);
                    }
                });
            },
            "error": function(error) {
                console.log("" + error);
            }
        });

    },
    paintReserves: function() {
        // Obtener las reservas
        var reserves = JSON.parse(localStorage.getItem("reservedBooks"));
        $("ul#reservedBooksList").html("");
        $(reserves).each(function(i, item) {
            $("ul#reservedBooksList").append(
                    $("<li>")
                    .append($("<strong>").text(item.title)
                            .css({"float": "left"})
                            )
                    .append($("<div>").css({"float": "right",
                        "text-align": "rigth"})
                            .append($("<button>")
                                    .text("Cancelar reserva")
                                    )
                            )
                    .append($("<div>").css({"clear": "both"}))
                    );
        });
    },
    refreshReserves: function() {
        var reservedBooksLength = JSON.parse(localStorage.getItem("reservedBooks")).length;
        $("aside#menu article ul li div").text(reservedBooksLength);
    },
    setVisibleFilter: function(state) {
        if (state === 1) {
            $("div#filterReserves").css({"display": "inline"});
        } else if (state === 0) {
            $("div#filterReserves").css({"display": "none"});
        }
    },
    setVisibleFilter2: function(state) {
        if (state === 1) {
            $("div#filterReserves2").css({"display": "inline"});
        } else if (state === 0) {
            $("div#filterReserves2").css({"display": "none"});
        }
    },
	
	
    setVisibleFilter3: function(state) {
        if (state === 1) {
            $("div#filterSeek").css({"display": "inline"});
        } else if (state === 0) {
            $("div#filterSeek").css({"display": "none"});
        }
    },
	
	   setVisibleFilter4: function(state) {
        if (state === 1) {
            $("div#filterSeekP").css({"display": "inline"});
        } else if (state === 0) {
            $("div#filterSeekP").css({"display": "none"});
        }
    },
            
          setVisibleFilter5: function(state) {
        if (state === 1) {
            $("div#filterSeekV").css({"display": "inline"});
        } else if (state === 0) {
            $("div#filterSeekV").css({"display": "none"});
        }
    },
            
             setVisibleFilter6: function(state) {
        if (state === 1) {
            $("div#filterSeekC").css({"display": "inline"});
        } else if (state === 0) {
            $("div#filterSeekC").css({"display": "none"});
        }
    }
};


