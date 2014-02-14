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
        // $close_me = $(".close-me");

        site.listeners();
    },

    listeners: function () {

        $web_development.off("click.webdev").on("click.webdev", function () {
            console.log("web dev clicked")
            var me = $(this)
            animateDiv(me);

        });

        $web_design.off("click.webdesign").on("click.webdesign", function () {
            console.log("web design clicked")
            var me = $(this)
            animateDiv(me);

        });

        $about_me.off("click.aboutme").on("click.aboutme", function () {
            console.log("about me clicked")
            var me = $(this)
            animateDiv(me);
        });

        function animateDiv (active_div) {
            active_div.css("pointer-events", "none");
            active_div.animate({ "width": "100%" });
            var $inner_div = active_div.find('.main-block-inner');
            var $h2 = $inner_div.find("h3");
            $inner_div.animate({ "height": "500px" });
            $inner_div.css("padding", "20px")

            $content_div = $inner_div.find('.content');
            $content_div.append("hello");

            $h2.animate({"font-size":"32px"});

            var $close_div = $("<div>").addClass("close-me").text("close")

            active_div.before($close_div);

            $close_div.fadeIn();

            site.closelistener(active_div, $close_div);
        }

    },

    closelistener: function (open_div, close_div) {

        close_div.off("click").on("click", function () {

            open_div.css({ "width": "200px" });

            $content_div = open_div.find('.content');
            $content_div.empty();

            var $inner_div = open_div.find('.main-block-inner');

            $inner_div.css({ "height": "auto", "padding": "10px 5px"});
            var $h2 = $inner_div.find("h3");
            $h2.css({"font-size":"16px"});

            open_div.css("pointer-events", "all");

            $(this).remove()

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