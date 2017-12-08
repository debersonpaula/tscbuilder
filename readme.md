# TSCBuilder

TypeScript Compiler and Builder

Requires TypeScript
    
    $ npm install typescript

## Usage

```
const debugtxt = require('debugtxt');
const comp = require('./index');

/* To compile TypeScript files based on configFile */
debugtxt.writelnR('!FgCyan','=== JUST COMPILE TypeScript ===');
comp.CompileTSC(__dirname + '/tsconfig.json');

/* To compile TypeScript files based on configFile and watch changes */
debugtxt.writelnR('!FgCyan','=== COMPILE & WATCH TypeScript ===');
comp.CompileTSCW(__dirname + '/tsconfig.json','./test');

/* To create manual watcher to compile TypeScript files */
debugtxt.writelnR('!FgCyan','=== COMPILE TypeScript and add watcher ===');
compile();

debugtxt.writelnR('!FgCyan','=== Watching ===');
comp.Watcher('./test',compile);

function compile(){
    comp.CompileTSC(__dirname + '/tsconfig.json');
}
```


