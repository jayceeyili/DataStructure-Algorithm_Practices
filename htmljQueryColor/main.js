$(function() {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  $('p').each(function(index, el) {
    var $el = $(el);
    var words = $el.text().split(' ');
    $el.html('');
    for (var i = 0; i < words.length; i++) {
      var newSpan = $('<span>').text(words[i] + ' ');
      $el.append(newSpan);
    }
  });

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  // setInterval(function() {
  //   $('span').each(function(index, el) {
  //     var red = Math.floor(Math.random() * 256);
  //     var green = Math.floor(Math.random() * 256);
  //     var blue = Math.floor(Math.random() * 256);
  //     $(this).css('color', 'rgb(' + red + ',' + green + ',' + blue + ')');
  //     // console.log(r + g + b);
  //   });
  // }, 1000);
  //
  const colorPicker = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return r + ',' + g + ',' + b;
  };
  const colorChanger = () => {
    $('span').each(function() {
      let color = colorPicker();
      $(this).css('color', 'rgb(' + color + ')');
    });
  };
  setInterval(colorChanger, 1000);
});
