var header = $q("h1");

header.append(", a big island.");

var mainDiv = $q("div");

var parent = header.parent();

parent.removeClass("green");

var list = $q("ul");
list.remove();
