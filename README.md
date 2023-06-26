# odin-project-calculator

https://byronwww.github.io/odin-project-calculator/

https://www.theodinproject.com/lessons/foundations-calculator


# Learnings
- Implemented basic Cypress test suite (which made fixing the last few bugs a LOT easier than without an automated test suite available).
- During this time I also transitioned my workflow to native Windows as my PC was struggling to run the VM setup done through the Odin Project.
- Writing clean code with comments (this was really useful as I had a long break from the exercise due to work and life commitments, coming back to the code after a few months it was very simple to pick up and carry on with things).
If I did this again I'd spend more time in writing a full specification and tests before starting to code - some parts of my design became overly complex near the end as I had to throw in handling for pressing operator buttons and the equals sign more than once. The tests were only written near the end of the project but wouldn't been very useful to have earlier - they were able to give me rapid feedback and regression testing while I was trying to squash some last bugs, helped me find a few new bugs I hadn't thought of before writing the tests and raised a few questions and refinements about the details of my implementation
I'd probably handle the calculations using some form of string manipulation and perhaps have a second screen handling the full calculation rather than trying to juggle everything through a single screen display.
