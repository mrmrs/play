/*

        PLANGULAR
        A Highly Customizable SoundCloud Player

        Vuejs Version

        http://jxnblk.github.io/Plangular

 */

'use strict';

var plangular = {};
plangular.clientID = '4b12fb7c1cbc619fce3cf9adb1c4cd0a';
plangular.api = 'http://api.soundcloud.com/resolve.json';
plangular.data = {};

module.exports = plangular;

var jsonp = require('jsonp');
  // Try npm http instead


// TO DO: Move Vue wrappers to top level

// Vue component
require('./v-soundcloud');

require('./v-icons');
require('./v-pretty-time');
//require('./v-waveform');

