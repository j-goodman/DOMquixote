var header = $q("h1");

header.append(", a big island.");

var mainDiv = $q("div");

var parent = header.parent();

parent.removeClass("green");

$q("li").on("click", function () {
  console.log("GO");
  $q("li").append(" It's Nuuk");
});

var list = $q("ul");
list.remove();
