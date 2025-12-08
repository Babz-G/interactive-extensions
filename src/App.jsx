import { useState } from "react";
import "./App.css";

function App() {
  return <></>;
}

export default App;

// ✨✨ Interactive Extensions Website ✨✨
// Instructions

// ✨ In App.jsx ✨
// Router (even if you only have one page for this assignment)
// No need for a navBar
// ✅ Pages folder
// ✅ Home.jsx
// ✅ Components
// ✅ Button
// ✅ Card
// ✅ Toggle

// ✅ ✨ Copy and paste the data into a data.js file ✨
// When the user clicks the little toggle to activate or deactivate, the data should change to reflect the new status
// You can use an npm package for the toggle button if you wish. We recommend using React Switch.
//
// ✨ To install: ✨
// npm i react-switch
// The documentation shows an old version of React. Only use this link to look at the different props/attributes
// that are available.

// Make sure to remove the card from the UI if the user clicks the remove button
// Note: The most challenging part of this assignment will be managing the data. How can you filter it to only
// show the user the active/inactive/or all extensions?
// Please complete all functionality first.
// We recommend writing enough CSS to see your cards, so you can tell where one starts and the next one ends.
// After that, save the rest of the styling for the end, after you have completed all functionality.

// ✨ BONUS ✨
// Make the button in the nav toggle light/dark mode
// Add a form that allows a user to add a new extension, and when they click submit, a new card appears

// ✅ ✨ Assets ✨
// Click here to download the icons/logos and add them to the assets folder in your project - they will go in the public folder.

// ✨ Designs ✨
// If i click the button active, update the useState variable for the filters to active with the setter function -
// How is this running: Attached to button as a prop
// In another function filter through the data (this is attached to a another useState variable) and check if the
// filter useState variable is active - then return ONLY an array where the status isActive is true -
// How is it running: Attached to card as prop
// This is how it will only display Active extensions
