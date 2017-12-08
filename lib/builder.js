/*!
 * builder
 * tsc + builder + watcher unit
 * Copyright(c) 2017 Deberson Paula
 * MIT Licensed
 */
const tsc = require('./tsc');
const watch = require('node-watch');
const debugtxt = require('debugtxt');

// compile TypeScript files based on configFile
function pCompileTSC(configFile){
    debugtxt.write('Compiling TypeScript:');
    tsc(configFile);
    debugtxt.writeln(' compiled!');
}

// compile TypeScript files based on configFile and watch changes
function pCompileTSCW(configFile, watchDir){
    pCompileTSC(configFile);
    debugtxt.writelnR('!FgBlue','Watching Files...');
    watch(watchDir, { recursive: true }, function(evt, name) {
        debugtxt.writelnR('!FgGreen','--- Rebuilding ---');
        pCompileTSC(configFile);
    });
}

// just watch for changes utility
function pWatcher(watchDir, callback){
    return watch(watchDir, { recursive: true }, function(evt, name) {
        if (callback) callback();
    });
}

exports.CompileTSC = pCompileTSC;
exports.CompileTSCW = pCompileTSCW;
exports.Watcher = pWatcher;