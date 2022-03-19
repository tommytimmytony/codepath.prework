# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Tommy Nguyen**

Time spent: **13** hours spent in total

Link to project: (
https://glitch.com/edit/#!/rhetorical-holly-peripheral)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] List anything else that you can get done to improve the app!
- Incorporated firework at the end of the victory screen by using an API from fireworks-js.
- Install a level label for the player to keep track of the level.
- Create a function that will show the word "Congratulations" when the user win the game. Then remove it at the start of the game. 

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[StackOverFlow, YouTube, Google]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[A specfic challenge that I encountered was implementing the timer function. At the beginning of the project, I have very little knowledge about how to incoporate time in Javascript. Therefore, I went on Google to try to read and grasp the basic fundamental before implementing the function. I also watch some Youtube video to see real example and try to understand the topic even futher. After some long hours and many trial and error, I manage to create a timer function that work. I was able to show the timer and the countdown. However, there was one huge problem. The timer will start the count down before the Clue Sequence finish playing. I tried to search tons of Youtube video and article to help me find the solution, but it didn't work. Instead of wasting time conting searching instead I tried to track and use console.log() to find where the timer stop or start. I also take note of how other function are interacting with the timer function. After some time, I was able to identify that the problem was located in the playClueSequence() function. I placed the timer function after the for loop in the playClueSequence(). There was a delay variable and setTimeOut() function in the for loop. Therefore, I thought that the for loop containing the setTimeOut() is delay and  timer function will played after the for loop is done. However, I found out that the for loop actually iterate very quickly in a split-second. I immedaitely went to research more information about the setTimeOut() function. I have learned that the setTimeOut() function is non-blocking and will return immediately. After I learn enough informoation about setTimeOut() function I decided to use it with my timer function. I use the setTimeOut() and pass in my timerfunction and the delay variable inorder for my timer to be delay long enough until the clueseqnece done playing.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[YOUR ANSWER HERE]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[YOUR ANSWER HERE]



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.