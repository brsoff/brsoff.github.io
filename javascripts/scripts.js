var site = {

    initialize: function () {
        $body = $("body");
        $main = $("#main");
        $portfolio = $("#portfolio");
        $resume = $("#resume");
        $about_me = $("#about_me");
        $intro = site.content.intro();

        $main.prepend($intro);

        site.listeners.portfolioListener();
        site.listeners.resumeListener();
        site.listeners.aboutMeListener();
    },

    listeners: {

        portfolioListener: function () {
            $body.one("click", "#portfolio", function () {
                console.log("portfolio clicked")
                var me = $(this)
                site.animateDiv(me);
            });
        },

        resumeListener: function () {
            $body.one("click", "#resume", function () {
                console.log("resume clicked")
                var me = $(this)
                site.animateDiv(me);
            });
        },

        aboutMeListener: function () {
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
            $inner_div.animate({ "height": "auto" });
            $inner_div.addClass("feature")
            $content_div = $inner_div.find('.content');
            
            $h2.animate({"font-size":"32px"});
            var $close_div = $("<div>").addClass("close-me").text("close")
            active_div.parent().prepend($close_div);
            $close_div.fadeIn();

            if (active_div.attr('id') === "portfolio") {
                $content_div.append(site.content.portfolio());
            }else if (active_div.attr('id') === "resume") {
 
            }else if (active_div.attr('id') === "about_me") {
 
            }else{
                console.log("(._. )")
            }

            site.closeListener(active_div, $close_div);
    },

    closeListener: function (open_div, close_div) {

        close_div.off("click").on("click", function () {
            open_div.css({ "width": "200px" });
            $content_div = open_div.find('.content');
            $content_div.empty();
            var $inner_div = open_div.find('.main-block-inner');
            $inner_div.removeClass("feature");
            $inner_div.css({ "height": "auto" });
            var $h2 = $inner_div.find("h3");
            $h2.css({"font-size":"16px"});

            if ( ($portfolio.css("width") != "200px") || ($resume.css("width") != "200px") || ($about_me.css("width") != "200px") ) {
            }else{
                $intro.fadeIn();
            }

            $(this).remove();

            if (open_div.attr('id') === "portfolio") {
                site.listeners.portfolioListener();
            }else if (open_div.attr('id') === "resume") {
                site.listeners.resumeListener();
            }else if (open_div.attr('id') === "about_me") {
                site.listeners.aboutMeListener();
            }else{
                console.log("(._. )")
            }

        });

    },


    content: {

      intro: function () {
        var intro =  $("<div>").addClass("intro").html("<p>Hey! My name is Brendan and I'm a web developer in New York.</p><p>I work primarily with Ruby on Rails, Javascript and jQuery, and have lots of experience with Wordpress, Magento, Shopify and many more CMS's and frameworks.</p><p>Check out the menu to the left to see some of the neat stuff I've completed or visit my <a href=http://www.github.com/brsoff>github</a>.</p><p>Also, don't hesitate to send me an email at brsoff at gmail.</p>");

        return intro;
      },

      portfolio: function () {

        var output = "<h2>(Web Development)</h2>";
        output += "<div class=tri><div class=tri-inner>example</div></div>";
        output += "<div class=tri><div class=tri-inner>example</div></div>";
        output += "<div class=tri><div class=tri-inner>example</div></div>";
        output += "<div class=tri><div class=tri-inner>example</div></div>";
        output += "<div class=tri><div class=tri-inner>example</div></div>";
        output += "<div class=tri><div class=tri-inner>example</div></div>";

        output += "<h2>(Web Design)</h2>";
        output += "<div class=tri><div class=tri-inner>example</div></div>";
        output += "<div class=tri><div class=tri-inner>example</div></div>";
        output += "<div class=tri><div class=tri-inner>example</div></div>";
        output += "<div class=tri><div class=tri-inner>example</div></div>";
        output += "<div class=tri><div class=tri-inner>example</div></div>";
        output += "<div class=tri><div class=tri-inner>example</div></div>";

        return output;

      }


    }

}


$(function () {
    var $portfolio,
        $resume,
        $about_me,
        $body,
        $main,
        $intro;

    site.initialize();
})