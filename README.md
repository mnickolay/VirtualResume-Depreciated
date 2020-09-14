# VirtualResume
This is Matthew Nickolay's virtual resume.
The site is intentionally minimal-- I focused more on color theory, shapes, ratios, and overall flow of the site.

The most apparent design I wanted to show on landing is the "wobbly" nav elements when active/hovering.
  Hovering over the elements will change the color, background-color, and border color properties.
  This was made with a simple JS function that changes the border-radius property of each corner randomly and paired with CSS transition delays and JS timing functions.
  Inspecting an element with the script applied to it will show the changing style property.
    The main nav logo will either apply 10px or 40px, and the nav links will apply either 5px or 20px.
  The script can be found in: script/navscript.js
  The CSS can be found in the styles/nav.css
  
The site currently isn't designed for mobile viewing.
The site is responsive to browser resizing using CSS's -vw unit.
  The main nav logo doesn't resize intentionally.
  
Each nav link has a unique color to it, the first four all being a tetradic color combination, and the fifth being one that I chose from a project.
The color of the nav element will be the color for each corrisponding page.
