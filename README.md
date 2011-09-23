# jQuery Fileinput Plugin
Stylable &lt;input type="file"&gt; for jQuery.

## The Problem
You can't style HTML file inputs. They'll always look fugly.

## The Solution
JavaScript magic! Wrapping the file input on a div, adding the replacement element to provide the visuals and then making the original input invisible. The clicks to the replacement element are propagated to the original input.
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
      <button class="fileinput">Browse...</button>
      <input type="file" name="foo" tabindex="-1" style="font-size: 100px; height: 100%; opacity: 0; position: absolute; right: 0px; top: 0px; z-index: -1;">
    </div>

### The API
#### .fileinput([replacement])
**replacement** A selector for the element intended to replace the file input. The element is removed from the DOM immediately.

### [The Demo](http://jsfiddle.net/hleinone/UF4nr/)

## The Requirements
* [jQuery](http://jquery.com/) 1.4+

