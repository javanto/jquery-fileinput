desc("This is the default task.");
task("default", function (params) {
  var fs = require("node-fs");
  var dot = require("dot");
  var jsp = require("uglify-js").parser;
  var pro = require("uglify-js").uglify;

  package(function(pkg) {
    console.log("Building " + pkg.title + " " + pkg.version);
    fs.readFile("./jquery.fileinput.js", "utf8", function(err, data) {
      if (err) throw err;
      var cmp = dot.template(data)(pkg);
      var ast = jsp.parse(cmp);
      ast = pro.ast_mangle(ast);
      ast = pro.ast_squeeze(ast);
      var min = pro.gen_code(ast);
      var buildDirectory = pkg.build.directory? dot.template(pkg.build.directory)(pkg) : "dist";
      try {
        fs.rmdirSync("./" + buildDirectory);
      } catch (e) {
      }
      fs.mkdirSync("./" + buildDirectory, 0777, true);
      console.log("Writing to " + buildDirectory);
      var buildFinalName = pkg.build.final_name ? dot.template(pkg.build.final_name)(pkg) : pkg.name + "-" + pkg.version;
      fs.writeFileSync("./" + buildDirectory + "/" + buildFinalName + ".min.js", min);
      fs.writeFileSync("./" + buildDirectory + "/" + buildFinalName + ".js", cmp);
    });
  });
});

task("publish", ["default"], function (params) {
  var gits = require("gits");

  package(function(pkg) {
    var tagName = pkg.version;
    gits.git(".", ["tag", "-a", "-m", "Publishing new version", "v" + tagName], function() {
      gits.git(".", ["push", "--tags"], function() {
        console.log("Created remote tag " + tagName);
      });
    });
  });
});

function package(callback) {
  var fs = require("node-fs");

  fs.readFile("./package.json", "utf8", function(err, data) {
    if (err) throw err;
    
    callback(JSON.parse(data));
  });
}
