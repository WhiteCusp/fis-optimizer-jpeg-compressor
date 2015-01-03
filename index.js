/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var isJpg = require('is-jpg');
var jpegtran = require('jpegtran-bin').path;
var spawn = require('child_process').spawn;

module.exports = function(content, file, conf) {
    if (!isJpg(content)) {
        return;
    }

    var args = ['-copy', 'none', '-optimize'];
    var ret = [];
    var len = 0;

    if (opts.progressive) {
        args.push('-progressive');
    }

    var cp = spawn(jpegtran, args);

    cp.on('error', function (err) {
        return;
    });

    cp.stderr.setEncoding('utf8');
    // cp.stderr.on('data', function (data) {
    //     return;
    // });

    cp.stdout.on('data', function (data) {
        ret.push(data);
        len += data.length;
    });

    cp.on('close', function () {
        // cb(null, file);
    });

    cp.stdin.end(content);
};

// console.log(Imagemin.jpegtran({ progressive: true })());
