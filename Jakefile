desc("This is the default task.");
task("default", function (params) {
  var fs = require("fs");
  var dot = require("dot");
  var jsp = require("uglify-js").parser;
  var pro = require("uglify-js").uglify;

  console.log("Reading package.json");
  fs.readFile("./package.json", "utf8", function(err, data) {
    if (err) throw err;
    
    console.log("Parsing package.json");
    var pkg = JSON.parse(data);
    console.log("Building " + pkg.name + " " + pkg.version);
    fs.readFile("./jquery.fileinput.js", "utf8", function(err, data) {
      if (err) throw err;
      var cmp = dot.template(data, {evaluate: /\{\{([\s\S]+?)\}\}/g,
        interpolate: /\{\{=([\s\S]+?)\}\}/g,
        encode: /\{\{!([\s\S]+?)\}\}/g,
        use: /\{\{#([\s\S]+?)\}\}/g, //compile time evaluation
        define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g, //compile time defs
        strip: false,
        varname: "pkg"})(pkg);
      var ast = jsp.parse(cmp);
      ast = pro.ast_mangle(ast);
      ast = pro.ast_squeeze(ast);
      var min = pro.gen_code(ast);
      console.log("Writing to dist");
      fs.writeFileSync("./dist/jquery.fileinput-" + pkg.version + ".min.js", min);
      fs.writeFileSync("./dist/jquery.fileinput-" + pkg.version + ".js", cmp);
    });
  });
});
