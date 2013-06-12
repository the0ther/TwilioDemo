/*global define */
define(['jquery'], function ($) {
  'use strict';

  $('#sendAppLink').on('submit', function() {
    //var that = this;
    var name = $('[name=yourName]', this).val();
    var friendsName = $('[name=friendsName]', this).val();
    var phone = $('[name=phone]', this).val();
    var body = 'Hi ' + friendsName + ', Your friend ' + name + ' wants to share video with you on Brabble. Get the app here: http://bit.ly/190JYt8';

    // issue request
    $.post(
      'http://localhost:8888/sendAppLink',
      {
        'From': '%2B19175128334',
        'To': phone,
        'Body': body
      })
    .then(function() {
      console.log('done sending message');
    });

    return false;
  });

  $('#sendBrabble').on('submit', function() {
    console.log('inside sendBrabble()');
    var name = $('[name=yourName]', this).val();
    var friendsName = $('[name=friendsName]', this).val();
    var phone = $('[name=phone]', this).val();
    var theBrabble = $('#brabble option:selected').val();
    console.log(theBrabble);
    var body = 'Hi ' + friendsName + ', Your friend ' + name + ' wants to show you a Brabble.: ' + theBrabble;

    // issue request
    $.post(
      'http://localhost:8888/sendAppLink',
      {
        'From': '%2B19175128334',
        'To': phone,
        'Body': body

      })
    .then(function() {
      console.log('done sending message');
    });

    return false;
  });
});