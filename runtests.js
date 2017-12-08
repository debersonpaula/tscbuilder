const debugtxt = require('debugtxt');
const comp = require('./index');

//debugtxt.writelnR('!FgCyan','=== JUST COMPILE TypeScript ===');
//comp.CompileTSC(__dirname + '/tsconfig.json');

debugtxt.writelnR('!FgCyan','=== COMPILE & WATCH TypeScript ===');
comp.CompileTSCW(__dirname + '/tsconfig.json','./test');