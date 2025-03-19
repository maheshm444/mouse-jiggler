const robot = require("robotjs");

function jiggleMouse() {
  const { x, y } = robot.getMousePos(); // Get current mouse position
  const newX = x + (Math.random() > 0.5 ? 50 : -50); // Move slightly left or right
  const newY = y + (Math.random() > 0.5 ? 50 : -50); // Move slightly up or down

  robot.moveMouse(newX, newY);
  console.log(`Mouse moved to: ${newX}, ${newY}`);
}

// Run the function every 10 seconds
setInterval(jiggleMouse, 1000);
