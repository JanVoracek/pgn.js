if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}


define(function(require, exports, module) {
    /* Jison generated parser */
    var pgn = (function(){
    var parser = {trace: function trace() { },
    yy: {},
    symbols_: {"error":2,"p":3,"pgn":4,"EOF":5,"tagpairs":6,"movetext":7,"[":8,"SYMBOL":9,"STRING":10,"]":11,"moves":12,"terminationmarker":13,"TERMINATIONMARKER":14,"move":15,"san":16,"options":17,"SAN":18,"SUFFIX":19,"option":20,"COMMENT":21,"NAG":22,"SAC":23,"(":24,")":25,"$accept":0,"$end":1},
    terminals_: {2:"error",5:"EOF",8:"[",9:"SYMBOL",10:"STRING",11:"]",14:"TERMINATIONMARKER",18:"SAN",19:"SUFFIX",21:"COMMENT",22:"NAG",23:"SAC",24:"(",25:")"},
    productions_: [0,[3,2],[4,2],[4,1],[4,1],[4,0],[6,4],[6,5],[7,2],[7,1],[7,1],[13,1],[12,1],[12,2],[15,2],[15,1],[16,2],[16,1],[17,1],[17,2],[20,1],[20,1],[20,1],[20,3]],
    performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

    var $0 = $$.length - 1;
    switch (yystate) {
    case 1: return $$[$0-1]; 
    break;
    case 2: this.$ = {tagPairs: $$[$0-1], movetext: $$[$0]}; 
    break;
    case 3: this.$ = {tagPairs: $$[$0]}; 
    break;
    case 4: this.$ = {movetext: $$[$0]}; 
    break;
    case 5: this.$ = {}; 
    break;
    case 6: var tagpair = {}; tagpair[$$[$0-2]] = $$[$0-1]; this.$ = tagpair; 
    break;
    case 7: $$[$0-4][$$[$0-2]] = $$[$0-1]; this.$ = $$[$0-4]; 
    break;
    case 8: this.$ = {moves: $$[$0-1], terminationMarker: $$[$0]}; 
    break;
    case 9: this.$ = {moves: $$[$0]}; 
    break;
    case 10: this.$ = {terminationMarker: $$[$0]}; 
    break;
    case 11: this.$ = $$[$0]; 
    break;
    case 12: this.$ = [$$[$0]]; 
    break;
    case 13: this.$ = $$[$0-1].concat($$[$0]); 
    break;
    case 14: var options = $$[$0]; options.san = $$[$0-1]; this.$ = options; 
    break;
    case 15: this.$ = {san: $$[$0]}; 
    break;
    case 16: this.$ = $$[$0-1] + $$[$0]; 
    break;
    case 17: this.$ = $$[$0]; 
    break;
    case 18: this.$ = $$[$0]; 
    break;
    case 19: this.$ = yy.mergeAndConcatenate($$[$0-1], $$[$0]); 
    break;
    case 20: this.$ = {comments: [$$[$0]]}; 
    break;
    case 21: this.$ = {nag: [$$[$0]]}; 
    break;
    case 22: this.$ = {sac: [$$[$0]]}; 
    break;
    case 23: this.$ = {rav: [$$[$0-1]]}; 
    break;
    }
    },
    table: [{3:1,4:2,5:[2,5],6:3,7:4,8:[1,5],12:6,13:7,14:[1,9],15:8,16:10,18:[1,11]},{1:[3]},{5:[1,12]},{5:[2,3],7:13,8:[1,14],12:6,13:7,14:[1,9],15:8,16:10,18:[1,11]},{5:[2,4]},{9:[1,15]},{5:[2,9],13:16,14:[1,9],15:17,16:10,18:[1,11]},{5:[2,10]},{5:[2,12],14:[2,12],18:[2,12],25:[2,12]},{5:[2,11]},{5:[2,15],14:[2,15],17:18,18:[2,15],20:19,21:[1,20],22:[1,21],23:[1,22],24:[1,23],25:[2,15]},{5:[2,17],14:[2,17],18:[2,17],19:[1,24],21:[2,17],22:[2,17],23:[2,17],24:[2,17],25:[2,17]},{1:[2,1]},{5:[2,2]},{9:[1,25]},{10:[1,26]},{5:[2,8]},{5:[2,13],14:[2,13],18:[2,13],25:[2,13]},{5:[2,14],14:[2,14],18:[2,14],20:27,21:[1,20],22:[1,21],23:[1,22],24:[1,23],25:[2,14]},{5:[2,18],14:[2,18],18:[2,18],21:[2,18],22:[2,18],23:[2,18],24:[2,18],25:[2,18]},{5:[2,20],14:[2,20],18:[2,20],21:[2,20],22:[2,20],23:[2,20],24:[2,20],25:[2,20]},{5:[2,21],14:[2,21],18:[2,21],21:[2,21],22:[2,21],23:[2,21],24:[2,21],25:[2,21]},{5:[2,22],14:[2,22],18:[2,22],21:[2,22],22:[2,22],23:[2,22],24:[2,22],25:[2,22]},{12:28,15:8,16:10,18:[1,11]},{5:[2,16],14:[2,16],18:[2,16],21:[2,16],22:[2,16],23:[2,16],24:[2,16],25:[2,16]},{10:[1,29]},{11:[1,30]},{5:[2,19],14:[2,19],18:[2,19],21:[2,19],22:[2,19],23:[2,19],24:[2,19],25:[2,19]},{15:17,16:10,18:[1,11],25:[1,31]},{11:[1,32]},{5:[2,6],8:[2,6],14:[2,6],18:[2,6]},{5:[2,23],14:[2,23],18:[2,23],21:[2,23],22:[2,23],23:[2,23],24:[2,23],25:[2,23]},{5:[2,7],8:[2,7],14:[2,7],18:[2,7]}],
    defaultActions: {4:[2,4],7:[2,10],9:[2,11],12:[2,1],13:[2,2],16:[2,8]},
    parseError: function parseError(str, hash) {
        throw new Error(str);
    },
    parse: function parse(input) {
        var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
        this.lexer.setInput(input);
        this.lexer.yy = this.yy;
        this.yy.lexer = this.lexer;
        this.yy.parser = this;
        if (typeof this.lexer.yylloc == "undefined")
            this.lexer.yylloc = {};
        var yyloc = this.lexer.yylloc;
        lstack.push(yyloc);
        var ranges = this.lexer.options && this.lexer.options.ranges;
        if (typeof this.yy.parseError === "function")
            this.parseError = this.yy.parseError;
        function popStack(n) {
            stack.length = stack.length - 2 * n;
            vstack.length = vstack.length - n;
            lstack.length = lstack.length - n;
        }
        function lex() {
            var token;
            token = self.lexer.lex() || 1;
            if (typeof token !== "number") {
                token = self.symbols_[token] || token;
            }
            return token;
        }
        var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
        while (true) {
            state = stack[stack.length - 1];
            if (this.defaultActions[state]) {
                action = this.defaultActions[state];
            } else {
                if (symbol === null || typeof symbol == "undefined") {
                    symbol = lex();
                }
                action = table[state] && table[state][symbol];
            }
            if (typeof action === "undefined" || !action.length || !action[0]) {
                var errStr = "";
                if (!recovering) {
                    expected = [];
                    for (p in table[state])
                        if (this.terminals_[p] && p > 2) {
                            expected.push("'" + this.terminals_[p] + "'");
                        }
                    if (this.lexer.showPosition) {
                        errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                    } else {
                        errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                    }
                    this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
                }
            }
            if (action[0] instanceof Array && action.length > 1) {
                throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
            }
            switch (action[0]) {
            case 1:
                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]);
                symbol = null;
                if (!preErrorSymbol) {
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else {
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;
            case 2:
                len = this.productions_[action[1]][1];
                yyval.$ = vstack[vstack.length - len];
                yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
                if (ranges) {
                    yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                }
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                if (typeof r !== "undefined") {
                    return r;
                }
                if (len) {
                    stack = stack.slice(0, -1 * len * 2);
                    vstack = vstack.slice(0, -1 * len);
                    lstack = lstack.slice(0, -1 * len);
                }
                stack.push(this.productions_[action[1]][0]);
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                stack.push(newState);
                break;
            case 3:
                return true;
            }
        }
        return true;
    }
    };
    /* Jison generated lexer */
    var lexer = (function(){
    var lexer = ({EOF:1,
    parseError:function parseError(str, hash) {
            if (this.yy.parser) {
                this.yy.parser.parseError(str, hash);
            } else {
                throw new Error(str);
            }
        },
    setInput:function (input) {
            this._input = input;
            this._more = this._less = this.done = false;
            this.yylineno = this.yyleng = 0;
            this.yytext = this.matched = this.match = '';
            this.conditionStack = ['INITIAL'];
            this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
            if (this.options.ranges) this.yylloc.range = [0,0];
            this.offset = 0;
            return this;
        },
    input:function () {
            var ch = this._input[0];
            this.yytext += ch;
            this.yyleng++;
            this.offset++;
            this.match += ch;
            this.matched += ch;
            var lines = ch.match(/(?:\r\n?|\n).*/g);
            if (lines) {
                this.yylineno++;
                this.yylloc.last_line++;
            } else {
                this.yylloc.last_column++;
            }
            if (this.options.ranges) this.yylloc.range[1]++;

            this._input = this._input.slice(1);
            return ch;
        },
    unput:function (ch) {
            var len = ch.length;
            var lines = ch.split(/(?:\r\n?|\n)/g);

            this._input = ch + this._input;
            this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
            //this.yyleng -= len;
            this.offset -= len;
            var oldLines = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length-1);
            this.matched = this.matched.substr(0, this.matched.length-1);

            if (lines.length-1) this.yylineno -= lines.length-1;
            var r = this.yylloc.range;

            this.yylloc = {first_line: this.yylloc.first_line,
              last_line: this.yylineno+1,
              first_column: this.yylloc.first_column,
              last_column: lines ?
                  (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
                  this.yylloc.first_column - len
              };

            if (this.options.ranges) {
                this.yylloc.range = [r[0], r[0] + this.yyleng - len];
            }
            return this;
        },
    more:function () {
            this._more = true;
            return this;
        },
    less:function (n) {
            this.unput(this.match.slice(n));
        },
    pastInput:function () {
            var past = this.matched.substr(0, this.matched.length - this.match.length);
            return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
        },
    upcomingInput:function () {
            var next = this.match;
            if (next.length < 20) {
                next += this._input.substr(0, 20-next.length);
            }
            return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
        },
    showPosition:function () {
            var pre = this.pastInput();
            var c = new Array(pre.length + 1).join("-");
            return pre + this.upcomingInput() + "\n" + c+"^";
        },
    next:function () {
            if (this.done) {
                return this.EOF;
            }
            if (!this._input) this.done = true;

            var token,
                match,
                tempMatch,
                index,
                col,
                lines;
            if (!this._more) {
                this.yytext = '';
                this.match = '';
            }
            var rules = this._currentRules();
            for (var i=0;i < rules.length; i++) {
                tempMatch = this._input.match(this.rules[rules[i]]);
                if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                    match = tempMatch;
                    index = i;
                    if (!this.options.flex) break;
                }
            }
            if (match) {
                lines = match[0].match(/(?:\r\n?|\n).*/g);
                if (lines) this.yylineno += lines.length;
                this.yylloc = {first_line: this.yylloc.last_line,
                               last_line: this.yylineno+1,
                               first_column: this.yylloc.last_column,
                               last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                if (this.options.ranges) {
                    this.yylloc.range = [this.offset, this.offset += this.yyleng];
                }
                this._more = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
                if (this.done && this._input) this.done = false;
                if (token) return token;
                else return;
            }
            if (this._input === "") {
                return this.EOF;
            } else {
                return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                        {text: "", token: null, line: this.yylineno});
            }
        },
    lex:function lex() {
            var r = this.next();
            if (typeof r !== 'undefined') {
                return r;
            } else {
                return this.lex();
            }
        },
    begin:function begin(condition) {
            this.conditionStack.push(condition);
        },
    popState:function popState() {
            return this.conditionStack.pop();
        },
    _currentRules:function _currentRules() {
            return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
        },
    topState:function () {
            return this.conditionStack[this.conditionStack.length-2];
        },
    pushState:function begin(condition) {
            this.begin(condition);
        }});
    lexer.options = {};
    lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

    var YYSTATE=YY_START
    switch($avoiding_name_collisions) {
    case 0:/* skip whitespace */
    break;
    case 1:
                                        yy_.yytext = yy_.yytext.substr( 1, yy_.yytext.length - 1 );
                                        yy_.yytext.replace(/\s+$/,'');
                                        if (yy_.yytext != '') return "COMMENT";
                                    
    break;
    case 2:
                                        yy_.yytext = yy_.yytext.substr( 1, yy_.yytext.length - 2 );
                                        yy_.yytext = yy_.yytext.replace(/^\s+/,'');
                                        yy_.yytext = yy_.yytext.replace(/\s+$/,'');
                                        if (yy_.yytext != '') return "COMMENT";
                                    
    break;
    case 3: return "TERMINATIONMARKER"; 
    break;
    case 4:/* skip move numbers */
    break;
    case 5:/* skip move numbers */
    break;
    case 6: return "SAN"; 
    break;
    case 7: return "SAN"; 
    break;
    case 8: return "SAC"; 
    break;
    case 9: return "SUFFIX"; 
    break;
    case 10: return "SYMBOL"; 
    break;
    case 11: yy_.yytext = yy_.yytext.substr( 1, yy_.yytext.length - 2 ); return "STRING"; 
    break;
    case 12: return "NAG"; 
    break;
    case 13: return "["; 
    break;
    case 14: return "]"; 
    break;
    case 15: return "("; 
    break;
    case 16: return ")"; 
    break;
    case 17: return "EOF"; 
    break;
    }
    };
    lexer.rules = [/^(?:\s+)/,/^(?:;[^\r\n]*)/,/^(?:\{(\\.|[^}])*\})/,/^(?:(1-0|0-1|1\/2-1\/2|\*))/,/^(?:[0-9]+\.*)/,/^(?:\.+)/,/^(?:(O-O-O|O-O)(!!|\?\?|!\?|\?!|!|\?)?)/,/^(?:([PNBRQK])?([a-h][1-8]|[a-h]|[1-8])?([-x])?([a-h][1-8])(=?([NBRQ]))?)/,/^(?:(\+=|=\+|\+\/-|-\/\+|\+--|--\+|&|\+-|-\+|zz|@|\^|=\/&|=|>>|<<|\/\/|\|\||->\/<-|->|O))/,/^(?:(\+!!|\+\?\?|\+!\?|\+\?!|\+!|\+\?|\+|#!!|#\?\?|#!\?|#\?!|#!|#\?|#|!!|\?\?|!\?|\?!|!|\?))/,/^(?:[-A-Za-z0-9_#=:\+]+)/,/^(?:"(\\.|[^"])*")/,/^(?:\$[0-9]+)/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:$)/];
    //"
    lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"inclusive":true}};
    return lexer;})()
    parser.lexer = lexer;function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
    return new Parser;
    })();
    if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
    exports.parser = pgn;
    exports.Parser = pgn.Parser;
    exports.parse = function () { return pgn.parse.apply(pgn, arguments); }

    }
});