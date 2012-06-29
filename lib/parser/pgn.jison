%lex

%%

\s+                             {/* skip whitespace */}
";"[^\r\n]*                     {
                                    yytext = yytext.substr( 1, yytext.length - 1 );
                                    yytext.replace(/\s+$/,'');
                                    if (yytext != '') return "COMMENT";
                                }
"{"("\\".|[^}])*"}"             %{
                                    yytext = yytext.substr( 1, yytext.length - 2 );
                                    yytext = yytext.replace(/^\s+/,'');
                                    yytext = yytext.replace(/\s+$/,'');
                                    if (yytext != '') return "COMMENT";
                                %}
("1-0"|"0-1"|"1/2-1/2"|"*")     { return "TERMINATIONMARKER"; }
[0-9]+"."*                      {/* skip move numbers */}
"."+                            {/* skip move numbers */}

("O-O-O"|"O-O")("!!"|"??"|"!?"|"?!"|"!"|"?")? { return "SAN"; }

([PNBRQK])?([a-h][1-8]|[a-h]|[1-8])?([-x])?([a-h][1-8])("="?([NBRQ]))? { return "SAN"; }

("+="|"=+"|"+/-"|"-/+"|"+--"|"--+"|"&"|"+-"|"-+"|"zz"|"@"|"^"|"=/&"|"="|">>"|"<<"|"//"|"||"|"->/<-"|"->"|"O") { return "SAC"; }

("+!!"|"+??"|"+!?"|"+?!"|"+!"|"+?"|"+"|"#!!"|"#??"|"#!?"|"#?!"|"#!"|"#?"|"#"|"!!"|"??"|"!?"|"?!"|"!"|"?") { return "SUFFIX"; }

[-A-Za-z0-9_#=:\+]+             { return "SYMBOL"; }
"\""("\\".|[^"])*"\""           { yytext = yytext.substr( 1, yytext.length - 2 ); return "STRING"; }
"$"[0-9]+                       { return "NAG"; }
"["                             { return "["; }
"]"                             { return "]"; }
"("                             { return "("; }
")"                             { return ")"; }
<<EOF>>                         { return "EOF"; }

/lex



%start p

%%

p
    : pgn EOF
        { return $1; }
    ;

pgn
    : tagpairs movetext
        {{ $$ = {tagPairs: $1, movetext: $2}; }}
    | tagpairs
        {{ $$ = {tagPairs: $1}; }}
    | movetext
        {{ $$ = {movetext: $1}; }}
    |
        {{ $$ = {}; }}
    ;

tagpairs
    : '[' SYMBOL STRING ']'
        {{ var tagpair = {}; tagpair[$2] = $3; $$ = tagpair; }}
    | tagpairs '[' SYMBOL STRING ']'
        { $1[$3] = $4; $$ = $1; }
    ;

movetext
    : moves terminationmarker
        {{ $$ = {moves: $1, terminationMarker: $2}; }}
    | moves
        {{ $$ = {moves: $1}; }}
    | terminationmarker
        {{ $$ = {terminationMarker: $1}; }}
    ;

terminationmarker
    : TERMINATIONMARKER
        { $$ = $1; }
    ;

moves
    : move
        { $$ = [$1]; }
    | moves move
        { $$ = $1.concat($2); }
    ;

move
    : san options
        {{ var options = $2; options.san = $1; $$ = options; }}
    | san
        {{ $$ = {san: $1}; }}
    ;

san
    : SAN SUFFIX
        { $$ = $1 + $2; }
    | SAN
        { $$ = $1; }
    ;

options
    : option
        { $$ = $1; }
    | options option
        { $$ = yy.mergeAndConcatenate($1, $2); }
    ;

option
    : COMMENT
        {{ $$ = {comments: [$1]}; }}
    | NAG
        {{ $$ = {nag: [$1]}; }}
    | SAC
        {{ $$ = {sac: [$1]}; }}
    | '(' moves ')'
        {{ $$ = {rav: [$2]}; }}
    ;
