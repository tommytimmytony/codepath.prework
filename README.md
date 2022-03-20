# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Tommy Nguyen**

Time spent: **15** hours spent in total

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
- Implement a victory theme song for the end victory screen. 

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![https://recordit.co/18joVsztx6]()
![https://recordit.co/VY0DojICaw]()
![https://recordit.co/BYSV2IXNLl]()
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[StackOverFlow, YouTube, Google, GeeksForGeeks]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[The most frustrating challenge that I encountered was trying to add the ticking clock. I had managed to complete all of the previous features. The ticking clock was the only one left. At the time,  I didn't know how to implement time in Javascript, and the ticking clock was an optional feature, but I still wanted to push myself and complete all the features. First, I begin by learning the fundament of how time work in HTML and Javascript. I went on Google and read plenty of articles, and tried some websites such as GeeksForGeeks, to learn how to implement the ticking clock to my project. Then I went on Youtube to see some real examples. I also took into consideration of the two functions setInterval() and clearInterval() mentioned in the prework description.  After some hours and trial and error, I create three count timer functions (beginTimer, pauseTimer, resetTimer) that work perfectly. However, there was one huge problem. The timer will start the count down before the Clue Sequence finishes playing. I tried to copy and paste my timer functions at multiple random places in the playClueSequence() functions to try to solve the problem, but it didn't work. I then track my functions from the beginning through the end by using console.log() to locate where the function stops and starts. After some long hours of tracking and researching on StackOverflow, I finally found out that the problem was in the for loop. At first, I thought the setTimeOut() function will delay the for loop execution. However, by reading some Q&A on StackOverFlow I found out that the setTimeOut() function is non-blocking and will return immediately. Therefore the for loop actually iterate very quickly, in a split-second. I then go on Youtube and Google once again to learn more about the setTimeOut() function. After, I manage to incorporate the setTimeOut() functions with my timer function to delay the timer long enough until the Clue Sequence is done playing. Looking back I had realized that the problem wasn’t that hard, but I was very frustrated and struggled a lot.  However, it was all worth it in the end because I was able to learn something new. ]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[The only question I would have is about incorporating images. I did manage to download some animal pictures and learn how to adjust the width and height of the image. I also learn how to make the image reappear and disappear, which I learned from installing the start and stop button at the beginning of the project. My goal was to make my square button switch places with one of my images when clicked. However, I couldn't find any articles or videos about how that works. Therefore, if I have an opportunity I would want to ask and learn about how to incorporate images with functions in HTML and Javascript.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had a few more hours, I would do three things. First, I would definately tried to clean up my code. I had tried my best to understand all the functions in the project so that I won't create any repetitive code. However, I still think that there are some part of my project that could be deleted that won't cause any problem. I would also group some functions together to optimize the code. Second, I would tried to fix a bug in my project. The bug occur when the start button and square button are smash repetitively which lead to the timer just start counting down without stoping. I had tried multiple method to locate and solve the problem, but I was never able to learn what create the problem in the first place. Finally, if I had some more time I will continue tried to implement some image into my project. I wanted the sqaure button to switch with my image when I click but I wasn't able to find any resources to help me solve the problem. Therefore, I was hoping to ask one of my friends for help.   ]



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Tommy Nguyen]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.