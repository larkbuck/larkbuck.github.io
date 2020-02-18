
# Templates and Twitter Bootstrap 👏👾🤓
## Favicons, Custom Domains, libraries, and Search Engine

 ◇─◇──◇────◇────◇────◇────◇────◇─◇─◇
<br />


### *Try the Bootstrap puzzle...!  Download files [here](bootstrapPuzzle.zip).*

<br>


# ▼△▼△▼ Using frameworks and templates for your CSS styling

You would have to learn a lot about modern CSS to get your website looking clean and mobile-responsive (so that it resizes for readability on mobile phone).

If you want to go this route, be sure to use media queries and (I would recommend) flexbox.

Adapting templates or using a library/framework like Twitter Bootstrap are great options.

### Adapting CSS templates

Templates are great! There are many resources online ---> [templated.co](https://templated.co/) has a LOT of free templates to use.

You can find a lot of sample code on [W3 schools](https://www.w3schools.com/css/default.asp).

*Warning*: Sometimes customizing templates can get sloppy if you have conflicting CSS rules.


### Twitter Bootstrap

Twitter Bootstrap is a framework that makes it EASY to create responsive websites that are designed for mobile-first.

In its simplest form, it is basically a CSS library that you can link to just like your custom css style sheet. To use bootstrap, add this line to your HTML head:

      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">


Because of the was CSS cascades, you will want to link to bootstrap BEFORE you link to your  style sheet in the code, so be sure to have the bootstrap link on a line above the link to your css file.

Then grids are easy! You can just plug in Bootstrap class names to build out your site structure. Here is code for a 2 row grid. The top row has 3 columns and the bottom row has five.

    <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
        </div>
        <div class="row">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
        </div>
    </div>

If you wanted to specify widths of the column, you can add numbers to the col class. The numbers add up to 12, which represents the full width of the row.

The code below has one row with 3 columns. The first column (col-8) is 3/4th the width (8/12), and the last two (col-2) are 1/6th of the width.

<div class="container">
    <div class="row">
      <div class="col-8"></div>
      <div class="col-2"></div>
      <div class="col-2"></div>
    </div>
    <div class="row">
      <div class="col-4"></div>
      <div class="col-8"></div>
    </div>
</div>


To make them responsive, you can set breakpoints. These are well-documented in the [Bootstrap documentation guides](https://getbootstrap.com/docs/4.1/layout/grid/).

In the example below, the columns are by default 1/2 the size of the row (col-6), BUT once the screen is larger than the medium breakpont, they shrink to be 1/3 of the width.

<div class="container">
    <div class="row">
      <div class="col-6 col-md-4"></div>
      <div class="col-6 col-md-4"></div>
      <div class="col-6 col-md-4"></div>
    </div>
</div>



Tutorials:
* [Lynda Bootstrap 4 Essential Training](https://www.lynda.com/Bootstrap-tutorials/Bootstrap-4-Essential-Training/372545-2.html). You can learn a lot in just the first 2 chapters (~1hr of tutorials)
* Or go through the [W3 schools tutorials](https://www.w3schools.com/bootstrap4/default.asp)

<br>
<br>
