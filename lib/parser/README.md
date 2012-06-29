How to generate the parser
--------------------------
**1) Compile Jison files**
<pre>
jison pgn.jison 
jison comment.jison
</pre>

This will create files pgn.js and comment.js.

**2) Wrap each output with module definition**
<pre>
if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function(require, exports, module) {

// Jison generated content

});
</pre>

**3) Remove main method exporting**

<pre>
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    var source, cwd;
    if (typeof process !== 'undefined') {
        source = require('fs').readFileSync(require('path').resolve(args[1]), "utf8");
    } else {
        source = require("file").path(require("file").cwd()).join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
</pre>