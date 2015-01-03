/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var Imagemin = require('imagemin');

module.exports = function(content, file, conf) {
    var imagemin = new Imagemin()
    .src(content)
    .use(Imagemin.jpegtran({ progressive: true }));

    return imagemin.run(function (err, files) {
        if (err) {
            throw err;
        }

        return files[0];
        // => { contents: <Buffer 89 50 4e ...> }
    });
};

// console.log(Imagemin.jpegtran({ progressive: true })());
