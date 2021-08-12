# Project_1
Created with CodeSandbox

• List technologies used
 Three main front-end coding languages: HTML, CSS and JavaScript.
Together, they create the underlying scaffolding that web browsers use to render the web pages that we interact with every day. 

 HTML can be considered as the basic structure of the house. CSS is the paint or the wallpapers, fixtures, to give a look and a design to the house and make it look more like a home. Whilst, JavaScript is the inner circuits of the house (electricity, heating, water) that the users enjoy.

The technology that has been used for this project is mainly through the codesandbox online platform. From the platform an online Static document has been created where the basis of the project for Tasty Tv have been established and developed. 

The technology mainly used for this project is html  which its backed up and supported by different front end css design files. In addition, images saved in .jpg have been used to support the design of the page. To a lesser extent a .js document has also been used to give a touch of functionality to the page.


Roughly speaking these are the files and documents:



.html:
index.html
home.html
announcements.html
aboutus.html
login.html
registry_form.html

.css
style.css
home.css
announcements.css
aboutus.css
login.css
registry_form.css


Images Folder (.jpg)


script.js


• Embedded images or links to wireframes and user stories

Images used in the project:
https://vistapointe.net/images/interstellar-8.jpg
http://seriefilosenfurecidos.com/wp-content/uploads/2018/09/HIMYM.png
ttps://i2.wp.com/www.heyuguys.com/images/2012/02/I-Am-Legend.jpg?fit=1024%2C768&ssl=1
https://www.senses.se/wp-content/uploads/2019/01/586924-sops-poster.jpeg
http://cinamigos.com/wp-content/uploads/mobilebanner.jpg 
https://images.alphacoders.com/900/thumb-1920-900419.jpg
https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2014/04/307386-critica-spider-man-2002.jpg?itok=muoPcQXk
https://hbomax-images.warnermediacdn.com/images/GXkRjxwjR68PDwwEAABKJ/tileburnedin?size=1280x720&partner=hbomaxcom&host=artist.api.cdn.hbo.com&w=1280
https://occ-0-1068-1722.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdPChfCEFiD521b1XCoFfvQlx9F1no-tUHM5SFJ0s9bFxk1GyIkjeZSM60x-CfbcNTPr0TeSnSWt44udge1B-KKTlo8tXsMGcGhW.png?r=74a
https://www.magicalquote.com/wp-content/uploads/2021/04/12-Angry-Men-Life-Lesson-Quotes.jpg
https://www.denofgeek.com/wp-content/uploads/2012/12/django-unchained-wallpapers-1920x1200-4.jpg?fit=1920%2C1200
https://images.alphacoders.com/900/thumb-1920-900419.jpg 
https://i.ytimg.com/vi/EsUl45kY2LE/maxresdefault.jpg
https://los40.com/los40/imagenes/2021/04/06/cinetv/1617698534_521932_1617698
https://ievenn.com/wp-content/uploads/goodfellas-1990-ievenn-2.jpg
https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUYxkkYodxSxiwmyS2w34BEwUAj7krrdk59VbQIwXfJnAJ-ioVeEDHVIpQ5VP9JSzG9WBLQkNdodTYcRcm8_x86n7xkAdgr5b_js.png?r=665
https://images-na.ssl-images-amazon.com/images/S/pv-target-images/604606e9cff80


Logo imgs

https://toppng.com/uploads/preview/instagram-logo-white-11617772990hm83lrotse.png
https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/YouTube_dark_icon_%282017%29.svg/640px-YouTube_dark_icon_%282017%29.svg.png
https://e7.pngegg.com/pngimages/998/533/png-clipart-social-media-computer-icons-twitter-cdr-logo.png
https://toppng.com/uploads/preview/facebook-logo-transparent-black-and-white-11549682037boz6lbuunu.png
https://toppng.com/uploads/preview/linkedin-square-logo-comments-linkedin-icon-black-11563087424lpctodfamj.png


User Story Link (Miro)

https://miro.com/app/board/o9J_l49U0os=/



Wire Frame Link (Google docs)
https://docs.google.com/document/d/1cbWQaw43QA9hYx01MpwpjfOhARy6Md7ZznAvxcUELa8/edit?usp=sharing



 • Document your planning and tell a story about your development process and problem-solving strategy
 

My plan or strategy is based on the user story and the established wireframes and parameters to move on to the development of the website using the wireframes designed as a guide added to the use of the technologies mentioned above. In general terms, the structure of the planning would be as follows

-Selection of images, logo and contents.

-Structuring of the pages on the basis of html in order to obtain a flat foundation or content.

-From these foundations of the five pages of the platform, the implementation of structures and common elements such as header navigation bar (logo, hyperlinks to other pages) and footers (links to different social networks).

-The next step will be to link the five pages respectively and simultaneously to each of their .css files.

-Then develop the respective .css and following an order and coherence with the parameters established in the html files.

-Finally, it would be necessary to add the functionality that is to say .js to fulfil the objectives of the project and to give it by means of a Math.random function the necessary functionality so that the user gets a random recommendation.

-In order to solve the problems that arise, we have to resort to different sources of information such as recorded classes or different internet pages such as cheatsheet for the flex boxes and the design or MDN for the functionality. Once these sources have been consulted, trial and error is applied. I usually make use of a separate isolated document to check that the source code works correctly and to avoid any kind of crossover and confusion between the code


• List unsolved problems which would be fixed in future iterations. 


My main stumbling block really was to adapt the header and footer flex boxes because they had images in particular the footer that even using div footer id and container still caused problems


Another unresolved problem are the logos of social networks that accompany the footer because they come from images taken directly from the internet, they vary in size and clash with the background colour as it is very difficult to find images that are truly png and can be fully adapted to the design of the page.  




 • Describe how you solved the recommendations special feature



let image_array = [
  "dr_strange.jpg",
  "goodfellas.jpg",
  "iamlegend.jpg",
  "shrek.jpg",
  "truedetective.jpg",
  "twd.jpg"
];

function get_random_image() {
  // Create a random index
  let random_index = Math.floor(Math.random() * image_array.length);

  // Get an image from the previously defined random_index
  let selected_image = image_array[random_index];

  // Display the recommended image(Film or Tv show)
  document.getElementById(
    "image_collection"
  ).src = `./images/${selected_image}`;
}


I solved it practically through trial and error. First I tried creating an array with the images and references linked directly to url pages but it didn't print any result and that's why I decided to create a folder with those images directly uploaded from my computer as individual jpg files. 


 • Describe how some of your favourite functions work

My favourite functions I could say is the recommendation button which is based on several divs a container and a HTML element representing a clickable button, with standard button functionality. From there the functionality is added through a js file in which an array is included with the list of jpg images from individual files stored in a images folder, then create a function to obtain a random result of these images, right after use let to declare a variable in which equals the image obtained and thus be able to display the image through getElementbyId by declarimg variables that are limited to the scope of a block statement. In summary as a result when clicking on the button a random image is displayed.


![image](https://user-images.githubusercontent.com/86687463/129120486-e59a2e62-f952-4953-b20d-8438e143eb4d.png)
