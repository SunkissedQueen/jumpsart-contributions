<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Treasure Hunt</title>
    <link rel="shortcut icon" href="https://cdn2.iconfinder.com/data/icons/valuable-items/200/achievement_chest_coin_gold_money_reward_treasure-512.png">
  </head>

  <body>
    <h1 id="top-page">Treasure Hunt Game</h1>
    <h2>Try your luck and find the treasure below</h2>
    <img src="http://www.freepngimg.com/thumb/treasure/1-2-treasure-png-thumb.png" height="100px" alt="treasure box">
    <hr  />
    <h3>Here are the rules for the game:</h3>
    <ul>
      <li>Rule 1: Click on one of the question marks below.</li>
      <li>Rule 2: If you find the treasure, you win!</li>
      <li>Rule 3: If you find the bomb, you lose.</li>
    </ul>
    <h3>Good Luck!</h3>

    <table style="border: 2px solid black" height="200px" width="200px">
      <tr>
        <td>?</td>
        <td>?</td>
        <td>?</td>
      </tr>
      <tr>
        <td>?</td>
        <td>?</td>
        <td>?</td>
      </tr>
      <tr>
        <td>?</td>
        <td>?</td>
        <td>?</td>
      </tr>
    </table>

    <br />
    <h3>Turns remaining:</h3>
    <br />

    <button type="button" name="button">Restart Game</button>
    <br />
    <br />


    <footer>


      <a href="#top-page">Top of page</a> |



    </footer>

  </body>
</html>


<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>LEARN's Apple Pie</title>

Favicon
A favicon is a small image that sits on the chrome tab.
Back in the head tag we need to add a special tag called link
Link takes three attributes
rel="icon" 
type="image/x-icon"
href=""
The href will link to an image address of something like an apple
    <link rel="icon" type="image/x-icon" href="https://pixahive.com/wp-content/uploads/2021/04/Apple-illustration-413444-pixahive.jpg">

---->Go to the button that leads to the recipe. Under the body. Will be below the h1 tag.    
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&family=Lemonada:wght@300&display=swap" rel="stylesheet">
  </head>
  <body>
    <h1 id="top"> A spoonful of this pie will make your worries go bye!</h1>

Button
Lastly Let’s make a button on the top of the page to take our user to the recipe if they just want the information.
First we’ll set up a div around the recipe and give it the id of recipe
<div id=’recipe’></div> or assign id='recipe' to h3 tag on recipe near ingredient list
Next we’ll create an anchor tag at the top of the page the will send us to the recipe
And then inside that a tag we’ll create a button tag that will show the words take me to the recipe
    <a href=’#recipe’><button>Take me to the recipe <button></a>

**no share screen**
Okay let's break into our pairs again and finish up the section on HTML in the ‘Jumpstart Weekend Student Notes’ 
We’ll come back together for checkout at 8:40pm
    <hr>
    <img src="https://media.istockphoto.com/photos/homemade-organic-apple-pie-dessert-picture-id450752471" height="300px">
    <div>
      <p> Go to your kitchen and grab your utensils. Let them know they are about to do something spectacular. Tell your tastebuds to get ready for a splendid occurence because you are about to bake some Learn Apple Pie!</p>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <span id="important">this information is VERY important</span> nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
    </div>

    <h3>Ingredients</h3>
    <ul>
      <li>Large Granny Smith apples (1/2 inch slices)</li>
      <li>Large Honeycrisp apples (1/2 inch slices)</li>
      <li>Large Golden Delicious apples (1/2 inch slices)</li>
      <li>Pie crusts</li>
      <li>White sugar</li>
      <li>Brown sugar</li>
      <li>Tapioca</li>
      <li>Cinnamon</li>
      <li>Nutmeg</li>
      <li>Lemon (zested and juiced)</li>
      <li>Large Egg (lightly beaten for egg wash)</li>
    </ul>
    <h3 id="recipe">Recipe Instructions</h3>
    <ol>
      <li>Preheat oven to 400F</li>
      <li>Prebake pie crust inside a deep dish pie pan</li>
      <li>Mix all the ingredients except egg wash in a mixing bowl</li>
      <li>Spoon the apple filling over the bottom crust and discard juices</li>
      <li>Lay a pie crust over the apple filling</li>
      <li>Trim the dough along the outside edge of the pie pan</li>
      <li>Cut 4 slits in the top of the dough to allow steam to vent</li>
      <li>Cover the edges with a strip of foil to keep from over browning</li>
      <li>Bake at 400°F for 25 minutes</li>
      <li>Remove aluminum foil</li>
      <li>Bake for an additional 30-35 minutes or until the top is golden brown and the juices are bubbly</li>

