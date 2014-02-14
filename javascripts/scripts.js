var site = {

    initialize: function () {
        //all the divs
        $main = $("#main");
        $web_development = $("#web_development");
        $web_design = $("#web_design");
        $about_me = $("#about_me");
        $web_development_inner = $("#web_development_inner");
        $web_design_inner = $("#web_design_inner");
        $about_me_inner = $("#about_me_inner");
        $close_me = $(".close-me");
    },

    listeners: function () {

        $web_development.on("click", function () {
            console.log("web dev clicked")
            var me = $(this)
            $web_design.hide()
            $about_me.hide()
            animateDiv(me);

        });

        $web_design.on("click", function () {
            console.log("web design clicked")
            var me = $(this)
            $web_development.hide();
            $about_me.hide();
            animateDiv(me);

        });

        $about_me.on("click", function () {
            console.log("about me clicked")
            var me = $(this)
            $web_development.hide();
            $web_design.hide();
            animateDiv(me);
        });

        function animateDiv (active_div) {
            $main.animate({"margin-top":"20px"});
            active_div.animate({ "width": "100%" });
            var $inner_div = active_div.find('.main-block-inner');
            var $h2 = $inner_div.find("h3");
            $inner_div.animate({ "height": "500px", "padding-top": "20px" });

            $content_div = $inner_div.find('.content');
            $content_div.append("hello");

            $h2.animate({"font-size":"32px"});
            $close_me.fadeIn();
            site.closelistener(active_div);
        }

    },

    closelistener: function (open_div) {
        $close_me.off("click").on("click", function () {

            $main.animate({"margin-top":"100px"});
            $(this).hide();
            $web_design.show();
            $about_me.show();
            $web_development.show();
            open_div.css({ "width": "33%" });

            $content_div = open_div.find('.content');
            $content_div.empty();

            var $inner_div = open_div.find('.main-block-inner');
            $inner_div.css({ "height": "120px", "padding-top": "90px"});
            var $h2 = $inner_div.find("h3");
            $h2.css({"font-size":"16px"});

        });

    }

}


$(function () {

    var $web_development,
        $web_design,
        $about_me,
        $web_development_inner,
        $web_design_inner,
        $about_me_inner,
        $close_me;

    site.initialize();
    site.listeners();
})