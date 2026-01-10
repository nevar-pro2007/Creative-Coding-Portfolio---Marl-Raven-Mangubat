# Experiment 4: Abstract Canvas

## [Live Version](https://nevar-pro2007.github.io/Creative-Coding-Portfolio---Marl-Raven-Mangubat/Experiment_4-Abstract_Canvas/)

## Documentation

**Inspiration and Starting Point:**
In this experiment, it merges the fundamental use of Variables (Task 1) with User Interaction (Task 3)  to create an interactive digital canvas. By mapping mouse movements to shape properties, the code demonstrates how variables can act as dynamic bridges between user input and visual output. The inspiration for this work was also in-demo class about p5js, as for the visual, it is from Modernist Abstract Art, specifically the works of Piet Mondrian and Wassily Kandinsky, which often utilized basic geometric forms like lines, circles, and rectangles. I began with a simple drawing concept found  but expanded it to incorporate specific variable-driven from Task 1.

**Code Techniques and Development Process:**
The development process focused on creating a feedback loop between the user and the code. Initially, I also used static values for the shapes, but I quickly transitioned to using global variables to allow for global changes. Because I was also struggling with the sketch, with the help of Google Gemini (2026), the drawing was made successfully with the map function to ensure that as the mouse moved across the canvas, the color shifted smoothly rather than abruptly. One issue that I have faced while making this was the canvas becoming cluttered too quickly. I resolved this by adding transparency to the shapeColor variable, which allowed the shapes to overlap elegantly rather than obscuring one another. Another technical hurdle was the line tool because I initially had it drawing from the starting point but I changed it to anchor at the width and height coordinates to create a web-like effect that felt more visually intentional.

<img width="600" height="400" alt="cause_4_image" src="https://github.com/user-attachments/assets/1a613176-a60a-4043-bdbd-87610666fc8d" />

This was the cause of the problem in the artwork.

<img width="600" height="400" alt="effect_4_image" src="https://github.com/user-attachments/assets/5b787cb6-a84b-41eb-a685-23a3850164ee" />

This was the final version of the artwork.

**Self-Reflection:**
This artwork was successful and it demonstrates the cause and effect relationship required by the learning focus. By using variables to bridge the gap between user input (mouse position) and visual output (shape position/color), the artwork feels responsive and alive. A minor weakness is that the keyIsPressed function logic for size is quite sensitive. If I were to improve this, I would implement a specific key such as 'S' for small or 'L' for large to give the user more granular control over the shape size variable.

**Word Count:**
365 words