</li>
      <li>
        Bake them!
        <ul>
          <li>400 degrees!</li>
          <li>25 minutes!</li>
        </ul>
      </li>
      <li>Let them sit for a bit</li>
    </ol>
 <!-- A div is a  block level element -->
    <div>

Table
Explore nesting HTML elements by creating a basic table.
Table
(say this after creating tables) And if we want to add some temporary style to our table we can use an attribute (inline styling)
      <table border=1>

Table Row
        <tr>

Table Data <td>
(2 rows of 2 table data, refresh browser and show 1X1, 2X2, 3X3, show one large block with other rows)
          <td>Full Tray</td>
          <td>Half Tray</td>
          <td>Single Serving</td>
        </tr>
        <tr>
          <td>1 hour</td>
          <td>30 minutes</td>
          <td>10 minutes</td>
        </tr>
      </table>
    </div>

---->Go to the area to make a favicon in the header

HTML - Part two
**yes screen share**
Footer
A footer is a standard section of any web page and generally hold some information regarding 
the authors of the site
where more information can be found
possibly a link to some external resource
To create a footer we simply make a tag with the word footer
    <footer>

In this tag I can put a copyright logo © with the names of my team
      &copy LEARN Instructors and TAs | Jumpstart |

What would make this footer even better would be a link to take me back to the top of the page
Anchor Tags and Navigation
So let's make a navigation link in footer to the top of the page so people don’t have to scroll all the way up. 
The anchor tag is how we create those famous blue links in HTML
The Anchor tag is simply an HTML tag made with the letter “a”
The Anchor tag takes an attribute of href and then the place we want the link to go      
      <a href="#top">Top of page</a>
And we also need to add an id=’top’ to the first element in our <body> tag

Link to external website
An <a> tag with link to where I got the recipe from https://littlespoonfarm.com/apple-pie-recipe/
      <a href="https://littlespoonfarm.com/apple-pie-recipe/" target="_blank">Apple Pie Recipe</a>
    </footer>

---->Go to the area where a table resides after the list of ingredients
    <script type="text/javascript" src="logic.js"></script>
  </body>
</html>





Aloha, Hola, Howdy, I am Charlean and will be showing you how to spice up your webpage.
  So now that you have the structure from
  + hypertext markup language HTML
  and the behavior setup by
  + javascript JS
  We can start thinking about how we want to present our content to the world using
  + Cascading Style Sheets CSS

  Why learn CSS?
  ///share screen, show index.html
  Without CSS, every web page would be plain text and images that flowed straight down the page. 
  ///share screen, show duper.html
  With CSS, we can start adding color and background images and changing the layout of your page

##Connecting the file
  Alright let's style this!
  CSS doesn’t do much without HTML...
  <!-- Show the different ways to create a file
  Desktop ---rightclick and move into folder
  File Tab ---new, save as
  text editor ---file button at top, or right click on the folder/project -->

  CSS basics:
  Remember the index.html and .js files. I need to load those into my text editor so I can style this website/project. Grab code from zoom chat.
  <!-- Different ways to view the index.html
  Right click the index.html to see Open preview
  If open in browser, inspect the page show to locate the section -->

  ///Start from scratch. Explain the extensions.
  This is how I would add the files created by the Splendid Sarah and Excellent Elyse. (shows the code block from zoom chat)
  (Create a .css file and explain the importance of extension to hold the styling info)

  Let's connect everything.
  go to index.html type
  Connecting CSS to HTML: External
  <head>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  Shared resource for several pages.
  Reduced file size & bandwidth
  Easy to maintain in larger projects.
  Preferred by nerds everywhere!

