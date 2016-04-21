(function (root) {

  root.$q = function (selector) {

    if (typeof selector === "object" && selector instanceof "HTMLElement") {
      return new DOMNodeCollection([selector]);
    }

    var nodeList = document.querySelectorAll(selector);
    nodeList = Array.prototype.slice.call(nodeList, 0);

    return new DOMNodeCollection(nodeList);
  };

  var DOMNodeCollection = function (htmlEls) {
    this._htmlEls = htmlEls;
  };

  DOMNodeCollection.prototype.html = function () {
    if (arguments.length === 0) {
      return this._htmlEls[0].innerHTML;
    } else {
      for (var i=0; i < this._htmlEls.length; i++) {
        this._htmlEls[i].innerHTML = arguments[0];
      }
    }
  };

  DOMNodeCollection.prototype.empty = function () {
    for (var i = 0; i < this._htmlEls.length; i++) {
      this._htmlEls[i].html = "";
    }
  };

  DOMNodeCollection.prototype.append = function (content) {
    for (var i = 0; i < this._htmlEls.length; i++) {
      this._htmlEls[i].innerHTML += content;
    }
  };

  DOMNodeCollection.prototype.attr = function (attr) {
    var el = this._htmlEls[0];
    if (arguments.length === 1) {
      return el.getAttribute(attr);
    } else {
      el.setAttribute(attr, arguments[1]);
    }
  };

  DOMNodeCollection.prototype.addClass = function (className) {
    for (var i = 0; i < this._htmlEls.length; i++) {
      this._htmlEls[i].classList.add(className);
    }
  };

  DOMNodeCollection.prototype.removeClass = function (targetClass) {
    for (var i = 0; i < this._htmlEls.length; i++) {
      var classArray = this._htmlEls[i].className.split(" ");
        for (var j = 0; j < classArray.length; j++) {
          if (classArray[j] === targetClass) {
            classArray[j] = "";
          }
        }
      this._htmlEls[i].className = classArray.join(" ");
    }
  };

  DOMNodeCollection.prototype.children = function () {
    var result = new DOMNodeCollection([]);
    for (var i = 0; i < this._htmlEls.length; i++) {
      result._htmlEls = result._htmlEls.concat(this._htmlEls[i].children);
    }
    result._htmlEls = result._htmlEls[0];
    return result;
  };

  DOMNodeCollection.prototype.parent = function () {
    var result = new DOMNodeCollection([]);
    for (var i = 0; i < this._htmlEls.length; i++) {
      result._htmlEls = result._htmlEls.concat(this._htmlEls[i].parentNode);
    }
    return result;
  };

  DOMNodeCollection.prototype.find = function (selector) {
    for (var i = 0; i < this._htmlEls.length; i++) {
      return this._htmlEls[i].querySelectorAll(selector);
    }
  };

  DOMNodeCollection.prototype.remove = function () {
    for (var i = 0; i < this.children().length; i++) {
      this.removeChild(this.children()[i]);
    }
  };

  DOMNodeCollection.prototype.on = function (trigger, listener) {
    for (var i = 0; i < this._htmlEls.length; i++) {
      this._htmlEls[i].addEventListener(trigger, listener);
    }
  };

  DOMNodeCollection.prototype.off = function (trigger, listener) {
    for (var i = 0; i < this._htmlEls.length; i++) {
      this._htmlEls[i].removeEventListener(trigger, listener);
    }
  };

})(this);
