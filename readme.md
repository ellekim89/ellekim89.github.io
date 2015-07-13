Project One
by Elle Kim

Technologies Used
- html
- css
- javascript/jquery
- bootstrap
- chrome's console
- gifgrabber

Installation Instructions
- open the webpage enjoy the beauty of Channing Tatum!


My Approach
1.) I broke it the project done into steps by writing down everything I might need.


2.) I made a quick html layout and very basic styling so I can see how the layout is and how my code in jquery would affect it.


3.)Then I started off with creating a function to randomize and shuffle my images. This was achieved thanks to google and JSFIDDLE's plug in!


4.) Next I coded the "play again" button to see if that shuffling function worked.


5.)This was the hard part. I had to make a function where when someone clicked on an image, the image had to show and have the second image show up. And depending on what that second image was, the images would hide or stay. 

This was where I added a class of visibility to the images. So if the image was clicked, the class would be taken off to show the image. I added another if statement after the second click so that if the clicks were of the same image, the image would be permanently displayed until it was reset. If the images were not the same, the visibility attribute was added on again so that the images would be hidden again.

6.) Then I tried to figure out how I could indicate that the game had ended. So I made a blank array and programmed the click functions to push the images into the empty array. So that if the length of the array was 16(because there are 8 image pairs), all the photos had been matched which would signal the end of the game. I added this function to play after the player had found a match.

7.) Once I got the skeleton of the program done, I decided to make it into a two player game. Once the first player would finish, it would be the second player's turn. So I added an else if statement in the function that checks if the game had ended. Here, the board would be shuffled again and alert the player that it was the second player's turn. 

8.) Then I knew that I needed to keep track of the clicks in order to compare which player solved the puzzle with the least amount of clicks. I added variables for the amount clicks the first player would click and another for the second player. When the game would end, it would compare their score and alert who the winner was. 

9.) Once I got everything to work, I added some nice Channing Tatum gifs and since squares were boring, I made the cells into circles. I also added a modal and a video inside the modal :)


Unsolved Problems
I had one huge issue that gave me a huge headache. I had the hardest time trying to figure out how to delay the program from hiding the second image if it didn't match with the first. I kind of got it working with a setTimeout function but it only works when I set the timing to 300. If I set the time to 400, for some reason, if I click on another image before the time has gone by, it displays the image as if a match had been found. 