###Can style an id, class, tags
  As you have seen with the languages you learn so forth like html (go to the index.html) and js (go to the js file) there are rules.

  The CSS Rule
  selector {
    property: value;
  }
  ///type that rule commented out in css
  A block of CSS code is a rule.
  The rule starts with a selector.
  It has sets of properties and values.
  A property-value pair is a declaration.
  Declarations end with a semicolon
  Declaration groups are surrounded by curly brackets.
  selector {
    property: value;
    property: value;
    property: value;
  }
  <!-- Each property can have one or more comma separated values.
  selector {
    property: value;
    property: value, value;
  } -->

  ///Go to the index.html file and point out the different tags
  The selector portion of the syntax--selects HTML elements based on their tag names. Each HTML element—<h1>, <li>, <body>—and any other HTML element can be selected with CSS by using the tag name without the angle brackets (< and >). For example, you can select all of the <body> tag in your webpage by using the element selector body.

  ///type body in the css file
  Proceed to build out explain that property is what trait you want to change
  <!-- The color property changes the color of the text.
  The background-color property changes the color of the background. 
  CSS Color Values
  Your browser can accept colors in many different ways:
  Color name (ex. red)
  Hexadecimal value (ex. #FF0000)
  RGB value (ex. rgb(255, 0, 0))
  HSL value (ex. hsl(0, 100%, 100%))-->
  Value is what you want to see on the screen
  (refresh browser to see the change)

##text-align center on the h1
  (Type h1{
    text-align: center;
  })
  (refresh browser to see the change)

##Want to center the h2 but there are multiple h2s so add an id
  Let's center the next line of text...oh no there are a lot of other h2...no problem we can css has key words we can use to designate which specific html tag we want to style, especially while there are multiple tags
  /// explain id (one tag) and classes (applied to multiple tags in your HTML code)
  (type id="subheader" on html for the first h2 tag)
  (type id="dice-image" on two dice image)
  (type class="border" on ul, div rolled)
  ///go back to css
  Targeting one specific HTML tag can be done with an id using a hash mark before the id name #subheader, dice-image
  Targeting a group of HTML tags can be done with a class using a period before the class name .border

  CSS styles are applied to HTML tags, ids, or classes

  CSS styling can be defined once and applied to multiple tags in your HTML code

##Center the img - try and center the tag, fail, look at the dev tools
  ///type img in css
    display: block;
    margin: 0 auto;

##Wrap the img in a div, center the content
  ///type <div id="dice-image"> on html
  Targeting one specific HTML tag can be done with an id using a hash mark before the id name #dice-image

##Add a Google Font - link and CSS code in a * to apply to all tags
  there is a unique shorthand way to select all the html tags (splat) * can be used to apply stylings to every HTML tag

  /// type * in css
  font-family: 'Lobster Two', cursive;





##pseudo selectors
Hover attributes
There is a subset of CSS attributes called pseudo selectors
They act on other CSS attributes to make modifications to the styling only under certain conditions
Hover attributes are stylings that only occur when the cursor is “hovering” over the tag
button {
    font-size: 1.1em;
    background-color: #EBF5FF;
    color: #4312AE;
    border: 2px solid black;
    box-shadow: 4px 4px 4px #999999;
  }
  button:hover, button:focus, button:active {
    /* swap colors */
    color: #EBF5FF;
    background-color: #4312AE;
    cursor: pointer; /* displays a hand */
  }


##STRETCH: background img
STRETCH - animation
Animation
Uses an attribute @keyframes that breaks down the total length of your animation into as many frames as you choose
The difference in each frame creates the movement or action
This website breaks explains each of the animation attributes and gives great examples: https://thoughtbot.com/blog/css-animation-for-beginners

<!-- Connecting CSS to HTML
3 ways
"Inline"
"Embedded"
"External"

Connecting CSS to HTML: Inline
<p style="color:red">Some text.</p>
Uses the HTML attribute style.
Difficult to use in large projects
Not preferred.

Connecting CSS to HTML: Embedded
<head>
  <style type="text/css">
    p {
      color: blue;
      font-size: 12px;
    }
  </style>
</head>
Inside <head> element.
Uses <style> tag.
Can only be used in one html file
 -->

