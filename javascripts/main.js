var site = {
  initialize: function () {
    site.bind();
  },

  bind: function () {
    var openSectionButtons = document.querySelectorAll("[data-behavior='open-section']");
    var closeSectionButtons = document.querySelectorAll("[data-behavior='close-section']");

    for (var i = 0; i < openSectionButtons.length; i++) {
      openSectionButtons[i].addEventListener("click", function(event) {
        var intro = document.getElementById("intro");
        var sectionHolder = this.parentElement;

        if (!hasClass(intro, "closed")) addClass(intro, "closed");
        addClass(sectionHolder, "open-section");
      });
    }

    for (var i = 0; i < closeSectionButtons.length; i++) {
      closeSectionButtons[i].addEventListener("click", function(event) {
        var intro = document.getElementById("intro");
        var sectionHolder = this.parentElement;
        var openSections = document.getElementsByClassName("open-section");

        removeClass(sectionHolder, "open-section");
        if (openSections.length < 1) removeClass(intro, "closed");
      });
    }
  }
}

site.initialize();

function hasClass(element, classname) {
   return (element.className.split(' ')).indexOf(classname) > -1;
}

function addClass(element, classname) {
 element.className = element.className.replace(' ' + classname, '');
 element.className = element.className + ' ' + classname;
}

function removeClass(element, classname) {
 element.className = element.className.replace(' ' + classname, '');
}
