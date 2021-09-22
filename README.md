# Password Generator 

&ensp;&ensp;&ensp;&ensp;I was given the task to finish a set of given code for a password generator. I had to also add some css styling to make the webapge compatible to other screen sizes. 

## Starter Code 

&ensp;&ensp;&ensp;&ensp;The given starter code was retrieved through gitlab. I created a github repository and cloned it onto my local machine. After, I transfered the starter code into the password generator directory and began adding my code.

## Summary 

&ensp;&ensp;&ensp;&ensp;First, I linked all the external files to the html file. I had to change the directory because I stored the other files in another asset directory. After, I created four different lists that would represent the 4 different password criteria. 
<br> ![password_arrays](./assets/images/libraries.png)
&ensp;&ensp;&ensp;&ensp;Each list contained a unique set of values; such as capital letters or numbers. In addition, I initiated a list of multiple possible responses for 'yes'. <br> 

![Array of yes](./assets/images/yes_array.png)

&ensp;&ensp;&ensp;&ensp; I would then have a series of prompts that would ask about the criteria they wanted to fullfil in making their password. Once collecting that data, I had a series of if statements that would append to an empty list the correlating criterias. 

![response_check](./assets/images/createArray.png)

I did this all in a function that I later called in the main password generate function. Using the list made in createArray I made a number generator within a for loop that is counting up to the amount of characters the user requested. Each interration the number generator will produce a number within the scope of the array created by createArray and appended that value to an empty string. That string would then be returned for the password generator to display for user. 

![generatepassword](./assets/images/generatePassword.png)

Finally I added some code ot the media section to improve on the webpages responsiveness. 

![css_styling](./assets/images/css_styling_media.png)

## Technologies Used

- Html
- CSS
- Javascript

<br>

## Resources 
[W3](https://www.w3schools.com/)
[MDN Web Docs](https://developer.mozilla.org/en-US/)
[Javascript.Info](https://javascript.info/alert-prompt-confirm)

<br>

## Deployable Link 

[Link](https://danielvo1.github.io/password_generator/)

<br>
<br>

### by Daniel Vo