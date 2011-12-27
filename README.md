# jQuery Fileinput Plugin
Styleable &lt;input type="file"&gt; for jQuery.

## The Problem
You can't style HTML file inputs. They'll always look [fugly](http://www.urbandictionary.com/define.php?term=fugly).

## The Solution
JavaScript magic! You can ignore the following technical jargon unless you're interested in the implementation details. It's all done by wrapping the file input on a div, adding a replacement element to provide the visuals and then making the original input invisible. Clicks to the replacement element are propagated to the original input on the browsers that support it, otherwise a transparent file input is placed on top of the replacement.

### Let Me Show You How

#### Trivial
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

#### With replacement HTML
    ...
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js"></script>
    <script type="text/javascript" src="https://github.com/hleinone/jquery-fileinput/raw/master/jquery.fileinput.js"></script>
    <script type="text/javascript">
    //<![CDATA[
    $().ready(function() {
      $("input[type=file]").fileinput("<button>Browse...</button>");
    });
    //]]>
    </script>
    ...
    <input type="file" name="foo" />

#### With replacement jQuery selector
    ...
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js"></script>
    <script type="text/javascript" src="https://github.com/hleinone/jquery-fileinput/raw/master/jquery.fileinput.js"></script>
    <script type="text/javascript">
    //<![CDATA[
    $().ready(function() {
      $("input[type=file]").fileinput($("button").remove());
    });
    //]]>
    </script>
    ...
    <input type="file" name="foo" />
    <button>Browse...</button>

### API

#### .fileinput([replacement])

**replacement** Plain HTML, or a jQuery selector for the element intended to replace the file input.

#### Notes

With **Opera** (and **Firefox** versions before 4) we can't support the [native CSS pseudo classes](http://www.w3schools.com/css/css_pseudo_classes.asp). Instead we'll provide them equivalent "pseudo pseudo classes" which are actually just normal CSS classes.

* **.hover** for :hover
* **.focus** for :focus
* **.active** for :active

### [Demo](http://jsfiddle.net/hleinone/UF4nr/)

## Requirements

* [jQuery](http://jquery.com/) 1.4+

### Tested on

* Firefox 6.0.2
* Chrome 14.0.835.186
* Safari 5.1 (6534.50)
* Internet Explorer 8.0.7601.17514
* Opera 10.51

## Developing

1. Fork
1. Clone your fork
1. Make your modifications
1. Compile using [`jake`](https://github.com/mde/jake)
1. Test
1. Create pull request
1. ???
1. Profit!
