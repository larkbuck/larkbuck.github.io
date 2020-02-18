
# More HTML/CSS 👏👾🤓
## Favicons, Custom Domains, color, fonts, link hover color

 ◇─◇──◇────◇────◇────◇────◇────◇─◇─◇
<br />



#### On this page:

1. [Adding favicons](#-favicons)
2. [Custom Domains](#-custom-domains)
3. [Search Engine Optimization (SEO)](#-search-engine-optimization)
4. [Adjusting Color and Hex Codes](#adjusting-color-and-hex-codes)
5. [Adjusting Fonts](#adjusting-fonts)
6. [Change Link Hover Color](#change-link-hover-color)



---
<br>



# ▼△▼△▼ Favicons


Favicons are the little symbol in the browser tab of your webpage. To make a custom favicon for your site:

1. Create a SQUARE image in photoshop/illustrator, I make them 500 x 500px so there's plenty of room to downsize. Export them as PNGs if you want transparency (recommended). Keep the image super simple because they will be so small!

2. Upload image to an online [favicon generator](https://realfavicongenerator.net/)

3. The favicon generator will create a bundle of favicon image files in different sizes/formats so your favicon will show in different browsers/devices. Download the zip and place files in the root directory of your website. The root directory is the main folder, where your homepage index.html lives.

4. The generator will also give you HTML — this goes in the <head> of your HTML (not the body).

That's it!


<br>
<br>

# ▼△▼△▼ Custom domains


You can purchase a custom domain from a domain name registrar. GoDaddy and NameCheap are two popular sites.

Once you have purchased your custom domain, connect the domain to your GitHub page. This way, whenever someone goes to www.yourName.com, your GitHub page will load.

* [General tutorial from GitHub help](https://help.github.com/articles/quick-start-setting-up-a-custom-domain/)
* [Tutorial specific to GoDaddy domains](https://medium.com/@LovettLovett/github-pages-godaddy-f0318c2f25a)
* [Tutorial specific to NameCheap domains](http://davidensinger.com/2013/03/setting-the-dns-for-github-pages-on-namecheap/)


<br>
<br>




# ▼△▼△▼ Search Engine Optimization

Okay, so you have a website, but how do people find it?

Search engines like Google scan the internet with bots to index all the websites and determine which ones show up in your search results.

So you want to make sure you give them the right descriptions and keywords!

In addition to the <title> tag, which shows up in the browser tab, you can also add a description and keywords. Insert this code into your HTML header, and read over this [PDF on how to optimize your HTML tags for bots](http://www.theinternetofbots.com/pdf/Search%20Engine%20Optimization%20-%20The%20Internet%20of%20Bots.pdf).


    <meta name="description" content="description in 50–300 characters (letters).">
    <meta name="keywords" content="artist, your name, your nick name, digital media art, all the keywords">

<br>

# Adjusting Color and Hex Codes

### **Open your main.css page if it is not yet. We are going to make _minor_ adjustments. Reminder: Be Careful and move slowly in CSS!**

![Portfolio Buildout](images/Art74_Portfolio_Buildout.043.jpeg)

![Portfolio Buildout](images/Art74_Portfolio_Buildout.044.jpeg)

![Portfolio Buildout](images/Art74_Portfolio_Buildout.045.jpeg)

![Portfolio Buildout](images/Art74_Portfolio_Buildout.046.jpeg)

<br>

# Adjusting Fonts

![Portfolio Buildout](images/Art74_Portfolio_Buildout.047.jpeg)

![Portfolio Buildout](images/Art74_Portfolio_Buildout.048.jpeg)

![Portfolio Buildout](images/Art74_Portfolio_Buildout.049.jpeg)

![Portfolio Buildout](images/Art74_Portfolio_Buildout.054.jpeg)

![Portfolio Buildout](images/Art74_Portfolio_Buildout.055.jpeg)

![Portfolio Buildout](images/Art74_Portfolio_Buildout.056.jpeg)

<br>

# Change Link Hover Color
You can add more style to your links and change the color on hover (when they are moused over), by adding more link 'a' selectors to your stylesheet.  For more link styling options- [check out this page.](https://www.w3schools.com/css/css_link.asp)


#### **Code to copy to your CSS document below your first 'a' selector:**


        /* mouse over link */
          a:hover {
              color: hotpink;
            }

### Your stylesheet should look like this:

![Portfolio Buildout](images/linkhover.png)
