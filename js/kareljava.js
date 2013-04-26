/* parser generated by jison 0.4.4 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var kareljava = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"CLASS":4,"PROG":5,"BEGIN":6,"def_list":7,"(":8,")":9,"block":10,"END":11,"EOF":12,"{":13,"}":14,"expr_list":15,"def":16,"DEF":17,"line":18,"var":19,"expr":20,"FORWARD":21,";":22,"LEFT":23,"PICKBUZZER":24,"LEAVEBUZZER":25,"HALT":26,"call":27,"cond":28,"loop":29,"repeat":30,"integer":31,"IF":32,"term":33,"ELSE":34,"WHILE":35,"REPEAT":36,"OR":37,"and_term":38,"AND":39,"not_term":40,"NOT":41,"clause":42,"IFZ":43,"bool_fun":44,"IFNFWALL":45,"IFFWALL":46,"IFNLWALL":47,"IFLWALL":48,"IFNRWALL":49,"IFRWALL":50,"IFWBUZZER":51,"IFNWBUZZER":52,"IFBBUZZER":53,"IFNBBUZZER":54,"IFW":55,"IFN":56,"IFE":57,"IFS":58,"IFNW":59,"IFNN":60,"IFNE":61,"IFNS":62,"NUM":63,"INC":64,"DEC":65,"VAR":66,"$accept":0,"$end":1},
terminals_: {2:"error",4:"CLASS",5:"PROG",6:"BEGIN",8:"(",9:")",11:"END",12:"EOF",13:"{",14:"}",17:"DEF",21:"FORWARD",22:";",23:"LEFT",24:"PICKBUZZER",25:"LEAVEBUZZER",26:"HALT",32:"IF",34:"ELSE",35:"WHILE",36:"REPEAT",37:"OR",39:"AND",41:"NOT",43:"IFZ",45:"IFNFWALL",46:"IFFWALL",47:"IFNLWALL",48:"IFLWALL",49:"IFNRWALL",50:"IFRWALL",51:"IFWBUZZER",52:"IFNWBUZZER",53:"IFBBUZZER",54:"IFNBBUZZER",55:"IFW",56:"IFN",57:"IFE",58:"IFS",59:"IFNW",60:"IFNN",61:"IFNE",62:"IFNS",63:"NUM",64:"INC",65:"DEC",66:"VAR"},
productions_: [0,[3,10],[3,9],[10,3],[7,2],[7,1],[16,6],[16,7],[15,2],[15,1],[20,4],[20,4],[20,4],[20,4],[20,4],[20,2],[20,1],[20,1],[20,1],[20,1],[20,1],[27,3],[27,4],[28,6],[28,8],[29,6],[30,6],[33,3],[33,1],[38,3],[38,1],[40,2],[40,1],[42,4],[42,1],[42,3],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[31,1],[31,1],[31,4],[31,4],[19,1],[18,0]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
    	var program = $$[$0-2].concat([['LINE', yylineno], ['HALT']]);
    	var functions = {};
    	
    	for (var i = 0; i < $$[$0-6].length; i++) {
    		if (functions[$$[$0-6][i][0]]) {
    			throw "Function redefinition: " + $$[$0-6][i][0];
    		}
    		
    		functions[$$[$0-6][i][0]] = program.length;
    		program = program.concat($$[$0-6][i][1]);
    	}
    	
    	for (var i = 0; i < program.length; i++) {
    		if (program[i][0] == 'CALL') {
    			if (!functions[program[i][1]]) {
    				throw "Unknown function: " + program[i][1];
    			}
    			
    			program[i].push(program[i][1]);
    			program[i][1] = functions[program[i][2]];
    		} else if (program[i][0] == 'PARAM' && program[i][1] != 0) {
			throw "Unknown variable: " + program[i][1];
    		}
    	}
    	
    	return program;
    
break;
case 2: return $$[$0-2].concat([['HALT']]); 
break;
case 3: this.$ = $$[$0-1]; 
break;
case 4: this.$ = $$[$0-1].concat($$[$0]); 
break;
case 5: this.$ = $$[$0]; 
break;
case 6: this.$ = [[$$[$0-3], $$[$0-4].concat($$[$0]).concat([['RET']])]]; 
break;
case 7:
    	var result = $$[$0-5].concat($$[$0]).concat([['RET']]);
    	for (var i = 0; i < result.length; i++) {
    		if (result[i][0] == 'PARAM') {
    			if (result[i][1] == $$[$0-2]) {
    				result[i][1] = 0;
    			} else {
				throw "Unknown variable: " + $$[$0-2];
    			}
    		}
    	}
    	this.$ = [[$$[$0-4], result]];
    
break;
case 8: this.$ = $$[$0-1].concat($$[$0]); 
break;
case 9: this.$ = $$[$0]; 
break;
case 10: this.$ = [['LINE', yylineno], ['WORLDWALLS'], ['ORIENTATION'], ['MASK'], ['AND'], ['NOT'], ['EZ', 'WALL'], ['FORWARD']]; 
break;
case 11: this.$ = [['LINE', yylineno], ['LEFT']]; 
break;
case 12: this.$ = [['LINE', yylineno], ['WORLDBUZZERS'], ['EZ', 'WORLDUNDERFLOW'], ['PICKBUZZER']]; 
break;
case 13: this.$ = [['LINE', yylineno], ['BAGBUZZERS'], ['EZ', 'BAGUNDERFLOW'], ['LEAVEBUZZER']]; 
break;
case 14: this.$ = [['LINE', yylineno], ['HALT']]; 
break;
case 15: this.$ = $$[$0-1]; 
break;
case 16: this.$ = $$[$0]; 
break;
case 17: this.$ = $$[$0]; 
break;
case 18: this.$ = $$[$0]; 
break;
case 19: this.$ = $$[$0]; 
break;
case 20: this.$ = []; 
break;
case 21: this.$ = [['LINE', yylineno], ['LOAD', 0], ['CALL', $$[$0-2]], ['LINE', yylineno]]; 
break;
case 22: this.$ = [['LINE', yylineno]].concat($$[$0-1]).concat([['CALL', $$[$0-3]], ['LINE', yylineno]]); 
break;
case 23: this.$ = $$[$0-2].concat($$[$0-4]).concat([['JZ', $$[$0].length]]).concat($$[$0]); 
break;
case 24: this.$ = $$[$0-4].concat($$[$0-6]).concat([['JZ', 1 + $$[$0-2].length]]).concat($$[$0-2]).concat([['JMP', $$[$0].length]]).concat($$[$0]); 
break;
case 25: this.$ = $$[$0-2].concat($$[$0-4]).concat([['JZ', 1 + $$[$0].length]]).concat($$[$0]).concat([['JMP', -1 -($$[$0-2].length + 1 + $$[$0].length + 1)]]); 
break;
case 26: this.$ = $$[$0-2].concat($$[$0-4]).concat([['DUP'], ['JLEZ', $$[$0].length + 2]]).concat($$[$0]).concat([['DEC'], ['JMP', -1 -($$[$0].length + 4)], ['POP']]); 
break;
case 27: this.$ = $$[$0-2].concat($$[$0]).concat([['OR']]); 
break;
case 28: this.$ = $$[$0]; 
break;
case 29: this.$ = $$[$0-2].concat($$[$0]).concat([['AND']]); 
break;
case 30: this.$ = $$[$0]; 
break;
case 31: this.$ = $$[$0].concat([['NOT']]); 
break;
case 32: this.$ = $$[$0]; 
break;
case 33: this.$ = $$[$0-1].concat([['NOT']]); 
break;
case 34: this.$ = $$[$0]; 
break;
case 35: this.$ = $$[$0-1]; 
break;
case 36: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['MASK'], ['AND'], ['NOT']]; 
break;
case 37: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['MASK'], ['AND']]; 
break;
case 38: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['ROTL'], ['MASK'], ['AND'], ['NOT']]; 
break;
case 39: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['ROTL'], ['MASK'], ['AND']]; 
break;
case 40: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['ROTR'], ['MASK'], ['AND'], ['NOT']]; 
break;
case 41: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['ROTR'], ['MASK'], ['AND']]; 
break;
case 42: this.$ = [['WORLDBUZZERS'], ['LOAD', 0], ['EQ'], ['NOT']]; 
break;
case 43: this.$ = [['WORLDBUZZERS'], ['NOT']]; 
break;
case 44: this.$ = [['BAGBUZZERS'], ['LOAD', 0], ['EQ'], ['NOT']]; 
break;
case 45: this.$ = [['BAGBUFFERS'], ['NOT']]; 
break;
case 46: this.$ = [['ORIENTATION'], ['LOAD', 0], ['EQ']]; 
break;
case 47: this.$ = [['ORIENTATION'], ['LOAD', 1], ['EQ']]; 
break;
case 48: this.$ = [['ORIENTATION'], ['LOAD', 2], ['EQ']]; 
break;
case 49: this.$ = [['ORIENTATION'], ['LOAD', 3], ['EQ']]; 
break;
case 50: this.$ = [['ORIENTATION'], ['LOAD', 0], ['EQ'], ['NOT']]; 
break;
case 51: this.$ = [['ORIENTATION'], ['LOAD', 1], ['EQ'], ['NOT']]; 
break;
case 52: this.$ = [['ORIENTATION'], ['LOAD', 2], ['EQ'], ['NOT']]; 
break;
case 53: this.$ = [['ORIENTATION'], ['LOAD', 3], ['EQ'], ['NOT']]; 
break;
case 54: this.$ = [['PARAM', $$[$0]]]; 
break;
case 55: this.$ = [['LOAD', parseInt(yytext)]]; 
break;
case 56: this.$ = $$[$0-1].concat([['INC']]); 
break;
case 57: this.$ = $$[$0-1].concat([['DEC']]); 
break;
case 58: this.$ = yytext; 
break;
case 59: this.$ = [['LINE', yylineno]]; 
break;
}
},
table: [{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:[1,4],13:[1,5]},{7:6,16:7,17:[1,8]},{5:[1,9]},{5:[1,10],16:11,17:[1,8]},{5:[2,5],17:[2,5]},{18:12,66:[2,59]},{8:[1,13]},{8:[1,14]},{5:[2,4],17:[2,4]},{19:15,66:[1,16]},{9:[1,17]},{9:[1,18]},{8:[1,19]},{8:[2,58],9:[2,58]},{6:[1,21],10:20},{6:[1,21],10:22},{9:[1,23],19:24,66:[1,16]},{14:[1,25]},{6:[1,21],10:37,15:26,19:39,20:27,21:[1,28],22:[1,38],23:[1,29],24:[1,30],25:[1,31],26:[1,32],27:33,28:34,29:35,30:36,32:[1,40],35:[1,41],36:[1,42],66:[1,16]},{11:[1,43]},{6:[1,21],10:44},{9:[1,45]},{12:[1,46]},{6:[1,21],10:37,11:[1,47],19:39,20:48,21:[1,28],22:[1,38],23:[1,29],24:[1,30],25:[1,31],26:[1,32],27:33,28:34,29:35,30:36,32:[1,40],35:[1,41],36:[1,42],66:[1,16]},{6:[2,9],11:[2,9],21:[2,9],22:[2,9],23:[2,9],24:[2,9],25:[2,9],26:[2,9],32:[2,9],35:[2,9],36:[2,9],66:[2,9]},{8:[1,49]},{8:[1,50]},{8:[1,51]},{8:[1,52]},{8:[1,53]},{22:[1,54]},{6:[2,16],11:[2,16],21:[2,16],22:[2,16],23:[2,16],24:[2,16],25:[2,16],26:[2,16],32:[2,16],34:[2,16],35:[2,16],36:[2,16],66:[2,16]},{6:[2,17],11:[2,17],21:[2,17],22:[2,17],23:[2,17],24:[2,17],25:[2,17],26:[2,17],32:[2,17],34:[2,17],35:[2,17],36:[2,17],66:[2,17]},{6:[2,18],11:[2,18],21:[2,18],22:[2,18],23:[2,18],24:[2,18],25:[2,18],26:[2,18],32:[2,18],34:[2,18],35:[2,18],36:[2,18],66:[2,18]},{6:[2,19],11:[2,19],21:[2,19],22:[2,19],23:[2,19],24:[2,19],25:[2,19],26:[2,19],32:[2,19],34:[2,19],35:[2,19],36:[2,19],66:[2,19]},{6:[2,20],11:[2,20],21:[2,20],22:[2,20],23:[2,20],24:[2,20],25:[2,20],26:[2,20],32:[2,20],34:[2,20],35:[2,20],36:[2,20],66:[2,20]},{8:[1,55]},{8:[2,59],18:56},{8:[2,59],18:57},{8:[2,59],18:58},{12:[1,59]},{5:[2,6],17:[2,6]},{6:[1,21],10:60},{1:[2,2]},{5:[2,3],6:[2,3],11:[2,3],14:[2,3],17:[2,3],21:[2,3],22:[2,3],23:[2,3],24:[2,3],25:[2,3],26:[2,3],32:[2,3],34:[2,3],35:[2,3],36:[2,3],66:[2,3]},{6:[2,8],11:[2,8],21:[2,8],22:[2,8],23:[2,8],24:[2,8],25:[2,8],26:[2,8],32:[2,8],35:[2,8],36:[2,8],66:[2,8]},{9:[1,61]},{9:[1,62]},{9:[1,63]},{9:[1,64]},{9:[1,65]},{6:[2,15],11:[2,15],21:[2,15],22:[2,15],23:[2,15],24:[2,15],25:[2,15],26:[2,15],32:[2,15],34:[2,15],35:[2,15],36:[2,15],66:[2,15]},{9:[1,66],19:68,31:67,63:[1,69],64:[1,70],65:[1,71],66:[1,16]},{8:[1,72]},{8:[1,73]},{8:[1,74]},{1:[2,1]},{5:[2,7],17:[2,7]},{22:[1,75]},{22:[1,76]},{22:[1,77]},{22:[1,78]},{22:[1,79]},{22:[2,21]},{9:[1,80]},{9:[2,54]},{9:[2,55]},{8:[1,81]},{8:[1,82]},{8:[1,90],33:83,38:84,40:85,41:[1,86],42:87,43:[1,88],44:89,45:[1,91],46:[1,92],47:[1,93],48:[1,94],49:[1,95],50:[1,96],51:[1,97],52:[1,98],53:[1,99],54:[1,100],55:[1,101],56:[1,102],57:[1,103],58:[1,104],59:[1,105],60:[1,106],61:[1,107],62:[1,108]},{8:[1,90],33:109,38:84,40:85,41:[1,86],42:87,43:[1,88],44:89,45:[1,91],46:[1,92],47:[1,93],48:[1,94],49:[1,95],50:[1,96],51:[1,97],52:[1,98],53:[1,99],54:[1,100],55:[1,101],56:[1,102],57:[1,103],58:[1,104],59:[1,105],60:[1,106],61:[1,107],62:[1,108]},{19:68,31:110,63:[1,69],64:[1,70],65:[1,71],66:[1,16]},{6:[2,10],11:[2,10],21:[2,10],22:[2,10],23:[2,10],24:[2,10],25:[2,10],26:[2,10],32:[2,10],34:[2,10],35:[2,10],36:[2,10],66:[2,10]},{6:[2,11],11:[2,11],21:[2,11],22:[2,11],23:[2,11],24:[2,11],25:[2,11],26:[2,11],32:[2,11],34:[2,11],35:[2,11],36:[2,11],66:[2,11]},{6:[2,12],11:[2,12],21:[2,12],22:[2,12],23:[2,12],24:[2,12],25:[2,12],26:[2,12],32:[2,12],34:[2,12],35:[2,12],36:[2,12],66:[2,12]},{6:[2,13],11:[2,13],21:[2,13],22:[2,13],23:[2,13],24:[2,13],25:[2,13],26:[2,13],32:[2,13],34:[2,13],35:[2,13],36:[2,13],66:[2,13]},{6:[2,14],11:[2,14],21:[2,14],22:[2,14],23:[2,14],24:[2,14],25:[2,14],26:[2,14],32:[2,14],34:[2,14],35:[2,14],36:[2,14],66:[2,14]},{22:[2,22]},{19:68,31:111,63:[1,69],64:[1,70],65:[1,71],66:[1,16]},{19:68,31:112,63:[1,69],64:[1,70],65:[1,71],66:[1,16]},{9:[1,113],37:[1,114]},{9:[2,28],37:[2,28],39:[1,115]},{9:[2,30],37:[2,30],39:[2,30]},{8:[1,90],42:116,43:[1,88],44:89,45:[1,91],46:[1,92],47:[1,93],48:[1,94],49:[1,95],50:[1,96],51:[1,97],52:[1,98],53:[1,99],54:[1,100],55:[1,101],56:[1,102],57:[1,103],58:[1,104],59:[1,105],60:[1,106],61:[1,107],62:[1,108]},{9:[2,32],37:[2,32],39:[2,32]},{8:[1,117]},{9:[2,34],37:[2,34],39:[2,34]},{8:[1,90],33:118,38:84,40:85,41:[1,86],42:87,43:[1,88],44:89,45:[1,91],46:[1,92],47:[1,93],48:[1,94],49:[1,95],50:[1,96],51:[1,97],52:[1,98],53:[1,99],54:[1,100],55:[1,101],56:[1,102],57:[1,103],58:[1,104],59:[1,105],60:[1,106],61:[1,107],62:[1,108]},{9:[2,36],37:[2,36],39:[2,36]},{9:[2,37],37:[2,37],39:[2,37]},{9:[2,38],37:[2,38],39:[2,38]},{9:[2,39],37:[2,39],39:[2,39]},{9:[2,40],37:[2,40],39:[2,40]},{9:[2,41],37:[2,41],39:[2,41]},{9:[2,42],37:[2,42],39:[2,42]},{9:[2,43],37:[2,43],39:[2,43]},{9:[2,44],37:[2,44],39:[2,44]},{9:[2,45],37:[2,45],39:[2,45]},{9:[2,46],37:[2,46],39:[2,46]},{9:[2,47],37:[2,47],39:[2,47]},{9:[2,48],37:[2,48],39:[2,48]},{9:[2,49],37:[2,49],39:[2,49]},{9:[2,50],37:[2,50],39:[2,50]},{9:[2,51],37:[2,51],39:[2,51]},{9:[2,52],37:[2,52],39:[2,52]},{9:[2,53],37:[2,53],39:[2,53]},{9:[1,119],37:[1,114]},{9:[1,120]},{9:[1,121]},{9:[1,122]},{6:[1,21],10:37,19:39,20:123,21:[1,28],22:[1,38],23:[1,29],24:[1,30],25:[1,31],26:[1,32],27:33,28:34,29:35,30:36,32:[1,40],35:[1,41],36:[1,42],66:[1,16]},{8:[1,90],38:124,40:85,41:[1,86],42:87,43:[1,88],44:89,45:[1,91],46:[1,92],47:[1,93],48:[1,94],49:[1,95],50:[1,96],51:[1,97],52:[1,98],53:[1,99],54:[1,100],55:[1,101],56:[1,102],57:[1,103],58:[1,104],59:[1,105],60:[1,106],61:[1,107],62:[1,108]},{8:[1,90],40:125,41:[1,86],42:87,43:[1,88],44:89,45:[1,91],46:[1,92],47:[1,93],48:[1,94],49:[1,95],50:[1,96],51:[1,97],52:[1,98],53:[1,99],54:[1,100],55:[1,101],56:[1,102],57:[1,103],58:[1,104],59:[1,105],60:[1,106],61:[1,107],62:[1,108]},{9:[2,31],37:[2,31],39:[2,31]},{19:68,31:126,63:[1,69],64:[1,70],65:[1,71],66:[1,16]},{9:[1,127],37:[1,114]},{6:[1,21],10:37,19:39,20:128,21:[1,28],22:[1,38],23:[1,29],24:[1,30],25:[1,31],26:[1,32],27:33,28:34,29:35,30:36,32:[1,40],35:[1,41],36:[1,42],66:[1,16]},{6:[1,21],10:37,19:39,20:129,21:[1,28],22:[1,38],23:[1,29],24:[1,30],25:[1,31],26:[1,32],27:33,28:34,29:35,30:36,32:[1,40],35:[1,41],36:[1,42],66:[1,16]},{9:[2,56]},{9:[2,57]},{6:[2,23],11:[2,23],21:[2,23],22:[2,23],23:[2,23],24:[2,23],25:[2,23],26:[2,23],32:[2,23],34:[1,130],35:[2,23],36:[2,23],66:[2,23]},{9:[2,27],37:[2,27],39:[1,115]},{9:[2,29],37:[2,29],39:[2,29]},{9:[1,131]},{9:[2,35],37:[2,35],39:[2,35]},{6:[2,25],11:[2,25],21:[2,25],22:[2,25],23:[2,25],24:[2,25],25:[2,25],26:[2,25],32:[2,25],34:[2,25],35:[2,25],36:[2,25],66:[2,25]},{6:[2,26],11:[2,26],21:[2,26],22:[2,26],23:[2,26],24:[2,26],25:[2,26],26:[2,26],32:[2,26],34:[2,26],35:[2,26],36:[2,26],66:[2,26]},{6:[1,21],10:37,19:39,20:132,21:[1,28],22:[1,38],23:[1,29],24:[1,30],25:[1,31],26:[1,32],27:33,28:34,29:35,30:36,32:[1,40],35:[1,41],36:[1,42],66:[1,16]},{9:[2,33],37:[2,33],39:[2,33]},{6:[2,24],11:[2,24],21:[2,24],22:[2,24],23:[2,24],24:[2,24],25:[2,24],26:[2,24],32:[2,24],34:[2,24],35:[2,24],36:[2,24],66:[2,24]}],
defaultActions: {46:[2,2],59:[2,1],66:[2,21],68:[2,54],69:[2,55],80:[2,22],121:[2,56],122:[2,57]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
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
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
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
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== 'undefined') {
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
}};
/* generated by jison-lex 0.2.0 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
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
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            if (this.options.backtrack_lexer) {
                delete backup;
            }
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        if (this.options.backtrack_lexer) {
            delete backup;
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* ignore */
break;
case 1:/* ignore */
break;
case 2:/* ignore */
break;
case 3: return 4; 
break;
case 4: return 5; 
break;
case 5: return 17; 
break;
case 6: return 17; 
break;
case 7: return 26; 
break;
case 8: return 23; 
break;
case 9: return 21; 
break;
case 10: return 24; 
break;
case 11: return 25; 
break;
case 12: return 35; 
break;
case 13: return 36; 
break;
case 14: return 65; 
break;
case 15: return 64; 
break;
case 16: return 43; 
break;
case 17: return 45; 
break;
case 18: return 46; 
break;
case 19: return 47; 
break;
case 20: return 48; 
break;
case 21: return 49; 
break;
case 22: return 50; 
break;
case 23: return 51; 
break;
case 24: return 52; 
break;
case 25: return 53; 
break;
case 26: return 54; 
break;
case 27: return 56; 
break;
case 28: return 58; 
break;
case 29: return 57; 
break;
case 30: return 55; 
break;
case 31: return 60; 
break;
case 32: return 62; 
break;
case 33: return 61; 
break;
case 34: return 59; 
break;
case 35: return 34; 
break;
case 36: return 32; 
break;
case 37: return 41; 
break;
case 38: return 41; 
break;
case 39: return 37; 
break;
case 40: return 39; 
break;
case 41: return 39; 
break;
case 42: return 8; 
break;
case 43: return 9; 
break;
case 44: return 6; 
break;
case 45: return 11; 
break;
case 46: return 22; 
break;
case 47: return 63; 
break;
case 48: return 66; 
break;
case 49: return 12; 
break;
}
},
rules: [/^(?:\s+)/,/^(?:\/\/[^\n]*)/,/^(?:\/(\*([^*]|\*[^/])*\*)\/)/,/^(?:class\b)/,/^(?:program\b)/,/^(?:define\b)/,/^(?:void\b)/,/^(?:turnoff\b)/,/^(?:turnleft\b)/,/^(?:move\b)/,/^(?:pickbeeper\b)/,/^(?:putbeeper\b)/,/^(?:while\b)/,/^(?:iterate\b)/,/^(?:pred\b)/,/^(?:succ\b)/,/^(?:iszero\b)/,/^(?:frontIsClear\b)/,/^(?:frontIsBlocked\b)/,/^(?:leftIsClear\b)/,/^(?:leftIsBlocked\b)/,/^(?:rightIsClear\b)/,/^(?:rightIsBlocked\b)/,/^(?:nextToABeeper\b)/,/^(?:notNextToABeeper\b)/,/^(?:anyBeepersInBeeperBag\b)/,/^(?:noBeepersInBeeperBag\b)/,/^(?:facingNorth\b)/,/^(?:facingSouth\b)/,/^(?:facingEast\b)/,/^(?:facingWest\b)/,/^(?:notFacingNorth\b)/,/^(?:notFacingSouth\b)/,/^(?:notFacingEast\b)/,/^(?:notFacingWest\b)/,/^(?:else\b)/,/^(?:if\b)/,/^(?:!)/,/^(?:¬)/,/^(?:\|\|)/,/^(?:&&)/,/^(?:&)/,/^(?:\()/,/^(?:\))/,/^(?:\{)/,/^(?:\})/,/^(?:;)/,/^(?:[0-9]+)/,/^(?:[a-zA-Z][a-zA-Z0-9_]*)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = kareljava;
exports.Parser = kareljava.Parser;
exports.parse = function () { return kareljava.parse.apply(kareljava, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}