# jQuery Fileinput Plugin
Stylable &lt;input type="file"&gt; for jQuery.

## The Problem
You can't style HTML file inputs. They'll always look fugly.

## The Solution
JavaScript magic! Wrapping the file input on a div, adding the replacement element to provide the visuals and then making the original input invisible. The clicks to the replacement element are propagated to the original input on the browsers that support it, otherwise a transparent file input is placed on top of the replacement.

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

### The API

#### .fileinput([replacement])

**replacement** A selector for the element intended to replace the file input. The element is removed from the DOM immediately.

#### The Notes

With **Opera** (and **Firefox** versions before 4) we can't support the [native CSS pseudo classes](http://www.w3schools.com/css/css_pseudo_classes.asp). Instead we'll provide them real classes.

* **.hover** for :hover
* **.focus** for :focus
* **.active** for :active

### [The Demo](http://jsfiddle.net/hleinone/UF4nr/)

## The Requirements

* [jQuery](http://jquery.com/) 1.4+

### Tested on

* Firefox 6.0.2
* Chrome 14.0.835.186
* Safari 5.1 (6534.50)
* Internet Explorer 8.0.7601.17514
* Opera 10.51