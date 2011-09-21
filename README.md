# jQuery Fileinput Plugin
Stylable <input type="file"> for jQuery.

## The Problem
You can't style HTML file inputs. They'll always look fugly.

## The Solution
JavaScript magic! Wrapping the file input on a div, appending another element to provide the visuals and then making the original input invisible. Kinda, like described [here](http://www.viget.com/inspire/custom-file-inputs-with-a-bit-of-jquery/).
### Let Me Show You How

    ...
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js"></script>
    <script type="text/javascript" src="https://github.com/hleinone/jquery-fileinput/raw/master/jquery.fileinput.js"></script>
    <script type="text/javascript">
    //<![CDATA[
    $().ready(function() {
      $("input[type=file]").fileinput();
    });
    //]]>
    </script>
    ...
    <input type="file" name="foo" />

...will end up as...

    <div class="fileinput-wrapper" style="position: relative; display: inline-block; overflow: hidden;">
      <input type="file" name="foo" style="font-size: 100px; height: 100%; filter: alpha(opacity=1); -moz-opacity: 0.01; opacity: 0.01; position: absolute; right: 0; top: 0;">
      <button class="fileinput" style="display: inline-block;" tabindex="-1">Browse...</button>
    </div>

### The API
#### .fileinput([replacement])
**replacement** A selector for the element intended to replace the file input. The element is removed from the DOM immediately.
#### CSS Pseudo^2 Classes
To mimic the behavior of the [CSS pseudo-classes](http://www.w3schools.com/css/css_pseudo_classes.asp) we use regular classes instead.
* **.hover** Replacement for :hover
* **.focus** Replacement for :focus
* **.active** Replacement for :active

### [The Demo](http://jsfiddle.net/hleinone/UF4nr/)

## The Requirements
* [jQuery](http://jquery.com/) 1.4+

