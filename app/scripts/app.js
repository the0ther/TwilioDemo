/*global define */
define(['jquery', 'bootstrap'], function ($) {
  'use strict';

  $('#sendAppLinkBtn').on('click', function() {
    console.log('inside this handler!!!!');
    var form = $('#sendAppLink');
    //var that = this;
    var name = $('[name=yourName]', form).val();
    var friendsName = $('[name=friendsName]', form).val();
    var phone = $('[name=phone]', form).val();
    var body = 'Hi ' + friendsName + ', Your friend ' + name + ' wants to share video with you on Brabble. Get the app here: http://bit.ly/190JYt8';

    // issue request
    $.post(
      'http://localhost:8888/sendAppLink',
      {
        'From': '%2B19175128334',
        'To': phone,
        'Body': body
    }).done(function() {
      console.log('done sending message');
      $('#sendAppLinkAlert').addClass('alert-success').show();
    }).fail(function() {
      console.log('failed');
      $('#sendAppLinkAlert span').html('<strong>Fail!</strong> Best check yo self, you\'re not looking too good.');
      $('#sendAppLinkAlert').addClass('alert-error').show();
    });
    return false;
  });

  $('#sendBrabbleBtn').on('click', function() {
    console.log('inside sendBrabble()');
    var form = $('#sendBrabble');
    var name = $('[name=yourName]', form).val();
    var friendsName = $('[name=friendsName]', form).val();
    var phone = $('[name=phone]', form).val();
    var theBrabble = $('#brabble option:selected').val();
    console.log(theBrabble);
    var body = 'Hi ' + friendsName + ', Your friend ' + name + ' wants to show you a Brabble.: ' + theBrabble;

    // issue request
    $.post(
      'http://localhost:8888/sendBrabble',
      {
        'From': '%2B19175128334',
        'To': phone,
        'Body': body
    }).done(function() {
      console.log('done sending message');
      $('#sendBrabbleAlert').addClass('alert-success').show();
    }).fail(function() {
      console.log('failed');
      $('#sendBrabbleAlert span').html('<strong>Fail!</strong> Best check yo self, you\'re not looking too good.');
      $('#sendBrabbleAlert').addClass('alert-error').show();
    });
    return false;
  });
});