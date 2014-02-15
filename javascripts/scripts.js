var site = {

    initialize: function () {
        //all the divs
        $body = $("body");
        $main = $("#main");
        $web_development = $("#web_development");
        $web_design = $("#web_design");
        $about_me = $("#about_me");
        $web_development_inner = $("#web_development_inner");
        $web_design_inner = $("#web_design_inner");
        $about_me_inner = $("#about_me_inner");

        $intro = $("<div>").addClass("intro").html("<p>Hello, my name is Brendan and I'm a web developer in New York. </p><p>Check out the menu to the left to see some of the neat stuff I've completed, or visit my <a href=http://www.github.com/brsoff>github.</p><p></p>")

        $main.prepend($intro);
        site.listeners.webdevlistener();
        site.listeners.webdesignlistener();
        site.listeners.aboutmelistener();
    },

    listeners: {

        webdevlistener: function () {

            $body.one("click", "#web_development", function () {
                console.log("web dev clicked")
                var me = $(this)
                site.animateDiv(me);
            });

        },

        webdesignlistener: function () {

            $body.one("click", "#web_design", function () {
                console.log("web design clicked")
                var me = $(this)
                site.animateDiv(me);
            });

        },

        aboutmelistener: function () {

            $body.one("click", "#about_me", function () {
                console.log("about me clicked")
                var me = $(this)
                site.animateDiv(me);
            });

        }

    },

    animateDiv: function (active_div) {

            $intro.fadeOut("fast");
            active_div.animate({ "width": "100%" }, "fast");
            var $inner_div = active_div.find('.main-block-inner');
            var $h2 = $inner_div.find("h3");
            $inner_div.animate({ "height": "500px" });
            $inner_div.addClass("feature")
            $content_div = $inner_div.find('.content');
            $content_div.append("<a href=http://google.com>hello</a>");
            $h2.animate({"font-size":"32px"});
            var $close_div = $("<div>").addClass("close-me").text("close")
            active_div.parent().prepend($close_div);
            $close_div.fadeIn();
            site.closelistener(active_div, $close_div);
    },

    closelistener: function (open_div, close_div) {

        close_div.off("click").on("click", function () {
            open_div.css({ "width": "200px" });

            $content_div = open_div.find('.content');
            $content_div.empty();
            var $inner_div = open_div.find('.main-block-inner');
            $inner_div.removeClass("feature");
            $inner_div.css({ "height": "auto" });
            var $h2 = $inner_div.find("h3");
            $h2.css({"font-size":"16px"});

            if ( ($web_development.css("width") != "200px") || ($web_design.css("width") != "200px") || ($about_me.css("width") != "200px") ) {

            }else{
                $intro.fadeIn();
            }

            // console.log(open_div.attr('id'))
            // console.log($web_development.attr('id'))

            $(this).remove()

            if (open_div.attr('id') === $web_development.attr('id')) {
                // console.log("true")
                site.listeners.webdevlistener();
            }else if (open_div.attr('id') === $web_design.attr('id')) {
                site.listeners.webdesignlistener();
            }else{
                site.listeners.aboutmelistener();
            }

        });


    }

}


$(function () {

    var $web_development,
        $web_design,
        $about_me,
        $web_development_inner,
        $web_design_inner,
        $about_me_inner;

    site.initialize();
})