Advanced JavaScript PGN parser for nodeJS and RequireJS
=======================================================

Parse PGN chess games into a JavaScript object. The parser works both in the backend and the frontend. The tests have been made to run under nodeJS.

Features
--------

- Based on the [PGN Specifications](http://www.thechessdrum.net/PGN_Reference.txt)
- Support tagpairs
- Support SAN (Standard Algebraic Notation) and LAN (Long Algebraic Notation)
- Support SAC (Symbolic Annotation Code) and NAG (Numeric Annotation Glyph)
- Movenumbers are optional
- Infinite comments
- Infinite Recursive Annotation Variation (RAV)
- Output is JSON
- Support commands into comments (such as the clock) which is not in the specs but is accepted as an extension of the specifications.
- In the browser the JavaScript files are loaded with the RequireJS module loader
- Very fast parser when used on the server side with nodeJS

Parse PGN in the browser with RequireJS
---------------------------------------
- Look at the example folder for a live example.

Environment Setup for nodeJS development
----------------------------------------

- [Download an Build nodeJS](http://nodejs.org/#download)
- [Install Jison](http://zaach.github.com/jison) `npm install jison`
- [Install amdefine](https://github.com/jrburke/amdefine) `npm install amdefine`

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

Launch the parser test suite
----------------------------

`node tests/pgn/all.js`

Enhancements
------------

The parser has been coded at the time Jison didn't support start conditions. It may be possible to simplify the lexer with that features. The lack of this feature at the time of coding have added complexity to the lexer which will disappear when rewritten using start conditions.

License
=======

Copyright (c) 2011 Philippe Rathé

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.