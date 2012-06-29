/* text, command, operand, partialtext */

%lex

%%

("\\\\")+                       { return 'PARTIALTEXT'; }

"\\"?"[%"[A-Za-z0-9_]+[ ]+      %{
                                    var escaped = /^\\/.test(yytext);
                                    if (escaped) {
                                        return 'PARTIALTEXT';
                                    } else {
                                        yytext = yytext.substr(2, yytext.length - 2).replace(/ +$/,'');
                                        yy.command = true;
                                        return 'COMMAND';
                                    }
                                %}

"\""("\\".|[^"])*"\""           %{
                                    if (yy.command) {
                                        yytext = yytext.substr( 1, yytext.length - 2 );
                                        return "OPERAND";
                                    } else {
                                        return "PARTIALTEXT";
                                    }
                                %}

"]"                             %{
                                    if (yy.command) {
                                        yy.command = false;
                                    } else {
                                        return 'PARTIALTEXT';
                                    }
                                %}

","                             { return yy.command ? ',' : 'PARTIALTEXT'; }

("["|"]"|"\\")+                 { return 'PARTIALTEXT'; }

[^\[\]\\,]+                     %{
                                    if (yy.command) {
                                        yytext = yytext.replace(/^(\s|")+/, '').replace(/(\s|")+$/, '');
                                        return 'OPERAND';
                                    } else {
                                        return 'PARTIALTEXT';
                                    }
                                %}

<<EOF>>                         { yy.command = false; return "EOF"; }


/lex


%start p

%%

p
    : comments EOF
        { return $1; }
    ;

comments
    : comment
        { $$ = [$1]; }
    | comments comment
        { $$ = $1.concat([$2]); }
    |
        {{ $$ = {}; }}
    ;

comment
    : COMMAND operands
        {{ var command = {}; command[$1] = $2; $$ = command; }}
    | text
        { $$ = $1; }
    ;

operands
    : OPERAND
        { $$ = [$1]; }
    | operands ',' OPERAND
        { $$ = $1.concat([$3]); }
    ;

text
    : PARTIALTEXT
        { $$ = $1; }
    | text PARTIALTEXT
        { $$ = $1 + $2; }
    ;