/**
 * QuizUp ✦ — Interactive Quiz Gaming Edition
 * Tagline: "Master something new, one question at a time."
 *
 * Core Vanilla JavaScript Architecture:
 * - Comprehensive Question Bank (270 Practice Questions across 6 Categories & 3 Tiers)
 * - Extensible Question Selection & Shuffling Engine
 * - Robust State Management & Single Page Navigation
 * - Learning Mode (Immediate feedback) & Exam Mode (Timed assessment)
 * - Safe LocalStorage Persistence (Recent Attempts & Best Scores)
 */

// ==========================================================================
// 1. Comprehensive Question Bank (270 Practice Questions • 6 Categories)
// ==========================================================================
// Structured by category and difficulty tier for seamless extensibility.
const QUESTION_BANK = {
  "technology": {
    "easy": [
      {
        "id": "prog_easy_01",
        "category": "programming",
        "difficulty": "easy",
        "question": "Which HTML element is used to define the highest-level, most important heading on a web page?",
        "options": [
          "<heading>",
          "<h6>",
          "<h1>",
          "<head>"
        ],
        "correctIndex": 2,
        "explanation": "<h1> denotes the top-level section heading in HTML document structure and is vital for document semantics and search engine indexing."
      },
      {
        "id": "prog_easy_02",
        "category": "programming",
        "difficulty": "easy",
        "question": "Which CSS property directly controls the size of text on a webpage?",
        "options": [
          "text-style",
          "font-size",
          "text-size",
          "font-weight"
        ],
        "correctIndex": 1,
        "explanation": "The font-size property sets text dimensions using units such as pixels (px), rem, em, or percentages."
      },
      {
        "id": "prog_easy_03",
        "category": "programming",
        "difficulty": "easy",
        "question": "Which keyword is used in modern JavaScript to declare a block-scoped variable that cannot be reassigned?",
        "options": [
          "var",
          "static",
          "let",
          "const"
        ],
        "correctIndex": 3,
        "explanation": "const creates a block-scoped identifier whose reference cannot be reassigned after its initial declaration."
      },
      {
        "id": "prog_easy_04",
        "category": "programming",
        "difficulty": "easy",
        "question": "Which HTML attribute specifies the destination URL of a hyperlink in an <a> tag?",
        "options": [
          "href",
          "src",
          "link",
          "url"
        ],
        "correctIndex": 0,
        "explanation": "The href (hypertext reference) attribute specifies the target URL destination that the link navigates to."
      },
      {
        "id": "prog_easy_05",
        "category": "programming",
        "difficulty": "easy",
        "question": "In JavaScript, which data type is used to represent logical true or false values?",
        "options": [
          "String",
          "Boolean",
          "Number",
          "Symbol"
        ],
        "correctIndex": 1,
        "explanation": "A Boolean primitive data type represents one of two logical truth values: true or false."
      },
      {
        "id": "prog_easy_06",
        "category": "programming",
        "difficulty": "easy",
        "question": "Which CSS property is used to change the background color of an HTML element?",
        "options": [
          "color",
          "bgcolor",
          "background-color",
          "canvas-color"
        ],
        "correctIndex": 2,
        "explanation": "background-color sets the background canvas of an element, whereas color sets the foreground text color."
      },
      {
        "id": "prog_easy_07",
        "category": "programming",
        "difficulty": "easy",
        "question": "Which symbol sequence is used in JavaScript for single-line comments?",
        "options": [
          "<!--",
          "/*",
          "//",
          "##"
        ],
        "correctIndex": 2,
        "explanation": "Double slashes (//) tell JavaScript to treat the remainder of the line as an explanatory comment."
      },
      {
        "id": "prog_easy_08",
        "category": "programming",
        "difficulty": "easy",
        "question": "What is the correct HTML element for inserting a line break within a block of text?",
        "options": [
          "<break>",
          "<lb>",
          "<br>",
          "<hr>"
        ],
        "correctIndex": 2,
        "explanation": "The <br> void element produces a line break in text without starting a new structural paragraph."
      },
      {
        "id": "prog_easy_09",
        "category": "programming",
        "difficulty": "easy",
        "question": "In JavaScript, which operator compares both value and data type for strict equality?",
        "options": [
          "==",
          "===",
          "!=",
          "="
        ],
        "correctIndex": 1,
        "explanation": "The strict equality operator (===) checks that both value and type are identical without implicit type coercion."
      },
      {
        "id": "prog_easy_10",
        "category": "programming",
        "difficulty": "easy",
        "question": "What does the abbreviation CSS stand for in web development?",
        "options": [
          "Computer Style Sheets",
          "Cascading Style Sheets",
          "Creative Styling System",
          "Colorful Site Sheets"
        ],
        "correctIndex": 1,
        "explanation": "CSS stands for Cascading Style Sheets, used to control layout, typography, colors, and visual presentation of HTML documents."
      },
      {
        "id": "prog_easy_11",
        "category": "programming",
        "difficulty": "easy",
        "question": "In programming logic, what will be the final value of counter after running: let counter = 0; for (let i = 0; i < 3; i++) { counter += 2; }?",
        "options": [
          "4",
          "6",
          "8",
          "3"
        ],
        "correctIndex": 1,
        "explanation": "The loop runs 3 times for i = 0, 1, and 2. In each iteration counter increases by 2: 0 -> 2 -> 4 -> 6."
      },
      {
        "id": "prog_easy_12",
        "category": "programming",
        "difficulty": "easy",
        "question": "In JavaScript, if an array has 3 items (let fruits = ['apple', 'banana', 'orange'];), what does accessing fruits[3] return?",
        "options": [
          "'orange'",
          "undefined",
          "null",
          "IndexOutOfBoundsException"
        ],
        "correctIndex": 1,
        "explanation": "JavaScript arrays are zero-indexed, with valid indices 0, 1, and 2. Accessing index 3 evaluates to undefined rather than throwing an exception."
      },
      {
        "id": "prog_easy_13",
        "category": "programming",
        "difficulty": "easy",
        "question": "Which mathematical operator in JavaScript computes the remainder of division, often used to check if a number is even (n % 2 === 0)?",
        "options": [
          "Division (/)",
          "Remainder / Modulo (%)",
          "Exponentiation (**)",
          "Bitwise XOR (^)"
        ],
        "correctIndex": 1,
        "explanation": "The remainder operator (%) returns the integer remainder after division. For an even number, n % 2 evaluates to 0."
      },
      {
        "id": "prog_easy_14",
        "category": "programming",
        "difficulty": "easy",
        "question": "Which built-in console method is most commonly used by developers for basic debugging output in the browser console?",
        "options": [
          "console.print()",
          "console.log()",
          "console.write()",
          "console.dump()"
        ],
        "correctIndex": 1,
        "explanation": "console.log() outputs messages, variables, and objects to the Web Console to facilitate debugging during development."
      },
      {
        "id": "prog_easy_15",
        "category": "programming",
        "difficulty": "easy",
        "question": "Which HTML attribute provides alternative text for accessibility and displays when an image fails to render?",
        "options": [
          "title",
          "alt",
          "caption",
          "label"
        ],
        "correctIndex": 1,
        "explanation": "The alt attribute supplies alternative text for screen readers (improving accessibility) and displays as fallback text if the image asset fails to load."
      }
    ],
    "medium": [
      {
        "id": "prog_med_01",
        "category": "programming",
        "difficulty": "medium",
        "question": "What does the JavaScript array method .filter() return?",
        "options": [
          "The first element that matches the condition",
          "A new array of elements that satisfy the predicate test",
          "A single accumulated primitive value",
          "A boolean indicating if any item matched"
        ],
        "correctIndex": 1,
        "explanation": ".filter() creates a shallow copy of an array containing only the elements that return true for the callback test function."
      },
      {
        "id": "prog_med_02",
        "category": "programming",
        "difficulty": "medium",
        "question": "What is the default display value of a <div> element in standard HTML?",
        "options": [
          "inline",
          "inline-block",
          "block",
          "flex"
        ],
        "correctIndex": 2,
        "explanation": "<div> is a block-level container by default, starting on a new line and extending the full width available."
      },
      {
        "id": "prog_med_03",
        "category": "programming",
        "difficulty": "medium",
        "question": "In CSS Flexbox, which property aligns items along the primary main axis?",
        "options": [
          "align-items",
          "justify-content",
          "align-content",
          "flex-wrap"
        ],
        "correctIndex": 1,
        "explanation": "justify-content defines item alignment along the flex container's main axis, while align-items aligns along the cross axis."
      },
      {
        "id": "prog_med_04",
        "category": "programming",
        "difficulty": "medium",
        "question": "What does evaluating typeof null return in JavaScript?",
        "options": [
          "\"null\"",
          "\"undefined\"",
          "\"object\"",
          "\"boolean\""
        ],
        "correctIndex": 2,
        "explanation": "typeof null returns \"object\", a historic legacy behavior originating from JavaScript's initial 1995 implementation."
      },
      {
        "id": "prog_med_05",
        "category": "programming",
        "difficulty": "medium",
        "question": "What is the primary effect of applying box-sizing: border-box to an element?",
        "options": [
          "Padding and border are included in the element's total width and height",
          "Margins are automatically collapsed inside the border",
          "The element is automatically converted to an inline element",
          "Borders are hidden on smaller mobile viewports"
        ],
        "correctIndex": 0,
        "explanation": "border-box includes padding and border within the specified width and height, preventing layout overflow calculations."
      },
      {
        "id": "prog_med_06",
        "category": "programming",
        "difficulty": "medium",
        "question": "Which built-in JavaScript method parses a valid JSON string into a JavaScript object?",
        "options": [
          "JSON.stringify()",
          "JSON.parse()",
          "JSON.toObject()",
          "JSON.encode()"
        ],
        "correctIndex": 1,
        "explanation": "JSON.parse() deserializes a JSON formatted string and constructs the JavaScript value or object described by the string."
      },
      {
        "id": "prog_med_07",
        "category": "programming",
        "difficulty": "medium",
        "question": "What is the primary operational difference between localStorage and sessionStorage?",
        "options": [
          "localStorage encrypts data; sessionStorage is plain text",
          "localStorage persists until cleared; sessionStorage clears when the browser tab closes",
          "localStorage only accepts numbers; sessionStorage accepts any object",
          "localStorage cannot be accessed from JavaScript scripts"
        ],
        "correctIndex": 1,
        "explanation": "localStorage persists indefinitely across browser restarts, whereas sessionStorage data is scoped strictly to the lifespan of the current browser tab."
      },
      {
        "id": "prog_med_08",
        "category": "programming",
        "difficulty": "medium",
        "question": "Which CSS selector targets an element with the exact ID attribute 'profile'?",
        "options": [
          ".profile",
          "#profile",
          "*profile",
          "::profile"
        ],
        "correctIndex": 1,
        "explanation": "The hash symbol (#) designates an ID selector in CSS rules."
      },
      {
        "id": "prog_med_09",
        "category": "programming",
        "difficulty": "medium",
        "question": "Which JavaScript array method appends one or more elements to the end of an array and returns its new length?",
        "options": [
          ".push()",
          ".pop()",
          ".unshift()",
          ".shift()"
        ],
        "correctIndex": 0,
        "explanation": ".push() appends items to the end of an array; .unshift() adds items to the beginning."
      },
      {
        "id": "prog_med_10",
        "category": "programming",
        "difficulty": "medium",
        "question": "What does the standard HTTP status code 404 signify in web communications?",
        "options": [
          "Internal Server Error",
          "Unauthorized Access",
          "Resource Not Found",
          "Service Unavailable"
        ],
        "correctIndex": 2,
        "explanation": "HTTP 404 indicates that the server cannot find the requested resource URL."
      },
      {
        "id": "prog_med_11",
        "category": "programming",
        "difficulty": "medium",
        "question": "What specific runtime error occurs in JavaScript when attempting to access a property on an uninitialized variable (for example, let user; console.log(user.name);)?",
        "options": [
          "SyntaxError: Unexpected identifier",
          "TypeError: Cannot read properties of undefined",
          "ReferenceError: user is not defined",
          "RangeError: Invalid array length"
        ],
        "correctIndex": 1,
        "explanation": "An uninitialized variable declared with let holds undefined. Attempting to access a property on undefined throws a TypeError."
      },
      {
        "id": "prog_med_12",
        "category": "programming",
        "difficulty": "medium",
        "question": "In JavaScript short-circuit logic, what does the expression 'apple' && 0 && 'banana' evaluate to?",
        "options": [
          "'apple'",
          "0",
          "'banana'",
          "false"
        ],
        "correctIndex": 1,
        "explanation": "The logical AND (&&) operator evaluates left-to-right and returns the first falsy value encountered. Since 0 is falsy, evaluation halts and yields 0."
      },
      {
        "id": "prog_med_13",
        "category": "programming",
        "difficulty": "medium",
        "question": "What happens when you try to access a let or const variable before its declaration line in the same scope?",
        "options": [
          "It returns undefined due to variable hoisting",
          "It throws a ReferenceError due to the Temporal Dead Zone (TDZ)",
          "It defaults to null automatically",
          "It executes normally without error"
        ],
        "correctIndex": 1,
        "explanation": "Variables declared with let and const are in a Temporal Dead Zone from the start of the block until declaration execution, throwing a ReferenceError if accessed."
      },
      {
        "id": "prog_med_14",
        "category": "programming",
        "difficulty": "medium",
        "question": "What value does a JavaScript function return by default if it executes to completion without reaching a return statement?",
        "options": [
          "null",
          "undefined",
          "0",
          "NaN"
        ],
        "correctIndex": 1,
        "explanation": "In JavaScript, functions without an explicit return statement implicitly return undefined when execution finishes."
      },
      {
        "id": "prog_med_15",
        "category": "programming",
        "difficulty": "medium",
        "question": "Which HTML form input element is specifically designed to accept secret credentials while obscuring keystrokes?",
        "options": [
          "<input type=\"hidden\">",
          "<input type=\"password\">",
          "<input type=\"secure\">",
          "<input type=\"mask\">"
        ],
        "correctIndex": 1,
        "explanation": "<input type=\"password\"> masks entered text with bullets or asterisks to protect sensitive passwords from being viewed on screen."
      }
    ],
    "hard": [
      {
        "id": "prog_hard_01",
        "category": "programming",
        "difficulty": "hard",
        "question": "In the JavaScript Event Loop, which queue is processed immediately after the current call stack clears before any macrotask?",
        "options": [
          "Macrotask queue (setTimeout, setInterval)",
          "Microtask queue (Promise .then, queueMicrotask)",
          "RequestAnimationFrame queue",
          "I/O polling callback queue"
        ],
        "correctIndex": 1,
        "explanation": "The microtask queue is completely drained to exhaustion before the event loop advances to dequeue the next macrotask."
      },
      {
        "id": "prog_hard_02",
        "category": "programming",
        "difficulty": "hard",
        "question": "What constitutes a closure in JavaScript?",
        "options": [
          "A function bundled together with references to its lexical environment",
          "A loop construct that prevents variable hoisting",
          "An anonymous function that executes only once upon declaration",
          "A method to securely seal object prototypes from modification"
        ],
        "correctIndex": 0,
        "explanation": "A closure gives an inner function access to its outer enclosing function's scope even after the outer function has finished executing."
      },
      {
        "id": "prog_hard_03",
        "category": "programming",
        "difficulty": "hard",
        "question": "Which CSS pseudo-class matches an element only when it receives focus via keyboard interaction rather than a mouse click?",
        "options": [
          ":focus",
          ":focus-within",
          ":focus-visible",
          ":active"
        ],
        "correctIndex": 2,
        "explanation": ":focus-visible applies focus styles only when the user's input modality (like keyboard tab navigation) warrants visible focus."
      },
      {
        "id": "prog_hard_04",
        "category": "programming",
        "difficulty": "hard",
        "question": "What does the expression [1, 2, 3] + [4, 5, 6] evaluate to in JavaScript?",
        "options": [
          "[1, 2, 3, 4, 5, 6]",
          "\"1,2,34,5,6\"",
          "NaN",
          "TypeError"
        ],
        "correctIndex": 1,
        "explanation": "The binary plus operator coerces both arrays to strings (\"1,2,3\" and \"4,5,6\"), concatenating them into \"1,2,34,5,6\"."
      },
      {
        "id": "prog_hard_05",
        "category": "programming",
        "difficulty": "hard",
        "question": "In CSS Grid layout, what does the unit 'fr' represent?",
        "options": [
          "Fixed ratio relative to viewport width",
          "A fraction of the available free space inside the grid container",
          "Font relative sizing based on root font size",
          "Frame rate duration for CSS keyframe animations"
        ],
        "correctIndex": 1,
        "explanation": "The fr unit represents a fraction of the remaining flexible space in the grid container after non-flexible tracks are sized."
      },
      {
        "id": "prog_hard_06",
        "category": "programming",
        "difficulty": "hard",
        "question": "What is the exact behavioral effect of the defer attribute on a script tag?",
        "options": [
          "Executes the script asynchronously, pausing HTML parsing as soon as it arrives",
          "Downloads the script in parallel and executes it only after the HTML document is fully parsed",
          "Postpones script execution until the user interacts with the page",
          "Forces the script to run exclusively in a background Web Worker"
        ],
        "correctIndex": 1,
        "explanation": "defer scripts are fetched in parallel with document parsing and executed in document order once DOM parsing is complete."
      },
      {
        "id": "prog_hard_07",
        "category": "programming",
        "difficulty": "hard",
        "question": "What is the key difference between Object.freeze() and Object.seal()?",
        "options": [
          "freeze() prevents new properties, while seal() allows new properties",
          "freeze() prevents modifying existing property values, while seal() allows modifying existing writable properties",
          "seal() deletes prototype chains, while freeze() clones them",
          "freeze() only applies to arrays, while seal() only applies to objects"
        ],
        "correctIndex": 1,
        "explanation": "Object.seal() stops adding or deleting properties but allows modifying existing writable properties. Object.freeze() makes all existing properties read-only."
      },
      {
        "id": "prog_hard_08",
        "category": "programming",
        "difficulty": "hard",
        "question": "What is the software design technique of 'event delegation' in client-side JavaScript?",
        "options": [
          "Attaching individual listeners to every child node separately",
          "Attaching a single event listener to a common ancestor to leverage event bubbling",
          "Offloading event processing to a background Service Worker",
          "Suppressing default browser keyboard shortcuts"
        ],
        "correctIndex": 1,
        "explanation": "Event delegation leverages event bubbling by listening on a parent element to manage events originating from any child target."
      },
      {
        "id": "prog_hard_09",
        "category": "programming",
        "difficulty": "hard",
        "question": "Which statement about ES6 arrow functions is accurate?",
        "options": [
          "They have their own binding to this and arguments",
          "They capture this lexically from the enclosing scope and cannot be used as constructors",
          "They are hoisted to the top of their scope like function declarations",
          "They cannot accept parameters or return objects"
        ],
        "correctIndex": 1,
        "explanation": "Arrow functions do not bind their own this, arguments, super, or new.target; they capture this lexically from the outer scope."
      },
      {
        "id": "prog_hard_10",
        "category": "programming",
        "difficulty": "hard",
        "question": "What will console.log(0.1 + 0.2 === 0.3) output in JavaScript?",
        "options": [
          "true",
          "false",
          "undefined",
          "NaN"
        ],
        "correctIndex": 1,
        "explanation": "Due to IEEE 754 binary floating-point rounding precision, 0.1 + 0.2 evaluates to 0.30000000000000004, which is not strictly equal to 0.3."
      },
      {
        "id": "prog_hard_11",
        "category": "programming",
        "difficulty": "hard",
        "question": "In recursive programming logic, what runtime error occurs when a recursive function fails to reach a terminating base case?",
        "options": [
          "OutOfMemoryError: Heap exhaustion",
          "RangeError: Maximum call stack size exceeded",
          "TypeError: Recursion limit reached",
          "SyntaxError: Infinite loop condition"
        ],
        "correctIndex": 1,
        "explanation": "Without a valid base case, recursive calls continually push stack frames until the engine exceeds call stack capacity, raising a RangeError (stack overflow)."
      },
      {
        "id": "prog_hard_12",
        "category": "programming",
        "difficulty": "hard",
        "question": "In what exact chronological order will console logs appear: console.log('1'); setTimeout(() => console.log('2'), 0); Promise.resolve().then(() => console.log('3')); console.log('4');?",
        "options": [
          "1, 2, 3, 4",
          "1, 4, 3, 2",
          "1, 4, 2, 3",
          "1, 3, 4, 2"
        ],
        "correctIndex": 1,
        "explanation": "Synchronous code logs '1' and '4' first. Microtask callbacks (.then) run immediately after synchronous execution, logging '3'. Macrotasks (setTimeout) execute in the next tick, logging '2'."
      },
      {
        "id": "prog_hard_13",
        "category": "programming",
        "difficulty": "hard",
        "question": "What is the worst-case time complexity of searching an element in a sorted array of length n using the Binary Search algorithm?",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n log n)"
        ],
        "correctIndex": 1,
        "explanation": "Binary search repeatedly divides the search interval in half. With each step halving the problem size, its time complexity is logarithmic, O(log n)."
      },
      {
        "id": "prog_hard_14",
        "category": "programming",
        "difficulty": "hard",
        "question": "When extracting an object method to an uncalled variable (e.g. const greet = user.sayHello; greet();), what is the value of 'this' inside the method in strict mode?",
        "options": [
          "user object",
          "undefined",
          "window / global object",
          "null"
        ],
        "correctIndex": 1,
        "explanation": "In JavaScript, extracting a method strips its receiver binding. When invoked as a bare function greet(), 'this' is undefined in strict mode."
      },
      {
        "id": "prog_hard_15",
        "category": "programming",
        "difficulty": "hard",
        "question": "Which of the following CSS selectors has the highest specificity rating according to W3C cascade specifications?",
        "options": [
          "#mainNav .item a",
          "#header #logo",
          "header.site-header nav ul li a.active",
          "div#wrapper section.main p:first-child"
        ],
        "correctIndex": 1,
        "explanation": "Specificity is evaluated by counting (IDs, Classes/attributes, Elements). '#header #logo' has two IDs (2, 0, 0), which overrides any selector with fewer IDs regardless of class or element counts."
      }
    ]
  },
  "academics": {
    "easy": [
      {
        "id": "sci_easy_01",
        "category": "science",
        "difficulty": "easy",
        "question": "Which organelle is universally referred to as the 'powerhouse of the cell' due to ATP synthesis?",
        "options": [
          "Ribosome",
          "Endoplasmic Reticulum",
          "Mitochondria",
          "Golgi Apparatus"
        ],
        "correctIndex": 2,
        "explanation": "Mitochondria generate most of the chemical energy needed to power the cell's biochemical reactions via ATP synthesis."
      },
      {
        "id": "sci_easy_02",
        "category": "science",
        "difficulty": "easy",
        "question": "What is the most abundant gas in Earth's atmosphere by volume?",
        "options": [
          "Oxygen",
          "Carbon Dioxide",
          "Nitrogen",
          "Argon"
        ],
        "correctIndex": 2,
        "explanation": "Nitrogen makes up approximately 78% of Earth's atmosphere, followed by oxygen at roughly 21%."
      },
      {
        "id": "sci_easy_03",
        "category": "science",
        "difficulty": "easy",
        "question": "What is the chemical molecular formula for pure water?",
        "options": [
          "CO2",
          "H2O",
          "O2",
          "NaCl"
        ],
        "correctIndex": 1,
        "explanation": "Water consists of two hydrogen atoms covalently bonded to a single oxygen atom (H2O)."
      },
      {
        "id": "sci_easy_04",
        "category": "science",
        "difficulty": "easy",
        "question": "Which planet orbits closest to the Sun in our Solar System?",
        "options": [
          "Venus",
          "Mars",
          "Mercury",
          "Earth"
        ],
        "correctIndex": 2,
        "explanation": "Mercury is the smallest and innermost planet in the Solar System, with an orbital period of just 88 days."
      },
      {
        "id": "sci_easy_05",
        "category": "science",
        "difficulty": "easy",
        "question": "What is the primary green pigment in plants responsible for absorbing light energy during photosynthesis?",
        "options": [
          "Carotenoid",
          "Chlorophyll",
          "Anthocyanin",
          "Hemoglobin"
        ],
        "correctIndex": 1,
        "explanation": "Chlorophyll absorbs blue and red wavelengths of solar light and reflects green wavelengths, powering photosynthesis."
      },
      {
        "id": "sci_easy_06",
        "category": "science",
        "difficulty": "easy",
        "question": "In physics, what fundamental force pulls unsupported objects down toward the center of the Earth?",
        "options": [
          "Magnetism",
          "Gravity",
          "Friction",
          "Tension"
        ],
        "correctIndex": 1,
        "explanation": "Gravity is the universal attractive force exerted between masses, accelerating free-falling objects at ~9.8 m/s² on Earth."
      },
      {
        "id": "sci_easy_07",
        "category": "science",
        "difficulty": "easy",
        "question": "What is the boiling point of pure water at standard sea-level atmospheric pressure?",
        "options": [
          "50°C",
          "90°C",
          "100°C",
          "120°C"
        ],
        "correctIndex": 2,
        "explanation": "At standard atmospheric pressure (1 atm), water transitions from liquid to steam at 100°C (212°F)."
      },
      {
        "id": "sci_easy_08",
        "category": "science",
        "difficulty": "easy",
        "question": "What is the human body's largest organ by total surface area and weight?",
        "options": [
          "Liver",
          "Brain",
          "Skin",
          "Lungs"
        ],
        "correctIndex": 2,
        "explanation": "The skin (integumentary system) is the human body's largest organ, serving as a vital protective barrier."
      },
      {
        "id": "sci_easy_09",
        "category": "science",
        "difficulty": "easy",
        "question": "Which subatomic particle carries a negative electric charge?",
        "options": [
          "Proton",
          "Neutron",
          "Electron",
          "Positron"
        ],
        "correctIndex": 2,
        "explanation": "Electrons carry a negative electric charge and orbit the nucleus composed of protons and neutrons."
      },
      {
        "id": "sci_easy_10",
        "category": "science",
        "difficulty": "easy",
        "question": "What natural biological process describes water evaporating from microscopic pores in plant leaves?",
        "options": [
          "Condensation",
          "Precipitation",
          "Transpiration",
          "Sublimation"
        ],
        "correctIndex": 2,
        "explanation": "Transpiration is the evaporation of water from plant leaves into the atmosphere through stomata."
      },
      {
        "id": "sci_easy_11",
        "category": "science",
        "difficulty": "easy",
        "question": "What is the name of Earth's only permanent natural satellite in astronomy?",
        "options": [
          "Titan",
          "The Moon",
          "Phobos",
          "Europa"
        ],
        "correctIndex": 1,
        "explanation": "The Moon orbits Earth at an average distance of ~384,400 km and is Earth's only permanent natural satellite."
      },
      {
        "id": "sci_easy_12",
        "category": "science",
        "difficulty": "easy",
        "question": "Which state of matter has a definite volume but adapts to the shape of whatever container it occupies?",
        "options": [
          "Solid",
          "Liquid",
          "Gas",
          "Plasma"
        ],
        "correctIndex": 1,
        "explanation": "Liquids have fixed volume due to cohesive intermolecular forces, but flow freely to take the shape of their container."
      },
      {
        "id": "sci_easy_13",
        "category": "science",
        "difficulty": "easy",
        "question": "Which chemical element with atomic number 6 is the foundational chemical backbone of all organic life on Earth?",
        "options": [
          "Silicon",
          "Carbon",
          "Nitrogen",
          "Phosphorus"
        ],
        "correctIndex": 1,
        "explanation": "Carbon's four valence electrons enable it to form diverse, stable covalent bonds with many elements, creating organic molecules."
      },
      {
        "id": "sci_easy_14",
        "category": "science",
        "difficulty": "easy",
        "question": "Which star sits at the gravitational center of our solar system, containing over 99.8% of its total mass?",
        "options": [
          "Sirius",
          "Proxima Centauri",
          "The Sun",
          "Betelgeuse"
        ],
        "correctIndex": 2,
        "explanation": "The Sun is a G-type main-sequence star whose gravitational field holds all planets, asteroids, and comets in orbit."
      },
      {
        "id": "sci_easy_15",
        "category": "science",
        "difficulty": "easy",
        "question": "What is the standard unit of electrical resistance in the International System of Units (SI)?",
        "options": [
          "Volt",
          "Ampere",
          "Ohm",
          "Watt"
        ],
        "correctIndex": 2,
        "explanation": "The Ohm (symbol: Ω) is the SI unit of electrical resistance, defined by Ohm's Law (Resistance = Voltage / Current)."
      }
    ],
    "medium": [
      {
        "id": "sci_med_01",
        "category": "science",
        "difficulty": "medium",
        "question": "What is the approximate speed of sound in dry air at 20°C at sea level?",
        "options": [
          "150 m/s",
          "343 m/s",
          "680 m/s",
          "3,000 m/s"
        ],
        "correctIndex": 1,
        "explanation": "Sound waves travel through dry air at 20°C at approximately 343 meters per second (~1,235 km/h)."
      },
      {
        "id": "sci_med_02",
        "category": "science",
        "difficulty": "medium",
        "question": "What chemical bond involves the sharing of electron pairs between nonmetal atoms?",
        "options": [
          "Ionic bond",
          "Covalent bond",
          "Hydrogen bond",
          "Metallic bond"
        ],
        "correctIndex": 1,
        "explanation": "Covalent bonds occur when nonmetallic atoms share valence electrons to attain stable outer electron shells."
      },
      {
        "id": "sci_med_03",
        "category": "science",
        "difficulty": "medium",
        "question": "On the pH scale, which value represents a perfectly neutral aqueous solution at 25°C?",
        "options": [
          "0",
          "5",
          "7",
          "14"
        ],
        "correctIndex": 2,
        "explanation": "A pH of 7 represents a neutral solution where hydrogen ion [H+] and hydroxide ion [OH-] concentrations are equal."
      },
      {
        "id": "sci_med_04",
        "category": "science",
        "difficulty": "medium",
        "question": "Which of Newton's laws of motion asserts that for every action, there is an equal and opposite reaction?",
        "options": [
          "Newton's First Law",
          "Newton's Second Law",
          "Newton's Third Law",
          "Kepler's Law"
        ],
        "correctIndex": 2,
        "explanation": "Newton's Third Law states that whenever one body exerts a force on a second body, the second exerts an equal and opposite force."
      },
      {
        "id": "sci_med_05",
        "category": "science",
        "difficulty": "medium",
        "question": "What is the phase transition called when a solid turns directly into a gas without melting into a liquid?",
        "options": [
          "Evaporation",
          "Sublimation",
          "Condensation",
          "Deposition"
        ],
        "correctIndex": 1,
        "explanation": "Sublimation is the direct transition from solid to gas, exemplified by dry ice (solid CO2) at ambient room temperature."
      },
      {
        "id": "sci_med_06",
        "category": "science",
        "difficulty": "medium",
        "question": "Which blood vessels transport oxygenated blood away from the heart to bodily tissues?",
        "options": [
          "Veins",
          "Arteries",
          "Capillaries",
          "Venules"
        ],
        "correctIndex": 1,
        "explanation": "Systemic arteries carry oxygenated blood away from the left ventricle under high pressure to peripheral tissues."
      },
      {
        "id": "sci_med_07",
        "category": "science",
        "difficulty": "medium",
        "question": "What is the name of the barred spiral galaxy containing our Solar System?",
        "options": [
          "Andromeda Galaxy",
          "Whirlpool Galaxy",
          "Milky Way Galaxy",
          "Sombrero Galaxy"
        ],
        "correctIndex": 2,
        "explanation": "Our Solar System is situated in an outer spiral arm of the Milky Way Galaxy."
      },
      {
        "id": "sci_med_08",
        "category": "science",
        "difficulty": "medium",
        "question": "What is the chemical symbol for the element Gold on the periodic table?",
        "options": [
          "Ag",
          "Au",
          "Fe",
          "Pb"
        ],
        "correctIndex": 1,
        "explanation": "Au comes from the Latin word 'aurum', meaning shining dawn, representing element 79, gold."
      },
      {
        "id": "sci_med_09",
        "category": "science",
        "difficulty": "medium",
        "question": "What mechanical wave type are seismic primary waves (P-waves)?",
        "options": [
          "Transverse shear waves",
          "Longitudinal compressional waves",
          "Surface Love waves",
          "Electromagnetic radiation"
        ],
        "correctIndex": 1,
        "explanation": "P-waves are longitudinal compressional seismic waves that travel fastest through solid rock and liquid layers."
      },
      {
        "id": "sci_med_10",
        "category": "science",
        "difficulty": "medium",
        "question": "What biological cell division process produces four genetically diverse haploid daughter cells?",
        "options": [
          "Mitosis",
          "Binary fission",
          "Meiosis",
          "Cytokinesis"
        ],
        "correctIndex": 2,
        "explanation": "Meiosis reduces chromosome number by half across two division cycles to generate haploid gametes for reproduction."
      },
      {
        "id": "sci_med_11",
        "category": "science",
        "difficulty": "medium",
        "question": "Which planet in our solar system is known as the 'Red Planet' because of abundant iron oxide on its surface?",
        "options": [
          "Venus",
          "Mars",
          "Jupiter",
          "Saturn"
        ],
        "correctIndex": 1,
        "explanation": "Mars appears reddish because its surface regolith is rich in iron(III) oxide (rust)."
      },
      {
        "id": "sci_med_12",
        "category": "science",
        "difficulty": "medium",
        "question": "Which optical phenomenon causes a ray of light to bend as it passes from air into water?",
        "options": [
          "Reflection",
          "Refraction",
          "Diffraction",
          "Polarization"
        ],
        "correctIndex": 1,
        "explanation": "Refraction is the change in direction and speed of a wave as it passes across a boundary between media of different optical densities."
      },
      {
        "id": "sci_med_13",
        "category": "science",
        "difficulty": "medium",
        "question": "What double-helix nucleic acid stores genetic instructions for development and functioning in living organisms?",
        "options": [
          "Deoxyribonucleic acid (DNA)",
          "Ribonucleic acid (RNA)",
          "Adenosine triphosphate (ATP)",
          "Hemoglobin"
        ],
        "correctIndex": 0,
        "explanation": "DNA carries genetic information structured in a double helix of antiparallel nucleotide strands."
      },
      {
        "id": "sci_med_14",
        "category": "science",
        "difficulty": "medium",
        "question": "What is the common chemical compound name for everyday table salt?",
        "options": [
          "Potassium chloride",
          "Sodium chloride",
          "Sodium bicarbonate",
          "Calcium carbonate"
        ],
        "correctIndex": 1,
        "explanation": "Table salt consists primarily of sodium chloride (NaCl), an ionic compound with a 1:1 ratio of sodium and chloride ions."
      },
      {
        "id": "sci_med_15",
        "category": "science",
        "difficulty": "medium",
        "question": "What spectral classification describes our Sun on the Hertzsprung-Russell astronomical diagram?",
        "options": [
          "Blue Supergiant",
          "Main-Sequence Yellow Dwarf (G-type)",
          "Red Giant",
          "White Dwarf"
        ],
        "correctIndex": 1,
        "explanation": "The Sun is a G2V main-sequence star, popularly termed a yellow dwarf, converting hydrogen into helium in its core."
      }
    ],
    "hard": [
      {
        "id": "sci_hard_01",
        "category": "science",
        "difficulty": "hard",
        "question": "What theoretical boundary around a black hole marks the threshold where escape velocity exceeds light speed?",
        "options": [
          "Photon Sphere",
          "Event Horizon",
          "Accretion Disk",
          "Singularity Point"
        ],
        "correctIndex": 1,
        "explanation": "The event horizon is the boundary beyond which no radiation or matter can escape the gravitational field."
      },
      {
        "id": "sci_hard_02",
        "category": "science",
        "difficulty": "hard",
        "question": "In quantum mechanics, which principle states that an object's position and momentum cannot both be precisely known simultaneously?",
        "options": [
          "Pauli Exclusion Principle",
          "Uncertainty Principle",
          "Photoelectric Effect",
          "Wave-Particle Duality"
        ],
        "correctIndex": 1,
        "explanation": "Heisenberg's Uncertainty Principle establishes a fundamental limit: Δx · Δp ≥ ħ/2."
      },
      {
        "id": "sci_hard_03",
        "category": "science",
        "difficulty": "hard",
        "question": "Which primary enzyme is responsible for polymerizing new complementary DNA strands during replication?",
        "options": [
          "DNA Ligase",
          "RNA Helicase",
          "DNA Polymerase",
          "Amylase"
        ],
        "correctIndex": 2,
        "explanation": "DNA Polymerase synthesizes new DNA strands by matching complementary deoxynucleotides to a template strand."
      },
      {
        "id": "sci_hard_04",
        "category": "science",
        "difficulty": "hard",
        "question": "What is the exact constant speed of light in a vacuum in meters per second?",
        "options": [
          "30,000 m/s",
          "300,000 m/s",
          "299,792,458 m/s",
          "3,000,000,000 m/s"
        ],
        "correctIndex": 2,
        "explanation": "The speed of light in vacuum (c) is defined as exactly 299,792,458 meters per second."
      },
      {
        "id": "sci_hard_05",
        "category": "science",
        "difficulty": "hard",
        "question": "In thermodynamics, which fundamental law dictates that the total entropy of an isolated system never decreases?",
        "options": [
          "Zeroth Law of Thermodynamics",
          "First Law of Thermodynamics",
          "Second Law of Thermodynamics",
          "Third Law of Thermodynamics"
        ],
        "correctIndex": 2,
        "explanation": "The Second Law of Thermodynamics dictates that entropy in an isolated system will always increase over time in spontaneous processes."
      },
      {
        "id": "sci_hard_06",
        "category": "science",
        "difficulty": "hard",
        "question": "Which elementary particles make up composite protons and neutrons, bound by the strong nuclear interaction?",
        "options": [
          "Leptons",
          "Quarks",
          "Bosons",
          "Muons"
        ],
        "correctIndex": 1,
        "explanation": "Protons (two up, one down) and neutrons (one up, two down) are hadrons composed of quarks bound by gluons."
      },
      {
        "id": "sci_hard_07",
        "category": "science",
        "difficulty": "hard",
        "question": "What is the primary physiological function of the myelin sheath wrapping around neural axons?",
        "options": [
          "Synthesizes neurotransmitters",
          "Accelerates the conduction velocity of electrical nerve impulses",
          "Absorbs foreign toxins from cerebral circulation",
          "Supplies glucose to terminal dendrites"
        ],
        "correctIndex": 1,
        "explanation": "Myelin acts as an electrical insulator, facilitating saltatory conduction of action potentials along the axon."
      },
      {
        "id": "sci_hard_08",
        "category": "science",
        "difficulty": "hard",
        "question": "In organic chemistry, which functional group characterizes alcohol compounds?",
        "options": [
          "Carbonyl group (-C=O)",
          "Hydroxyl group (-OH)",
          "Carboxyl group (-COOH)",
          "Amino group (-NH2)"
        ],
        "correctIndex": 1,
        "explanation": "Alcohols contain one or more hydroxyl (-OH) functional groups bonded to saturated carbon atoms."
      },
      {
        "id": "sci_hard_09",
        "category": "science",
        "difficulty": "hard",
        "question": "What astrophysical phenomenon causes light emitted by receding galaxies to shift toward longer wavelengths?",
        "options": [
          "Cosmological Redshift",
          "Blue Straggling",
          "Gravitational Lensing",
          "Cherenkov Radiation"
        ],
        "correctIndex": 0,
        "explanation": "Cosmological redshift is caused by the metric expansion of spacetime stretching electromagnetic waves during transit."
      },
      {
        "id": "sci_hard_10",
        "category": "science",
        "difficulty": "hard",
        "question": "What metabolic cycle inside mitochondria oxidizes acetyl-CoA to harvest high-energy electron carriers (NADH and FADH2)?",
        "options": [
          "Calvin Cycle",
          "Citric Acid Cycle (Krebs Cycle)",
          "Glycolysis",
          "Lactic Acid Fermentation"
        ],
        "correctIndex": 1,
        "explanation": "The Citric Acid Cycle (Krebs Cycle) oxidizes acetyl-CoA into carbon dioxide, producing ATP, NADH, and FADH2."
      },
      {
        "id": "sci_hard_11",
        "category": "science",
        "difficulty": "hard",
        "question": "Which chemical law states that the total enthalpy change in a reaction is identical regardless of whether it occurs in one step or several steps?",
        "options": [
          "Hess's Law",
          "Le Chatelier's Principle",
          "Raoult's Law",
          "Boyle's Law"
        ],
        "correctIndex": 0,
        "explanation": "Hess's Law of Constant Heat Summation establishes that enthalpy change (ΔH) is a state function independent of the reaction path."
      },
      {
        "id": "sci_hard_12",
        "category": "science",
        "difficulty": "hard",
        "question": "What is the maximum theoretical mass limit (~1.4 solar masses) for a stable white dwarf star before gravitational collapse occurs?",
        "options": [
          "Schwarzschild radius",
          "Chandrasekhar limit",
          "Oppenheimer-Volkoff limit",
          "Roche limit"
        ],
        "correctIndex": 1,
        "explanation": "Formulated by Subrahmanyan Chandrasekhar, this limit (~1.44 solar masses) marks where electron degeneracy pressure can no longer prevent collapse into a neutron star."
      },
      {
        "id": "sci_hard_13",
        "category": "science",
        "difficulty": "hard",
        "question": "Which quantum physics phenomenon occurs when entangled particles exhibit correlated states regardless of spatial distance?",
        "options": [
          "Quantum Tunneling",
          "Quantum Entanglement",
          "Spontaneous Emission",
          "Photoelectric Effect"
        ],
        "correctIndex": 1,
        "explanation": "Quantum entanglement describes particles whose quantum states are intertwined such that measuring one determines the state of the other instantaneously."
      },
      {
        "id": "sci_hard_14",
        "category": "science",
        "difficulty": "hard",
        "question": "In genetics, what term describes the failure of chromosomes or sister chromatids to separate properly during meiosis?",
        "options": [
          "Nondisjunction",
          "Crossing Over",
          "Translocation",
          "Inversion"
        ],
        "correctIndex": 0,
        "explanation": "Nondisjunction leads to gametes with abnormal chromosome numbers (aneuploidy), resulting in conditions such as Trisomy 21 (Down syndrome)."
      },
      {
        "id": "sci_hard_15",
        "category": "science",
        "difficulty": "hard",
        "question": "According to Brønsted-Lowry acid-base theory, what subatomic particle is transferred from an acid to a base?",
        "options": [
          "An electron",
          "A proton (H+ ion)",
          "A neutron",
          "A positron"
        ],
        "correctIndex": 1,
        "explanation": "Under the Brønsted-Lowry definition, an acid is a proton donor and a base is a proton acceptor (H+ ion transfer)."
      }
    ]
  },
  "general": {
    "easy": [
      {
        "id": "gen_easy_01",
        "category": "general",
        "difficulty": "easy",
        "question": "What is the capital city of France?",
        "options": [
          "Marseille",
          "Lyon",
          "Paris",
          "Nice"
        ],
        "correctIndex": 2,
        "explanation": "Paris has served as the capital and cultural epicenter of France since the Middle Ages."
      },
      {
        "id": "gen_easy_02",
        "category": "general",
        "difficulty": "easy",
        "question": "Which ocean is the largest by surface area on Earth?",
        "options": [
          "Atlantic Ocean",
          "Indian Ocean",
          "Pacific Ocean",
          "Arctic Ocean"
        ],
        "correctIndex": 2,
        "explanation": "The Pacific Ocean covers more than 63 million square miles, exceeding the land area of all continents combined."
      },
      {
        "id": "gen_easy_03",
        "category": "general",
        "difficulty": "easy",
        "question": "How many days are in a standard leap year?",
        "options": [
          "364",
          "365",
          "366",
          "367"
        ],
        "correctIndex": 2,
        "explanation": "A leap year has 366 days instead of 365, adding February 29th to align the calendar with Earth's orbit."
      },
      {
        "id": "gen_easy_04",
        "category": "general",
        "difficulty": "easy",
        "question": "Which canal connects the Mediterranean Sea directly to the Red Sea?",
        "options": [
          "Panama Canal",
          "Suez Canal",
          "Kiel Canal",
          "Erie Canal"
        ],
        "correctIndex": 1,
        "explanation": "Opened in 1869 in Egypt, the Suez Canal connects the Mediterranean Sea directly with the Red Sea."
      },
      {
        "id": "gen_easy_05",
        "category": "general",
        "difficulty": "easy",
        "question": "What is the official currency used in Japan?",
        "options": [
          "Won",
          "Yuan",
          "Yen",
          "Baht"
        ],
        "correctIndex": 2,
        "explanation": "The Japanese Yen (¥) is the official national currency of Japan."
      },
      {
        "id": "gen_easy_06",
        "category": "general",
        "difficulty": "easy",
        "question": "Who painted the famous Renaissance portrait known as the Mona Lisa?",
        "options": [
          "Vincent van Gogh",
          "Leonardo da Vinci",
          "Pablo Picasso",
          "Michelangelo"
        ],
        "correctIndex": 1,
        "explanation": "Leonardo da Vinci painted the Mona Lisa in the early 16th century, now preserved in the Louvre in Paris."
      },
      {
        "id": "gen_easy_07",
        "category": "general",
        "difficulty": "easy",
        "question": "Which country is the largest in the world by total land area?",
        "options": [
          "Canada",
          "China",
          "United States",
          "Russia"
        ],
        "correctIndex": 3,
        "explanation": "Russia spans over 17 million square kilometers across Eastern Europe and Northern Asia."
      },
      {
        "id": "gen_easy_08",
        "category": "general",
        "difficulty": "easy",
        "question": "What is the tallest living terrestrial mammal on Earth?",
        "options": [
          "African Elephant",
          "Giraffe",
          "Hippopotamus",
          "Blue Whale"
        ],
        "correctIndex": 1,
        "explanation": "Giraffes are the tallest terrestrial mammals, reaching heights up to 5.7 meters (18.7 feet)."
      },
      {
        "id": "gen_easy_09",
        "category": "general",
        "difficulty": "easy",
        "question": "In which South American country is the ancient Inca citadel of Machu Picchu located?",
        "options": [
          "Chile",
          "Colombia",
          "Peru",
          "Mexico"
        ],
        "correctIndex": 2,
        "explanation": "Machu Picchu is a 15th-century Inca sanctuary perched high in the Andes mountains of Peru."
      },
      {
        "id": "gen_easy_10",
        "category": "general",
        "difficulty": "easy",
        "question": "What is the official national language spoken in Brazil?",
        "options": [
          "Spanish",
          "Portuguese",
          "French",
          "English"
        ],
        "correctIndex": 1,
        "explanation": "Portuguese is the official and predominant language spoken across Brazil."
      },
      {
        "id": "gen_easy_11",
        "category": "general",
        "difficulty": "easy",
        "question": "Who is credited with discovering penicillin in 1928, marking the dawn of modern antibiotics?",
        "options": [
          "Alexander Fleming",
          "Louis Pasteur",
          "Edward Jenner",
          "Robert Koch"
        ],
        "correctIndex": 0,
        "explanation": "Scottish physician and bacteriologist Sir Alexander Fleming discovered penicillin in 1928 after observing mold halting bacterial growth in his laboratory."
      },
      {
        "id": "gen_easy_12",
        "category": "general",
        "difficulty": "easy",
        "question": "Which iconic historical barrier in Germany was opened in November 1989, paving the way for national reunification?",
        "options": [
          "Maginot Line",
          "Berlin Wall",
          "Iron Curtain",
          "Hadrian's Wall"
        ],
        "correctIndex": 1,
        "explanation": "The fall of the Berlin Wall on November 9, 1989, marked the symbolic end of the Cold War divide in Europe and led directly to German reunification in 1990."
      },
      {
        "id": "gen_easy_13",
        "category": "general",
        "difficulty": "easy",
        "question": "What is the highest mountain peak above sea level on Earth, standing at 8,848.86 meters in the Himalayas?",
        "options": [
          "K2",
          "Mount Everest",
          "Kangchenjunga",
          "Mount Kilimanjaro"
        ],
        "correctIndex": 1,
        "explanation": "Mount Everest, located on the border of Nepal and China (Tibet), is the planet's highest elevation above sea level."
      },
      {
        "id": "gen_easy_14",
        "category": "general",
        "difficulty": "easy",
        "question": "How many continents are conventionally recognized on planet Earth in standard world geography curricula?",
        "options": [
          "5",
          "6",
          "7",
          "8"
        ],
        "correctIndex": 2,
        "explanation": "The seven standard continents are Asia, Africa, North America, South America, Antarctica, Europe, and Australia (Oceania)."
      },
      {
        "id": "gen_easy_15",
        "category": "general",
        "difficulty": "easy",
        "question": "Which German inventor developed the movable-type mechanical printing press around 1440, revolutionizing book publishing?",
        "options": [
          "Johannes Gutenberg",
          "Galileo Galilei",
          "Nicolaus Copernicus",
          "James Watt"
        ],
        "correctIndex": 0,
        "explanation": "Johannes Gutenberg invented the movable-type printing press in Mainz, Germany, making literature and education accessible on an unprecedented scale."
      }
    ],
    "medium": [
      {
        "id": "gen_med_01",
        "category": "general",
        "difficulty": "medium",
        "question": "What is the federal capital city of Australia?",
        "options": [
          "Sydney",
          "Melbourne",
          "Canberra",
          "Brisbane"
        ],
        "correctIndex": 2,
        "explanation": "Canberra was founded in 1913 as the purpose-built federal capital of Australia as a compromise between Sydney and Melbourne."
      },
      {
        "id": "gen_med_02",
        "category": "general",
        "difficulty": "medium",
        "question": "Who was the first woman to win a Nobel Prize and the only person to win in two distinct scientific disciplines?",
        "options": [
          "Rosalind Franklin",
          "Marie Curie",
          "Ada Lovelace",
          "Dorothy Hodgkin"
        ],
        "correctIndex": 1,
        "explanation": "Marie Curie received the Nobel Prize in Physics (1903) and Chemistry (1911) for her foundational research on radioactivity."
      },
      {
        "id": "gen_med_03",
        "category": "general",
        "difficulty": "medium",
        "question": "Which ancient wonder of the world is the only one that remains largely intact today?",
        "options": [
          "Colossus of Rhodes",
          "Lighthouse of Alexandria",
          "Great Pyramid of Giza",
          "Hanging Gardens of Babylon"
        ],
        "correctIndex": 2,
        "explanation": "The Great Pyramid of Giza in Egypt, constructed circa 2560 BC, is the oldest and only surviving ancient wonder."
      },
      {
        "id": "gen_med_04",
        "category": "general",
        "difficulty": "medium",
        "question": "Which subtropical desert is the largest hot desert on Earth by surface area?",
        "options": [
          "Gobi Desert",
          "Kalahari Desert",
          "Sahara Desert",
          "Atacama Desert"
        ],
        "correctIndex": 2,
        "explanation": "The Sahara Desert spans roughly 9.2 million square kilometers across Northern Africa."
      },
      {
        "id": "gen_med_05",
        "category": "general",
        "difficulty": "medium",
        "question": "In which year did the United Nations officially come into existence following World War II?",
        "options": [
          "1919",
          "1939",
          "1945",
          "1955"
        ],
        "correctIndex": 2,
        "explanation": "The United Nations was officially founded on October 24, 1945, when its Charter was ratified by 51 member states."
      },
      {
        "id": "gen_med_06",
        "category": "general",
        "difficulty": "medium",
        "question": "Which river is widely recognized as the longest in the world by traditional geographic consensus?",
        "options": [
          "Amazon River",
          "Nile River",
          "Yangtze River",
          "Mississippi River"
        ],
        "correctIndex": 1,
        "explanation": "The Nile River in northeastern Africa extends approximately 6,650 kilometers (4,132 miles)."
      },
      {
        "id": "gen_med_07",
        "category": "general",
        "difficulty": "medium",
        "question": "Which meteorologist and geophysicist proposed the scientific theory of Continental Drift in 1912?",
        "options": [
          "Charles Lyell",
          "Alfred Wegener",
          "James Hutton",
          "Harry Hess"
        ],
        "correctIndex": 1,
        "explanation": "Alfred Wegener proposed that all present continents once formed a single landmass named Pangaea."
      },
      {
        "id": "gen_med_08",
        "category": "general",
        "difficulty": "medium",
        "question": "Which large island nation is situated off the southeastern coast of mainland Africa in the Indian Ocean?",
        "options": [
          "Madagascar",
          "Sri Lanka",
          "Maldives",
          "Seychelles"
        ],
        "correctIndex": 0,
        "explanation": "Madagascar is an island country located roughly 400 kilometers off the East African coast."
      },
      {
        "id": "gen_med_09",
        "category": "general",
        "difficulty": "medium",
        "question": "Who authored the acclaimed high-fantasy novel series 'The Lord of the Rings'?",
        "options": [
          "C.S. Lewis",
          "J.R.R. Tolkien",
          "George R.R. Martin",
          "Arthur Conan Doyle"
        ],
        "correctIndex": 1,
        "explanation": "John Ronald Reuel Tolkien published The Lord of the Rings between 1954 and 1955."
      },
      {
        "id": "gen_med_10",
        "category": "general",
        "difficulty": "medium",
        "question": "What is the official scientific term for the atmospheric light phenomenon known as the Northern Lights?",
        "options": [
          "Aurora Australis",
          "Aurora Borealis",
          "St. Elmo's Fire",
          "Zodiacal Light"
        ],
        "correctIndex": 1,
        "explanation": "Aurora Borealis designates the auroral displays in the Northern Hemisphere; Aurora Australis occurs in the Southern Hemisphere."
      },
      {
        "id": "gen_med_11",
        "category": "general",
        "difficulty": "medium",
        "question": "In what year did the Apollo 11 lunar mission achieve humanity's first crewed landing on the Moon?",
        "options": [
          "1965",
          "1969",
          "1972",
          "1975"
        ],
        "correctIndex": 1,
        "explanation": "On July 20, 1969, American astronauts Neil Armstrong and Buzz Aldrin stepped onto the lunar surface from the Lunar Module Eagle."
      },
      {
        "id": "gen_med_12",
        "category": "general",
        "difficulty": "medium",
        "question": "What is the longest continental mountain range on Earth, spanning approximately 7,000 kilometers along South America's western edge?",
        "options": [
          "Rocky Mountains",
          "Himalayas",
          "Andes Mountains",
          "Alps"
        ],
        "correctIndex": 2,
        "explanation": "The Andes Mountains stretch across seven countries in South America, making them the longest continental mountain chain on Earth."
      },
      {
        "id": "gen_med_13",
        "category": "general",
        "difficulty": "medium",
        "question": "Which Renaissance astronomer published 'De revolutionibus' in 1543, proposing that planets orbit the Sun (heliocentrism)?",
        "options": [
          "Ptolemy",
          "Nicolaus Copernicus",
          "Tycho Brahe",
          "Johannes Kepler"
        ],
        "correctIndex": 1,
        "explanation": "Nicolaus Copernicus developed the mathematical heliocentric model positioning the Sun at the center of the solar system, initiating the Copernican Revolution."
      },
      {
        "id": "gen_med_14",
        "category": "general",
        "difficulty": "medium",
        "question": "Which specialized agency of the United Nations, founded in 1948 and headquartered in Geneva, coordinates international public health?",
        "options": [
          "UNESCO",
          "World Health Organization (WHO)",
          "UNICEF",
          "World Bank"
        ],
        "correctIndex": 1,
        "explanation": "The World Health Organization (WHO) was established on April 7, 1948, to lead global health responses and promote worldwide disease prevention."
      },
      {
        "id": "gen_med_15",
        "category": "general",
        "difficulty": "medium",
        "question": "Which historic English charter signed by King John in 1215 established that the sovereign is subject to the rule of law?",
        "options": [
          "Magna Carta",
          "English Bill of Rights",
          "Treaty of Utrecht",
          "Domesday Book"
        ],
        "correctIndex": 0,
        "explanation": "The Magna Carta (Great Charter) of 1215 limited absolute monarchical authority, affirming rights to lawful judgment and due process."
      }
    ],
    "hard": [
      {
        "id": "gen_hard_01",
        "category": "general",
        "difficulty": "hard",
        "question": "What historic treaty was signed in 1957 to establish the European Economic Community (EEC)?",
        "options": [
          "Treaty of Maastricht",
          "Treaty of Versailles",
          "Treaty of Rome",
          "Treaty of Lisbon"
        ],
        "correctIndex": 2,
        "explanation": "The Treaty of Rome was signed in March 1957, establishing the European Economic Community."
      },
      {
        "id": "gen_hard_02",
        "category": "general",
        "difficulty": "hard",
        "question": "What is the deepest known geographic depression in the world's oceans?",
        "options": [
          "Puerto Rico Trench",
          "Java Trench",
          "Challenger Deep",
          "Tonga Trench"
        ],
        "correctIndex": 2,
        "explanation": "Challenger Deep in the southern Mariana Trench plunges to an extraordinary depth of approximately 10,928 meters."
      },
      {
        "id": "gen_hard_03",
        "category": "general",
        "difficulty": "hard",
        "question": "Which ancient civilization was ruled by the Achaemenid dynasty founded by Cyrus the Great?",
        "options": [
          "Ottoman Empire",
          "Persian Empire",
          "Byzantine Empire",
          "Mughal Empire"
        ],
        "correctIndex": 1,
        "explanation": "The First Persian Empire (Achaemenid Empire) was established around 550 BC by Cyrus the Great."
      },
      {
        "id": "gen_hard_04",
        "category": "general",
        "difficulty": "hard",
        "question": "Which country has the only national flag that is neither rectangular nor square?",
        "options": [
          "Switzerland",
          "Vatican City",
          "Nepal",
          "Bhutan"
        ],
        "correctIndex": 2,
        "explanation": "Nepal's flag is formed by two stacked pennant triangles, symbolizing the Himalayas and the country's two main religions."
      },
      {
        "id": "gen_hard_05",
        "category": "general",
        "difficulty": "hard",
        "question": "In which modern-day nation was the historic ancient city of Babylon located?",
        "options": [
          "Syria",
          "Iraq",
          "Iran",
          "Jordan"
        ],
        "correctIndex": 1,
        "explanation": "Babylon was situated along the Euphrates River in Mesopotamia, located in modern-day Hillah, Iraq."
      },
      {
        "id": "gen_hard_06",
        "category": "general",
        "difficulty": "hard",
        "question": "Who is celebrated as the world's first computer programmer for writing an algorithm for Babbage's Analytical Engine in 1843?",
        "options": [
          "Grace Hopper",
          "Ada Lovelace",
          "Katherine Johnson",
          "Alan Turing"
        ],
        "correctIndex": 1,
        "explanation": "Ada Lovelace published the first computer algorithm intended for execution on Charles Babbage's mechanical Analytical Engine."
      },
      {
        "id": "gen_hard_07",
        "category": "general",
        "difficulty": "hard",
        "question": "What is the world's highest uninterrupted waterfall?",
        "options": [
          "Victoria Falls",
          "Niagara Falls",
          "Angel Falls",
          "Iguazu Falls"
        ],
        "correctIndex": 2,
        "explanation": "Angel Falls (Salto Ángel) in Canaima National Park, Venezuela, has an uninterrupted drop of 807 meters (total 979 m)."
      },
      {
        "id": "gen_hard_08",
        "category": "general",
        "difficulty": "hard",
        "question": "Which Pacific archipelago was critical to Charles Darwin's formulation of natural selection theory?",
        "options": [
          "Hawaiian Islands",
          "Galápagos Islands",
          "Fiji Islands",
          "Canary Islands"
        ],
        "correctIndex": 1,
        "explanation": "Darwin visited the Galápagos Islands in 1835, observing distinct variations among finch and tortoise species."
      },
      {
        "id": "gen_hard_09",
        "category": "general",
        "difficulty": "hard",
        "question": "Which African nation was historically known internationally as Abyssinia until the 20th century?",
        "options": [
          "Ethiopia",
          "Sudan",
          "Somalia",
          "Eritrea"
        ],
        "correctIndex": 0,
        "explanation": "Ethiopia, one of the world's oldest sovereign nations, was historically referred to by Europeans as Abyssinia."
      },
      {
        "id": "gen_hard_10",
        "category": "general",
        "difficulty": "hard",
        "question": "What linguistic term identifies a word, phrase, or number that reads identically forwards and backwards?",
        "options": [
          "Anagram",
          "Acronym",
          "Palindrome",
          "Homonym"
        ],
        "correctIndex": 2,
        "explanation": "A palindrome (such as 'radar' or 'racecar') reads identically in both forward and reverse directions."
      },
      {
        "id": "gen_hard_11",
        "category": "general",
        "difficulty": "hard",
        "question": "Which strategic nautical strait connects the Atlantic Ocean to the Mediterranean Sea and separates Spain from Morocco?",
        "options": [
          "Strait of Hormuz",
          "Strait of Malacca",
          "Strait of Gibraltar",
          "Bosphorus Strait"
        ],
        "correctIndex": 2,
        "explanation": "The Strait of Gibraltar is a 13-kilometer-wide maritime passage linking the Atlantic Ocean to the Mediterranean basin between Europe and North Africa."
      },
      {
        "id": "gen_hard_12",
        "category": "general",
        "difficulty": "hard",
        "question": "Which English scientist designed and constructed the first practical reflecting telescope using mirrors in 1668?",
        "options": [
          "Robert Hooke",
          "Isaac Newton",
          "Christiaan Huygens",
          "Edmond Halley"
        ],
        "correctIndex": 1,
        "explanation": "Sir Isaac Newton built the reflecting telescope (Newtonian reflector) to overcome chromatic aberration produced by refractive lenses."
      },
      {
        "id": "gen_hard_13",
        "category": "general",
        "difficulty": "hard",
        "question": "Which ancient agreement signed circa 1259 BC between Ramesses II and Hattusili III is recognized as the world's earliest extant peace treaty?",
        "options": [
          "Treaty of Kadesh",
          "Peace of Westphalia",
          "Treaty of Tordesillas",
          "Edict of Milan"
        ],
        "correctIndex": 0,
        "explanation": "The Treaty of Kadesh, negotiated between the Egyptian and Hittite empires, established formal mutual peace, alliance, and extradition terms."
      },
      {
        "id": "gen_hard_14",
        "category": "general",
        "difficulty": "hard",
        "question": "What international geographical boundary running roughly along the 180° meridian in the Pacific Ocean demarcates the boundary between calendar days?",
        "options": [
          "Prime Meridian",
          "Equator",
          "International Date Line",
          "Tropic of Capricorn"
        ],
        "correctIndex": 2,
        "explanation": "The International Date Line designates where calendar dates transition; crossing eastward moves back one calendar day, while crossing westward advances one day."
      },
      {
        "id": "gen_hard_15",
        "category": "general",
        "difficulty": "hard",
        "question": "Which trilingual granodiorite slab discovered in 1799 in Egypt enabled Jean-François Champollion to decipher ancient hieroglyphics?",
        "options": [
          "Code of Hammurabi",
          "Rosetta Stone",
          "Behistun Inscription",
          "Cyrus Cylinder"
        ],
        "correctIndex": 1,
        "explanation": "The Rosetta Stone features inscriptions in Ancient Egyptian hieroglyphs, Demotic script, and Ancient Greek, unlocking the translation of ancient Egyptian literature."
      }
    ]
  },
  "competitive": {
    "easy": [
      {
        "id": "math_easy_01",
        "category": "math",
        "difficulty": "easy",
        "question": "What is the calculated value of 15% of 240?",
        "options": [
          "24",
          "36",
          "42",
          "32"
        ],
        "correctIndex": 1,
        "explanation": "10% of 240 is 24, and 5% is 12. Adding them: 24 + 12 = 36."
      },
      {
        "id": "math_easy_02",
        "category": "math",
        "difficulty": "easy",
        "question": "What is the next number in the arithmetic progression: 4, 9, 14, 19, ...?",
        "options": [
          "23",
          "24",
          "25",
          "26"
        ],
        "correctIndex": 1,
        "explanation": "The constant difference between consecutive terms is +5. 19 + 5 = 24."
      },
      {
        "id": "math_easy_03",
        "category": "math",
        "difficulty": "easy",
        "question": "What is the principal positive square root of 144?",
        "options": [
          "11",
          "12",
          "13",
          "14"
        ],
        "correctIndex": 1,
        "explanation": "12 × 12 = 144, making 12 the principal square root."
      },
      {
        "id": "math_easy_04",
        "category": "math",
        "difficulty": "easy",
        "question": "If a shirt regularly priced at $40 is offered at a 25% discount, what is the final sale price?",
        "options": [
          "$10",
          "$28",
          "$30",
          "$32"
        ],
        "correctIndex": 2,
        "explanation": "25% of $40 is $10. $40 - $10 = $30."
      },
      {
        "id": "math_easy_05",
        "category": "math",
        "difficulty": "easy",
        "question": "What is the total perimeter of a rectangle with length 8 cm and width 5 cm?",
        "options": [
          "26 cm",
          "40 cm",
          "13 cm",
          "28 cm"
        ],
        "correctIndex": 0,
        "explanation": "Perimeter = 2 × (length + width) = 2 × (8 + 5) = 2 × 13 = 26 cm."
      },
      {
        "id": "math_easy_06",
        "category": "math",
        "difficulty": "easy",
        "question": "What is the arithmetic mean (average) of the three numbers 12, 18, and 30?",
        "options": [
          "18",
          "20",
          "22",
          "24"
        ],
        "correctIndex": 1,
        "explanation": "Sum = 12 + 18 + 30 = 60. Mean = 60 / 3 = 20."
      },
      {
        "id": "math_easy_07",
        "category": "math",
        "difficulty": "easy",
        "question": "Solve for x in the linear algebraic equation: 3x + 9 = 24.",
        "options": [
          "3",
          "5",
          "7",
          "9"
        ],
        "correctIndex": 1,
        "explanation": "Subtract 9 from both sides: 3x = 15. Divide by 3: x = 5."
      },
      {
        "id": "math_easy_08",
        "category": "math",
        "difficulty": "easy",
        "question": "What is the mathematical value of 2 raised to the 5th power (2^5)?",
        "options": [
          "10",
          "16",
          "32",
          "64"
        ],
        "correctIndex": 2,
        "explanation": "2^5 = 2 × 2 × 2 × 2 × 2 = 32."
      },
      {
        "id": "math_easy_09",
        "category": "math",
        "difficulty": "easy",
        "question": "A vehicle drives at a constant speed of 60 miles per hour. How far does it travel in 3.5 hours?",
        "options": [
          "180 miles",
          "200 miles",
          "210 miles",
          "220 miles"
        ],
        "correctIndex": 2,
        "explanation": "Distance = Speed × Time = 60 × 3.5 = 210 miles."
      },
      {
        "id": "math_easy_10",
        "category": "math",
        "difficulty": "easy",
        "question": "What is the next letter in the sequential pattern: B, D, F, H, ...?",
        "options": [
          "I",
          "J",
          "K",
          "L"
        ],
        "correctIndex": 1,
        "explanation": "The pattern skips every other letter (+2 in alphabet): B(2), D(4), F(6), H(8), so the next is J(10)."
      },
      {
        "id": "math_easy_11",
        "category": "math",
        "difficulty": "easy",
        "question": "If all tulips are flowers, and some flowers wilt quickly, which conclusion is guaranteed to be logically true?",
        "options": [
          "All tulips wilt quickly",
          "No tulips wilt quickly",
          "All tulips are flowers",
          "Some tulips do not wilt"
        ],
        "correctIndex": 2,
        "explanation": "The first premise directly states 'all tulips are flowers'. We cannot deduce the wilting behavior of specific tulips from 'some flowers wilt'."
      },
      {
        "id": "math_easy_12",
        "category": "math",
        "difficulty": "easy",
        "question": "What is the sum of the two simple fractions: 1/4 + 2/3?",
        "options": [
          "3/7",
          "11/12",
          "5/12",
          "7/12"
        ],
        "correctIndex": 1,
        "explanation": "Convert to common denominator 12: 1/4 = 3/12 and 2/3 = 8/12. 3/12 + 8/12 = 11/12."
      },
      {
        "id": "math_easy_13",
        "category": "math",
        "difficulty": "easy",
        "question": "What is the next number in the doubling sequence: 5, 10, 20, 40, ...?",
        "options": [
          "50",
          "60",
          "80",
          "100"
        ],
        "correctIndex": 2,
        "explanation": "Each term is multiplied by 2 (geometric progression with ratio 2): 40 × 2 = 80."
      },
      {
        "id": "math_easy_14",
        "category": "math",
        "difficulty": "easy",
        "question": "In a class of 30 students, 60% are girls. How many girls are in the class?",
        "options": [
          "16",
          "18",
          "20",
          "22"
        ],
        "correctIndex": 1,
        "explanation": "60% of 30 = 0.60 × 30 = 18 girls."
      },
      {
        "id": "math_easy_15",
        "category": "math",
        "difficulty": "easy",
        "question": "Complete the logical verbal analogy: Book is to Reading as Fork is to: _____?",
        "options": [
          "Cooking",
          "Eating",
          "Writing",
          "Stirring"
        ],
        "correctIndex": 1,
        "explanation": "A book is an instrument used for reading; similarly, a fork is a primary utensil used for eating."
      }
    ],
    "medium": [
      {
        "id": "math_med_01",
        "category": "math",
        "difficulty": "medium",
        "question": "A train traveling at 72 km/h crosses a 100-meter-long bridge in 15 seconds. What is the length of the train?",
        "options": [
          "150 meters",
          "200 meters",
          "250 meters",
          "300 meters"
        ],
        "correctIndex": 1,
        "explanation": "72 km/h = 72 × (5/18) = 20 m/s. Distance in 15 s = 20 × 15 = 300 m. Train length = 300 - 100 = 200 meters."
      },
      {
        "id": "math_med_02",
        "category": "math",
        "difficulty": "medium",
        "question": "If 6 workers can complete a task in 12 days, how many days will 9 workers take working at the same pace?",
        "options": [
          "6 days",
          "8 days",
          "9 days",
          "10 days"
        ],
        "correctIndex": 1,
        "explanation": "Total worker-days = 6 × 12 = 72. For 9 workers: 72 / 9 = 8 days."
      },
      {
        "id": "math_med_03",
        "category": "math",
        "difficulty": "medium",
        "question": "An item purchased for $80 is sold for $100. What is the exact profit percentage?",
        "options": [
          "20%",
          "25%",
          "30%",
          "15%"
        ],
        "correctIndex": 1,
        "explanation": "Profit = $100 - $80 = $20. Profit percentage = (20 / 80) × 100 = 25%."
      },
      {
        "id": "math_med_04",
        "category": "math",
        "difficulty": "medium",
        "question": "In a jar containing 50 marbles, 20 are blue, 15 are red, and 15 are green. What is the probability of drawing a blue marble at random?",
        "options": [
          "1/5",
          "2/5",
          "3/10",
          "1/2"
        ],
        "correctIndex": 1,
        "explanation": "Probability = Blue marbles / Total marbles = 20 / 50 = 2/5 (40%)."
      },
      {
        "id": "math_med_05",
        "category": "math",
        "difficulty": "medium",
        "question": "What is the next number in the geometric progression: 3, 6, 12, 24, 48, ...?",
        "options": [
          "72",
          "96",
          "84",
          "108"
        ],
        "correctIndex": 1,
        "explanation": "Each term is multiplied by 2. 48 × 2 = 96."
      },
      {
        "id": "math_med_06",
        "category": "math",
        "difficulty": "medium",
        "question": "If the ratio of boys to girls in a class of 35 students is 3:4, how many girls are in the class?",
        "options": [
          "15",
          "20",
          "21",
          "24"
        ],
        "correctIndex": 1,
        "explanation": "Total parts = 3 + 4 = 7. Each part = 35 / 7 = 5. Girls = 4 × 5 = 20."
      },
      {
        "id": "math_med_07",
        "category": "math",
        "difficulty": "medium",
        "question": "When rolling two standard six-sided dice, what is the probability of rolling a total sum of 7?",
        "options": [
          "1/12",
          "1/6",
          "5/36",
          "7/36"
        ],
        "correctIndex": 1,
        "explanation": "6 possible pairs sum to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). 6/36 = 1/6."
      },
      {
        "id": "math_med_08",
        "category": "math",
        "difficulty": "medium",
        "question": "If a car depreciates by 10% of its initial cost each year under straight-line depreciation, what is a $20,000 car worth after 2 years?",
        "options": [
          "$16,000",
          "$16,200",
          "$17,000",
          "$18,000"
        ],
        "correctIndex": 0,
        "explanation": "Depreciation = $2,000/year × 2 = $4,000. $20,000 - $4,000 = $16,000."
      },
      {
        "id": "math_med_09",
        "category": "math",
        "difficulty": "medium",
        "question": "Find the missing number in the sequence: 2, 5, 10, 17, 26, ...?",
        "options": [
          "35",
          "37",
          "39",
          "41"
        ],
        "correctIndex": 1,
        "explanation": "The formula is n² + 1: 1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26, so 6²+1 = 37."
      },
      {
        "id": "math_med_10",
        "category": "math",
        "difficulty": "medium",
        "question": "A person walks 12 meters North, then turns East and walks 5 meters. How far are they from their starting point in a straight line?",
        "options": [
          "13 meters",
          "15 meters",
          "17 meters",
          "10 meters"
        ],
        "correctIndex": 0,
        "explanation": "By Pythagorean theorem: √(12² + 5²) = √(144 + 25) = √169 = 13 meters."
      },
      {
        "id": "math_med_11",
        "category": "math",
        "difficulty": "medium",
        "question": "Pointing to a photograph, John says: 'His father is the only son of my father.' If John has no brothers, who is in the photograph?",
        "options": [
          "His nephew",
          "His cousin",
          "His son",
          "His father"
        ],
        "correctIndex": 2,
        "explanation": "'The only son of my father' is John himself (since he has no brothers). Therefore, the father of the person in the photo is John, meaning it is John's son."
      },
      {
        "id": "math_med_12",
        "category": "math",
        "difficulty": "medium",
        "question": "If an item's price increases by 20% and then decreases by 20%, what is the net percentage change from the original price?",
        "options": [
          "0% (no change)",
          "4% decrease",
          "4% increase",
          "2% decrease"
        ],
        "correctIndex": 1,
        "explanation": "Let original price = 100. After +20%: 120. After -20%: 120 × 0.80 = 96. Net change = 96 - 100 = -4% (a 4% decrease)."
      },
      {
        "id": "math_med_13",
        "category": "math",
        "difficulty": "medium",
        "question": "Given: 'All cats are mammals' and 'All mammals are warm-blooded'. What deductive conclusion is logically valid?",
        "options": [
          "All cats are warm-blooded",
          "All warm-blooded animals are cats",
          "Some cats are cold-blooded",
          "No cats are warm-blooded"
        ],
        "correctIndex": 0,
        "explanation": "By categorical syllogism transitive law: If A is in B and B is in C, then all A are in C. Thus, all cats are warm-blooded."
      },
      {
        "id": "math_med_14",
        "category": "math",
        "difficulty": "medium",
        "question": "A mother is currently 4 times as old as her daughter. In 20 years, she will be twice as old as her daughter. How old is the daughter today?",
        "options": [
          "8 years old",
          "10 years old",
          "12 years old",
          "15 years old"
        ],
        "correctIndex": 1,
        "explanation": "Let daughter = d, mother = 4d. In 20 years: 4d + 20 = 2(d + 20) => 4d + 20 = 2d + 40 => 2d = 20 => d = 10 years old."
      },
      {
        "id": "math_med_15",
        "category": "math",
        "difficulty": "medium",
        "question": "What is the next number in the alternating series: 2, 10, 4, 12, 6, 14, ...?",
        "options": [
          "7",
          "8",
          "16",
          "18"
        ],
        "correctIndex": 1,
        "explanation": "Two sequences alternate: odd positions (2, 4, 6, 8, ...) increase by 2, and even positions (10, 12, 14, ...) increase by 2. The 7th term is 6 + 2 = 8."
      }
    ],
    "hard": [
      {
        "id": "math_hard_01",
        "category": "math",
        "difficulty": "hard",
        "question": "In how many distinct ways can the 4 letters of the word 'QUIZ' be permuted without repetition?",
        "options": [
          "12",
          "18",
          "24",
          "36"
        ],
        "correctIndex": 2,
        "explanation": "For 4 unique letters, the number of permutations is 4! = 4 × 3 × 2 × 1 = 24."
      },
      {
        "id": "math_hard_02",
        "category": "math",
        "difficulty": "hard",
        "question": "What is the compound interest accrued on a principal of $1,000 after 2 years at an annual interest rate of 10% compounded annually?",
        "options": [
          "$200",
          "$210",
          "$220",
          "$250"
        ],
        "correctIndex": 1,
        "explanation": "Final amount = 1000 × (1 + 0.10)² = 1000 × 1.21 = $1,210. Interest = $1,210 - $1,000 = $210."
      },
      {
        "id": "math_hard_03",
        "category": "math",
        "difficulty": "hard",
        "question": "Person A can complete a task in 10 days, while Person B can complete it in 15 days. How many days will they take working together?",
        "options": [
          "5 days",
          "6 days",
          "7 days",
          "8 days"
        ],
        "correctIndex": 1,
        "explanation": "Combined rate = 1/10 + 1/15 = (3 + 2)/30 = 5/30 = 1/6 task per day. Time = 6 days."
      },
      {
        "id": "math_hard_04",
        "category": "math",
        "difficulty": "hard",
        "question": "In how many ways can a 3-member committee be chosen from a pool of 7 eligible candidates?",
        "options": [
          "21",
          "35",
          "42",
          "210"
        ],
        "correctIndex": 1,
        "explanation": "Combinations = 7C3 = (7 × 6 × 5) / (3 × 2 × 1) = 210 / 6 = 35."
      },
      {
        "id": "math_hard_05",
        "category": "math",
        "difficulty": "hard",
        "question": "On an analog clock face, what is the acute angle between the hour hand and minute hand at exactly 3:30?",
        "options": [
          "70 degrees",
          "75 degrees",
          "80 degrees",
          "85 degrees"
        ],
        "correctIndex": 1,
        "explanation": "Minute hand is at 180°. Hour hand is at 3 × 30° + (30 × 0.5°) = 90° + 15° = 105°. Angle = 180° - 105° = 75°."
      },
      {
        "id": "math_hard_06",
        "category": "math",
        "difficulty": "hard",
        "question": "What is the mathematical remainder when 2^50 is divided by 7?",
        "options": [
          "1",
          "2",
          "4",
          "6"
        ],
        "correctIndex": 2,
        "explanation": "2³ = 8 ≡ 1 (mod 7). 50 = 3 × 16 + 2. Thus 2^50 = (2³)^16 × 2² ≡ 1^16 × 4 ≡ 4 (mod 7)."
      },
      {
        "id": "math_hard_07",
        "category": "math",
        "difficulty": "hard",
        "question": "A merchant marks an item 40% above its cost price and subsequently grants a 20% discount on the marked price. What is the net profit percentage?",
        "options": [
          "12%",
          "15%",
          "16%",
          "20%"
        ],
        "correctIndex": 0,
        "explanation": "Let cost = 100. Marked = 140. Discounted sale price = 140 × 0.80 = 112. Profit = 112 - 100 = 12%."
      },
      {
        "id": "math_hard_08",
        "category": "math",
        "difficulty": "hard",
        "question": "If log₁₀(x) + log₁₀(x - 3) = 1, what is the valid real value of x?",
        "options": [
          "2",
          "5",
          "10",
          "13"
        ],
        "correctIndex": 1,
        "explanation": "log₁₀(x(x - 3)) = 1 => x² - 3x = 10 => x² - 3x - 10 = 0 => (x - 5)(x + 2) = 0. Since x > 3, x = 5."
      },
      {
        "id": "math_hard_09",
        "category": "math",
        "difficulty": "hard",
        "question": "Three pipes A, B, and C can fill an empty pool in 12, 15, and 20 hours respectively. How many hours will it take if all three pipes operate simultaneously?",
        "options": [
          "4 hours",
          "5 hours",
          "6 hours",
          "7 hours"
        ],
        "correctIndex": 1,
        "explanation": "Combined rate = 1/12 + 1/15 + 1/20 = (5 + 4 + 3)/60 = 12/60 = 1/5 pool/hr. Total time = 5 hours."
      },
      {
        "id": "math_hard_10",
        "category": "math",
        "difficulty": "hard",
        "question": "What is the sum of all interior angles of a convex hexagon (6-sided polygon)?",
        "options": [
          "540 degrees",
          "720 degrees",
          "900 degrees",
          "1080 degrees"
        ],
        "correctIndex": 1,
        "explanation": "Sum of interior angles = (n - 2) × 180° = (6 - 2) × 180° = 4 × 180° = 720°."
      },
      {
        "id": "math_hard_11",
        "category": "math",
        "difficulty": "hard",
        "question": "Knights always speak the truth and Knaves always lie. Inhabitant X says: 'We are both Knaves.' What are Inhabitant X and Inhabitant Y?",
        "options": [
          "X is a Knave and Y is a Knight",
          "Both X and Y are Knights",
          "Both X and Y are Knaves",
          "X is a Knight and Y is a Knave"
        ],
        "correctIndex": 0,
        "explanation": "If X were a Knight, X's claim 'We are both Knaves' would be true, which is contradictory. So X is a Knave (liar). Because X's statement is false, both cannot be Knaves, which proves Y must be a Knight."
      },
      {
        "id": "math_hard_12",
        "category": "math",
        "difficulty": "hard",
        "question": "A bag contains 5 red balls and 3 black balls. If two balls are drawn in succession without replacement, what is the probability that both are red?",
        "options": [
          "5/14",
          "25/64",
          "15/56",
          "5/8"
        ],
        "correctIndex": 0,
        "explanation": "P(1st red) = 5/8. Remaining: 4 red out of 7 balls. P(2nd red) = 4/7. P(Both red) = (5/8) × (4/7) = 20/56 = 5/14."
      },
      {
        "id": "math_hard_13",
        "category": "math",
        "difficulty": "hard",
        "question": "In what ratio must water (cost $0) be mixed with pure liquid costing $12/liter to create a mixture valued at $9/liter?",
        "options": [
          "1:3",
          "3:1",
          "1:4",
          "2:3"
        ],
        "correctIndex": 0,
        "explanation": "By alligation rule: (Cost of pure liquid - Mean price) / (Mean price - Cost of water) = (12 - 9) / (9 - 0) = 3 / 9 = 1:3 ratio of water to liquid."
      },
      {
        "id": "math_hard_14",
        "category": "math",
        "difficulty": "hard",
        "question": "Two cyclists 90 km apart ride toward each other at speeds of 18 km/h and 12 km/h. How many hours will elapse before they meet?",
        "options": [
          "2.5 hours",
          "3 hours",
          "3.5 hours",
          "4 hours"
        ],
        "correctIndex": 1,
        "explanation": "Relative speed moving toward each other is 18 + 12 = 30 km/h. Time = Distance / Speed = 90 km / 30 km/h = 3 hours."
      },
      {
        "id": "math_hard_15",
        "category": "math",
        "difficulty": "hard",
        "question": "What is the unit digit (the ones place) of the large mathematical expression 7^105?",
        "options": [
          "1",
          "3",
          "7",
          "9"
        ],
        "correctIndex": 2,
        "explanation": "Unit digits of powers of 7 cycle in a pattern of four: 7, 9, 3, 1. Exponent 105 mod 4 = 1. Therefore, 7^105 has the same unit digit as 7¹ = 7."
      }
    ]
  },
  "sports": {
    "easy": [
      {
        "id": "sports_easy_01",
        "category": "sports",
        "difficulty": "easy",
        "question": "How many players are on the field for one football (soccer) team during a regulation match?",
        "options": [
          "9",
          "10",
          "11",
          "12"
        ],
        "correctIndex": 2,
        "explanation": "A standard association football team fields 11 players at a time, including 1 goalkeeper and 10 outfield players."
      },
      {
        "id": "sports_easy_02",
        "category": "sports",
        "difficulty": "easy",
        "question": "In association football (soccer), which card signifies that a player is ejected from the remainder of the match?",
        "options": [
          "Yellow card",
          "Red card",
          "Blue card",
          "Black card"
        ],
        "correctIndex": 1,
        "explanation": "A referee displays a red card to immediately dismiss a player from the pitch for serious misconduct or two yellow cards."
      },
      {
        "id": "sports_easy_03",
        "category": "sports",
        "difficulty": "easy",
        "question": "Which national team won the FIFA Men's World Cup held in Qatar in 2022?",
        "options": [
          "France",
          "Argentina",
          "Brazil",
          "Germany"
        ],
        "correctIndex": 1,
        "explanation": "Argentina won the 2022 FIFA World Cup, defeating France in a penalty shootout following a 3-3 draw in the final."
      },
      {
        "id": "sports_easy_04",
        "category": "sports",
        "difficulty": "easy",
        "question": "In the sport of tennis, what traditional word is used to denote a score of zero points?",
        "options": [
          "Nil",
          "Zero",
          "Love",
          "Blank"
        ],
        "correctIndex": 2,
        "explanation": "In tennis scoring, 'love' corresponds to zero, likely derived from the French word 'l'oeuf' (egg) representing a zero shape."
      },
      {
        "id": "sports_easy_05",
        "category": "sports",
        "difficulty": "easy",
        "question": "What is the official distance of a standard Olympic marathon foot race?",
        "options": [
          "20.0 miles",
          "24.5 miles",
          "26.2 miles (42.195 km)",
          "30.0 miles"
        ],
        "correctIndex": 2,
        "explanation": "A regulation marathon is precisely 26 miles and 385 yards, or 42.195 kilometers (approximately 26.2 miles)."
      },
      {
        "id": "sports_easy_06",
        "category": "sports",
        "difficulty": "easy",
        "question": "In basketball, how many points are awarded for successfully making a free throw?",
        "options": [
          "1 point",
          "2 points",
          "3 points",
          "4 points"
        ],
        "correctIndex": 0,
        "explanation": "Each successful free throw awarded after a shooting foul or penalty counts as 1 point."
      },
      {
        "id": "sports_easy_07",
        "category": "sports",
        "difficulty": "easy",
        "question": "In which indoor sport do competitors strive to knock down ten pins with a heavy ball?",
        "options": [
          "Ten-pin Bowling",
          "Curling",
          "Billiards",
          "Darts"
        ],
        "correctIndex": 0,
        "explanation": "In ten-pin bowling, bowlers roll a bowling ball down an oiled wooden or synthetic lane to knock down pins."
      },
      {
        "id": "sports_easy_08",
        "category": "sports",
        "difficulty": "easy",
        "question": "In cricket, how many consecutive dismissals (wickets) taken by a bowler in successive deliveries constitute a 'hat-trick'?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctIndex": 1,
        "explanation": "A bowler achieves a hat-trick by taking 3 wickets off 3 consecutive legal deliveries."
      },
      {
        "id": "sports_easy_09",
        "category": "sports",
        "difficulty": "easy",
        "question": "Which competitive swimming stroke is named after a winged insect and features a symmetrical arm stroke?",
        "options": [
          "Breaststroke",
          "Backstroke",
          "Butterfly stroke",
          "Freestyle"
        ],
        "correctIndex": 2,
        "explanation": "The butterfly stroke features an undulating dolphin kick and simultaneous over-water recovery of both arms."
      },
      {
        "id": "sports_easy_10",
        "category": "sports",
        "difficulty": "easy",
        "question": "How many interlocking rings are depicted on the official Olympic Games flag?",
        "options": [
          "4",
          "5",
          "6",
          "7"
        ],
        "correctIndex": 1,
        "explanation": "The Olympic flag features five interlocking rings (blue, yellow, black, green, red) representing the union of five inhabited continents."
      },
      {
        "id": "sports_easy_11",
        "category": "sports",
        "difficulty": "easy",
        "question": "How many players per team are simultaneously on the court during a regulation basketball game?",
        "options": [
          "4",
          "5",
          "6",
          "7"
        ],
        "correctIndex": 1,
        "explanation": "Each basketball team fields 5 active players on the court at any given time (total 10 players on court)."
      },
      {
        "id": "sports_easy_12",
        "category": "sports",
        "difficulty": "easy",
        "question": "Which racquet sport uses a feathered or plastic projectile known as a shuttlecock or birdie?",
        "options": [
          "Tennis",
          "Squash",
          "Badminton",
          "Table Tennis"
        ],
        "correctIndex": 2,
        "explanation": "Badminton players hit a shuttlecock back and forth across a raised central net using lightweight racquets."
      },
      {
        "id": "sports_easy_13",
        "category": "sports",
        "difficulty": "easy",
        "question": "In baseball, how many called strikes result in a strikeout for the batter at the plate?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctIndex": 1,
        "explanation": "In baseball rules, three strikes make an out, retiring the batter."
      },
      {
        "id": "sports_easy_14",
        "category": "sports",
        "difficulty": "easy",
        "question": "On which natural playing surface is the prestigious Wimbledon tennis championship played in London?",
        "options": [
          "Clay",
          "Hard court",
          "Grass",
          "Carpet"
        ],
        "correctIndex": 2,
        "explanation": "Wimbledon is the oldest tennis tournament in the world and the only Grand Slam still played on traditional grass courts."
      },
      {
        "id": "sports_easy_15",
        "category": "sports",
        "difficulty": "easy",
        "question": "Which Jamaican athlete holds the men's 100-meter sprint world record at 9.58 seconds?",
        "options": [
          "Tyson Gay",
          "Yohan Blake",
          "Usain Bolt",
          "Carl Lewis"
        ],
        "correctIndex": 2,
        "explanation": "Usain Bolt set the historic 100m world record of 9.58 seconds at the 2009 World Athletics Championships in Berlin."
      }
    ],
    "medium": [
      {
        "id": "sports_med_01",
        "category": "sports",
        "difficulty": "medium",
        "question": "What is the official regulation height of a basketball hoop rim above the playing court surface?",
        "options": [
          "9 feet (2.74 m)",
          "10 feet (3.05 m)",
          "11 feet (3.35 m)",
          "12 feet (3.66 m)"
        ],
        "correctIndex": 1,
        "explanation": "James Naismith mounted the original peach basket at 10 feet (3.05 m) in 1891, which remains the universal standard height today."
      },
      {
        "id": "sports_med_02",
        "category": "sports",
        "difficulty": "medium",
        "question": "In the sport of golf, what term describes completing a single hole in two strokes under par?",
        "options": [
          "Birdie",
          "Eagle",
          "Albatross",
          "Bogey"
        ],
        "correctIndex": 1,
        "explanation": "In golf terminology, an 'Eagle' represents 2 strokes under par on a hole (such as scoring 3 on a par-5)."
      },
      {
        "id": "sports_med_03",
        "category": "sports",
        "difficulty": "medium",
        "question": "Which historic city hosted the inaugural Modern Olympic Games in 1896?",
        "options": [
          "Paris, France",
          "Athens, Greece",
          "London, Great Britain",
          "Rome, Italy"
        ],
        "correctIndex": 1,
        "explanation": "The first modern international Olympic Games were held in Athens, Greece, in April 1896, revived by Pierre de Coubertin."
      },
      {
        "id": "sports_med_04",
        "category": "sports",
        "difficulty": "medium",
        "question": "In professional combat sports such as boxing, what does the ruling abbreviation TKO stand for?",
        "options": [
          "Total Knockout",
          "Technical Knockout",
          "Timed Knockout",
          "Terminal Knockout"
        ],
        "correctIndex": 1,
        "explanation": "A Technical Knockout (TKO) occurs when the referee or doctor stops the contest because a fighter cannot safely continue."
      },
      {
        "id": "sports_med_05",
        "category": "sports",
        "difficulty": "medium",
        "question": "In Formula 1 motorsport, what does the waving of a black-and-white checkered flag indicate to drivers?",
        "options": [
          "Safety car deployed",
          "Hazard on track",
          "Session or race completion",
          "Pit lane is closed"
        ],
        "correctIndex": 2,
        "explanation": "The checkered flag is waved at the finish line to signify the official conclusion of a practice, qualifying session, or race."
      },
      {
        "id": "sports_med_06",
        "category": "sports",
        "difficulty": "medium",
        "question": "Which country has won the greatest number of FIFA Men's World Cup trophies in football history?",
        "options": [
          "Germany",
          "Italy",
          "Brazil",
          "Argentina"
        ],
        "correctIndex": 2,
        "explanation": "Brazil has won a record five FIFA Men's World Cup championships (1958, 1962, 1970, 1994, and 2002)."
      },
      {
        "id": "sports_med_07",
        "category": "sports",
        "difficulty": "medium",
        "question": "In rugby union, how many points are awarded to a team for successfully scoring a try?",
        "options": [
          "3 points",
          "4 points",
          "5 points",
          "6 points"
        ],
        "correctIndex": 2,
        "explanation": "Grounding the ball in the opponent's in-goal area scores a try, which is worth 5 points in rugby union."
      },
      {
        "id": "sports_med_08",
        "category": "sports",
        "difficulty": "medium",
        "question": "How many regulation periods are played in a standard professional ice hockey game?",
        "options": [
          "2 periods (40 min each)",
          "3 periods (20 min each)",
          "4 quarters (15 min each)",
          "2 halves (30 min each)"
        ],
        "correctIndex": 1,
        "explanation": "A regulation ice hockey game consists of three 20-minute periods, separated by two intermissions."
      },
      {
        "id": "sports_med_09",
        "category": "sports",
        "difficulty": "medium",
        "question": "Which Serbian tennis star holds the men's all-time record for the most Grand Slam singles titles (24 as of 2023)?",
        "options": [
          "Roger Federer",
          "Rafael Nadal",
          "Novak Djokovic",
          "Andy Murray"
        ],
        "correctIndex": 2,
        "explanation": "Novak Djokovic holds the record for most Grand Slam men's singles titles in tennis history, with 24 major championships."
      },
      {
        "id": "sports_med_10",
        "category": "sports",
        "difficulty": "medium",
        "question": "In volleyball, what is the maximum number of team touches allowed before the ball must be hit back over the net?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctIndex": 1,
        "explanation": "A volleyball team is permitted a maximum of three contacts (typically bump, set, spike) to return the ball over the net."
      },
      {
        "id": "sports_med_11",
        "category": "sports",
        "difficulty": "medium",
        "question": "What is the standard regulation diameter of a golf hole cup on a putting green?",
        "options": [
          "3.5 inches",
          "4.25 inches (108 mm)",
          "5.0 inches",
          "6.0 inches"
        ],
        "correctIndex": 1,
        "explanation": "Under the Rules of Golf, the hole must have a standardized diameter of 4.25 inches (108 mm) and a depth of at least 4 inches."
      },
      {
        "id": "sports_med_12",
        "category": "sports",
        "difficulty": "medium",
        "question": "How many hurdles are positioned in each lane for a standard Olympic 110-meter hurdles race?",
        "options": [
          "8",
          "10",
          "12",
          "14"
        ],
        "correctIndex": 1,
        "explanation": "A standard 110-meter hurdles race (and 100m women's hurdles) requires athletes to clear exactly 10 evenly spaced hurdles."
      },
      {
        "id": "sports_med_13",
        "category": "sports",
        "difficulty": "medium",
        "question": "Which American swimmer is the most decorated Olympian of all time with 23 gold medals (28 medals overall)?",
        "options": [
          "Mark Spitz",
          "Ryan Lochte",
          "Michael Phelps",
          "Caeleb Dressel"
        ],
        "correctIndex": 2,
        "explanation": "Michael Phelps won 28 Olympic medals across five Games (2000–2016), including 23 golds, an all-time Olympic record."
      },
      {
        "id": "sports_med_14",
        "category": "sports",
        "difficulty": "medium",
        "question": "In the sport of cricket, what term describes a batter who is dismissed without scoring a single run?",
        "options": [
          "A strikeout",
          "A duck",
          "A maiden",
          "A bye"
        ],
        "correctIndex": 1,
        "explanation": "Being dismissed for zero runs is called scoring a 'duck' (or a 'golden duck' if dismissed on the very first delivery faced)."
      },
      {
        "id": "sports_med_15",
        "category": "sports",
        "difficulty": "medium",
        "question": "What is the standard length of an Olympic-sized competitive swimming pool in meters?",
        "options": [
          "25 meters",
          "50 meters",
          "75 meters",
          "100 meters"
        ],
        "correctIndex": 1,
        "explanation": "An Olympic-size competition pool is 50 meters in length (commonly called long-course swimming)."
      }
    ],
    "hard": [
      {
        "id": "sports_hard_01",
        "category": "sports",
        "difficulty": "hard",
        "question": "Which legendary African American athlete won four track and field gold medals at the 1936 Berlin Olympics?",
        "options": [
          "Carl Lewis",
          "Jesse Owens",
          "Bob Beamon",
          "Tommie Smith"
        ],
        "correctIndex": 1,
        "explanation": "Jesse Owens triumphed in the 100m, 200m, long jump, and 4x100m relay, dispelling racial supremacy myths at the 1936 Berlin Games."
      },
      {
        "id": "sports_hard_02",
        "category": "sports",
        "difficulty": "hard",
        "question": "In which year and country was the inaugural FIFA Men's World Cup held?",
        "options": [
          "1926 in Italy",
          "1930 in Uruguay",
          "1934 in France",
          "1938 in Brazil"
        ],
        "correctIndex": 1,
        "explanation": "The first FIFA World Cup took place in Uruguay in July 1930, with Uruguay emerging victorious over Argentina in the final."
      },
      {
        "id": "sports_hard_03",
        "category": "sports",
        "difficulty": "hard",
        "question": "In snooker, what is the maximum standard break score achievable in a single frame without fouls or free balls?",
        "options": [
          "140",
          "147",
          "150",
          "155"
        ],
        "correctIndex": 1,
        "explanation": "A maximum break of 147 is achieved by potting all 15 reds alternately with the black ball (120 points) plus all six colours (27 points)."
      },
      {
        "id": "sports_hard_04",
        "category": "sports",
        "difficulty": "hard",
        "question": "Which tennis icon achieved the historic 'Golden Slam' in 1988 by winning all four Grand Slam tournaments and Olympic Gold in one calendar year?",
        "options": [
          "Martina Navratilova",
          "Chris Evert",
          "Steffi Graf",
          "Serena Williams"
        ],
        "correctIndex": 2,
        "explanation": "Steffi Graf won the Australian Open, French Open, Wimbledon, US Open, and the Olympic singles gold medal in Seoul in 1988."
      },
      {
        "id": "sports_hard_05",
        "category": "sports",
        "difficulty": "hard",
        "question": "In Olympic fencing, which of the three competitive weapons permits valid touches anywhere on the competitor's entire body?",
        "options": [
          "Foil",
          "Sabre",
          "Épée",
          "Broadsword"
        ],
        "correctIndex": 2,
        "explanation": "Unlike the foil (torso only) and sabre (above the waist), the épée allows valid touches on the whole body from head to foot."
      },
      {
        "id": "sports_hard_06",
        "category": "sports",
        "difficulty": "hard",
        "question": "Who was the first Formula 1 racing driver to secure seven World Drivers' Championships?",
        "options": [
          "Ayrton Senna",
          "Juan Manuel Fangio",
          "Michael Schumacher",
          "Alain Prost"
        ],
        "correctIndex": 2,
        "explanation": "German driver Michael Schumacher won 7 F1 titles (1994, 1995, 2000, 2001, 2002, 2003, and 2004), a milestone later matched by Lewis Hamilton."
      },
      {
        "id": "sports_hard_07",
        "category": "sports",
        "difficulty": "hard",
        "question": "What is the exact distance between the back tip of home plate and the front of the pitcher's rubber on a Major League Baseball mound?",
        "options": [
          "50 feet 0 inches",
          "60 feet 6 inches (18.44 m)",
          "66 feet 0 inches",
          "70 feet 6 inches"
        ],
        "correctIndex": 1,
        "explanation": "Set by baseball rules in 1893, the distance from home plate to the pitching rubber is exactly 60 feet 6 inches."
      },
      {
        "id": "sports_hard_08",
        "category": "sports",
        "difficulty": "hard",
        "question": "Which national team won the inaugural UEFA European Championship (Euro) tournament held in 1960 in France?",
        "options": [
          "Soviet Union",
          "Yugoslavia",
          "Czechoslovakia",
          "Spain"
        ],
        "correctIndex": 0,
        "explanation": "The Soviet Union won the inaugural 1960 European Nations' Cup, defeating Yugoslavia 2-1 after extra time in Paris."
      },
      {
        "id": "sports_hard_09",
        "category": "sports",
        "difficulty": "hard",
        "question": "In the men's Olympic decathlon, which grueling event is traditionally contested last as the 10th and final discipline?",
        "options": [
          "Pole vault",
          "Javelin throw",
          "1,500-meter run",
          "400-meter run"
        ],
        "correctIndex": 2,
        "explanation": "The 10-event decathlon spans two days and concludes with the 1,500-meter middle-distance race."
      },
      {
        "id": "sports_hard_10",
        "category": "sports",
        "difficulty": "hard",
        "question": "In Olympic archery, what is the outer target face diameter used at the standard 70-meter outdoor competition distance?",
        "options": [
          "80 cm",
          "100 cm",
          "122 cm",
          "150 cm"
        ],
        "correctIndex": 2,
        "explanation": "Olympic recurve archers shoot at a 122 cm diameter target featuring 10 concentric scoring rings from 70 meters away."
      },
      {
        "id": "sports_hard_11",
        "category": "sports",
        "difficulty": "hard",
        "question": "Who is the only heavyweight boxing world champion in history to retire completely undefeated with a pristine career record of 49 wins and 0 losses?",
        "options": [
          "Muhammad Ali",
          "Joe Louis",
          "Rocky Marciano",
          "George Foreman"
        ],
        "correctIndex": 2,
        "explanation": "Rocky Marciano held the world heavyweight title from 1952 to 1956 and retired with a perfect 49-0 record (43 knockouts)."
      },
      {
        "id": "sports_hard_12",
        "category": "sports",
        "difficulty": "hard",
        "question": "In the Tour de France bicycle race, which distinctive jersey design is worn by the leader of the King of the Mountains classification?",
        "options": [
          "Yellow jersey",
          "Green jersey",
          "White jersey with red polka dots",
          "Rainbow jersey"
        ],
        "correctIndex": 2,
        "explanation": "The polka dot jersey (maillot à pois rouges) designates the leader of the mountains classification in the Tour de France."
      },
      {
        "id": "sports_hard_13",
        "category": "sports",
        "difficulty": "hard",
        "question": "What is the official regulation weight of the metal sphere used in the men's Olympic shot put event?",
        "options": [
          "5.00 kg (11.0 lbs)",
          "6.00 kg (13.2 lbs)",
          "7.26 kg (16.0 lbs)",
          "8.50 kg (18.7 lbs)"
        ],
        "correctIndex": 2,
        "explanation": "The men's shot put projectile weighs 7.260 kg (16 lbs), while the women's shot put weighs 4.00 kg (8.8 lbs)."
      },
      {
        "id": "sports_hard_14",
        "category": "sports",
        "difficulty": "hard",
        "question": "Which Sri Lankan off-spinner holds the world record for the highest number of wickets taken in Test cricket history (800 wickets)?",
        "options": [
          "Shane Warne",
          "Anil Kumble",
          "Muttiah Muralitharan",
          "James Anderson"
        ],
        "correctIndex": 2,
        "explanation": "Muttiah Muralitharan took an unprecedented 800 wickets in 133 Test matches between 1992 and 2010."
      },
      {
        "id": "sports_hard_15",
        "category": "sports",
        "difficulty": "hard",
        "question": "Which five athletic disciplines comprise the modern pentathlon contested at the Summer Olympic Games?",
        "options": [
          "Fencing, Swimming, Equestrian jumping, Laser-Run (Shooting & Running)",
          "Archery, Cycling, Rowing, Sprinting, Wrestling",
          "Shooting, Canoeing, Gymnastics, Hurdles, High jump",
          "Weightlifting, Boxing, Taekwondo, Long jump, 800m"
        ],
        "correctIndex": 0,
        "explanation": "Conceived by Baron de Coubertin, modern pentathlon tests fencing, 200m freestyle swimming, equestrian show jumping, and a combined laser-pistol shoot and cross-country run."
      }
    ]
  },
  "entertainment": {
    "easy": [
      {
        "id": "ent_easy_01",
        "category": "entertainment",
        "difficulty": "easy",
        "question": "Which beloved animated Disney film tells the story of Simba and features the iconic song 'Circle of Life'?",
        "options": [
          "Aladdin",
          "The Lion King",
          "Beauty and the Beast",
          "Tarzan"
        ],
        "correctIndex": 1,
        "explanation": "The Lion King (1994) follows young lion prince Simba and features songs by Elton John and Tim Rice."
      },
      {
        "id": "ent_easy_02",
        "category": "entertainment",
        "difficulty": "easy",
        "question": "What is the name of the magical boarding school attended by young wizard Harry Potter in the novels by J.K. Rowling?",
        "options": [
          "Beauxbatons",
          "Durmstrang",
          "Hogwarts",
          "Ilvermorny"
        ],
        "correctIndex": 2,
        "explanation": "Hogwarts School of Witchcraft and Wizardry is the primary Scottish boarding school setting for the Harry Potter series."
      },
      {
        "id": "ent_easy_03",
        "category": "entertainment",
        "difficulty": "easy",
        "question": "Which fictional billionaire superhero protects the streets of Gotham City as the 'Dark Knight'?",
        "options": [
          "Superman",
          "Iron Man",
          "Batman (Bruce Wayne)",
          "Spider-Man"
        ],
        "correctIndex": 2,
        "explanation": "Bruce Wayne assumes the vigilante persona of Batman to fight crime in Gotham City, created by Bob Kane and Bill Finger."
      },
      {
        "id": "ent_easy_04",
        "category": "entertainment",
        "difficulty": "easy",
        "question": "Which American singer, songwriter, and dancer is universally celebrated in popular culture as the 'King of Pop'?",
        "options": [
          "Elvis Presley",
          "Michael Jackson",
          "Prince",
          "Stevie Wonder"
        ],
        "correctIndex": 1,
        "explanation": "Michael Jackson revolutionized popular music, music videos (e.g., 'Thriller'), and dance moves like the Moonwalk."
      },
      {
        "id": "ent_easy_05",
        "category": "entertainment",
        "difficulty": "easy",
        "question": "In J.R.R. Tolkien's high fantasy universe, in which fictional world do Hobbits, Elves, and Sauron dwell?",
        "options": [
          "Narnia",
          "Westeros",
          "Middle-earth",
          "Azeroth"
        ],
        "correctIndex": 2,
        "explanation": "Middle-earth is the mythical continent where the events of The Hobbit and The Lord of the Rings take place."
      },
      {
        "id": "ent_easy_06",
        "category": "entertainment",
        "difficulty": "easy",
        "question": "How many total keys (including white natural keys and black accidental keys) are on a standard modern piano?",
        "options": [
          "64",
          "76",
          "88",
          "96"
        ],
        "correctIndex": 2,
        "explanation": "A standard modern acoustic piano features exactly 88 keys: 52 white keys for natural notes and 36 black keys for accidentals."
      },
      {
        "id": "ent_easy_07",
        "category": "entertainment",
        "difficulty": "easy",
        "question": "What is the name of the lovable, green swamp-dwelling ogre in the popular animated DreamWorks film series?",
        "options": [
          "Fiona",
          "Donkey",
          "Shrek",
          "Farquaad"
        ],
        "correctIndex": 2,
        "explanation": "Shrek is a friendly green ogre who sets out to rescue Princess Fiona, voiced by Mike Myers in the Oscar-winning animated film."
      },
      {
        "id": "ent_easy_08",
        "category": "entertainment",
        "difficulty": "easy",
        "question": "Which pioneering animation studio produced revolutionary computer-animated films like 'Toy Story', 'Monsters, Inc.', and 'Finding Nemo'?",
        "options": [
          "Pixar Animation Studios",
          "Studio Ghibli",
          "Illumination",
          "Blue Sky Studios"
        ],
        "correctIndex": 0,
        "explanation": "Pixar produced Toy Story (1995), the world's first fully computer-animated feature film, followed by numerous blockbuster classics."
      },
      {
        "id": "ent_easy_09",
        "category": "entertainment",
        "difficulty": "easy",
        "question": "In Marvel Comics and the Marvel Cinematic Universe, what is the name of Thor's mystical hammer?",
        "options": [
          "Stormbreaker",
          "Mjolnir",
          "Gungnir",
          "Aegis"
        ],
        "correctIndex": 1,
        "explanation": "Mjolnir is the enchanted Norse hammer forged in the heart of a dying star that grants Thor his lightning powers."
      },
      {
        "id": "ent_easy_10",
        "category": "entertainment",
        "difficulty": "easy",
        "question": "Which iconic television comedy series chronicles the lives of Ross, Rachel, Monica, Chandler, Joey, and Phoebe in New York City?",
        "options": [
          "Seinfeld",
          "Friends",
          "How I Met Your Mother",
          "The Big Bang Theory"
        ],
        "correctIndex": 1,
        "explanation": "Friends aired for 10 seasons from 1994 to 2004, becoming one of the most widely watched sitcoms in television history."
      },
      {
        "id": "ent_easy_11",
        "category": "entertainment",
        "difficulty": "easy",
        "question": "What is the name of the fictional British Secret Intelligence Service agent famously known by the code number 007?",
        "options": [
          "Ethan Hunt",
          "Jason Bourne",
          "James Bond",
          "Jack Ryan"
        ],
        "correctIndex": 2,
        "explanation": "Created by author Ian Fleming in 1953, James Bond (Agent 007) is the protagonist of the longest-running continuous film franchise."
      },
      {
        "id": "ent_easy_12",
        "category": "entertainment",
        "difficulty": "easy",
        "question": "Which legendary British rock band released the 1975 masterwork 'Bohemian Rhapsody', fronted by lead singer Freddie Mercury?",
        "options": [
          "The Rolling Stones",
          "Queen",
          "Led Zeppelin",
          "The Who"
        ],
        "correctIndex": 1,
        "explanation": "Queen released 'Bohemian Rhapsody' on their 1975 album 'A Night at the Opera', written by Freddie Mercury."
      },
      {
        "id": "ent_easy_13",
        "category": "entertainment",
        "difficulty": "easy",
        "question": "Which Marvel superhero acquires superhuman agility and wall-crawling abilities after being bitten by a radioactive spider?",
        "options": [
          "Daredevil",
          "Spider-Man (Peter Parker)",
          "Ant-Man",
          "Wolverine"
        ],
        "correctIndex": 1,
        "explanation": "Created by Stan Lee and Steve Ditko in 1962, high school student Peter Parker becomes Spider-Man after the fateful spider bite."
      },
      {
        "id": "ent_easy_14",
        "category": "entertainment",
        "difficulty": "easy",
        "question": "In the Star Wars saga, which diminutive, green Jedi Master trained Luke Skywalker on the swamp planet Dagobah?",
        "options": [
          "Obi-Wan Kenobi",
          "Mace Windu",
          "Yoda",
          "Qui-Gon Jinn"
        ],
        "correctIndex": 2,
        "explanation": "Grand Master Yoda instructs Luke Skywalker in the ways of the Force in Star Wars: Episode V - The Empire Strikes Back."
      },
      {
        "id": "ent_easy_15",
        "category": "entertainment",
        "difficulty": "easy",
        "question": "What is the famous nickname of the statuette presented annually by the Academy of Motion Picture Arts and Sciences?",
        "options": [
          "The Emmy",
          "The Grammy",
          "The Oscar",
          "The Tony"
        ],
        "correctIndex": 2,
        "explanation": "The Academy Award of Merit statuette is internationally known by its affectionate nickname, the 'Oscar'."
      }
    ],
    "medium": [
      {
        "id": "ent_med_01",
        "category": "entertainment",
        "difficulty": "medium",
        "question": "Which acclaimed director directed cinematic blockbusters including 'Jaws', 'E.T. the Extra-Terrestrial', and 'Jurassic Park'?",
        "options": [
          "George Lucas",
          "Steven Spielberg",
          "James Cameron",
          "Francis Ford Coppola"
        ],
        "correctIndex": 1,
        "explanation": "Steven Spielberg is among the most commercially and critically successful filmmakers in cinematic history."
      },
      {
        "id": "ent_med_02",
        "category": "entertainment",
        "difficulty": "medium",
        "question": "Which English rock group recorded and released their landmark final studio album 'Abbey Road' in 1969?",
        "options": [
          "The Beatles",
          "Pink Floyd",
          "The Kinks",
          "Fleetwood Mac"
        ],
        "correctIndex": 0,
        "explanation": "The Beatles released Abbey Road in September 1969, featuring its iconic album cover showing the band crossing the zebra crossing."
      },
      {
        "id": "ent_med_03",
        "category": "entertainment",
        "difficulty": "medium",
        "question": "Which German composer continued to create groundbreaking musical masterpieces, including his Ninth Symphony, after losing his hearing?",
        "options": [
          "Johann Sebastian Bach",
          "Ludwig van Beethoven",
          "Wolfgang Amadeus Mozart",
          "Johannes Brahms"
        ],
        "correctIndex": 1,
        "explanation": "Ludwig van Beethoven composed some of his greatest works, including the iconic Ode to Joy (Symphony No. 9), while completely deaf."
      },
      {
        "id": "ent_med_04",
        "category": "entertainment",
        "difficulty": "medium",
        "question": "Which animated Disney feature film was the first in motion picture history to receive an Academy Award nomination for Best Picture?",
        "options": [
          "Snow White and the Seven Dwarfs",
          "Beauty and the Beast (1991)",
          "The Lion King",
          "Aladdin"
        ],
        "correctIndex": 1,
        "explanation": "Beauty and the Beast (1991) made cinema history as the first animated film ever nominated for the Best Picture Oscar."
      },
      {
        "id": "ent_med_05",
        "category": "entertainment",
        "difficulty": "medium",
        "question": "Which actress portrayed Katniss Everdeen in the blockbuster cinematic adaptations of Suzanne Collins' 'The Hunger Games' series?",
        "options": [
          "Emma Stone",
          "Jennifer Lawrence",
          "Kristen Stewart",
          "Shailene Woodley"
        ],
        "correctIndex": 1,
        "explanation": "Jennifer Lawrence received international acclaim for her role as Katniss Everdeen, the tribute from District 12."
      },
      {
        "id": "ent_med_06",
        "category": "entertainment",
        "difficulty": "medium",
        "question": "In Western music theory, how many chromatic semitones (half-steps) are contained within a single musical octave?",
        "options": [
          "7",
          "8",
          "12",
          "14"
        ],
        "correctIndex": 2,
        "explanation": "An octave comprises 12 equal-tempered semitones (e.g., C, C#, D, D#, E, F, F#, G, G#, A, A#, B)."
      },
      {
        "id": "ent_med_07",
        "category": "entertainment",
        "difficulty": "medium",
        "question": "Which epic HBO television drama series dramatizes dynastic struggles for the Iron Throne based on novels by George R.R. Martin?",
        "options": [
          "The Witcher",
          "Game of Thrones",
          "Vikings",
          "The Wheel of Time"
        ],
        "correctIndex": 1,
        "explanation": "Game of Thrones adapted Martin's 'A Song of Ice and Fire' fantasy saga, running for eight acclaimed seasons from 2011 to 2019."
      },
      {
        "id": "ent_med_08",
        "category": "entertainment",
        "difficulty": "medium",
        "question": "Which 1997 James Cameron epic romance and disaster film tied the record for the most Academy Awards won by a single film (11 Oscars)?",
        "options": [
          "Titanic",
          "Avatar",
          "Gladiator",
          "Braveheart"
        ],
        "correctIndex": 0,
        "explanation": "Titanic starring Leonardo DiCaprio and Kate Winslet won 11 Oscars, tying Ben-Hur (1959) and later The Lord of the Rings: The Return of the King (2003)."
      },
      {
        "id": "ent_med_09",
        "category": "entertainment",
        "difficulty": "medium",
        "question": "Who authored the foundational 1818 Gothic science fiction novel 'Frankenstein; or, The Modern Prometheus' at age 19?",
        "options": [
          "Jane Austen",
          "Mary Shelley",
          "Charlotte Brontë",
          "Emily Dickinson"
        ],
        "correctIndex": 1,
        "explanation": "English author Mary Shelley wrote Frankenstein in 1816–1817 during a rainy summer in Switzerland with Lord Byron and Percy Bysshe Shelley."
      },
      {
        "id": "ent_med_10",
        "category": "entertainment",
        "difficulty": "medium",
        "question": "In which fictional small town in Indiana is the hit Netflix sci-fi series 'Stranger Things' primarily set?",
        "options": [
          "Sunnydale",
          "Riverdale",
          "Hawkins",
          "Twin Peaks"
        ],
        "correctIndex": 2,
        "explanation": "Stranger Things takes place in the 1980s in the fictional town of Hawkins, Indiana, where secret laboratory experiments open a portal to the Upside Down."
      },
      {
        "id": "ent_med_11",
        "category": "entertainment",
        "difficulty": "medium",
        "question": "Which global pop star broke all-time concert tour records with the worldwide stadium phenomenon 'The Eras Tour'?",
        "options": [
          "Beyoncé",
          "Taylor Swift",
          "Adele",
          "Billie Eilish"
        ],
        "correctIndex": 1,
        "explanation": "Taylor Swift's 'The Eras Tour' became the highest-grossing concert tour of all time, celebrating her entire 10-album musical discography."
      },
      {
        "id": "ent_med_12",
        "category": "entertainment",
        "difficulty": "medium",
        "question": "Which classic Nintendo video game series follows the courageous hero Link as he embarks on quests to save the kingdom of Hyrule?",
        "options": [
          "Super Mario",
          "The Legend of Zelda",
          "Metroid",
          "Fire Emblem"
        ],
        "correctIndex": 1,
        "explanation": "Created by Shigeru Miyamoto and Takashi Tezuka in 1986, The Legend of Zelda is one of the most influential franchises in gaming history."
      },
      {
        "id": "ent_med_13",
        "category": "entertainment",
        "difficulty": "medium",
        "question": "Which visionary filmmaker directed the mind-bending sci-fi films 'Inception', 'Interstellar', and the biographical drama 'Oppenheimer'?",
        "options": [
          "Denis Villeneuve",
          "Christopher Nolan",
          "David Fincher",
          "Guillermo del Toro"
        ],
        "correctIndex": 1,
        "explanation": "Christopher Nolan is celebrated for nonlinear storytelling, practical effects, and complex themes, winning Best Director for Oppenheimer."
      },
      {
        "id": "ent_med_14",
        "category": "entertainment",
        "difficulty": "medium",
        "question": "In the animated Pixar adventure 'Finding Nemo', what specific species of marine fish is young Nemo?",
        "options": [
          "Blue tang",
          "Angelfish",
          "Ocellaris clownfish",
          "Moorish idol"
        ],
        "correctIndex": 2,
        "explanation": "Nemo and his father Marlin are clownfish (anemonefish), dwelling in a sea anemone on the Great Barrier Reef."
      },
      {
        "id": "ent_med_15",
        "category": "entertainment",
        "difficulty": "medium",
        "question": "Which musical instrument belongs to the woodwind family despite traditionally being fabricated out of brass metal?",
        "options": [
          "Trumpet",
          "Saxophone",
          "French Horn",
          "Trombone"
        ],
        "correctIndex": 1,
        "explanation": "The saxophone is classified as a woodwind instrument because sound is produced by an oscillating wooden reed rather than vibrating lips against a cup mouthpiece."
      }
    ],
    "hard": [
      {
        "id": "ent_hard_01",
        "category": "entertainment",
        "difficulty": "hard",
        "question": "Which revolutionary 1941 film, co-written, directed by, and starring Orson Welles, pioneered deep-focus cinematography and nonlinear flashback structure?",
        "options": [
          "Casablanca",
          "Citizen Kane",
          "The Third Man",
          "Sunset Boulevard"
        ],
        "correctIndex": 1,
        "explanation": "Citizen Kane revolutionized cinema through cinematographer Gregg Toland's deep focus, innovative audio design, and innovative non-linear narrative."
      },
      {
        "id": "ent_hard_02",
        "category": "entertainment",
        "difficulty": "hard",
        "question": "Which Irish avant-garde dramatist wrote the seminal modernist Theatre of the Absurd play 'Waiting for Godot' in 1953?",
        "options": [
          "James Joyce",
          "Samuel Beckett",
          "George Bernard Shaw",
          "Harold Pinter"
        ],
        "correctIndex": 1,
        "explanation": "Nobel laureate Samuel Beckett's Waiting for Godot explores existential themes as two tramps, Vladimir and Estragon, await someone who never arrives."
      },
      {
        "id": "ent_hard_03",
        "category": "entertainment",
        "difficulty": "hard",
        "question": "Which South Korean satirical thriller directed by Bong Joon-ho became the first non-English-language film to win the Academy Award for Best Picture in 2020?",
        "options": [
          "Roma",
          "The Handmaiden",
          "Parasite (Gisaengchung)",
          "Drive My Car"
        ],
        "correctIndex": 2,
        "explanation": "Parasite won four Oscars in 2020: Best Picture, Best Director, Best Original Screenplay, and Best International Feature Film."
      },
      {
        "id": "ent_hard_04",
        "category": "entertainment",
        "difficulty": "hard",
        "question": "Which Baroque Italian composer wrote the group of four virtuosic violin concertos known worldwide as 'The Four Seasons' (Le quattro stagioni)?",
        "options": [
          "Arcangelo Corelli",
          "Antonio Vivaldi",
          "Claudio Monteverdi",
          "Domenico Scarlatti"
        ],
        "correctIndex": 1,
        "explanation": "Antonio Vivaldi composed The Four Seasons circa 1720, giving musical expression to the seasons of Spring, Summer, Autumn, and Winter."
      },
      {
        "id": "ent_hard_05",
        "category": "entertainment",
        "difficulty": "hard",
        "question": "Which seminal 1982 cyberpunk sci-fi movie directed by Ridley Scott was loosely adapted from Philip K. Dick's novel 'Do Androids Dream of Electric Sheep?'?",
        "options": [
          "Total Recall",
          "Blade Runner",
          "Dark City",
          "The Matrix"
        ],
        "correctIndex": 1,
        "explanation": "Blade Runner stars Harrison Ford as Rick Deckard, a blade runner hunting rogue genetically engineered replicants in a futuristic Los Angeles."
      },
      {
        "id": "ent_hard_06",
        "category": "entertainment",
        "difficulty": "hard",
        "question": "Who is the legendary American composer who became the first individual in entertainment history to win an Emmy, Grammy, Oscar, Tony (EGOT), and a Pulitzer Prize (PEGOT)?",
        "options": [
          "Leonard Bernstein",
          "Richard Rodgers",
          "Stephen Sondheim",
          "Marvin Hamlisch"
        ],
        "correctIndex": 1,
        "explanation": "Richard Rodgers (of Rodgers and Hammerstein) won all five major awards, creating timeless musical theatre landmarks like 'Oklahoma!' and 'The Sound of Music'."
      },
      {
        "id": "ent_hard_07",
        "category": "entertainment",
        "difficulty": "hard",
        "question": "Which maestro of Italian cinema directed the autobiographical, dreamlike surrealist masterpiece '8½' (Otto e Mezzo) in 1963?",
        "options": [
          "Michelangelo Antonioni",
          "Federico Fellini",
          "Luchino Visconti",
          "Vittorio De Sica"
        ],
        "correctIndex": 1,
        "explanation": "Federico Fellini's 8½ depicts a famous film director suffering from creative block, winning the Academy Award for Best Foreign Language Film."
      },
      {
        "id": "ent_hard_08",
        "category": "entertainment",
        "difficulty": "hard",
        "question": "In classical ancient Greek theatre, which master playwright authored the legendary tragic masterpiece 'Oedipus Rex' (Oedipus the King)?",
        "options": [
          "Aeschylus",
          "Euripides",
          "Sophocles",
          "Aristophanes"
        ],
        "correctIndex": 2,
        "explanation": "Sophocles' tragedy Oedipus Rex is regarded by Aristotle in 'Poetics' as the supreme exemplar of Greek dramatic tragedy."
      },
      {
        "id": "ent_hard_09",
        "category": "entertainment",
        "difficulty": "hard",
        "question": "Which legendary Japanese filmmaker co-founded Studio Ghibli and directed animated cinematic milestones like 'Spirited Away' and 'My Neighbor Totoro'?",
        "options": [
          "Isao Takahata",
          "Hayao Miyazaki",
          "Satoshi Kon",
          "Makoto Shinkai"
        ],
        "correctIndex": 1,
        "explanation": "Hayao Miyazaki is universally revered for his animated masterpieces; 'Spirited Away' (2001) won the Oscar for Best Animated Feature."
      },
      {
        "id": "ent_hard_10",
        "category": "entertainment",
        "difficulty": "hard",
        "question": "Which grand European musical era spanning approximately 1600 to 1750 is characterized by counterpoint, ornamentation, and masters such as Bach and Handel?",
        "options": [
          "Renaissance Era",
          "Baroque Era",
          "Classical Era",
          "Romantic Era"
        ],
        "correctIndex": 1,
        "explanation": "The Baroque period in Western classical music introduced opera, the concerto, and complex fugal counterpoint, concluding with Bach's death in 1750."
      },
      {
        "id": "ent_hard_11",
        "category": "entertainment",
        "difficulty": "hard",
        "question": "Which Russian literary giant wrote the sweeping, philosophical 19th-century epic novel 'War and Peace'?",
        "options": [
          "Fyodor Dostoevsky",
          "Leo Tolstoy",
          "Anton Chekhov",
          "Ivan Turgenev"
        ],
        "correctIndex": 1,
        "explanation": "Count Leo Tolstoy published War and Peace in 1869, chronicling French invasion of Russia and its impact on five aristocratic families."
      },
      {
        "id": "ent_hard_12",
        "category": "entertainment",
        "difficulty": "hard",
        "question": "Which silent aviation drama won the first-ever Academy Award for Outstanding Picture at the inaugural Oscars banquet in 1929?",
        "options": [
          "Sunrise",
          "The Jazz Singer",
          "Wings",
          "Metropolis"
        ],
        "correctIndex": 2,
        "explanation": "Wings (1927), directed by William A. Wellman, was a WWI silent epic that won the very first Best Picture Academy Award."
      },
      {
        "id": "ent_hard_13",
        "category": "entertainment",
        "difficulty": "hard",
        "question": "In classical musical harmony, which dissonant interval of three whole tones was historically dubbed 'diabolus in musica' (the devil in music)?",
        "options": [
          "Major third",
          "Perfect fifth",
          "Tritone (augmented fourth / diminished fifth)",
          "Minor seventh"
        ],
        "correctIndex": 2,
        "explanation": "The tritone spans exactly three adjacent whole steps, creating an unstable dissonance that requires resolution in tonal harmony."
      },
      {
        "id": "ent_hard_14",
        "category": "entertainment",
        "difficulty": "hard",
        "question": "Which 1960 French New Wave cinematic breakthrough was directed by Jean-Luc Godard, starring Jean-Paul Belmondo and Jean Seberg?",
        "options": [
          "The 400 Blows",
          "Breathless (À bout de souffle)",
          "Jules and Jim",
          "Hiroshima mon amour"
        ],
        "correctIndex": 1,
        "explanation": "Godard's Breathless broke traditional Hollywood continuity rules with revolutionary jump cuts, handheld camerawork, and natural lighting."
      },
      {
        "id": "ent_hard_15",
        "category": "entertainment",
        "difficulty": "hard",
        "question": "Which Austrian musical genius composed the opera 'The Marriage of Figaro', the 'Requiem' in D minor, and Symphony No. 40 during the Classical era?",
        "options": [
          "Franz Schubert",
          "Wolfgang Amadeus Mozart",
          "Joseph Haydn",
          "Franz Liszt"
        ],
        "correctIndex": 1,
        "explanation": "Wolfgang Amadeus Mozart was a prolific child prodigy who composed over 600 enduring masterworks before passing away at age 35."
      }
    ]
  }
};

// Category Display Names & Aliases
const CATEGORY_NAMES = {
  technology: "Technology",
  academics: "Academics",
  general: "General Knowledge",
  competitive: "Competitive Exams",
  sports: "Sports",
  entertainment: "Entertainment",
  // Backwards compatibility aliases:
  programming: "Technology",
  science: "Academics",
  math: "Competitive Exams"
};

const CATEGORY_MAP = {
  technology: "technology",
  academics: "academics",
  general: "general",
  competitive: "competitive",
  sports: "sports",
  entertainment: "entertainment",
  programming: "technology",
  science: "academics",
  math: "competitive"
};

const appState = {
  currentView: "viewHome", // 'viewHome' | 'viewSetup' | 'viewQuiz' | 'viewResults'
  quizConfig: {
    category: "technology",
    difficulty: "easy",
    mode: "learning", // 'learning' | 'exam'
    count: 10
  },
  activeQuiz: {
    questions: [],
    currentIndex: 0,
    userAnswers: [], // { questionId, questionText, options, selectedIndex, correctIndex, isCorrect, explanation }
    startTime: null,
    endTime: null,
    timerInterval: null,
    timeRemainingSeconds: 30,
    isAnswered: false
  },
  reviewFilter: "all" // 'all' | 'incorrect'
};

// ==========================================================================
// 3. Question Retrieval & Shuffling Utilities
// ==========================================================================
/**
 * Retrieves questions matching the specified category and difficulty tier.
 * Supports tiered object format or flat array for future extensibility.
 */
function getQuestions(category, difficulty) {
  let categories = [];
  if (!category || category === "all") {
    categories = Object.keys(QUESTION_BANK);
  } else {
    const mapped = CATEGORY_MAP[category] || category;
    categories = QUESTION_BANK[mapped] ? [mapped] : [];
  }

  let results = [];
  for (const cat of categories) {
    const catObj = QUESTION_BANK[cat];
    if (!catObj) continue;
    if (Array.isArray(catObj)) {
      if (!difficulty || difficulty === "all") {
        results.push(...catObj);
      } else {
        results.push(...catObj.filter((q) => q.difficulty === difficulty));
      }
    } else {
      if (!difficulty || difficulty === "all") {
        ["easy", "medium", "hard"].forEach(d => {
          if (catObj[d]) results.push(...catObj[d]);
        });
      } else if (catObj[difficulty]) {
        results.push(...catObj[difficulty]);
      }
    }
  }

  return results;
}

/**
 * Standard Fisher-Yates array shuffling without modifying the source array.
 */
function shuffleArray(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Safely escapes special HTML characters to prevent DOM parsing anomalies and malformed tags.
 */
function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Prepares questions for a quiz session:
 * 1. Shuffles question order to avoid predictability.
 * 2. Caps at available pool size if requested count exceeds available questions.
 * 3. Shuffles option order for each question while recalculating correctIndex.
 */
function selectQuizQuestions(category, difficulty, requestedCount) {
  const pool = getQuestions(category, difficulty);
  if (!pool || pool.length === 0) {
    console.warn(`No questions found for category: ${category}, difficulty: ${difficulty}`);
    return [];
  }

  // Shuffle question pool
  const shuffledPool = shuffleArray(pool);
  const actualCount = Math.min(requestedCount, shuffledPool.length);
  const chosen = shuffledPool.slice(0, actualCount);

  // Clone each question and shuffle its options while recalculating correctIndex
  return chosen.map((q) => {
    const originalCorrectText = q.options[q.correctIndex !== undefined ? q.correctIndex : q.correctAnswer];
    const shuffledOptions = shuffleArray(q.options);
    const newCorrectIndex = shuffledOptions.indexOf(originalCorrectText);

    return {
      id: q.id,
      category: q.category,
      difficulty: q.difficulty,
      question: q.question,
      options: shuffledOptions,
      correctIndex: newCorrectIndex,
      correctAnswer: newCorrectIndex,
      explanation: q.explanation
    };
  });
}

// ==========================================================================
// 4. LocalStorage Helpers with Safe Fallbacks
// ==========================================================================
const STORAGE_KEYS = {
  ATTEMPTS: "quizora_recent_attempts",
  BEST_SCORES: "quizora_best_scores"
};

function getStoredAttempts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Sanitize items
    return parsed.filter((att) => att && typeof att === "object" && att.category && typeof att.scorePercentage === "number");
  } catch (err) {
    console.warn("Could not read attempts from localStorage:", err);
    return [];
  }
}

function saveAttempt(attempt) {
  try {
    const attempts = getStoredAttempts();
    attempts.unshift(attempt); // Add newest to top
    // Retain most recent 20 attempts
    const trimmed = attempts.slice(0, 20);
    localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(trimmed));
  } catch (err) {
    console.warn("Could not save attempt:", err);
  }
}

function clearStoredAttempts() {
  try {
    localStorage.removeItem(STORAGE_KEYS.ATTEMPTS);
    localStorage.removeItem(STORAGE_KEYS.BEST_SCORES);
  } catch (err) {
    console.warn("Could not clear storage:", err);
  }
}

function getStoredBestScores() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BEST_SCORES);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    return parsed;
  } catch (err) {
    console.warn("Could not read best scores:", err);
    return {};
  }
}

function updateBestScore(category, percentage) {
  try {
    const scores = getStoredBestScores();
    const currentBest = scores[category] || 0;
    if (percentage > currentBest) {
      scores[category] = percentage;
      localStorage.setItem(STORAGE_KEYS.BEST_SCORES, JSON.stringify(scores));
    }
  } catch (err) {
    console.warn("Could not update best score:", err);
  }
}

// ==========================================================================
// 5. View Navigation Controller
// ==========================================================================
function switchView(targetViewId) {
  // If navigating away from active quiz, clear any running exam timer
  if (targetViewId !== "viewQuiz" && appState.activeQuiz && appState.activeQuiz.timerInterval) {
    clearInterval(appState.activeQuiz.timerInterval);
    appState.activeQuiz.timerInterval = null;
  }

  // Update view containers
  const viewSections = document.querySelectorAll(".view-section");
  viewSections.forEach((section) => {
    section.classList.remove("active");
  });

  const activeSection = document.getElementById(targetViewId);
  if (activeSection) {
    activeSection.classList.add("active");
    appState.currentView = targetViewId;
  }

  // Handle auth screen states
  const isAuthScreen = targetViewId === "viewLogin" || targetViewId === "viewRegister" || targetViewId === "viewAuth";
  const bottomNavBar = document.getElementById("bottomNavBar");
  if (bottomNavBar) {
    bottomNavBar.style.display = isAuthScreen ? "none" : "flex";
  }

  // Update desktop header nav buttons
  const navHomeBtn = document.getElementById("navHomeBtn");
  const navNewQuizBtn = document.getElementById("navNewQuizBtn");

  if (navHomeBtn) {
    navHomeBtn.classList.toggle("active", targetViewId === "viewHome");
  }
  if (navNewQuizBtn) {
    navNewQuizBtn.classList.toggle("active", targetViewId === "viewPlay" || targetViewId === "viewSetup");
  }
  const navAuthBtn = document.getElementById("navAuthBtn");
  if (navAuthBtn) {
    navAuthBtn.classList.toggle("active", isAuthScreen);
  }

  // Update mobile bottom nav buttons (Rankings, Discover, Play, Rewards, Profile)
  const bottomNavRankings = document.getElementById("bottomNavRankings");
  const bottomNavDiscover = document.getElementById("bottomNavDiscover");
  const bottomNavPlay = document.getElementById("bottomNavPlay");
  const bottomNavRewards = document.getElementById("bottomNavRewards");
  const bottomNavProfile = document.getElementById("bottomNavProfile");

  if (bottomNavRankings) bottomNavRankings.classList.toggle("active", targetViewId === "viewLeaderboard");
  if (bottomNavDiscover) bottomNavDiscover.classList.toggle("active", targetViewId === "viewDiscover");
  if (bottomNavPlay) bottomNavPlay.classList.toggle("active", targetViewId === "viewPlay" || targetViewId === "viewSetup" || targetViewId === "viewComputerMatch" || targetViewId === "viewFriendMatch" || targetViewId === "viewMultiplayer");
  if (bottomNavRewards) bottomNavRewards.classList.toggle("active", targetViewId === "viewRewards");
  if (bottomNavProfile) bottomNavProfile.classList.toggle("active", targetViewId === "viewProfile");

  // Trigger view-specific rendering
  if (targetViewId === "viewHome") {
    renderDashboardStats();
    renderDailyGrowthTip();
    syncProfileUI();
  } else if (isAuthScreen) {
    syncAuthUI();
  } else if (targetViewId === "viewLeaderboard") {
    renderLeaderboard(currentLeaderboardTimeframe);
    renderDailyGrowthTip();
    syncProfileUI();
  } else if (targetViewId === "viewDiscover") {
    renderDiscoverScreen();
  } else if (targetViewId === "viewRewards") {
    syncProfileUI();
    renderRewardsBadges();
  } else if (targetViewId === "viewProfile") {
    syncProfileUI();
    if (typeof renderAvatarPicker === "function") renderAvatarPicker();
  } else if (targetViewId === "viewSettings") {
    syncProfileUI();
  } else if (targetViewId === "viewSetup") {
    syncSetupFormWithState();
  } else if (targetViewId === "viewReview") {
    renderDedicatedReviewList(dedicatedReviewFilter);
  } else if (targetViewId === "viewThemeStudio") {
    renderThemeStudio();
  } else if (targetViewId === "viewFontSettings") {
    renderFontSettings();
  } else if (targetViewId === "viewAvatarStudio") {
    syncStudioPreview();
    renderStudioShelves();
  }

  // Scroll to top safely
  if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// ==========================================================================
// 6. Dashboard View Logic & Dynamic Features
// ==========================================================================
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

function updateGreeting() {
  const greetingEl = document.getElementById("welcomeGreeting");
  if (greetingEl) {
    greetingEl.textContent = getGreeting();
  }
}

function renderDashboardStats() {
  updateGreeting();
  renderHeroStatsRibbon();
  renderRecentAttempts();
  renderBestScores();
}

function renderHeroStatsRibbon() {
  const totalEl = document.getElementById("dashTotalQuizzes");
  const avgEl = document.getElementById("dashAvgAccuracy");
  const bestEl = document.getElementById("dashBestScore");

  const attempts = getStoredAttempts();
  const bestScores = getStoredBestScores();

  if (totalEl) {
    totalEl.textContent = attempts.length;
  }

  if (avgEl) {
    if (attempts.length === 0) {
      avgEl.textContent = "0%";
    } else {
      const sum = attempts.reduce((acc, curr) => acc + (curr.scorePercentage || 0), 0);
      const avg = Math.round(sum / attempts.length);
      avgEl.textContent = `${avg}%`;
    }
  }

  if (bestEl) {
    const scores = Object.values(bestScores);
    if (scores.length === 0) {
      bestEl.textContent = "--";
    } else {
      const max = Math.max(...scores);
      bestEl.textContent = `${max}%`;
    }
  }
}

function startDailySparkQuiz() {
  const categories = ["technology", "academics", "general", "competitive", "sports", "entertainment"];
  const dayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % categories.length;
  const chosenCategory = categories[dayIndex];

  appState.quizConfig.category = chosenCategory;
  appState.quizConfig.difficulty = "medium";
  appState.quizConfig.mode = "learning";
  appState.quizConfig.count = 5;

  startQuiz();
}

function renderRecentAttempts() {
  const container = document.getElementById("recentAttemptsContainer");
  if (!container) return;

  const attempts = getStoredAttempts();

  if (!attempts || attempts.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon-wrap" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        </div>
        <h4 class="empty-title">No Quizzes Taken Yet</h4>
        <p class="empty-desc">Select any category above to test your skills and record your first attempt!</p>
      </div>
    `;
    return;
  }

  const listHtml = attempts.slice(0, 5).map((att) => {
    const categoryName = CATEGORY_NAMES[att.category] || att.category;
    const dateFormatted = new Date(att.date).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric"
    });
    return `
      <div class="attempt-row">
        <div class="attempt-info">
          <span class="attempt-subject">${categoryName}</span>
          <span class="attempt-meta">${att.difficulty.toUpperCase()} • ${att.mode === "learning" ? "Learning" : "Exam"} • ${dateFormatted}</span>
        </div>
        <div class="attempt-score ${att.scorePercentage >= 80 ? 'high-score' : ''}">${att.scorePercentage}%</div>
      </div>
    `;
  }).join("");

  container.innerHTML = `<div class="attempt-list">${listHtml}</div>`;
}

function renderBestScores() {
  const container = document.getElementById("bestScoresContainer");
  if (!container) return;

  const bestScores = getStoredBestScores();
  const categories = ["technology", "academics", "general", "competitive", "sports", "entertainment"];

  const hasAnyScore = categories.some((c) => bestScores[c] !== undefined);

  if (!hasAnyScore) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon-wrap" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
            <path d="M4 22h16"></path>
            <path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2.34"></path>
            <path d="M18 14.66V17c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2.34"></path>
            <path d="M6 2h12v7a6 6 0 0 1-12 0V2z"></path>
          </svg>
        </div>
        <h4 class="empty-title">Awaiting Scores</h4>
        <p class="empty-desc">Complete a quiz in each category to track your personal best scores here.</p>
      </div>
    `;
    return;
  }

  const chipsHtml = categories.map((catKey) => {
    const scoreVal = bestScores[catKey] !== undefined ? `${bestScores[catKey]}%` : "Not attempted";
    const hasScore = bestScores[catKey] !== undefined;
    return `
      <div class="score-chip ${hasScore ? 'has-score' : ''}">
        <span class="score-chip-label">${CATEGORY_NAMES[catKey]}</span>
        <span class="score-chip-val">${scoreVal}</span>
      </div>
    `;
  }).join("");

  container.innerHTML = `<div class="scores-grid">${chipsHtml}</div>`;
}

// ==========================================================================
// 7. Setup View Logic & Sidebar Sync
// ==========================================================================
function syncSetupFormWithState() {
  // Sync Category Radio
  const catRadios = document.querySelectorAll('input[name="setupCategory"]');
  catRadios.forEach((r) => {
    r.checked = r.value === appState.quizConfig.category;
  });

  // Sync Difficulty Radio
  const diffRadios = document.querySelectorAll('input[name="setupDifficulty"]');
  diffRadios.forEach((r) => {
    r.checked = r.value === appState.quizConfig.difficulty;
  });

  // Sync Mode Radio
  const modeRadios = document.querySelectorAll('input[name="setupMode"]');
  modeRadios.forEach((r) => {
    r.checked = r.value === appState.quizConfig.mode;
  });

  // Sync Count Radio
  const countRadios = document.querySelectorAll('input[name="setupCount"]');
  countRadios.forEach((r) => {
    r.checked = parseInt(r.value, 10) === appState.quizConfig.count;
  });

  updateSetupSidebarPreview();
}

function updateSetupSidebarPreview() {
  const { category, difficulty, mode, count } = appState.quizConfig;

  const categoryEl = document.getElementById("summaryCategoryText");
  const diffEl = document.getElementById("summaryDifficultyText");
  const modeEl = document.getElementById("summaryModeText");
  const countEl = document.getElementById("summaryCountText");
  const pacingEl = document.getElementById("summaryPacingText");

  if (categoryEl) categoryEl.textContent = CATEGORY_NAMES[category] || category;
  if (diffEl) diffEl.textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  if (modeEl) modeEl.textContent = mode === "learning" ? "Learning Mode" : "Exam Mode";
  if (countEl) countEl.textContent = `${count} Questions`;
  if (pacingEl) pacingEl.textContent = mode === "learning" ? "Self-paced (Untimed)" : `Timed (${count} min total • 60s/question)`;
}

// ==========================================================================
// 8. Active Quiz Controller
// ==========================================================================
function startQuiz() {
  const validCategories = ["technology", "academics", "general", "competitive", "sports", "entertainment"];
  const validDifficulties = ["easy", "medium", "hard"];
  const validModes = ["learning", "exam"];
  const validCounts = [5, 10];

  let { category, difficulty, mode, count } = appState.quizConfig;

  // Resolve legacy category aliases if present
  if (CATEGORY_MAP[category]) {
    category = CATEGORY_MAP[category];
  }

  // Provide sensible defaults if missing or invalid
  if (!validCategories.includes(category)) category = "technology";
  if (!validDifficulties.includes(difficulty)) difficulty = "easy";
  if (!validModes.includes(mode)) mode = "learning";
  if (!validCounts.includes(count)) count = 5;

  appState.quizConfig = { category, difficulty, mode, count };

  // Retrieve, shuffle, and prepare questions
  const selectedQuestions = selectQuizQuestions(category, difficulty, count);

  if (!selectedQuestions || selectedQuestions.length === 0) {
    alert("No questions match the selected configuration. Please select another difficulty or category.");
    return;
  }

  // Clear any running timer from a previous session before resetting active quiz
  if (appState.activeQuiz && appState.activeQuiz.timerInterval) {
    clearInterval(appState.activeQuiz.timerInterval);
    appState.activeQuiz.timerInterval = null;
  }

  // Setup active quiz state (60 seconds per question allocated for the quiz length)
  const examDurationSeconds = count * 60;
  appState.activeQuiz = {
    questions: selectedQuestions,
    currentIndex: 0,
    userAnswers: [],
    startTime: Date.now(),
    endTime: null,
    timerInterval: null,
    timeRemainingSeconds: examDurationSeconds,
    isAnswered: false,
    isFinished: false
  };

  // Setup UI tags
  const catTag = document.getElementById("quizCategoryTag");
  if (catTag) catTag.textContent = CATEGORY_NAMES[category] || category;

  const diffTag = document.getElementById("quizDiffTag");
  if (diffTag) diffTag.textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);

  const modeBadge = document.getElementById("quizModeTag");
  if (modeBadge) {
    modeBadge.textContent = mode === "learning" ? "Learning Mode" : "Exam Mode";
    modeBadge.className = mode === "learning" ? "badge badge-mode" : "badge badge-accent";
  }

  // Show/Hide Timer & Start Exam Countdown
  const timerWrap = document.getElementById("quizTimerWrap");
  if (timerWrap) {
    if (mode === "exam") {
      timerWrap.style.display = "inline-flex";
      startExamTimer();
    } else {
      timerWrap.style.display = "none";
    }
  }

  // Switch to quiz view
  switchView("viewQuiz");

  // Render first question
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const { questions, currentIndex, userAnswers } = appState.activeQuiz;
  const currentQ = questions[currentIndex];
  const total = questions.length;

  if (!currentQ) return;

  const isExamMode = appState.quizConfig.mode === "exam";
  appState.activeQuiz.isAnswered = false;

  // Question Card entrance animation
  const cardEl = document.getElementById("activeQuestionCard");
  if (cardEl) {
    cardEl.classList.remove("q-slide-in");
    void cardEl.offsetWidth; // Force reflow
    cardEl.classList.add("q-slide-in");
  }

  // Update question numbers & progress bar
  const stepText = document.getElementById("quizStepText");
  const percentText = document.getElementById("quizPercentText");
  const progressBar = document.getElementById("quizProgressBar");
  const numBadge = document.getElementById("questionNumBadge");

  const progressPercent = Math.round(((currentIndex + 1) / total) * 100);
  if (stepText) stepText.textContent = `Question ${currentIndex + 1} of ${total}`;
  if (percentText) percentText.textContent = `${progressPercent}% Completed`;
  if (progressBar) progressBar.style.width = `${progressPercent}%`;
  if (numBadge) numBadge.textContent = currentIndex < 9 ? `Question 0${currentIndex + 1}` : `Question ${currentIndex + 1}`;

  // Update question text
  const questionTextEl = document.getElementById("questionText");
  if (questionTextEl) questionTextEl.textContent = currentQ.question;

  // Next / Submit Button state
  const nextBtn = document.getElementById("quizNextBtn");
  const nextBtnText = document.getElementById("nextBtnText");

  if (nextBtnText) {
    if (currentIndex === total - 1) {
      nextBtnText.textContent = isExamMode ? "Submit Exam" : "Finish & See Results";
    } else {
      nextBtnText.textContent = "Next Question";
    }
  }

  // In Exam Mode, next button is always enabled to allow freely skipping and moving
  if (nextBtn) {
    nextBtn.disabled = !isExamMode;
  }

  // Reset footer hint
  const footerHint = document.getElementById("footerHint");
  if (footerHint) {
    footerHint.textContent = isExamMode 
      ? "Select your answer or navigate freely. Confirm submission on the final question."
      : "Select an answer above to see instant feedback and explanation.";
  }

  // Reset explanation box
  const explanationBox = document.getElementById("explanationBox");
  if (explanationBox) {
    explanationBox.style.display = "none";
    explanationBox.className = "explanation-box";
  }

  // Previous Button visibility
  const prevBtn = document.getElementById("quizPrevBtn");
  if (prevBtn) {
    prevBtn.style.visibility = currentIndex > 0 ? "visible" : "hidden";
  }

  // Render Options safely via DOM elements
  const optionsContainer = document.getElementById("optionsContainer");
  const letters = ["A", "B", "C", "D"];
  if (optionsContainer) {
    optionsContainer.innerHTML = "";

    currentQ.options.forEach((optText, index) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.dataset.index = index;
      btn.setAttribute("aria-label", `Option ${letters[index]}: ${optText}`);

      const keySpan = document.createElement("span");
      keySpan.className = "option-key";
      keySpan.textContent = letters[index];

      const labelSpan = document.createElement("span");
      labelSpan.className = "option-label";
      labelSpan.textContent = optText;

      btn.appendChild(keySpan);
      btn.appendChild(labelSpan);

      btn.addEventListener("click", () => {
        handleOptionSelect(index);
      });

      optionsContainer.appendChild(btn);
    });
  }

  // If question was previously visited or answered
  const existingAns = userAnswers[currentIndex];
  if (existingAns && optionsContainer) {
    if (isExamMode) {
      if (existingAns.selectedIndex >= 0) {
        const prevOptionBtn = optionsContainer.querySelector(`[data-index="${existingAns.selectedIndex}"]`);
        if (prevOptionBtn) {
          prevOptionBtn.classList.add("selected");
        }
      }
    } else {
      // In Learning Mode: if answered, lock answers and display rationale
      if (existingAns.selectedIndex >= 0) {
        appState.activeQuiz.isAnswered = true;
        if (nextBtn) nextBtn.disabled = false;

        const optionButtons = optionsContainer.querySelectorAll(".option-btn");
        optionButtons.forEach((btn, idx) => {
          btn.disabled = true;
          if (idx === currentQ.correctIndex) {
            btn.classList.add("correct");
          } else if (idx === existingAns.selectedIndex) {
            btn.classList.add("incorrect");
          }
        });

        // Restore explanation box
        if (explanationBox) {
          const explanationBadge = document.getElementById("explanationBadge");
          const explanationTitle = document.getElementById("explanationTitle");
          const explanationContent = document.getElementById("explanationContent");

          explanationBox.style.display = "block";
          if (existingAns.isCorrect) {
            explanationBox.className = "explanation-box correct";
            if (explanationBadge) explanationBadge.textContent = "Correct! ✨";
            if (explanationTitle) explanationTitle.textContent = "Concept Mastered";
          } else {
            explanationBox.className = "explanation-box incorrect";
            if (explanationBadge) explanationBadge.textContent = "Review Concept 💡";
            if (explanationTitle) explanationTitle.textContent = "Educational Rationale";
          }
          if (explanationContent) explanationContent.textContent = currentQ.explanation;
        }

        if (footerHint) {
          footerHint.textContent = "Review the rationale, then click Next Question.";
        }
      }
    }
  }

  // Update exam timer display if in exam mode
  if (isExamMode) {
    updateTimerDisplay();
  }
}

function handleOptionSelect(selectedIndex) {
  const { questions, currentIndex } = appState.activeQuiz;
  const currentQ = questions[currentIndex];
  if (!currentQ) return;

  const isExamMode = appState.quizConfig.mode === "exam";
  const isCorrect = selectedIndex === currentQ.correctIndex;
  const optionButtons = document.querySelectorAll(".option-btn");

  if (isExamMode) {
    const existing = appState.activeQuiz.userAnswers[currentIndex];
    const isCurrentlySelected = existing && existing.selectedIndex === selectedIndex;

    // Remove existing selection highlights
    optionButtons.forEach((btn) => btn.classList.remove("selected"));

    if (isCurrentlySelected) {
      // Toggle off selection if clicked again
      appState.activeQuiz.userAnswers[currentIndex] = {
        questionId: currentQ.id,
        questionText: currentQ.question,
        options: currentQ.options,
        selectedIndex: -1,
        correctIndex: currentQ.correctIndex,
        isCorrect: false,
        explanation: currentQ.explanation
      };
      const footerHint = document.getElementById("footerHint");
      if (footerHint) footerHint.textContent = "Selection removed. Choose an answer or navigate forward.";
    } else {
      // Select chosen option
      const chosenBtn = optionButtons[selectedIndex];
      if (chosenBtn) {
        chosenBtn.classList.add("selected");
        chosenBtn.classList.add("anim-pop");
        setTimeout(() => chosenBtn.classList.remove("anim-pop"), 200);
      }

      appState.activeQuiz.userAnswers[currentIndex] = {
        questionId: currentQ.id,
        questionText: currentQ.question,
        options: currentQ.options,
        selectedIndex: selectedIndex,
        correctIndex: currentQ.correctIndex,
        isCorrect: isCorrect,
        explanation: currentQ.explanation
      };

      const footerHint = document.getElementById("footerHint");
      if (footerHint) footerHint.textContent = "Answer recorded. You can change your choice anytime before submission.";
    }

    const nextBtn = document.getElementById("quizNextBtn");
    if (nextBtn) nextBtn.disabled = false;
    return;
  }

  // In Learning Mode: Immediate feedback & locked answers (prevent changing after confirmation)
  if (appState.activeQuiz.isAnswered) return;
  appState.activeQuiz.isAnswered = true;

  optionButtons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === currentQ.correctIndex) {
      btn.classList.add("correct");
    } else if (idx === selectedIndex) {
      btn.classList.add("incorrect");
    }
  });

  const explanationBox = document.getElementById("explanationBox");
  const explanationBadge = document.getElementById("explanationBadge");
  const explanationTitle = document.getElementById("explanationTitle");
  const explanationContent = document.getElementById("explanationContent");

  if (explanationBox) {
    explanationBox.style.display = "block";
    explanationBox.classList.add("anim-fade-down");
    if (isCorrect) {
      explanationBox.className = "explanation-box correct anim-fade-down";
      if (explanationBadge) explanationBadge.textContent = "Correct! ✨";
      if (explanationTitle) explanationTitle.textContent = "Concept Mastered";
    } else {
      explanationBox.className = "explanation-box incorrect anim-fade-down";
      if (explanationBadge) explanationBadge.textContent = "Review Concept 💡";
      if (explanationTitle) explanationTitle.textContent = "Educational Rationale";
    }
  }
  if (explanationContent) explanationContent.textContent = currentQ.explanation;

  const footerHint = document.getElementById("footerHint");
  if (footerHint) footerHint.textContent = "Review the rationale, then click Next Question.";

  appState.activeQuiz.userAnswers[currentIndex] = {
    questionId: currentQ.id,
    questionText: currentQ.question,
    options: currentQ.options,
    selectedIndex: selectedIndex,
    correctIndex: currentQ.correctIndex,
    isCorrect: isCorrect,
    explanation: currentQ.explanation
  };

  const nextBtn = document.getElementById("quizNextBtn");
  if (nextBtn) {
    nextBtn.disabled = false;
    if (typeof nextBtn.focus === "function") {
      nextBtn.focus();
    }
  }
}

function handleNextQuestion() {
  const { currentIndex, questions, userAnswers } = appState.activeQuiz;

  if (currentIndex < questions.length - 1) {
    appState.activeQuiz.currentIndex++;
    renderCurrentQuestion();
    return;
  }

  // We are on the final question
  if (appState.quizConfig.mode === "exam") {
    let unansweredCount = 0;
    for (let i = 0; i < questions.length; i++) {
      const ans = userAnswers[i];
      if (!ans || ans.selectedIndex === -1 || ans.selectedIndex === undefined) {
        unansweredCount++;
      }
    }

    if (unansweredCount > 0) {
      showUnansweredModal(unansweredCount);
      return;
    }
  }

  finishQuiz();
}

function showUnansweredModal(unansweredCount) {
  const modal = document.getElementById("unansweredModal");
  const desc = document.getElementById("unansweredModalDesc");

  if (desc) {
    desc.textContent = `You have ${unansweredCount} unanswered question${unansweredCount > 1 ? "s" : ""} remaining. Would you like to review your answers before submitting, or submit your exam now?`;
  }

  if (modal) {
    modal.style.display = "flex";
    const reviewBtn = document.getElementById("reviewUnansweredBtn");
    if (reviewBtn && typeof reviewBtn.focus === "function") {
      reviewBtn.focus();
    }
  } else {
    if (confirm(`You have ${unansweredCount} unanswered question(s). Are you sure you want to submit your exam now?`)) {
      finishQuiz();
    }
  }
}

function handlePrevQuestion() {
  if (appState.activeQuiz.currentIndex > 0) {
    appState.activeQuiz.currentIndex--;
    renderCurrentQuestion();
  }
}

function startExamTimer() {
  if (appState.activeQuiz.timerInterval) return;

  updateTimerDisplay();

  appState.activeQuiz.timerInterval = setInterval(() => {
    appState.activeQuiz.timeRemainingSeconds--;
    updateTimerDisplay();

    if (appState.activeQuiz.timeRemainingSeconds <= 0) {
      clearInterval(appState.activeQuiz.timerInterval);
      appState.activeQuiz.timerInterval = null;
      finishQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerText = document.getElementById("quizTimerText");
  const timerPill = document.getElementById("quizTimerWrap");
  if (!timerText || !timerPill) return;

  const seconds = Math.max(0, appState.activeQuiz.timeRemainingSeconds);
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  timerText.textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

  if (seconds <= 60) {
    timerPill.classList.add("urgent");
    timerPill.setAttribute("title", "Warning: Less than 1 minute remaining!");
  } else {
    timerPill.classList.remove("urgent");
    timerPill.setAttribute("title", "Time remaining in exam");
  }
}

// ==========================================================================
// 9. Results & Answer Review Logic (Upgraded 3D Mascot & Tiers)
// ==========================================================================

const SCORE_TIERS = {
  legendary: {
    key: "legendary",
    minPct: 90,
    maxPct: 100,
    name: "Legendary / Excellent",
    badgeLabel: "Legendary Tier",
    badgeIcon: "🏆",
    title: "Quiz Complete!",
    feedback: "Outstanding mastery! You achieved a legendary score with flawless conceptual precision! 🏆",
    mascotMood: "celebrating",
    speech: "CHAMPION MASTERY! 🏆",
    sound: "victory",
    confetti: true,
    bonusXp: 40
  },
  amazing: {
    key: "amazing",
    minPct: 75,
    maxPct: 89,
    name: "Amazing",
    badgeLabel: "Amazing Tier",
    badgeIcon: "⭐",
    title: "Quiz Complete!",
    feedback: "Spectacular performance! You demonstrated impressive knowledge and deep understanding! ⭐",
    mascotMood: "excited",
    speech: "SO CLOSE TO PERFECTION! ⭐",
    sound: "victory",
    confetti: true,
    bonusXp: 25
  },
  good: {
    key: "good",
    minPct: 50,
    maxPct: 74,
    name: "Good Job",
    badgeLabel: "Good Job Tier",
    badgeIcon: "📈",
    title: "Quiz Complete!",
    feedback: "Solid foundation! A targeted review of your missed questions will elevate you to the top tier! 📚",
    mascotMood: "encouraging",
    speech: "SOLID WORK! KEEP CLIMBING! 👍",
    sound: "correct",
    confetti: false,
    bonusXp: 15
  },
  practice: {
    key: "practice",
    minPct: 0,
    maxPct: 49,
    name: "Keep Learning",
    badgeLabel: "Keep Learning Tier",
    badgeIcon: "🌱",
    title: "Quiz Complete!",
    feedback: "Every champion starts with practice! Review the explanations below and tackle another challenge! 💪",
    mascotMood: "supportive",
    speech: "PRACTICE MAKES LEGENDS! 💪",
    sound: "click",
    confetti: false,
    bonusXp: 5
  }
};

/**
 * Calculates the exact performance tier from percentage and total questions.
 * Strictly partitions 0-49% (Keep Learning), 50-74% (Good Job), 75-89% (Amazing), 90-100% (Legendary).
 * Safely handles 0 questions, negative values, and non-numeric inputs.
 */
function calculateScoreTier(percentage, totalQuestions) {
  if (!totalQuestions || totalQuestions <= 0 || isNaN(percentage)) {
    return SCORE_TIERS.practice;
  }
  const safePct = Math.min(100, Math.max(0, Math.round(percentage)));
  if (safePct >= 90) return SCORE_TIERS.legendary;
  if (safePct >= 75) return SCORE_TIERS.amazing;
  if (safePct >= 50) return SCORE_TIERS.good;
  return SCORE_TIERS.practice;
}

/**
 * Renders the 3D-inspired Mascot and Trophy illustration.
 * Customizes expression and assets according to the player's active tier, avatar, and accessory.
 */
function renderMascotIllustration(tier, avatarEmoji, accessoryId) {
  const container = document.getElementById("resultsMascotContainer");
  if (!container) return;

  const profile = getPlayerProfile();
  const avatar = avatarEmoji || profile.avatar || "🦊";
  const accId = accessoryId || profile.equippedAccessory || "none";
  const accObj = STUDIO_ACCESSORIES.find(a => a.id === accId);
  const accIcon = (accObj && accObj.id !== "none") ? accObj.icon : "";

  // 3D Trophy / Milestone Asset according to Tier
  let assetSvg = "";
  if (tier.key === "legendary") {
    // 3D Golden Champion Trophy with specular shine and handles
    assetSvg = `
      <svg class="stage-3d-trophy-svg" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="goldCupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fffbeb"/>
            <stop offset="35%" stop-color="#fbbf24"/>
            <stop offset="70%" stop-color="#d97706"/>
            <stop offset="100%" stop-color="#78350f"/>
          </linearGradient>
          <linearGradient id="goldHandleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#f59e0b"/>
            <stop offset="100%" stop-color="#b45309"/>
          </linearGradient>
          <linearGradient id="pedestalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#334155"/>
            <stop offset="100%" stop-color="#0f172a"/>
          </linearGradient>
        </defs>
        <!-- Handles -->
        <path d="M 28 32 C 12 32 12 56 28 60" stroke="url(#goldHandleGrad)" stroke-width="4.5" stroke-linecap="round"/>
        <path d="M 72 32 C 88 32 88 56 72 60" stroke="url(#goldHandleGrad)" stroke-width="4.5" stroke-linecap="round"/>
        <!-- Pedestal Base -->
        <path d="M 34 82 L 66 82 L 62 72 L 38 72 Z" fill="url(#pedestalGrad)"/>
        <rect x="30" y="82" width="40" height="7" rx="2" fill="#1e293b"/>
        <!-- Stem -->
        <path d="M 45 62 L 55 62 L 53 72 L 47 72 Z" fill="url(#goldCupGrad)"/>
        <!-- Main Cup -->
        <path d="M 26 24 C 26 56 42 62 50 62 C 58 62 74 56 74 24 Z" fill="url(#goldCupGrad)"/>
        <!-- Cup Rim -->
        <ellipse cx="50" cy="24" rx="24" ry="5.5" fill="#fef3c7" stroke="#b45309" stroke-width="1"/>
        <!-- Star Emblem on Cup -->
        <polygon points="50,33 52.5,39 59,39.5 54,43.5 56,50 50,46 44,50 46,43.5 41,39.5 47.5,39" fill="#ffffff" opacity="0.95"/>
      </svg>
    `;
  } else if (tier.key === "amazing") {
    // 3D Star Medal
    assetSvg = `
      <svg class="stage-3d-trophy-svg" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="ribbonGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#7c3aed"/>
            <stop offset="100%" stop-color="#4f46e5"/>
          </linearGradient>
          <linearGradient id="ribbonGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#06b6d4"/>
            <stop offset="100%" stop-color="#0284c7"/>
          </linearGradient>
          <linearGradient id="medalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="30%" stop-color="#a855f7"/>
            <stop offset="100%" stop-color="#581c87"/>
          </linearGradient>
        </defs>
        <!-- Ribbons -->
        <polygon points="40,20 32,55 45,50 42,20" fill="url(#ribbonGrad1)"/>
        <polygon points="60,20 68,55 55,50 58,20" fill="url(#ribbonGrad2)"/>
        <!-- Medal Circle -->
        <circle cx="50" cy="62" r="24" fill="url(#medalGrad)" stroke="#c084fc" stroke-width="3"/>
        <circle cx="50" cy="62" r="19" fill="#ffffff" opacity="0.2"/>
        <!-- Embossed Star -->
        <polygon points="50,49 53.5,58 63,58.5 55.5,64.5 58.5,73 50,68 41.5,73 44.5,64.5 37,58.5 46.5,58" fill="#fef08a"/>
      </svg>
    `;
  } else if (tier.key === "good") {
    // 3D Emerald Star Shield
    assetSvg = `
      <svg class="stage-3d-trophy-svg" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#a7f3d0"/>
            <stop offset="30%" stop-color="#10b981"/>
            <stop offset="100%" stop-color="#064e3b"/>
          </linearGradient>
        </defs>
        <path d="M 50 16 L 76 26 C 76 56 64 74 50 84 C 36 74 24 56 24 26 Z" fill="url(#shieldGrad)" stroke="#34d399" stroke-width="3.5"/>
        <path d="M 50 24 L 70 32 C 70 54 60 68 50 76 C 40 68 30 54 30 32 Z" fill="#ffffff" opacity="0.18"/>
        <!-- Star in Shield -->
        <polygon points="50,38 52.5,44 59,44.5 54,48.5 56,55 50,51 44,55 46,48.5 41,44.5 47.5,44" fill="#ffffff"/>
      </svg>
    `;
  } else {
    // 3D Wisdom Book & Scroll
    assetSvg = `
      <svg class="stage-3d-trophy-svg" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="bookCoverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#60a5fa"/>
            <stop offset="70%" stop-color="#2563eb"/>
            <stop offset="100%" stop-color="#1e3a8a"/>
          </linearGradient>
        </defs>
        <!-- Book Pages -->
        <path d="M 22 66 C 36 62 48 64 50 67 C 52 64 64 62 78 66 L 78 36 C 64 32 52 34 50 37 C 48 34 36 32 22 36 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
        <!-- Book Spine/Cover -->
        <path d="M 20 70 C 35 66 48 67 50 71 C 52 67 65 66 80 70" stroke="url(#bookCoverGrad)" stroke-width="5" stroke-linecap="round"/>
        <!-- Golden Ribbon Bookmark -->
        <path d="M 50 37 L 50 56 L 53 53 L 56 56 L 56 37" fill="#f59e0b"/>
        <!-- Sparkle above book -->
        <circle cx="50" cy="24" r="3" fill="#38bdf8"/>
      </svg>
    `;
  }

  container.innerHTML = `
    <div class="mascot-stage-figure mood-${tier.mascotMood}">
      <div class="stage-avatar-mascot" title="Your Mascot: ${avatar}">
        <span class="stage-avatar-char" aria-hidden="true">${avatar}</span>
        ${accIcon ? `<span class="stage-avatar-accessory" aria-hidden="true">${accIcon}</span>` : ""}
      </div>
      <div class="stage-3d-trophy-wrap" title="${tier.name}">
        ${assetSvg}
      </div>
    </div>
    <div class="mascot-speech-tag" role="status">
      <span>${tier.speech}</span>
    </div>
  `;
}

/**
 * Animates the SVG Circular Progress Ring and count-up percentage value.
 * Respects OS and user-toggled reduced-motion settings.
 */
function animateCircularProgressRing(percentage) {
  const ring = document.getElementById("scoreRingProgress");
  const scoreEl = document.getElementById("scorePercentage");
  if (!ring && !scoreEl) return;

  const circumference = 414.69; // 2 * PI * 66
  const safePct = Math.max(0, Math.min(100, Math.round(percentage)));
  const targetOffset = circumference * (1 - safePct / 100);

  const isReducedMotion = (
    (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) ||
    document.body.classList.contains("reduced-motion")
  );

  if (ring) {
    if (isReducedMotion) {
      ring.style.strokeDashoffset = targetOffset;
    } else {
      ring.style.strokeDashoffset = circumference;
      requestAnimationFrame(() => {
        setTimeout(() => {
          ring.style.strokeDashoffset = targetOffset;
        }, 80);
      });
    }
  }

  if (scoreEl) {
    if (isReducedMotion) {
      scoreEl.textContent = `${safePct}%`;
    } else {
      const duration = 950;
      const startTime = performance.now();

      function step(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const val = Math.round(eased * safePct);
        scoreEl.textContent = `${val}%`;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          scoreEl.textContent = `${safePct}%`;
        }
      }

      requestAnimationFrame(step);
    }
  }
}

function finishQuiz() {
  if (!appState.activeQuiz) return;
  if (appState.activeQuiz.isFinished) {
    // Already finished, ensure view is results
    switchView("viewResults");
    return;
  }
  appState.activeQuiz.isFinished = true;

  appState.activeQuiz.endTime = Date.now();
  if (appState.activeQuiz && appState.activeQuiz.timerInterval) {
    clearInterval(appState.activeQuiz.timerInterval);
    appState.activeQuiz.timerInterval = null;
  }

  const { questions = [], userAnswers = [], startTime, endTime } = appState.activeQuiz;
  const total = questions.length;

  for (let i = 0; i < total; i++) {
    if (!userAnswers[i] || userAnswers[i].selectedIndex === -1 || userAnswers[i].selectedIndex === undefined) {
      const q = questions[i];
      if (q) {
        userAnswers[i] = {
          questionId: q.id,
          questionText: q.question,
          options: q.options,
          selectedIndex: -1,
          correctIndex: q.correctIndex !== undefined ? q.correctIndex : q.correctAnswer,
          isCorrect: false,
          explanation: q.explanation
        };
      }
    }
  }

  let correctCount = 0;
  let unansweredCount = 0;
  userAnswers.forEach((ans) => {
    if (ans && ans.isCorrect) correctCount++;
    if (ans && (ans.selectedIndex === -1 || ans.selectedIndex === null || ans.selectedIndex === undefined)) unansweredCount++;
  });

  const incorrectCount = Math.max(0, total - correctCount - unansweredCount);
  const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  const totalSeconds = Math.max(1, Math.round(((endTime || Date.now()) - (startTime || Date.now())) / 1000));
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  const timeFormatted = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

  // 1. Calculate Score Tier
  const tier = calculateScoreTier(percentage, total);

  // 2. Update Results Hero Card Styling & Tiers
  const heroCard = document.getElementById("resultsHeroCard");
  if (heroCard) {
    heroCard.classList.remove("tier-legendary", "tier-amazing", "tier-good", "tier-practice");
    heroCard.classList.add(`tier-${tier.key}`);
  }

  // 3. Update Tier Badge
  const tierIconEl = document.getElementById("resultsTierIcon");
  const tierNameEl = document.getElementById("resultsTierName");
  if (tierIconEl) tierIconEl.textContent = tier.badgeIcon;
  if (tierNameEl) tierNameEl.textContent = tier.badgeLabel;

  // 4. Update Metadata Context Chips
  const metaCategory = document.getElementById("resultsMetaCategory");
  const metaDifficulty = document.getElementById("resultsMetaDifficulty");
  const metaMode = document.getElementById("resultsMetaMode");
  const metaStatus = document.getElementById("resultsMetaStatus");

  const catName = CATEGORY_NAMES[appState.quizConfig.category] || appState.quizConfig.category;
  const diffName = (appState.quizConfig.difficulty || "easy").toUpperCase();
  const modeName = appState.quizConfig.mode === "learning" ? "Learning Mode" : "Exam Mode";

  if (metaCategory) metaCategory.textContent = `📚 ${catName}`;
  if (metaDifficulty) metaDifficulty.textContent = `⚡ ${diffName}`;
  if (metaMode) metaMode.textContent = `⏱️ ${modeName}`;
  if (metaStatus) metaStatus.textContent = "✓ Completed";

  // 5. Personal Best Detection & Celebration
  const categoryKey = appState.quizConfig.category || "technology";
  const storedBests = getStoredBestScores();
  const previousBest = typeof storedBests[categoryKey] === "number" ? storedBests[categoryKey] : 0;
  const isNewPersonalBest = (percentage > previousBest && percentage > 0);

  const pbBadge = document.getElementById("resultsPersonalBestBadge");
  if (pbBadge) {
    pbBadge.style.display = isNewPersonalBest ? "inline-flex" : "none";
  }

  // 6. Scoreboard Numbers
  const scoreFractionEl = document.getElementById("scoreFractionVal");
  const scoreCorEl = document.getElementById("scoreCorrectVal");
  const scoreIncEl = document.getElementById("scoreIncorrectVal");
  const scoreUnansEl = document.getElementById("scoreUnansweredVal");
  const scoreTimeEl = document.getElementById("scoreTimeVal");

  if (scoreFractionEl) scoreFractionEl.textContent = `${correctCount} of ${total}`;
  if (scoreCorEl) scoreCorEl.textContent = correctCount;
  if (scoreIncEl) scoreIncEl.textContent = incorrectCount;
  if (scoreUnansEl) scoreUnansEl.textContent = unansweredCount;
  if (scoreTimeEl) scoreTimeEl.textContent = timeFormatted;

  // 7. Render 3D Mascot Illustration & Speech
  renderMascotIllustration(tier);

  // 8. Animate Circular Progress Ring and Counter
  animateCircularProgressRing(percentage);

  // 9. Feedback Title and Subtitle
  const resultsTitle = document.getElementById("resultsTitle");
  const feedbackMsg = document.getElementById("resultsFeedbackMsg");
  if (resultsTitle) resultsTitle.textContent = tier.title;
  if (feedbackMsg) feedbackMsg.textContent = tier.feedback;

  // 10. Duplicate Reward Prevention & Economy Progression
  let coinsEarned = 0;
  let xpEarned = 0;
  let newlyUnlockedBadges = [];

  if (!appState.activeQuiz.rewardsClaimed) {
    appState.activeQuiz.rewardsClaimed = true;

    const isDaily = (appState.quizConfig.isDailyChallenge === true);
    const coinMultiplier = isDaily ? 40 : 20;
    coinsEarned = correctCount * coinMultiplier;
    xpEarned = (correctCount * 10) + (tier.bonusXp || 10);

    // Save attempt record once
    const attemptRecord = {
      id: "att_" + Date.now(),
      date: new Date().toISOString(),
      category: appState.quizConfig.category,
      difficulty: appState.quizConfig.difficulty,
      mode: appState.quizConfig.mode,
      scorePercentage: percentage,
      correctCount: correctCount,
      incorrectCount: incorrectCount,
      unansweredCount: unansweredCount,
      totalQuestions: total,
      timeSpent: timeFormatted
    };
    saveAttempt(attemptRecord);

    // Snapshot unlocked badges prior to reward processing
    const profBefore = getPlayerProfile();
    const badgesBefore = new Set(profBefore.unlockedBadges || []);

    addPlayerCoins(coinsEarned);
    addPlayerXp(xpEarned);
    updateDailyStreak();
    checkAndUnlockBadges();
    updateBestScore(categoryKey, percentage);

    const profAfter = getPlayerProfile();
    const badgesAfter = profAfter.unlockedBadges || [];
    newlyUnlockedBadges = badgesAfter.filter(bId => !badgesBefore.has(bId));

    appState.activeQuiz.coinsEarned = coinsEarned;
    appState.activeQuiz.xpEarned = xpEarned;
    appState.activeQuiz.newlyUnlockedBadges = newlyUnlockedBadges;
  } else {
    coinsEarned = appState.activeQuiz.coinsEarned || 0;
    xpEarned = appState.activeQuiz.xpEarned || 0;
    newlyUnlockedBadges = appState.activeQuiz.newlyUnlockedBadges || [];
  }

  // 11. Update Rewards Progression UI Card
  const resultsCoinAmount = document.getElementById("resultsCoinAmount");
  const resultsXpAmount = document.getElementById("resultsXpAmount");
  if (resultsCoinAmount) resultsCoinAmount.textContent = coinsEarned;
  if (resultsXpAmount) resultsXpAmount.textContent = xpEarned;

  const currentProf = getPlayerProfile();
  const resultsLevelTitle = document.getElementById("resultsLevelTitle");
  const resultsLevelXpText = document.getElementById("resultsLevelXpText");
  const resultsLevelProgressFill = document.getElementById("resultsLevelProgressFill");
  if (resultsLevelTitle) {
    resultsLevelTitle.textContent = `Level ${currentProf.level || 1} • Trivia Cadet`;
  }
  if (resultsLevelXpText) {
    const currentXpInLevel = (currentProf.xp || 50) % 200;
    resultsLevelXpText.textContent = `${currentXpInLevel} / 200 XP`;
  }
  if (resultsLevelProgressFill) {
    const pctInLevel = Math.min(100, Math.max(5, (((currentProf.xp || 50) % 200) / 200) * 100));
    resultsLevelProgressFill.style.width = `${pctInLevel}%`;
  }

  // Newly Unlocked Badges
  const newBadgesWrap = document.getElementById("resultsUnlockedBadges");
  const newBadgesList = document.getElementById("resultsNewBadgesList");
  if (newBadgesWrap && newBadgesList) {
    if (newlyUnlockedBadges.length > 0) {
      newBadgesList.innerHTML = newlyUnlockedBadges.map(bId => {
        const bObj = PRESTIGE_BADGES.find(b => b.id === bId) || { title: bId, emoji: "🌟" };
        return `<div class="unlocked-badge-card"><span>${bObj.emoji}</span> <span>${escapeHtml(bObj.title)}</span></div>`;
      }).join("");
      newBadgesWrap.style.display = "block";
    } else {
      newBadgesWrap.style.display = "none";
    }
  }

  // 12. Celebration Effects (Confetti & Chimes)
  if (tier.confetti || isNewPersonalBest) {
    triggerCelebration();
  }
  playGameSound(tier.sound || "victory");

  // 13. Update Review Section Counters
  const reviewAllEl = document.getElementById("reviewCountAll");
  const reviewMistakesEl = document.getElementById("reviewCountMistakes");
  if (reviewAllEl) reviewAllEl.textContent = total;
  if (reviewMistakesEl) reviewMistakesEl.textContent = incorrectCount + unansweredCount;

  appState.reviewFilter = "all";
  const filterPills = document.querySelectorAll(".review-filter-pill");
  filterPills.forEach((pill) => {
    pill.classList.toggle("active", pill.dataset.filter === "all");
  });

  renderReviewList("all");
  syncProfileUI();
  switchView("viewResults");
}

function animateScoreCountUp(targetPct) {
  // Retained as alias for circular progress ring counter
  animateCircularProgressRing(targetPct);
}

function triggerCelebration() {
  const container = document.getElementById("confettiContainer");
  if (!container) return;

  container.innerHTML = "";
  const colors = ["#7c3aed", "#a855f7", "#ec4899", "#10b981", "#f59e0b", "#3b82f6", "#fb7185"];

  for (let i = 0; i < 36; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 96 + 2}%`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.5}s`;
    piece.style.animationDuration = `${1.2 + Math.random() * 0.8}s`;
    container.appendChild(piece);
  }

  setTimeout(() => {
    if (container) container.innerHTML = "";
  }, 2600);
}

function renderReviewList(filterType) {
  const container = document.getElementById("reviewContainer");
  const { userAnswers } = appState.activeQuiz;

  if (!container || !userAnswers || userAnswers.length === 0) return;

  const filtered = userAnswers.filter((item) => {
    if (filterType === "incorrect") {
      return !item.isCorrect;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <h4 class="empty-title">No Mistakes Found! 🎉</h4>
        <p class="empty-desc">You answered all questions correctly in this session.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  filtered.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "review-card";

    const topRow = document.createElement("div");
    topRow.className = "review-card-top";

    const qNum = document.createElement("span");
    qNum.className = "review-qnum";
    qNum.textContent = idx < 9 ? `Item 0${idx + 1}` : `Item ${idx + 1}`;

    const statusTag = document.createElement("span");
    if (item.isCorrect) {
      statusTag.className = "review-status-tag correct";
      statusTag.textContent = "Correct";
    } else if (item.selectedIndex === -1) {
      statusTag.className = "review-status-tag unanswered";
      statusTag.textContent = "Unanswered";
    } else {
      statusTag.className = "review-status-tag incorrect";
      statusTag.textContent = "Incorrect";
    }

    topRow.appendChild(qNum);
    topRow.appendChild(statusTag);
    card.appendChild(topRow);

    const qText = document.createElement("h3");
    qText.className = "review-question-text";
    qText.textContent = item.questionText;
    card.appendChild(qText);

    const answersBox = document.createElement("div");
    answersBox.className = "review-answers-box";

    const userLine = document.createElement("div");
    userLine.className = "review-answer-line";

    const userBadge = document.createElement("span");
    userBadge.className = "answer-badge your-choice";
    userBadge.textContent = "Your Answer:";

    const userSpan = document.createElement("span");
    if (item.selectedIndex >= 0 && item.options && item.options[item.selectedIndex] !== undefined) {
      userSpan.textContent = `${letters[item.selectedIndex]}: ${item.options[item.selectedIndex]}`;
    } else {
      userSpan.textContent = "Not answered";
    }

    userLine.appendChild(userBadge);
    userLine.appendChild(userSpan);
    answersBox.appendChild(userLine);

    if (!item.isCorrect) {
      const correctLine = document.createElement("div");
      correctLine.className = "review-answer-line";

      const correctBadge = document.createElement("span");
      correctBadge.className = "answer-badge correct-choice";
      correctBadge.textContent = "Correct Solution:";

      const correctSpan = document.createElement("span");
      if (item.options && item.options[item.correctIndex] !== undefined) {
        correctSpan.textContent = `${letters[item.correctIndex]}: ${item.options[item.correctIndex]}`;
      } else {
        correctSpan.textContent = "";
      }

      correctLine.appendChild(correctBadge);
      correctLine.appendChild(correctSpan);
      answersBox.appendChild(correctLine);
    }

    card.appendChild(answersBox);

    const rationale = document.createElement("div");
    rationale.className = "review-rationale";

    const rationaleStrong = document.createElement("strong");
    rationaleStrong.textContent = "Rationale: ";

    const rationaleText = document.createElement("span");
    rationaleText.textContent = item.explanation || "";

    rationale.appendChild(rationaleStrong);
    rationale.appendChild(rationaleText);
    card.appendChild(rationale);

    container.appendChild(card);
  });
}

// ==========================================================================
// 10. Event Listeners & Interactive Bindings
// ==========================================================================

// ==========================================================================
// 10B. QuizUp Gaming Hub: State, Audio, Modes, Leaderboard & Rewards
// ==========================================================================

const GAMING_STORAGE_KEY = "quizup_player_profile";
const THEME_STORAGE_KEY = "quizup_theme_midnight";

const DEFAULT_PROFILE = {
  name: "QuizMaster",
  avatar: "🦊",
  coins: 150,
  streak: 1,
  lastPlayedDate: new Date().toISOString().slice(0, 10),
  dailyBonusClaimedDate: null,
  level: 1,
  soundEnabled: true,
  unlockedBadges: ["welcome_cadet"]
};

const PRESTIGE_BADGES = [
  { id: "welcome_cadet", title: "First Step", emoji: "🌟", desc: "Complete your first quiz in any subject." },
  { id: "century_club", title: "Century Club", emoji: "💯", desc: "Score a perfect 100% on any practice quiz." },
  { id: "speed_demon", title: "Speed Demon", emoji: "⚡", desc: "Complete a full quiz in under 60 seconds." },
  { id: "streak_master", title: "Flame Keeper", emoji: "🔥", desc: "Maintain a 3-day daily challenge streak." },
  { id: "ai_slayer", title: "AI Slayer", emoji: "🤖", desc: "Defeat ByteBot in a head-to-head match." },
  { id: "friendship_goal", title: "Social Prodigy", emoji: "👥", desc: "Complete a pass-and-play match with a friend." },
  { id: "coin_hoarder", title: "Treasury Master", emoji: "🪙", desc: "Accumulate 300 or more gold coins." },
  { id: "polymath", title: "Polymath Scholar", emoji: "🎓", desc: "Practice questions in all 6 categories." }
];

const AVATAR_OPTIONS = ["🦊", "🦉", "🚀", "🦁", "🐼", "🤖", "⚡", "👑", "🎯", "🌟"];

// Simulated Competitors for Leaderboard Community Standings (Clearly labeled as simulated demo competitors)
const COMMUNITY_LEADERS = {
  today: [
    { rank: 1, name: "Aria Stark", avatar: "👑", accuracy: "100%", coins: 480, badge: "Master", discipline: "technology", streak: "7 Days", isSimulated: true },
    { rank: 2, name: "Devon Chen", avatar: "🚀", accuracy: "96%", coins: 420, badge: "Grandmaster", discipline: "competitive", streak: "5 Days", isSimulated: true },
    { rank: 3, name: "Zara Patel", avatar: "🦉", accuracy: "94%", coins: 390, badge: "Prodigy", discipline: "academics", streak: "4 Days", isSimulated: true },
    { rank: 5, name: "Leo Vance", avatar: "🦁", accuracy: "88%", coins: 310, badge: "Scholar", discipline: "sports", streak: "3 Days", isSimulated: true },
    { rank: 6, name: "Maya Lin", avatar: "⚡", accuracy: "86%", coins: 280, badge: "Rising Star", discipline: "general", streak: "6 Days", isSimulated: true },
    { rank: 7, name: "Siddharth R.", avatar: "🎯", accuracy: "82%", coins: 240, badge: "Challenger", discipline: "entertainment", streak: "2 Days", isSimulated: true },
    { rank: 8, name: "Elena Rostova", avatar: "🐼", accuracy: "80%", coins: 220, badge: "Explorer", discipline: "academics", streak: "3 Days", isSimulated: true },
    { rank: 9, name: "Kenji Sato", avatar: "🤖", accuracy: "78%", coins: 190, badge: "Novice", discipline: "technology", streak: "1 Day", isSimulated: true },
    { rank: 10, name: "Nia Brooks", avatar: "🌟", accuracy: "75%", coins: 170, badge: "Novice", discipline: "general", streak: "2 Days", isSimulated: true }
  ],
  weekly: [
    { rank: 1, name: "Devon Chen", avatar: "🚀", accuracy: "98%", coins: 1420, badge: "Legend", discipline: "competitive", streak: "12 Days", isSimulated: true },
    { rank: 2, name: "Aria Stark", avatar: "👑", accuracy: "95%", coins: 1350, badge: "Master", discipline: "technology", streak: "14 Days", isSimulated: true },
    { rank: 3, name: "Kenji Sato", avatar: "🤖", accuracy: "92%", coins: 1180, badge: "Grandmaster", discipline: "academics", streak: "8 Days", isSimulated: true },
    { rank: 5, name: "Zara Patel", avatar: "🦉", accuracy: "89%", coins: 950, badge: "Prodigy", discipline: "general", streak: "9 Days", isSimulated: true },
    { rank: 6, name: "Leo Vance", avatar: "🦁", accuracy: "87%", coins: 890, badge: "Scholar", discipline: "sports", streak: "6 Days", isSimulated: true },
    { rank: 7, name: "Elena Rostova", avatar: "🐼", accuracy: "84%", coins: 820, badge: "Explorer", discipline: "entertainment", streak: "7 Days", isSimulated: true },
    { rank: 8, name: "Maya Lin", avatar: "⚡", accuracy: "81%", coins: 740, badge: "Rising Star", discipline: "technology", streak: "5 Days", isSimulated: true }
  ],
  alltime: [
    { rank: 1, name: "Aria Stark", avatar: "👑", accuracy: "99%", coins: 5400, badge: "Hall of Fame", discipline: "technology", streak: "45 Days", isSimulated: true },
    { rank: 2, name: "Devon Chen", avatar: "🚀", accuracy: "97%", coins: 4950, badge: "Hall of Fame", discipline: "competitive", streak: "38 Days", isSimulated: true },
    { rank: 3, name: "Leo Vance", avatar: "🦁", accuracy: "93%", coins: 4200, badge: "Grandmaster", discipline: "sports", streak: "30 Days", isSimulated: true },
    { rank: 5, name: "Kenji Sato", avatar: "🤖", accuracy: "90%", coins: 3600, badge: "Master", discipline: "academics", streak: "24 Days", isSimulated: true },
    { rank: 6, name: "Zara Patel", avatar: "🦉", accuracy: "88%", coins: 3100, badge: "Prodigy", discipline: "general", streak: "21 Days", isSimulated: true },
    { rank: 7, name: "Siddharth R.", avatar: "🎯", accuracy: "85%", coins: 2750, badge: "Scholar", discipline: "entertainment", streak: "18 Days", isSimulated: true }
  ]
};

// Web Audio Synthesizer for High-Quality Feedback Chimes
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioCtor();
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function playGameSound(type) {
  const profile = getPlayerProfile();
  if (!profile.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (type === "correct") {
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      osc1.type = "sine";
      osc2.type = "sine";
      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc2.frequency.setValueAtTime(659.25, now + 0.08); // E5
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);
      osc1.start(now);
      osc2.start(now + 0.08);
      osc1.stop(now + 0.35);
      osc2.stop(now + 0.35);
    } else if (type === "incorrect") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.25);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.28);
    } else if (type === "click") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(700, now);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === "victory") {
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.15, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.3);
      });
    }
  } catch (err) {
    // Graceful silent fallback if Web Audio is unsupported in test runners
  }
}

// Player Profile Storage & Safe Deserialization
function getPlayerProfile() {
  try {
    const raw = localStorage.getItem(GAMING_STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PROFILE };
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_PROFILE, ...parsed };
  } catch (err) {
    return { ...DEFAULT_PROFILE };
  }
}

function savePlayerProfile(profile) {
  try {
    localStorage.setItem(GAMING_STORAGE_KEY, JSON.stringify(profile));
  } catch (err) {}
  syncProfileUI();
}

// ==========================================================================
// 8B. User Authentication & Session Management (Soft Candy Theme)
// Note: Passwords are NEVER saved in localStorage or client cookies.
// Production multi-user authentication requires an external secure backend.
// ==========================================================================
const AUTH_STORAGE_KEY = "quizup_auth_user";
const AUTH_SESSION_KEY = "quizup_auth_session";

function getAuthUser() {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return { isDemo: true, displayName: "Demo Player", email: "" };
    return JSON.parse(raw);
  } catch (err) {
    return { isDemo: true, displayName: "Demo Player", email: "" };
  }
}

function setAuthUser(user) {
  try {
    // SECURITY SAFEGUARD: Never persist password in localStorage
    const safeUser = {
      displayName: user.displayName || "Demo Player",
      email: user.email || "",
      isDemo: Boolean(user.isDemo),
      loginDate: user.loginDate || new Date().toISOString()
    };
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(safeUser));
    localStorage.setItem(AUTH_SESSION_KEY, safeUser.isDemo ? "demo" : "user");
  } catch (err) {}
  syncAuthUI();
}

function syncAuthUI() {
  const user = getAuthUser();
  const navAuthText = document.getElementById("navAuthText");
  if (navAuthText) {
    navAuthText.textContent = user.isDemo ? "Sign In" : user.displayName;
  }
  const profileAccountBadge = document.getElementById("profileAccountBadge");
  if (profileAccountBadge) {
    profileAccountBadge.textContent = user.isDemo 
      ? "🎮 Guest Player (Local Storage)" 
      : `👤 ${user.displayName} (${user.email || "Signed In"})`;
  }
}

function initAuthScreen() {
  initLoginScreen();
  initRegisterScreen();
}

function initLoginScreen() {
  const loginForm = document.getElementById("loginForm");
  const loginEmailInput = document.getElementById("loginEmailInput");
  const loginPasswordInput = document.getElementById("loginPasswordInput");
  const loginPwToggleBtn = document.getElementById("loginPwToggleBtn");
  const loginPwToggleIcon = document.getElementById("loginPwToggleIcon");
  const loginSubmitBtn = document.getElementById("loginSubmitBtn");
  const loginSubmitBtnText = document.getElementById("loginSubmitBtnText");
  const loginAlertBox = document.getElementById("loginAlertBox");
  const loginAlertIcon = document.getElementById("loginAlertIcon");
  const loginAlertText = document.getElementById("loginAlertText");
  const loginDemoBtn = document.getElementById("loginDemoBtn");
  const loginForgotPassLink = document.getElementById("loginForgotPassLink");
  const loginRecoveryPanel = document.getElementById("loginRecoveryPanel");
  const loginCloseRecoveryBtn = document.getElementById("loginCloseRecoveryBtn");
  const loginSendRecoveryBtn = document.getElementById("loginSendRecoveryBtn");
  const loginRecoveryEmailInput = document.getElementById("loginRecoveryEmailInput");
  const loginToRegisterLink = document.getElementById("loginToRegisterLink");
  const loginReturnDashboardBtn = document.getElementById("loginReturnDashboardBtn");

  function showLoginAlert(msg, type = "error") {
    if (!loginAlertBox || !loginAlertText) return;
    loginAlertBox.className = `auth-alert ${type}`;
    if (loginAlertIcon) {
      loginAlertIcon.textContent = type === "success" ? "✅" : (type === "info" ? "ℹ️" : "⚠️");
    }
    loginAlertText.textContent = msg;
    loginAlertBox.style.display = "flex";
  }

  function hideLoginAlert() {
    if (loginAlertBox) loginAlertBox.style.display = "none";
  }

  // Show / Hide Password toggle
  if (loginPwToggleBtn && loginPasswordInput) {
    loginPwToggleBtn.addEventListener("click", () => {
      const isPass = loginPasswordInput.type === "password";
      loginPasswordInput.type = isPass ? "text" : "password";
      if (loginPwToggleIcon) loginPwToggleIcon.textContent = isPass ? "🙈" : "👁️";
      loginPwToggleBtn.setAttribute("aria-label", isPass ? "Hide password" : "Show password");
    });
  }

  // Guest / Demo Access button
  if (loginDemoBtn) {
    loginDemoBtn.addEventListener("click", () => {
      playGameSound("click");
      setAuthUser({ isDemo: true, displayName: "Demo Player", email: "" });
      hideLoginAlert();
      switchView("viewLeaderboard");
    });
  }

  // Form submission (Email + Password)
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = loginEmailInput ? loginEmailInput.value.trim() : "";
      const password = loginPasswordInput ? loginPasswordInput.value : "";

      // Validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        showLoginAlert("Please enter a valid email address.", "error");
        if (loginEmailInput) loginEmailInput.focus();
        return;
      }

      if (!password) {
        showLoginAlert("Please enter your password.", "error");
        if (loginPasswordInput) loginPasswordInput.focus();
        return;
      }

      // Show brief loading state
      if (loginSubmitBtn && loginSubmitBtnText) {
        loginSubmitBtn.disabled = true;
        loginSubmitBtnText.textContent = "Verifying Credentials...";
      }

      setTimeout(() => {
        if (loginSubmitBtn && loginSubmitBtnText) {
          loginSubmitBtn.disabled = false;
          loginSubmitBtnText.textContent = "Sign In 🚀";
        }

        // Honest client-side explanation: Real cloud auth requires backend server
        const displayName = email.split("@")[0];
        setAuthUser({
          displayName: displayName,
          email: email,
          isDemo: true,
          loginDate: new Date().toISOString()
        });

        playGameSound("victory");
        showLoginAlert(`Welcome, ${displayName}! (Notice: Backend authentication is in Client Demo mode. Local progress is preserved on this device).`, "info");

        if (loginPasswordInput) loginPasswordInput.value = "";

        setTimeout(() => {
          hideLoginAlert();
          switchView("viewLeaderboard");
        }, 1200);
      }, 500);
    });
  }

  // Switch to Registration
  if (loginToRegisterLink) {
    loginToRegisterLink.addEventListener("click", () => {
      playGameSound("click");
      hideLoginAlert();
      switchView("viewRegister");
    });
  }

  // Password Recovery Panel Toggle
  if (loginForgotPassLink && loginRecoveryPanel) {
    loginForgotPassLink.addEventListener("click", () => {
      loginRecoveryPanel.style.display = loginRecoveryPanel.style.display === "none" ? "block" : "none";
      hideLoginAlert();
    });
  }

  if (loginCloseRecoveryBtn && loginRecoveryPanel) {
    loginCloseRecoveryBtn.addEventListener("click", () => {
      loginRecoveryPanel.style.display = "none";
    });
  }

  // Send Recovery Email action
  if (loginSendRecoveryBtn && loginRecoveryEmailInput) {
    loginSendRecoveryBtn.addEventListener("click", () => {
      const recEmail = loginRecoveryEmailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!recEmail || !emailRegex.test(recEmail)) {
        showLoginAlert("Please enter a valid email address for password recovery.", "error");
        loginRecoveryEmailInput.focus();
        return;
      }
      playGameSound("click");
      showLoginAlert(`Password recovery simulated for ${recEmail}. Note: Automated delivery requires an active SMTP backend service.`, "info");
      loginRecoveryEmailInput.value = "";
      setTimeout(() => {
        if (loginRecoveryPanel) loginRecoveryPanel.style.display = "none";
      }, 2500);
    });
  }

  // Return to Dashboard
  if (loginReturnDashboardBtn) {
    loginReturnDashboardBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewLeaderboard");
    });
  }
}

function initRegisterScreen() {
  const registerForm = document.getElementById("registerForm");
  const registerNameInput = document.getElementById("registerNameInput");
  const registerEmailInput = document.getElementById("registerEmailInput");
  const registerPasswordInput = document.getElementById("registerPasswordInput");
  const registerConfirmPwInput = document.getElementById("registerConfirmPwInput");
  const registerPwToggleBtn = document.getElementById("registerPwToggleBtn");
  const registerPwToggleIcon = document.getElementById("registerPwToggleIcon");
  const registerConfirmPwToggleBtn = document.getElementById("registerConfirmPwToggleBtn");
  const registerConfirmPwToggleIcon = document.getElementById("registerConfirmPwToggleIcon");
  const registerSubmitBtn = document.getElementById("registerSubmitBtn");
  const registerSubmitBtnText = document.getElementById("registerSubmitBtnText");
  const registerAlertBox = document.getElementById("registerAlertBox");
  const registerAlertIcon = document.getElementById("registerAlertIcon");
  const registerAlertText = document.getElementById("registerAlertText");
  const registerToLoginLink = document.getElementById("registerToLoginLink");
  const registerDemoBtn = document.getElementById("registerDemoBtn");
  const pwRuleLength = document.getElementById("pwRuleLength");
  const pwRuleMatch = document.getElementById("pwRuleMatch");

  function showRegisterAlert(msg, type = "error") {
    if (!registerAlertBox || !registerAlertText) return;
    registerAlertBox.className = `auth-alert ${type}`;
    if (registerAlertIcon) {
      registerAlertIcon.textContent = type === "success" ? "✅" : (type === "info" ? "ℹ️" : "⚠️");
    }
    registerAlertText.textContent = msg;
    registerAlertBox.style.display = "flex";
  }

  function hideRegisterAlert() {
    if (registerAlertBox) registerAlertBox.style.display = "none";
  }

  // Real-time password requirement helper
  function updatePwRules() {
    const pw = registerPasswordInput ? registerPasswordInput.value : "";
    const cpw = registerConfirmPwInput ? registerConfirmPwInput.value : "";

    if (pwRuleLength) {
      const okLen = pw.length >= 8;
      pwRuleLength.className = okLen ? "valid" : "";
      pwRuleLength.textContent = okLen ? "✓ At least 8 characters" : "At least 8 characters";
    }
    if (pwRuleMatch) {
      const okMatch = Boolean(pw && cpw && pw === cpw);
      pwRuleMatch.className = okMatch ? "valid" : "";
      pwRuleMatch.textContent = okMatch ? "✓ Passwords match" : "Passwords must match";
    }
  }

  if (registerPasswordInput) registerPasswordInput.addEventListener("input", updatePwRules);
  if (registerConfirmPwInput) registerConfirmPwInput.addEventListener("input", updatePwRules);

  // Show / Hide Password toggle
  if (registerPwToggleBtn && registerPasswordInput) {
    registerPwToggleBtn.addEventListener("click", () => {
      const isPass = registerPasswordInput.type === "password";
      registerPasswordInput.type = isPass ? "text" : "password";
      if (registerPwToggleIcon) registerPwToggleIcon.textContent = isPass ? "🙈" : "👁️";
      registerPwToggleBtn.setAttribute("aria-label", isPass ? "Hide password" : "Show password");
    });
  }

  // Show / Hide Confirm Password toggle
  if (registerConfirmPwToggleBtn && registerConfirmPwInput) {
    registerConfirmPwToggleBtn.addEventListener("click", () => {
      const isPass = registerConfirmPwInput.type === "password";
      registerConfirmPwInput.type = isPass ? "text" : "password";
      if (registerConfirmPwToggleIcon) registerConfirmPwToggleIcon.textContent = isPass ? "🙈" : "👁️";
      registerConfirmPwToggleBtn.setAttribute("aria-label", isPass ? "Hide password" : "Show password");
    });
  }

  // Switch to Login
  if (registerToLoginLink) {
    registerToLoginLink.addEventListener("click", () => {
      playGameSound("click");
      hideRegisterAlert();
      switchView("viewLogin");
    });
  }

  // Demo access from Register
  if (registerDemoBtn) {
    registerDemoBtn.addEventListener("click", () => {
      playGameSound("click");
      setAuthUser({ isDemo: true, displayName: "Demo Player", email: "" });
      hideRegisterAlert();
      switchView("viewLeaderboard");
    });
  }

  // Form Submission
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = registerNameInput ? registerNameInput.value.trim() : "";
      const email = registerEmailInput ? registerEmailInput.value.trim() : "";
      const password = registerPasswordInput ? registerPasswordInput.value : "";
      const confirmPw = registerConfirmPwInput ? registerConfirmPwInput.value : "";

      // Validation
      if (!name || name.length < 2) {
        showRegisterAlert("Please enter a player display name (at least 2 characters).", "error");
        if (registerNameInput) registerNameInput.focus();
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        showRegisterAlert("Please enter a valid email address.", "error");
        if (registerEmailInput) registerEmailInput.focus();
        return;
      }

      if (!password || password.length < 8) {
        showRegisterAlert("Password must be at least 8 characters long.", "error");
        if (registerPasswordInput) registerPasswordInput.focus();
        return;
      }

      if (password !== confirmPw) {
        showRegisterAlert("Passwords do not match. Please verify both fields.", "error");
        if (registerConfirmPwInput) registerConfirmPwInput.focus();
        return;
      }

      // Show brief loading state
      if (registerSubmitBtn && registerSubmitBtnText) {
        registerSubmitBtn.disabled = true;
        registerSubmitBtnText.textContent = "Setting Up Profile...";
      }

      setTimeout(() => {
        if (registerSubmitBtn && registerSubmitBtnText) {
          registerSubmitBtn.disabled = false;
          registerSubmitBtnText.textContent = "Create Account 🎉";
        }

        // Apply chosen name to local profile
        const profile = getPlayerProfile();
        profile.name = name;
        savePlayerProfile(profile);

        // Save session (SECURITY: DO NOT store password in localStorage)
        setAuthUser({
          displayName: name,
          email: email,
          isDemo: true,
          loginDate: new Date().toISOString()
        });

        playGameSound("victory");
        showRegisterAlert(`Account created! Player handle set to "${name}". (Notice: Operating in Client Demo mode; local progress is preserved).`, "info");

        if (registerPasswordInput) registerPasswordInput.value = "";
        if (registerConfirmPwInput) registerConfirmPwInput.value = "";

        setTimeout(() => {
          hideRegisterAlert();
          switchView("viewLeaderboard");
        }, 1200);
      }, 500);
    });
  }
}

function addPlayerCoins(amount) {
  const profile = getPlayerProfile();
  profile.coins = Math.max(0, (profile.coins || 0) + amount);
  savePlayerProfile(profile);
  checkAndUnlockBadges();
}

function updateDailyStreak() {
  const profile = getPlayerProfile();
  const todayStr = new Date().toISOString().slice(0, 10);
  if (!profile.lastPlayedDate) {
    profile.streak = 1;
    profile.lastPlayedDate = todayStr;
  } else if (profile.lastPlayedDate === todayStr) {
    // Already played today, preserve streak
  } else {
    const lastDate = new Date(profile.lastPlayedDate);
    const currDate = new Date(todayStr);
    const diffDays = Math.round((currDate - lastDate) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      profile.streak = (profile.streak || 1) + 1;
    } else {
      profile.streak = 1;
    }
    profile.lastPlayedDate = todayStr;
  }
  savePlayerProfile(profile);
  checkAndUnlockBadges();
}

function checkAndUnlockBadges() {
  const profile = getPlayerProfile();
  const attempts = getStoredAttempts();
  const initialBadges = new Set(profile.unlockedBadges || []);
  const newlyUnlocked = [];

  const checkBadge = (bId, condition) => {
    if (condition && !initialBadges.has(bId)) {
      initialBadges.add(bId);
      newlyUnlocked.push(bId);
    }
  };

  checkBadge("welcome_cadet", attempts.length >= 1);
  checkBadge("century_club", attempts.some(a => a.percentage === 100));
  checkBadge("speed_demon", attempts.some(a => a.durationSeconds && a.durationSeconds < 60));
  checkBadge("streak_master", (profile.streak || 0) >= 3);
  checkBadge("coin_hoarder", (profile.coins || 0) >= 300);

  // Check 6 categories
  const catSet = new Set(attempts.map(a => a.category).filter(Boolean));
  checkBadge("polymath", catSet.size >= 6);

  profile.unlockedBadges = Array.from(initialBadges);
  try {
    localStorage.setItem(GAMING_STORAGE_KEY, JSON.stringify(profile));
  } catch (err) {}

  if (newlyUnlocked.length > 0) {
    playGameSound("victory");
    triggerCelebration();
    const firstNew = PRESTIGE_BADGES.find(b => b.id === newlyUnlocked[0]);
    if (firstNew && typeof openBadgeDetailModal === "function") {
      setTimeout(() => {
        const progressInfo = computeBadgeProgress(firstNew, profile, attempts);
        openBadgeDetailModal(firstNew, true, progressInfo, true);
      }, 500);
    }
  }
}

function syncProfileUI() {
  const profile = getPlayerProfile();
  let customPhoto = null;
  try {
    customPhoto = localStorage.getItem("quizup_custom_avatar_img");
  } catch (e) {}

  // Top header elements
  const coinCountEl = document.getElementById("playerCoinsCount");
  if (coinCountEl) coinCountEl.textContent = profile.coins;
  const streakCountEl = document.getElementById("playerStreakCount");
  if (streakCountEl) streakCountEl.textContent = profile.streak;

  const headerAvatarImg = document.getElementById("headerAvatarImg");
  const avatarEmojiEl = document.getElementById("headerAvatarEmoji");
  if (customPhoto) {
    if (headerAvatarImg) {
      headerAvatarImg.src = customPhoto;
      headerAvatarImg.style.display = "block";
    }
    if (avatarEmojiEl) avatarEmojiEl.style.display = "none";
  } else {
    if (headerAvatarImg) headerAvatarImg.style.display = "none";
    if (avatarEmojiEl) {
      avatarEmojiEl.style.display = "inline-block";
      avatarEmojiEl.textContent = profile.avatar || "🦊";
    }
  }

  const soundIconEl = document.getElementById("soundIcon");
  if (soundIconEl) soundIconEl.textContent = profile.soundEnabled ? "🔊" : "🔇";

  // Rewards View
  const rewardsCoinsVal = document.getElementById("rewardsCoinsVal");
  if (rewardsCoinsVal) rewardsCoinsVal.textContent = profile.coins;
  const rewardsStreakDays = document.getElementById("rewardsStreakDays");
  if (rewardsStreakDays) rewardsStreakDays.textContent = profile.streak;

  // Profile View Elements
  const profileAvatarImg = document.getElementById("profileAvatarImg");
  const profileAvatarEmoji = document.getElementById("profileAvatarEmoji");
  const removePhotoBtn = document.getElementById("removePhotoBtn");

  if (customPhoto) {
    if (profileAvatarImg) {
      profileAvatarImg.src = customPhoto;
      profileAvatarImg.style.display = "block";
    }
    if (profileAvatarEmoji) profileAvatarEmoji.style.display = "none";
    if (removePhotoBtn) removePhotoBtn.style.display = "inline-block";
  } else {
    if (profileAvatarImg) profileAvatarImg.style.display = "none";
    if (profileAvatarEmoji) {
      profileAvatarEmoji.style.display = "inline-block";
      profileAvatarEmoji.textContent = profile.avatar || "🦊";
    }
    if (removePhotoBtn) removePhotoBtn.style.display = "none";
  }

  const profileNameText = document.getElementById("profileNameText");
  if (profileNameText) profileNameText.textContent = profile.name || "QuizMaster";

  const profileNameInput = document.getElementById("profileNameInput");
  if (profileNameInput && document.activeElement !== profileNameInput) {
    profileNameInput.value = profile.name || "QuizMaster";
  }

  const profileTitleTag = document.getElementById("profileTitleTag");
  if (profileTitleTag) {
    profileTitleTag.textContent = `Level ${profile.level || 1} • Trivia Cadet`;
  }

  const profileCuratedCoins = document.getElementById("profileCuratedCoins");
  if (profileCuratedCoins) profileCuratedCoins.textContent = profile.coins;

  const profileCuratedStreak = document.getElementById("profileCuratedStreak");
  if (profileCuratedStreak) profileCuratedStreak.textContent = profile.streak;

  const compPlayerAvatar = document.getElementById("compPlayerAvatar");
  if (compPlayerAvatar) compPlayerAvatar.textContent = profile.avatar || "🦊";

  // Career Stats on Profile
  const attempts = getStoredAttempts();
  const statQuizzes = document.getElementById("profileStatQuizzes");
  if (statQuizzes) statQuizzes.textContent = attempts.length;

  const statAcc = document.getElementById("profileStatAccuracy");
  let avgAcc = 0;
  if (statAcc) {
    if (attempts.length === 0) {
      statAcc.textContent = "0%";
    } else {
      const sum = attempts.reduce((s, a) => s + (a.scorePercentage !== undefined ? a.scorePercentage : (a.percentage || 0)), 0);
      avgAcc = Math.round(sum / attempts.length);
      statAcc.textContent = avgAcc + "%";
    }
  }

  const bestScores = getStoredBestScores();
  const bestScoreVals = Object.values(bestScores);
  const bestScoreVal = bestScoreVals.length ? Math.max(...bestScoreVals) : (attempts.length ? Math.max(...attempts.map(a => (a.scorePercentage !== undefined ? a.scorePercentage : (a.percentage || 0)))) : 0);
  const profileBestScore = document.getElementById("profileBestScore");
  if (profileBestScore) profileBestScore.textContent = bestScoreVal > 0 ? `${bestScoreVal}%` : "--";

  const statCoins = document.getElementById("profileStatCoins");
  if (statCoins) statCoins.textContent = profile.coins;
  const statStreak = document.getElementById("profileStatStreak");
  if (statStreak) statStreak.textContent = profile.streak;

  // Leaderboard sticky strip
  const userRankName = document.getElementById("userRankName");
  if (userRankName) userRankName.textContent = profile.name + " (" + profile.avatar + ")";
  const userRankCoins = document.getElementById("userRankCoins");
  if (userRankCoins) userRankCoins.textContent = profile.coins;

  // XP & Level UI
  const levelBadge = document.getElementById("profileLevelBadge");
  if (levelBadge) levelBadge.textContent = "Level " + (profile.level || 1) + " • Trivia Cadet";
  const xpText = document.getElementById("profileXpText");
  if (xpText) xpText.textContent = (profile.xp || 50);
  const xpFill = document.getElementById("profileXpFill");
  if (xpFill) {
    const pct = Math.min(100, Math.max(5, (((profile.xp || 50) % 200) / 200) * 100));
    xpFill.style.width = pct + "%";
  }

  // Settings sync in profile
  const profileSoundToggle = document.getElementById("profileSoundToggle");
  if (profileSoundToggle) profileSoundToggle.checked = !!profile.soundEnabled;

  const isDark = document.body.classList.contains("theme-midnight") || document.body.getAttribute("data-theme") === "midnight-galaxy";
  const profileThemeToggle = document.getElementById("profileThemeToggle");
  if (profileThemeToggle) profileThemeToggle.checked = isDark;

  const isReduced = document.body.classList.contains("reduced-motion");
  const profileReducedMotionToggle = document.getElementById("profileReducedMotionToggle");
  if (profileReducedMotionToggle) profileReducedMotionToggle.checked = isReduced;

  // Render sub-sections of profile
  renderProfileMastery(attempts);
  renderProfileRecentAttempts(attempts);
  renderProfileBadgesMini(profile, attempts);
}

function renderProfileMastery(attempts) {
  const container = document.getElementById("profileMasteryContainer");
  if (!container) return;

  const categories = [
    { key: "technology", name: "Technology", icon: "💻" },
    { key: "academics", name: "Academics", icon: "📐" },
    { key: "general", name: "General Knowledge", icon: "🌍" },
    { key: "competitive", name: "Competitive Exams", icon: "🎯" },
    { key: "sports", name: "Sports", icon: "⚽" },
    { key: "entertainment", name: "Entertainment", icon: "🎬" }
  ];

  const html = categories.map(cat => {
    const catAttempts = (attempts || []).filter(a => a.category === cat.key);
    let pct = 0;
    if (catAttempts.length > 0) {
      const sum = catAttempts.reduce((acc, a) => acc + (a.scorePercentage !== undefined ? a.scorePercentage : (a.percentage || 0)), 0);
      pct = Math.round(sum / catAttempts.length);
    }
    return `
      <div class="discipline-mastery-row">
        <div class="discipline-mastery-info">
          <span class="discipline-mastery-name">${cat.icon} ${cat.name} (${catAttempts.length} quizzes)</span>
          <span class="discipline-mastery-pct">${pct}% Avg</span>
        </div>
        <div class="discipline-mastery-track">
          <div class="discipline-mastery-fill" style="width: ${pct}%;"></div>
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = html;
}

function renderProfileRecentAttempts(attempts) {
  const container = document.getElementById("profileRecentAttemptsContainer");
  if (!container) return;

  if (!attempts || attempts.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 24px 12px; color: var(--text-muted); font-size: 0.88rem;">
        <span>🎯</span>
        <p style="margin-top: 6px;">No quiz attempts recorded yet. Play your first quiz in the Arena!</p>
      </div>
    `;
    return;
  }

  const icons = {
    technology: "💻",
    academics: "📐",
    general: "🌍",
    competitive: "🎯",
    sports: "⚽",
    entertainment: "🎬"
  };

  const html = attempts.slice(0, 5).map(att => {
    const icon = icons[att.category] || "📚";
    const catName = CATEGORY_NAMES[att.category] || att.category || "General";
    const dateStr = att.date ? new Date(att.date).toLocaleDateString([], { month: "short", day: "numeric" }) : "Recent";
    const score = att.scorePercentage !== undefined ? att.scorePercentage : (att.percentage || 0);

    return `
      <div class="profile-recent-item">
        <div class="profile-recent-meta">
          <span class="profile-recent-icon">${icon}</span>
          <div>
            <div class="profile-recent-title">${escapeHtml(catName)} • ${att.difficulty ? att.difficulty.toUpperCase() : "EASY"}</div>
            <div class="profile-recent-date">${dateStr} • ${att.mode === "exam" ? "Timed Exam" : "Learning Sprint"}</div>
          </div>
        </div>
        <div class="profile-recent-score">${score}%</div>
      </div>
    `;
  }).join("");

  container.innerHTML = html;
}

function renderProfileBadgesMini(profile, attempts) {
  const container = document.getElementById("profileBadgesMiniGrid");
  if (!container) return;

  const unlocked = new Set(profile.unlockedBadges || []);

  const html = PRESTIGE_BADGES.map(badge => {
    const isUnl = unlocked.has(badge.id);
    const title = badge.title || badge.name || "Badge";
    const icon = badge.emoji || badge.icon || "🏆";
    return `
      <div class="profile-badge-mini-card" data-badge-id="${badge.id}" style="${isUnl ? '' : 'opacity: 0.45; filter: grayscale(1);'}" title="${title}: ${badge.desc}">
        <span class="profile-badge-mini-icon">${icon}</span>
        <span class="profile-badge-mini-name">${title}</span>
      </div>
    `;
  }).join("");

  container.innerHTML = html;

  container.querySelectorAll(".profile-badge-mini-card").forEach(el => {
    el.addEventListener("click", () => {
      const bId = el.getAttribute("data-badge-id");
      const badge = PRESTIGE_BADGES.find(b => b.id === bId);
      if (badge && typeof openBadgeDetailModal === "function") {
        playGameSound("click");
        const isUnl = unlocked.has(bId);
        const progress = computeBadgeProgress(badge, profile, attempts);
        openBadgeDetailModal(badge, isUnl, progress);
      }
    });
  });
}

// Compute genuine measurable progress for Prestige Badges
function computeBadgeProgress(badge, profile, attempts) {
  const isUnlocked = (profile.unlockedBadges || []).includes(badge.id);
  switch (badge.id) {
    case "welcome_cadet": {
      const current = isUnlocked ? 1 : Math.min(1, attempts.length);
      const pct = isUnlocked || attempts.length >= 1 ? 100 : 0;
      return {
        pct,
        label: isUnlocked ? "1 / 1 quiz completed" : `${current} / 1 quiz completed`,
        tip: "Select any category and complete a 5-question sprint in Learning or Exam mode."
      };
    }
    case "century_club": {
      const best = attempts.length ? Math.max(...attempts.map(a => a.percentage || 0)) : 0;
      const pct = isUnlocked || best >= 100 ? 100 : best;
      return {
        pct,
        label: isUnlocked || best >= 100 ? "Perfect 100% Achieved!" : `Best Score: ${best}% (Target: 100%)`,
        tip: "Take your time in Learning Mode to read every question carefully and achieve 100%."
      };
    }
    case "speed_demon": {
      const timed = attempts.filter(a => a.durationSeconds && a.durationSeconds > 0);
      const fastest = timed.length ? Math.min(...timed.map(a => a.durationSeconds)) : null;
      const met = isUnlocked || (fastest !== null && fastest < 60);
      const pct = met ? 100 : (fastest ? Math.min(95, Math.round((60 / fastest) * 100)) : 0);
      return {
        pct,
        label: fastest !== null ? (fastest < 60 ? `Fastest: ${fastest}s (< 60s)` : `Fastest: ${fastest}s (Target: < 60s)`) : "No timed attempts yet",
        tip: "Select a 5-question sprint and swiftly answer the questions you are confident about."
      };
    }
    case "streak_master": {
      const current = Math.min(3, profile.streak || 0);
      const pct = isUnlocked || current >= 3 ? 100 : Math.round((current / 3) * 100);
      return {
        pct,
        label: `${current} / 3 days streak`,
        tip: "Play at least one quiz or Daily Spark challenge every day to build your flame streak."
      };
    }
    case "ai_slayer": {
      const pct = isUnlocked ? 100 : 0;
      return {
        pct,
        label: isUnlocked ? "ByteBot Defeated! 🏆" : "0 / 1 win against ByteBot",
        tip: "Head over to Play > Computer Match and outscore ByteBot in a 5-question match."
      };
    }
    case "friendship_goal": {
      const pct = isUnlocked ? 100 : 0;
      return {
        pct,
        label: isUnlocked ? "Pass & Play Completed! 👥" : "0 / 1 match completed",
        tip: "Head over to Play > Pass & Play and complete a 2-player local party match."
      };
    }
    case "coin_hoarder": {
      const current = Math.min(300, profile.coins || 0);
      const pct = isUnlocked || current >= 300 ? 100 : Math.round((current / 300) * 100);
      return {
        pct,
        label: `${current} / 300 coins collected`,
        tip: "Earn +20 coins for every correct question and +50 for match victories."
      };
    }
    case "polymath": {
      const catCount = new Set(attempts.map(a => a.category).filter(Boolean)).size;
      const current = Math.min(6, catCount);
      const pct = isUnlocked || current >= 6 ? 100 : Math.round((current / 6) * 100);
      return {
        pct,
        label: `${current} / 6 disciplines practiced`,
        tip: "Complete practice quizzes in Technology, Academics, General, Competitive, Sports, and Entertainment."
      };
    }
    default:
      return { pct: isUnlocked ? 100 : 0, label: isUnlocked ? "Unlocked" : "Locked", tip: "Continue practicing to earn achievements." };
  }
}

// Open Prestige Badge Details Modal
function openBadgeDetailModal(badge, isUnlocked, progressInfo, isCelebration = false) {
  const modal = document.getElementById("badgeDetailModal");
  if (!modal) return;
  playGameSound("click");

  const emojiEl = document.getElementById("badgeModalEmoji");
  const titleEl = document.getElementById("badgeModalTitle");
  const statusEl = document.getElementById("badgeModalStatus");
  const descEl = document.getElementById("badgeModalDesc");
  const pctEl = document.getElementById("badgeModalProgressPct");
  const fillEl = document.getElementById("badgeModalProgressFill");
  const labelEl = document.getElementById("badgeModalProgressLabel");
  const tipEl = document.getElementById("badgeModalTipText");
  const actionBtn = document.getElementById("badgeModalActionBtn");

  if (emojiEl) emojiEl.textContent = badge.emoji;
  if (titleEl) {
    titleEl.textContent = isCelebration ? `🎉 Achievement Earned: ${badge.title}` : badge.title;
  }
  if (statusEl) {
    statusEl.className = "badge-status-pill " + (isUnlocked ? "status-unlocked" : "status-locked");
    statusEl.textContent = isUnlocked ? "✓ Unlocked" : "🔒 In Progress";
  }
  if (descEl) descEl.textContent = badge.desc;
  if (pctEl) pctEl.textContent = progressInfo.pct + "%";
  if (fillEl) fillEl.style.width = progressInfo.pct + "%";
  if (labelEl) labelEl.textContent = progressInfo.label;
  if (tipEl) tipEl.textContent = progressInfo.tip;

  if (actionBtn) {
    if (isUnlocked) {
      actionBtn.textContent = "Celebrate Achievement ✨";
      actionBtn.setAttribute("data-unlocked", "true");
    } else {
      actionBtn.textContent = "Play Quiz to Progress 🚀";
      actionBtn.setAttribute("data-unlocked", "false");
    }
  }

  modal.style.display = "flex";
  const closeBtn = document.getElementById("closeBadgeModalBtn");
  if (closeBtn) closeBtn.focus();
}

// Render Interactive Prestige Badges Grid in Rewards View
function renderRewardsBadges() {
  const container = document.getElementById("badgesGrid");
  if (!container) return;
  const profile = getPlayerProfile();
  const attempts = getStoredAttempts();
  const unlocked = new Set(profile.unlockedBadges || []);

  // Update header counters
  const unlockedCountEl = document.getElementById("badgesUnlockedCount");
  if (unlockedCountEl) unlockedCountEl.textContent = unlocked.size;
  const totalCountEl = document.getElementById("badgesTotalCount");
  if (totalCountEl) totalCountEl.textContent = PRESTIGE_BADGES.length;

  container.innerHTML = PRESTIGE_BADGES.map(b => {
    const isUnlocked = unlocked.has(b.id);
    const prog = computeBadgeProgress(b, profile, attempts);
    return `
      <div class="badge-gallery-card ${isUnlocked ? 'unlocked' : 'locked'}" tabindex="0" role="button" data-badge-id="${b.id}" aria-label="${escapeHtml(b.title)} badge: ${isUnlocked ? 'Unlocked' : 'Locked'}. ${escapeHtml(b.desc)}">
        <div class="badge-gallery-header">
          <div class="badge-gallery-icon-wrap">
            <span class="badge-gallery-icon" aria-hidden="true">${b.emoji}</span>
          </div>
          <span class="badge-gallery-status ${isUnlocked ? 'unlocked' : 'locked'}">
            ${isUnlocked ? '✓ Unlocked' : '🔒 In Progress'}
          </span>
        </div>
        <div class="badge-gallery-body">
          <h3 class="badge-gallery-title">${escapeHtml(b.title)}</h3>
          <p class="badge-gallery-desc">${escapeHtml(b.desc)}</p>
        </div>
        <div class="badge-gallery-footer">
          <div class="badge-gallery-progress-wrap">
            <div class="badge-gallery-progress-labels">
              <span>${escapeHtml(prog.label)}</span>
              <span>${prog.pct}%</span>
            </div>
            <div class="badge-gallery-progress-bar">
              <div class="badge-gallery-progress-fill" style="width: ${prog.pct}%"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Attach interactive click and keyboard triggers
  container.querySelectorAll(".badge-gallery-card").forEach(card => {
    const bId = card.getAttribute("data-badge-id");
    const badge = PRESTIGE_BADGES.find(x => x.id === bId);
    if (!badge) return;

    const triggerOpen = () => {
      const isUnlocked = unlocked.has(badge.id);
      const prog = computeBadgeProgress(badge, profile, attempts);
      openBadgeDetailModal(badge, isUnlocked, prog);
    };

    card.addEventListener("click", triggerOpen);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        triggerOpen();
      }
    });
  });
}

// Render Avatar Picker Grid in Profile View
function renderAvatarPicker() {
  const container = document.getElementById("avatarPickerGrid");
  if (!container) return;
  const profile = getPlayerProfile();

  container.innerHTML = AVATAR_OPTIONS.map(emoji => `
    <button type="button" class="avatar-pick-btn ${emoji === profile.avatar ? 'selected' : ''}" data-avatar="${emoji}" aria-label="Select avatar ${emoji}">
      <span>${emoji}</span>
    </button>
  `).join("");

  container.querySelectorAll(".avatar-pick-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      playGameSound("click");
      const chosen = btn.getAttribute("data-avatar");
      const prof = getPlayerProfile();
      prof.avatar = chosen;
      savePlayerProfile(prof);
      renderAvatarPicker();
    });
  });
}

// Interactive Player Profile Detail Modal
function openPlayerDetailModal(player) {
  const modal = document.getElementById("playerDetailModal");
  if (!modal) return;
  playGameSound("click");

  const avatarEl = document.getElementById("playerModalAvatar");
  const rankEl = document.getElementById("playerModalRank");
  const nameEl = document.getElementById("playerModalName");
  const tierEl = document.getElementById("playerModalTier");
  const typeEl = document.getElementById("playerModalType");
  const accEl = document.getElementById("playerModalAccuracy");
  const coinsEl = document.getElementById("playerModalCoins");
  const discEl = document.getElementById("playerModalDiscipline");
  const streakEl = document.getElementById("playerModalStreak");
  const playBtn = document.getElementById("playerModalPlayBtn");

  if (avatarEl) avatarEl.textContent = player.avatar || "👤";
  if (rankEl) rankEl.textContent = "#" + (player.rank || 1);
  if (nameEl) nameEl.textContent = player.name + (player.isUser ? " (You)" : "");
  if (tierEl) tierEl.textContent = player.badge || "Trivia Cadet";
  if (typeEl) {
    if (player.isUser) {
      typeEl.textContent = "Local Player Profile (This Device)";
      typeEl.style.background = "rgba(16, 185, 129, 0.12)";
      typeEl.style.color = "#047857";
    } else {
      typeEl.textContent = "Simulated Community Competitor (Demo Player)";
      typeEl.style.background = "rgba(124, 58, 237, 0.08)";
      typeEl.style.color = "var(--text-muted)";
    }
  }
  if (accEl) accEl.textContent = player.accuracy || "0%";
  if (coinsEl) coinsEl.textContent = "🪙 " + (player.coins || 0);
  if (discEl) {
    const discName = player.discipline || "General";
    discEl.textContent = discName.charAt(0).toUpperCase() + discName.slice(1);
  }
  if (streakEl) streakEl.textContent = "🔥 " + (player.streak || "1 Day");

  if (playBtn) {
    if (player.isUser) {
      playBtn.textContent = "Practice in Arena ⚡";
    } else {
      playBtn.textContent = `Challenge ${player.name} in Arena ⚡`;
    }
  }

  modal.style.display = "flex";
  const closeBtn = document.getElementById("closePlayerModalBtn");
  if (closeBtn) closeBtn.focus();
}

// Global Leaderboard State & Live Score Counter Animation
let currentLeaderboardTimeframe = "today";
let currentLeaderboardCategory = "all";
let currentLeaderboardSearchQuery = "";
const lastKnownRanks = new Map();

function animateNumber(element, start, end, duration = 650, prefix = "", suffix = "") {
  if (!element) return;
  const isReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (isReduced) {
    element.textContent = prefix + end + suffix;
    return;
  }
  const startTime = performance.now();
  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (end - start) * ease);
    element.textContent = prefix + current + suffix;
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.textContent = prefix + end + suffix;
    }
  };
  requestAnimationFrame(step);
}

// Refresh Leaderboard with Animated Feedback
function refreshLeaderboardData() {
  const refreshBtn = document.getElementById("leaderboardRefreshBtn");
  const listContainer = document.getElementById("leaderboardList");
  playGameSound("click");
  if (refreshBtn) refreshBtn.classList.add("is-refreshing");
  if (listContainer) {
    listContainer.style.opacity = "0.5";
    listContainer.style.transition = "opacity 0.2s ease";
  }
  setTimeout(() => {
    renderLeaderboard(currentLeaderboardTimeframe, currentLeaderboardCategory);
    if (listContainer) {
      listContainer.style.opacity = "1";
    }
    if (refreshBtn) refreshBtn.classList.remove("is-refreshing");
    const updatedEl = document.getElementById("leaderboardUpdatedTime");
    if (updatedEl) {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      updatedEl.textContent = `Updated at ${timeStr}`;
    }
  }, 350);
}

function renderLeaderboard(timeframe = "today", category = "all") {
  currentLeaderboardTimeframe = timeframe;
  currentLeaderboardCategory = category;

  const podiumContainer = document.getElementById("podiumContainer");
  const listContainer = document.getElementById("leaderboardList");
  if (!podiumContainer || !listContainer) return;

  const profile = getPlayerProfile();
  const attempts = getStoredAttempts();

  // 1. Get base simulated list for chosen timeframe
  const baseSimulated = (COMMUNITY_LEADERS[timeframe] || COMMUNITY_LEADERS.today).map(item => ({ ...item }));

  // 2. Adjust simulated competitor scores if a specific discipline is selected
  let processedSimulated = baseSimulated.map(item => {
    if (category !== "all") {
      const match = item.discipline === category;
      const baseNum = parseInt(item.accuracy, 10) || 85;
      const adjustedNum = match ? Math.min(100, baseNum + 4) : Math.max(68, baseNum - 8);
      const adjustedCoins = match ? Math.round(item.coins * 1.15) : Math.round(item.coins * 0.85);
      return {
        ...item,
        accuracy: adjustedNum + "%",
        coins: adjustedCoins,
        sortScore: adjustedCoins
      };
    }
    return {
      ...item,
      sortScore: item.coins
    };
  });

  // 3. Compute local user statistics
  const userCategoryAttempts = category === "all" ? attempts : attempts.filter(a => a.category === category);
  const userAccNum = userCategoryAttempts.length
    ? Math.round(userCategoryAttempts.reduce((s, a) => s + (a.percentage || 0), 0) / userCategoryAttempts.length)
    : 0;
  const userCoins = profile.coins || 150;
  const userStreak = (profile.streak || 1) + " Days";

  // Create local user competitor entry
  const userCompetitor = {
    name: profile.name || "QuizMaster",
    avatar: profile.avatar || "🦊",
    accuracy: userAccNum + "%",
    coins: userCoins,
    badge: `Level ${profile.level || 1} Cadet`,
    discipline: category === "all" ? "Multi-Discipline" : category,
    streak: userStreak,
    isUser: true,
    isSimulated: false,
    sortScore: userCoins
  };

  // 4. Combine simulated competitors with the local player and rank smoothly
  const allCompetitors = [...processedSimulated, userCompetitor];
  allCompetitors.sort((a, b) => b.sortScore - a.sortScore);
  allCompetitors.forEach((item, idx) => {
    item.rank = idx + 1;
  });

  // Calculate genuine rank change if tracked previously
  allCompetitors.forEach(item => {
    if (lastKnownRanks.has(item.name)) {
      const prev = lastKnownRanks.get(item.name);
      item.rankDiff = prev - item.rank; // Positive = climbed up
    } else {
      item.rankDiff = 0;
    }
    lastKnownRanks.set(item.name, item.rank);
  });

  // 5. Update Sticky "Your Rank" Strip
  const userRank = userCompetitor.rank;
  const userRankStrip = document.getElementById("userRankStrip");
  const userRankPos = document.getElementById("userRankPos");
  const userRankName = document.getElementById("userRankName");
  const userRankSubtitle = document.getElementById("userRankSubtitle");
  const userRankCoins = document.getElementById("userRankCoins");

  if (userRankStrip) {
    userRankStrip.setAttribute("data-user-rank", userRank);
  }
  if (userRankPos) userRankPos.textContent = "#" + userRank;
  if (userRankName) userRankName.textContent = `${userCompetitor.name} (${userCompetitor.avatar}) (YOU)`;
  if (userRankSubtitle) {
    userRankSubtitle.textContent = `${userCompetitor.badge} • ${userCompetitor.accuracy} Acc • ${userCompetitor.streak}`;
  }
  if (userRankCoins) {
    animateNumber(userRankCoins, 0, userCompetitor.coins, 600);
  }

  // 6. Handle Search Filter
  const q = currentLeaderboardSearchQuery.trim().toLowerCase();
  const searchActive = q.length > 0;
  const filteredCompetitors = searchActive
    ? allCompetitors.filter(c => c.name.toLowerCase().includes(q))
    : allCompetitors;

  // Search Clear button visibility
  const searchClearBtn = document.getElementById("leaderboardSearchClearBtn");
  if (searchClearBtn) {
    searchClearBtn.style.display = searchActive ? "flex" : "none";
  }

  // If search is active and nothing matches, show empty search state
  if (searchActive && filteredCompetitors.length === 0) {
    podiumContainer.innerHTML = "";
    listContainer.innerHTML = `
      <div class="leaderboard-empty-search" style="text-align: center; padding: 40px 18px; background: var(--surface-card); border-radius: var(--radius-lg); border: 1.5px dashed var(--border-light); margin: 12px 0;">
        <div style="font-size: 2.2rem; margin-bottom: 8px;">🔍</div>
        <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-main); margin-bottom: 6px;">No players found</h3>
        <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 14px;">No competitors match "${escapeHtml(currentLeaderboardSearchQuery)}". Try another name or clear your search.</p>
        <button type="button" class="btn btn-secondary" id="emptySearchResetBtn" style="padding: 7px 18px; font-size: 0.85rem;">Clear Search</button>
      </div>
    `;
    const resetBtn = document.getElementById("emptySearchResetBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        const input = document.getElementById("leaderboardSearchInput");
        if (input) input.value = "";
        currentLeaderboardSearchQuery = "";
        renderLeaderboard(currentLeaderboardTimeframe, currentLeaderboardCategory);
      });
    }
    return;
  }

  // 7. Render Top 3 Podium
  // In normal mode, show rank 1, 2, 3. In search mode, show top 3 filtered results.
  const top1 = filteredCompetitors.find(x => x.rank === 1) || (searchActive ? filteredCompetitors[0] : null);
  const top2 = filteredCompetitors.find(x => x.rank === 2) || (searchActive ? filteredCompetitors[1] : null);
  const top3 = filteredCompetitors.find(x => x.rank === 3) || (searchActive ? filteredCompetitors[2] : null);

  const renderPodiumCard = (p, rankNum, pedestalClass, tagClass) => {
    if (!p) return "";
    const isCrown = rankNum === 1;
    const diffBadge = p.rankDiff > 0
      ? `<span class="rank-change rank-up" title="Rank up by ${p.rankDiff}">▲ ${p.rankDiff}</span>`
      : p.rankDiff < 0
      ? `<span class="rank-change rank-down" title="Rank down by ${Math.abs(p.rankDiff)}">▼ ${Math.abs(p.rankDiff)}</span>`
      : "";

    return `
      <div class="podium-card rank-${rankNum}" tabindex="0" role="button" data-podium-rank="${p.rank}" aria-label="Rank ${p.rank}: ${escapeHtml(p.name)}. Accuracy: ${p.accuracy}, Coins: ${p.coins}">
        ${isCrown ? '<div class="podium-crown" aria-hidden="true">👑</div>' : ''}
        <div class="podium-avatar-wrap">
          <span class="podium-avatar">${p.avatar}</span>
          <span class="podium-rank-tag ${tagClass}">${p.rank}</span>
        </div>
        <h3 class="podium-name">
          ${escapeHtml(p.name)}
          ${p.isUser ? '<span class="leader-you-pill">YOU</span>' : '<span class="demo-player-pill">Demo</span>'}
          ${diffBadge}
        </h3>
        <span class="podium-badge-pill">${escapeHtml(p.badge)}</span>
        <span class="podium-score" id="podiumAcc_${p.rank}">${p.accuracy}</span>
        <span class="podium-coins" id="podiumCoins_${p.rank}">🪙 ${p.coins}</span>
        <div class="podium-pedestal ${pedestalClass}">${rankNum === 1 ? '1st' : rankNum === 2 ? '2nd' : '3rd'}</div>
      </div>
    `;
  };

  podiumContainer.innerHTML = `
    <!-- 2nd Place -->
    ${top2 ? renderPodiumCard(top2, 2, "pedestal-2", "tag-silver") : ''}
    <!-- 1st Place (Center Hero) -->
    ${top1 ? renderPodiumCard(top1, 1, "pedestal-1", "tag-gold") : ''}
    <!-- 3rd Place -->
    ${top3 ? renderPodiumCard(top3, 3, "pedestal-3", "tag-bronze") : ''}
  `;

  // Attach click & keyboard triggers to podium cards
  podiumContainer.querySelectorAll(".podium-card").forEach(card => {
    const r = parseInt(card.getAttribute("data-podium-rank"), 10);
    const p = allCompetitors.find(x => x.rank === r);
    if (!p) return;

    card.addEventListener("click", () => openPlayerDetailModal(p));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openPlayerDetailModal(p);
      }
    });
  });

  // Animate podium coin counters
  [top1, top2, top3].forEach(p => {
    if (!p) return;
    const el = document.getElementById(`podiumCoins_${p.rank}`);
    if (el) {
      animateNumber(el, 0, p.coins, 600, "🪙 ");
    }
  });

  // 8. Rankings List (Rank 4+, or remaining filtered results)
  const podiumRanks = new Set([top1?.rank, top2?.rank, top3?.rank].filter(Boolean));
  const listItems = filteredCompetitors.filter(x => !podiumRanks.has(x.rank));

  if (listItems.length === 0 && !searchActive) {
    listContainer.innerHTML = `
      <div style="text-align: center; padding: 24px; color: var(--text-muted); background: var(--surface-card); border-radius: var(--radius-md); border: 1px dashed var(--border-light);">
        <p style="margin: 0; font-weight: 700;">No competitors found for this discipline filter.</p>
      </div>
    `;
  } else if (listItems.length === 0 && searchActive) {
    listContainer.innerHTML = `
      <div style="text-align: center; padding: 18px; color: var(--text-muted);">
        <p style="margin: 0; font-size: 0.85rem; font-weight: 700;">All matching competitors are shown on the podium above.</p>
      </div>
    `;
  } else {
    listContainer.innerHTML = listItems.map(item => {
      const diffBadge = item.rankDiff > 0
        ? `<span class="rank-change rank-up" title="Rank up by ${item.rankDiff}">▲ ${item.rankDiff}</span>`
        : item.rankDiff < 0
        ? `<span class="rank-change rank-down" title="Rank down by ${Math.abs(item.rankDiff)}">▼ ${Math.abs(item.rankDiff)}</span>`
        : "";

      return `
        <div class="leader-item ${item.isUser ? 'is-user' : ''}" tabindex="0" role="button" data-player-rank="${item.rank}" aria-label="Rank ${item.rank}: ${escapeHtml(item.name)}. Accuracy: ${item.accuracy}, Coins: ${item.coins}">
          <div class="leader-left">
            <span class="leader-pos">#${item.rank}</span>
            <span class="leader-avatar">${item.avatar}</span>
            <div class="leader-meta">
              <h4>
                ${escapeHtml(item.name)}
                ${item.isUser ? '<span class="leader-you-pill">YOU</span>' : '<span class="demo-player-pill">Demo</span>'}
                ${diffBadge}
              </h4>
              <span class="leader-tier">${escapeHtml(item.badge)} • ${escapeHtml(item.discipline)}</span>
            </div>
          </div>
          <div class="leader-right">
            <span class="leader-acc" id="rowAcc_${item.rank}">${item.accuracy}</span>
            <span class="leader-coins" id="rowCoins_${item.rank}">🪙 ${item.coins}</span>
            <span class="leader-info-btn" aria-hidden="true">ⓘ</span>
          </div>
        </div>
      `;
    }).join("");

    // Attach click & keyboard triggers to list rows
    listContainer.querySelectorAll(".leader-item").forEach(row => {
      const r = parseInt(row.getAttribute("data-player-rank"), 10);
      const p = allCompetitors.find(x => x.rank === r);
      if (!p) return;

      row.addEventListener("click", () => openPlayerDetailModal(p));
      row.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openPlayerDetailModal(p);
        }
      });
    });

    // Animate row coin counters
    listItems.forEach(item => {
      const el = document.getElementById(`rowCoins_${item.rank}`);
      if (el) {
        animateNumber(el, 0, item.coins, 600, "🪙 ");
      }
    });
  }

  // 9. Update timeframe tab active indicators
  document.querySelectorAll(".timeframe-tab").forEach(tab => {
    const isAct = tab.getAttribute("data-timeframe") === timeframe;
    tab.classList.toggle("active", isAct);
    tab.setAttribute("aria-selected", isAct ? "true" : "false");
  });

  // 10. Update category filter pills active indicators & ensure visibility
  document.querySelectorAll("#leaderboardCategoryBar .lb-category-pill").forEach(pill => {
    const isAct = (pill.getAttribute("data-cat") || "all") === category;
    pill.classList.toggle("active", isAct);
    pill.setAttribute("aria-selected", isAct ? "true" : "false");
    if (isAct && typeof pill.scrollIntoView === "function") {
      try {
        pill.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      } catch (err) {}
    }
  });

  // 11. Update Status Tag with dataset context
  const statusEl = document.getElementById("leaderboardStatusTag");
  if (statusEl) {
    const label = timeframe === "today" ? "Local & Demo Data" : "Historical Demo Data";
    statusEl.setAttribute("title", `${label} stored on device`);
  }
}

// ==========================================================================
// Computer Match Arena (Play Against Simulated Bot ByteBot)
// ==========================================================================
const compMatchState = {
  questions: [],
  currentIndex: 0,
  playerScore: 0,
  botScore: 0,
  isProcessing: false
};

function startComputerMatch() {
  // Select 5 random questions across bank
  compMatchState.questions = selectQuizQuestions("all", "all", 5);
  compMatchState.currentIndex = 0;
  compMatchState.playerScore = 0;
  compMatchState.botScore = 0;
  compMatchState.isProcessing = false;

  const profile = getPlayerProfile();
  const compPlayerAvatar = document.getElementById("compPlayerAvatar");
  if (compPlayerAvatar) compPlayerAvatar.textContent = profile.avatar;
  const compPlayerName = document.getElementById("compPlayerName");
  if (compPlayerName) compPlayerName.textContent = profile.name;

  const pScore = document.getElementById("compPlayerLiveScore");
  if (pScore) pScore.textContent = "0";
  const bScore = document.getElementById("compBotLiveScore");
  if (bScore) bScore.textContent = "0";

  const resultCard = document.getElementById("botMatchResultCard");
  if (resultCard) resultCard.style.display = "none";
  const qCard = document.getElementById("botQuestionCard");
  if (qCard) qCard.style.display = "block";

  renderComputerQuestion();
  switchView("viewComputerMatch");
}

function renderComputerQuestion() {
  const q = compMatchState.questions[compMatchState.currentIndex];
  if (!q) {
    finishComputerMatch();
    return;
  }

  const categoryBadge = document.getElementById("botCategoryBadge");
  if (categoryBadge) categoryBadge.textContent = q.category.toUpperCase();
  const counter = document.getElementById("botQuestionCounter");
  if (counter) counter.textContent = `Question ${compMatchState.currentIndex + 1} of 5`;
  const qText = document.getElementById("botQuestionText");
  if (qText) qText.textContent = q.question;

  const thinkingPill = document.getElementById("botThinkingPill");
  if (thinkingPill) thinkingPill.style.display = "none";

  const optionsContainer = document.getElementById("botOptionsContainer");
  if (!optionsContainer) return;
  optionsContainer.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.innerHTML = `<span class="opt-prefix">${String.fromCharCode(65 + idx)}</span> <span class="opt-text">${escapeHtml(opt)}</span>`;
    btn.addEventListener("click", () => handleComputerPlayerAnswer(idx));
    optionsContainer.appendChild(btn);
  });
}

function handleComputerPlayerAnswer(chosenIndex) {
  if (compMatchState.isProcessing) return;
  compMatchState.isProcessing = true;

  const q = compMatchState.questions[compMatchState.currentIndex];
  const isCorrect = (chosenIndex === q.correctAnswer);
  if (isCorrect) {
    compMatchState.playerScore++;
    playGameSound("correct");
  } else {
    playGameSound("incorrect");
  }

  const pScore = document.getElementById("compPlayerLiveScore");
  if (pScore) pScore.textContent = compMatchState.playerScore;

  // Highlight player's selected button
  const optionsContainer = document.getElementById("botOptionsContainer");
  const buttons = optionsContainer.querySelectorAll(".option-btn");
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === chosenIndex) {
      btn.classList.add(isCorrect ? "correct-answer" : "wrong-answer");
    }
  });

  // Activate ByteBot thinking simulation
  const thinkingPill = document.getElementById("botThinkingPill");
  const thinkingText = document.getElementById("botThinkingText");
  if (thinkingPill) thinkingPill.style.display = "inline-flex";
  if (thinkingText) thinkingText.textContent = "ByteBot is calculating probabilities...";

  // Simulated latency 1.4s
  setTimeout(() => {
    // 75% accuracy probability for ByteBot
    const botRollsCorrect = Math.random() < 0.75;
    if (botRollsCorrect) {
      compMatchState.botScore++;
      if (thinkingText) thinkingText.textContent = "ByteBot answered correctly! (+1)";
    } else {
      if (thinkingText) thinkingText.textContent = "ByteBot miscalculated! (0)";
    }

    const bScore = document.getElementById("compBotLiveScore");
    if (bScore) bScore.textContent = compMatchState.botScore;

    // Advance to next question after 1.5s
    setTimeout(() => {
      compMatchState.currentIndex++;
      compMatchState.isProcessing = false;
      renderComputerQuestion();
    }, 1500);
  }, 1400);
}

function finishComputerMatch() {
  const qCard = document.getElementById("botQuestionCard");
  if (qCard) qCard.style.display = "none";
  const resultCard = document.getElementById("botMatchResultCard");
  if (!resultCard) return;
  resultCard.style.display = "block";

  const pScore = compMatchState.playerScore;
  const bScore = compMatchState.botScore;
  const titleEl = document.getElementById("botResultTitle");
  const descEl = document.getElementById("botResultDesc");
  const crownEl = document.getElementById("botResultCrown");

  if (pScore > bScore) {
    if (titleEl) titleEl.textContent = "Victory Over ByteBot! 🏆";
    if (descEl) descEl.textContent = `Final Score: ${pScore} - ${bScore}. You outsmarted the AI and earned +50 Coins!`;
    if (crownEl) crownEl.textContent = "👑";
    addPlayerCoins(50);
    playGameSound("victory");
    triggerCelebration();

    // Unlock AI Slayer badge
    const profile = getPlayerProfile();
    const badges = new Set(profile.unlockedBadges || []);
    badges.add("ai_slayer");
    profile.unlockedBadges = Array.from(badges);
    savePlayerProfile(profile);
  } else if (pScore === bScore) {
    if (titleEl) titleEl.textContent = "Honorable Draw! 🤝";
    if (descEl) descEl.textContent = `Final Score: ${pScore} - ${bScore}. An evenly matched intellectual clash! +25 Coins awarded.`;
    if (crownEl) crownEl.textContent = "⚡";
    addPlayerCoins(25);
    playGameSound("correct");
  } else {
    if (titleEl) titleEl.textContent = "ByteBot Claims Victory! 🤖";
    if (descEl) descEl.textContent = `Final Score: ${pScore} - ${bScore}. ByteBot took this round. Refine your tactics and challenge again!`;
    if (crownEl) crownEl.textContent = "🦾";
    playGameSound("incorrect");
  }
}

// ==========================================================================
// Friend Match Engine (Pass & Play Two-Player Experience)
// ==========================================================================
const friendMatchState = {
  questions: [],
  currentIndex: 0,
  p1Score: 0,
  p2Score: 0,
  p1Answer: null,
  p2Answer: null,
  currentTurn: 1, // 1 = Player 1, 2 = Player 2
  isLocked: false
};

function startFriendMatch() {
  friendMatchState.questions = selectQuizQuestions("all", "all", 5);
  friendMatchState.currentIndex = 0;
  friendMatchState.p1Score = 0;
  friendMatchState.p2Score = 0;
  friendMatchState.p1Answer = null;
  friendMatchState.p2Answer = null;
  friendMatchState.currentTurn = 1;
  friendMatchState.isLocked = false;

  const s1 = document.getElementById("friendP1LiveScore");
  if (s1) s1.textContent = "0";
  const s2 = document.getElementById("friendP2LiveScore");
  if (s2) s2.textContent = "0";

  const winCard = document.getElementById("friendWinnerCard");
  if (winCard) winCard.style.display = "none";
  const handoverCard = document.getElementById("friendHandoverCard");
  if (handoverCard) handoverCard.style.display = "none";
  const qCard = document.getElementById("friendQuestionCard");
  if (qCard) qCard.style.display = "block";

  renderFriendRound();
  switchView("viewFriendMatch");
}

function renderFriendRound() {
  const q = friendMatchState.questions[friendMatchState.currentIndex];
  if (!q) {
    finishFriendMatch();
    return;
  }

  const turnBanner = document.getElementById("friendTurnBanner");
  if (turnBanner) {
    turnBanner.textContent = `Round ${friendMatchState.currentIndex + 1}: ${friendMatchState.currentTurn === 1 ? "Player 1's Turn 🦊" : "Player 2's Turn 🦉"}`;
  }

  const categoryBadge = document.getElementById("friendCategoryBadge");
  if (categoryBadge) categoryBadge.textContent = q.category.toUpperCase();
  const counter = document.getElementById("friendQuestionCounter");
  if (counter) counter.textContent = `Question ${friendMatchState.currentIndex + 1} of 5`;
  const qText = document.getElementById("friendQuestionText");
  if (qText) qText.textContent = q.question;

  const optionsContainer = document.getElementById("friendOptionsContainer");
  if (!optionsContainer) return;
  optionsContainer.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.innerHTML = `<span class="opt-prefix">${String.fromCharCode(65 + idx)}</span> <span class="opt-text">${escapeHtml(opt)}</span>`;
    btn.addEventListener("click", () => handleFriendOptionClick(idx));
    optionsContainer.appendChild(btn);
  });
}

function handleFriendOptionClick(idx) {
  if (friendMatchState.isLocked) return;

  if (friendMatchState.currentTurn === 1) {
    friendMatchState.p1Answer = idx;
    playGameSound("click");

    // Hide question card and prompt device handover
    const qCard = document.getElementById("friendQuestionCard");
    if (qCard) qCard.style.display = "none";
    const handoverCard = document.getElementById("friendHandoverCard");
    if (handoverCard) handoverCard.style.display = "block";
  } else {
    // Player 2 selected
    friendMatchState.p2Answer = idx;
    friendMatchState.isLocked = true;

    const q = friendMatchState.questions[friendMatchState.currentIndex];
    const p1Correct = (friendMatchState.p1Answer === q.correctAnswer);
    const p2Correct = (friendMatchState.p2Answer === q.correctAnswer);

    if (p1Correct) friendMatchState.p1Score++;
    if (p2Correct) friendMatchState.p2Score++;

    const s1 = document.getElementById("friendP1LiveScore");
    if (s1) s1.textContent = friendMatchState.p1Score;
    const s2 = document.getElementById("friendP2LiveScore");
    if (s2) s2.textContent = friendMatchState.p2Score;

    // Highlight choices
    const optionsContainer = document.getElementById("friendOptionsContainer");
    const buttons = optionsContainer.querySelectorAll(".option-btn");
    buttons.forEach((btn, bIdx) => {
      btn.disabled = true;
      if (bIdx === q.correctAnswer) {
        btn.classList.add("correct-answer");
      } else if (bIdx === friendMatchState.p1Answer || bIdx === friendMatchState.p2Answer) {
        btn.classList.add("wrong-answer");
      }
    });

    const turnBanner = document.getElementById("friendTurnBanner");
    if (turnBanner) {
      turnBanner.textContent = `P1: ${p1Correct ? "Correct ✓" : "Missed ✗"} | P2: ${p2Correct ? "Correct ✓" : "Missed ✗"}`;
    }

    playGameSound(p1Correct || p2Correct ? "correct" : "incorrect");

    // Advance to next round after 2.2s
    setTimeout(() => {
      friendMatchState.currentIndex++;
      friendMatchState.currentTurn = 1;
      friendMatchState.p1Answer = null;
      friendMatchState.p2Answer = null;
      friendMatchState.isLocked = false;
      renderFriendRound();
    }, 2200);
  }
}

function finishFriendMatch() {
  const qCard = document.getElementById("friendQuestionCard");
  if (qCard) qCard.style.display = "none";
  const banner = document.getElementById("friendTurnBanner");
  if (banner) banner.style.display = "none";
  const winCard = document.getElementById("friendWinnerCard");
  if (!winCard) return;
  winCard.style.display = "block";

  const p1 = friendMatchState.p1Score;
  const p2 = friendMatchState.p2Score;
  const title = document.getElementById("friendWinnerText");
  const desc = document.getElementById("friendWinnerDesc");

  if (p1 > p2) {
    if (title) title.textContent = "Player 1 Claims Victory! 🦊👑";
    if (desc) desc.textContent = `Final Score: ${p1} - ${p2}. Congratulations Player 1!`;
  } else if (p2 > p1) {
    if (title) title.textContent = "Player 2 Claims Victory! 🦉👑";
    if (desc) desc.textContent = `Final Score: ${p2} - ${p1}. Congratulations Player 2!`;
  } else {
    if (title) title.textContent = "A Perfect Dead Heat! 🤝";
    if (desc) desc.textContent = `Final Score: ${p1} - ${p2}. Both players matched wits evenly!`;
  }

  addPlayerCoins(50);
  playGameSound("victory");
  triggerCelebration();

  // Unlock Friendship Goal badge
  const profile = getPlayerProfile();
  const badges = new Set(profile.unlockedBadges || []);
  badges.add("friendship_goal");
  profile.unlockedBadges = Array.from(badges);
  savePlayerProfile(profile);
}

// ==========================================================================
// Dedicated Answer Review Screen
// ==========================================================================
let dedicatedReviewFilter = "all";

function openDedicatedReviewScreen() {
  if (!appState.activeQuiz || !appState.activeQuiz.userAnswers) {
    switchView("viewHome");
    return;
  }
  renderDedicatedReviewList("all");
  switchView("viewReview");
}

function renderDedicatedReviewList(filterType = "all") {
  dedicatedReviewFilter = filterType;
  const container = document.getElementById("dedicatedReviewCardsList");
  if (!container || !appState.activeQuiz) return;

  const questions = appState.activeQuiz.questions || [];
  const userAnswers = appState.activeQuiz.userAnswers || [];

  const processed = questions.map((q, idx) => {
    const raw = userAnswers[idx];
    const selectedIdx = (raw && typeof raw === "object" && typeof raw.selectedIndex !== "undefined")
      ? raw.selectedIndex
      : (typeof raw === "number" ? raw : -1);
    const correctIdx = q.correctIndex !== undefined ? q.correctIndex : q.correctAnswer;
    const isCorrect = (raw && typeof raw === "object" && typeof raw.isCorrect === "boolean")
      ? raw.isCorrect
      : (selectedIdx === correctIdx && selectedIdx !== -1);
    const isUnanswered = selectedIdx === -1 || selectedIdx === null || selectedIdx === undefined;
    return { q, idx, raw, selectedIdx, correctIdx, isCorrect, isUnanswered };
  });

  const incorrectCount = processed.filter(item => !item.isCorrect).length;

  const countAll = document.getElementById("dedicatedReviewCountAll");
  if (countAll) countAll.textContent = questions.length;
  const countMistakes = document.getElementById("dedicatedReviewCountMistakes");
  if (countMistakes) countMistakes.textContent = incorrectCount;

  // Filter items
  const filtered = processed.filter(item => {
    if (filterType === "incorrect") {
      return !item.isCorrect;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <span style="font-size: 2.5rem;">🎉</span>
        <h4 style="margin-top: 10px; font-weight: 800; color: var(--primary-dark);">No Incorrect Answers!</h4>
        <p>You answered every single question in this selection correctly.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(({ q, idx, selectedIdx, correctIdx, isCorrect, isUnanswered }) => {
    const userOptionText = !isUnanswered && q.options && q.options[selectedIdx] ? q.options[selectedIdx] : "(No answer provided)";
    const correctOptionText = q.options && q.options[correctIdx] ? q.options[correctIdx] : "";

    return `
      <div class="review-item ${isCorrect ? 'correct-border' : 'incorrect-border'}" style="background: white; border-radius: var(--radius-lg); padding: 20px; margin-bottom: 16px; border: 1.5px solid ${isCorrect ? '#22c55e' : '#ef4444'}; box-shadow: var(--shadow-sm);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span class="badge badge-accent">${q.category.toUpperCase()} • ${q.difficulty.toUpperCase()}</span>
          <span style="font-weight: 800; color: ${isCorrect ? '#15803d' : '#b91c1c'}; font-size: 0.9rem;">
            ${isCorrect ? '✓ Correct (+100%)' : isUnanswered ? '— Unanswered (0%)' : '✗ Incorrect (0%)'}
          </span>
        </div>
        <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--primary-dark); margin-bottom: 14px;">Q${idx + 1}. ${escapeHtml(q.question)}</h3>

        <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.9rem; margin-bottom: 14px;">
          <div style="padding: 10px 14px; border-radius: var(--radius-md); background: ${isCorrect ? '#f0fdf4' : '#fef2f2'}; color: ${isCorrect ? '#166534' : '#991b1b'};">
            <strong>Your Answer:</strong> ${escapeHtml(userOptionText)}
          </div>
          ${!isCorrect ? `
            <div style="padding: 10px 14px; border-radius: var(--radius-md); background: #f0fdf4; color: #166534;">
              <strong>Correct Answer:</strong> ${escapeHtml(correctOptionText)}
            </div>
          ` : ''}
        </div>

        <div style="padding: 12px 14px; border-radius: var(--radius-md); background: #f8fafc; font-size: 0.88rem; line-height: 1.5; color: var(--text-body); border-left: 3px solid var(--primary);">
          <strong>Explanation:</strong> ${escapeHtml(q.explanation)}
        </div>
      </div>
    `;
  }).join("");

  // Update button active state
  const btnAll = document.getElementById("dedicatedReviewFilterAllBtn");
  if (btnAll) btnAll.classList.toggle("active-chip", filterType === "all");
  const btnMistakes = document.getElementById("dedicatedReviewFilterMistakesBtn");
  if (btnMistakes) btnMistakes.classList.toggle("active-chip", filterType === "incorrect");
}

// ==========================================================================
// 10A. Daily Personalized Growth Tip Engine
// ==========================================================================
function getDailyGrowthTip() {
  const attempts = getStoredAttempts();
  const profile = getPlayerProfile();

  // If 0 attempts: beginner tip
  if (!attempts || attempts.length === 0) {
    return {
      type: "beginner",
      pill: "Beginner Milestone",
      title: "Establish Your Baseline Ranking",
      desc: "Complete your first 5-question sprint in your favorite subject to measure your initial accuracy and unlock your Cadet rank.",
      actionText: "Take First Sprint 🚀",
      actionTarget: "setup",
      category: "technology"
    };
  }

  // 1. Check for recent mistakes to review
  const lastAttempt = attempts[0];
  const totalIncorrect = (lastAttempt.incorrect || 0) + (lastAttempt.unanswered || 0);
  if (totalIncorrect > 0 && (lastAttempt.scorePercentage !== undefined ? lastAttempt.scorePercentage : lastAttempt.percentage) < 100) {
    const catName = CATEGORY_NAMES[lastAttempt.category] || lastAttempt.category || "Quiz";
    const scoreVal = lastAttempt.scorePercentage !== undefined ? lastAttempt.scorePercentage : lastAttempt.percentage;
    return {
      type: "review_mistakes",
      pill: "Accuracy Booster",
      title: `Review Recent Mistakes in ${catName}`,
      desc: `You missed ${totalIncorrect} question${totalIncorrect > 1 ? 's' : ''} in your latest sprint (${scoreVal}% accuracy). Studying rationales builds long-term recall.`,
      actionText: "Review Mistakes 📖",
      actionTarget: "review",
      category: lastAttempt.category
    };
  }

  // 2. Check for weaker category (accuracy < 75% with at least 1 attempt)
  const categoryStats = {};
  attempts.forEach(a => {
    if (!a.category) return;
    if (!categoryStats[a.category]) {
      categoryStats[a.category] = { totalPct: 0, count: 0 };
    }
    const pct = a.scorePercentage !== undefined ? a.scorePercentage : (a.percentage || 0);
    categoryStats[a.category].totalPct += pct;
    categoryStats[a.category].count++;
  });

  let weakestCat = null;
  let lowestAvg = 100;
  for (const [cat, data] of Object.entries(categoryStats)) {
    const avg = Math.round(data.totalPct / data.count);
    if (avg < lowestAvg && avg < 75) {
      lowestAvg = avg;
      weakestCat = cat;
    }
  }

  if (weakestCat) {
    const catName = CATEGORY_NAMES[weakestCat] || weakestCat;
    return {
      type: "weak_category",
      pill: "Targeted Growth",
      title: `Level Up Your ${catName} Mastery`,
      desc: `Your current accuracy in ${catName} averages ${lowestAvg}%. A focused 5-question sprint today will reinforce your weakest conceptual gaps.`,
      actionText: `Practise ${catName} 🎯`,
      actionTarget: "setup",
      category: weakestCat
    };
  }

  // 3. Daily streak builder tip
  if ((profile.streak || 0) < 3) {
    return {
      type: "streak",
      pill: "Daily Consistency",
      title: "Build Your 3-Day Activity Streak",
      desc: `You're currently on a ${profile.streak || 1}-day streak! Answering 5 questions daily accelerates retention by 40% and earns you +40 bonus coins.`,
      actionText: "Play Daily Spark ⚡",
      actionTarget: "daily_challenge"
    };
  }

  // 4. Speed & accuracy calibration tip
  const fastAttempts = attempts.filter(a => a.durationSeconds && a.durationSeconds < 90 && (a.scorePercentage >= 80 || a.percentage >= 80));
  if (fastAttempts.length < 2) {
    return {
      type: "speed",
      pill: "Speed & Accuracy",
      title: "Calibrate Speed Without Sacrificing Accuracy",
      desc: "Try completing a 5-question sprint in under 60 seconds while keeping accuracy above 80% to earn the prestigious Speed Demon badge.",
      actionText: "Try Timed Exam ⏱️",
      actionTarget: "setup_exam"
    };
  }

  // 5. Default champion tip
  return {
    type: "polymath",
    pill: "Multi-Discipline",
    title: "Broaden Your Subject Mastery",
    desc: "You have strong command across your core subjects! Challenge yourself in an unexplored discipline to climb toward the top podium spot.",
    actionText: "Discover New Topics 🌍",
    actionTarget: "discover"
  };
}

function renderDailyGrowthTip() {
  const tip = getDailyGrowthTip();

  const handleAction = () => {
    playGameSound("click");
    if (tip.actionTarget === "review") {
      if (appState.activeQuiz && appState.activeQuiz.userAnswers && appState.activeQuiz.userAnswers.length) {
        openDedicatedReviewScreen();
      } else {
        appState.quizConfig.category = tip.category || "technology";
        switchView("viewSetup");
      }
    } else if (tip.actionTarget === "setup") {
      appState.quizConfig.category = tip.category || "technology";
      appState.quizConfig.difficulty = "medium";
      switchView("viewSetup");
    } else if (tip.actionTarget === "setup_exam") {
      appState.quizConfig.mode = "exam";
      switchView("viewSetup");
    } else if (tip.actionTarget === "daily_challenge") {
      switchView("viewDailyChallenge");
    } else if (tip.actionTarget === "discover") {
      switchView("viewDiscover");
    } else {
      switchView("viewPlay");
    }
  };

  ["leaderboardGrowthTipCard", "dashboardGrowthTipCard"].forEach(id => {
    const card = document.getElementById(id);
    if (!card) return;

    card.innerHTML = `
      <div class="growth-tip-icon-wrap" aria-hidden="true">💡</div>
      <div class="growth-tip-content">
        <span class="growth-tip-pill">${escapeHtml(tip.pill)}</span>
        <h3 class="growth-tip-title">${escapeHtml(tip.title)}</h3>
        <p class="growth-tip-desc">${escapeHtml(tip.desc)}</p>
      </div>
      <button type="button" class="growth-tip-action-btn" id="${id}ActionBtn">${escapeHtml(tip.actionText)}</button>
    `;

    const btn = document.getElementById(`${id}ActionBtn`);
    if (btn) btn.addEventListener("click", handleAction);
  });
}

// ==========================================================================
// 10B. Redesigned Discover Screen Engine
// ==========================================================================
let discoverSelectedCategory = "all";
let discoverSelectedDiff = "all";
let discoverSelectedFormat = "all";

const DISCOVER_CATEGORIES = [
  { id: "technology", name: "Technology", count: 45, icon: "💻", desc: "Software, algorithms, hardware, and web architecture" },
  { id: "academics", name: "Academics", count: 45, icon: "📐", desc: "Mathematics, physics, chemistry, and literature" },
  { id: "general", name: "General Knowledge", count: 45, icon: "🌍", desc: "World geography, history, politics, and culture" },
  { id: "competitive", name: "Competitive Exams", count: 45, icon: "🎯", desc: "Aptitude, logical reasoning, and verbal analysis" },
  { id: "sports", name: "Sports", count: 45, icon: "⚽", desc: "Athletics, cricket, Olympics, and records" },
  { id: "entertainment", name: "Entertainment", count: 45, icon: "🎬", desc: "Cinema, music, pop culture, and television" }
];

const DISCOVER_FORMATS = [
  { id: "sprint", name: "5-Question Sprint", icon: "⚡", desc: "Fast-paced learning mode with instant answer rationales." },
  { id: "deep_dive", name: "10-Question Exam", icon: "⏱️", desc: "Timed examination under test conditions." },
  { id: "bot", name: "VS ByteBot AI Arena", icon: "🤖", desc: "Simulated real-time AI duel with latency & live scores." },
  { id: "friend", name: "Pass & Play 2-Player", icon: "👥", desc: "Two players take turns answering on one shared device." },
  { id: "daily", name: "Daily Spark Sprint", icon: "🌟", desc: "Curated 5-question daily drill with 2X coin rewards." }
];

function renderDiscoverScreen() {
  const searchInput = document.getElementById("discoverSearchInput");
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";

  // 1. Filter Category Cards
  let matchedCategories = DISCOVER_CATEGORIES.filter(c => {
    const matchCategoryFilter = (discoverSelectedCategory === "all" || c.id === discoverSelectedCategory);
    const matchQuery = !query || c.name.toLowerCase().includes(query) || c.desc.toLowerCase().includes(query) || c.id.toLowerCase().includes(query);
    return matchCategoryFilter && matchQuery;
  });

  // 2. Filter Formats
  let matchedFormats = DISCOVER_FORMATS.filter(f => {
    const matchFormatFilter = (discoverSelectedFormat === "all" || f.id === discoverSelectedFormat);
    const matchQuery = !query || f.name.toLowerCase().includes(query) || f.desc.toLowerCase().includes(query);
    return matchFormatFilter && matchQuery;
  });

  // 3. Render Recommendation Card
  renderDiscoverRecommendations();

  // 4. Render Recently Played Section
  renderDiscoverRecent();

  // 5. Render Category Cards Grid
  const catGrid = document.getElementById("discoverCategoryGrid");
  if (catGrid) {
    catGrid.innerHTML = matchedCategories.map(cat => `
      <div class="discover-cat-card" data-category="${cat.id}" tabindex="0" role="button" aria-label="${cat.name} category: ${cat.count} questions. ${cat.desc}">
        <div>
          <div class="discover-cat-top">
            <div class="discover-cat-icon" aria-hidden="true">${cat.icon}</div>
            <div>
              <h3 class="discover-cat-name">${cat.name}</h3>
              <span class="discover-cat-count">${cat.count} Questions • Verified</span>
            </div>
          </div>
          <p class="discover-cat-desc">${cat.desc}</p>
        </div>
        <div class="discover-cat-footer">
          <span style="font-size: 0.76rem; font-weight: 700; color: var(--text-muted);">Format: ${discoverSelectedFormat === 'all' ? 'Standard Sprint' : discoverSelectedFormat.toUpperCase()}</span>
          <button type="button" class="discover-cat-btn">Play Now ➔</button>
        </div>
      </div>
    `).join("");

    catGrid.querySelectorAll(".discover-cat-card").forEach(card => {
      card.addEventListener("click", () => {
        playGameSound("click");
        const catId = card.getAttribute("data-category");
        appState.quizConfig.category = catId;
        if (discoverSelectedDiff !== "all") {
          appState.quizConfig.difficulty = discoverSelectedDiff;
        }
        if (discoverSelectedFormat === "deep_dive") {
          appState.quizConfig.count = 10;
          appState.quizConfig.mode = "exam";
        } else if (discoverSelectedFormat === "sprint") {
          appState.quizConfig.count = 5;
          appState.quizConfig.mode = "learning";
        }
        switchView("viewSetup");
      });
    });
  }

  // 6. Render Formats Grid
  const formatsGrid = document.getElementById("discoverFormatsGrid");
  if (formatsGrid) {
    formatsGrid.innerHTML = matchedFormats.map(fmt => `
      <div class="discover-format-card" data-format-id="${fmt.id}" tabindex="0" role="button" aria-label="${fmt.name}: ${fmt.desc}">
        <span style="font-size: 1.8rem;" aria-hidden="true">${fmt.icon}</span>
        <h4 class="discover-format-title">${fmt.name}</h4>
        <p class="discover-format-desc">${fmt.desc}</p>
      </div>
    `).join("");

    formatsGrid.querySelectorAll(".discover-format-card").forEach(card => {
      card.addEventListener("click", () => {
        playGameSound("click");
        const fid = card.getAttribute("data-format-id");
        if (fid === "sprint") {
          appState.quizConfig.count = 5;
          appState.quizConfig.mode = "learning";
          switchView("viewSetup");
        } else if (fid === "deep_dive") {
          appState.quizConfig.count = 10;
          appState.quizConfig.mode = "exam";
          switchView("viewSetup");
        } else if (fid === "bot") {
          startComputerMatch();
        } else if (fid === "friend") {
          startFriendMatch();
        } else if (fid === "daily") {
          switchView("viewDailyChallenge");
        }
      });
    });
  }

  // 7. Handle Empty State
  const emptyState = document.getElementById("discoverEmptyState");
  const hasResults = matchedCategories.length > 0 || matchedFormats.length > 0;
  if (emptyState) {
    emptyState.style.display = hasResults ? "none" : "block";
  }

  // 8. Update Clear Button in Search
  const clearBtn = document.getElementById("discoverSearchClearBtn");
  if (clearBtn) {
    clearBtn.style.display = query ? "block" : "none";
  }
}

function renderDiscoverRecommendations() {
  const card = document.getElementById("discoverRecommendCard");
  if (!card) return;

  const attempts = getStoredAttempts();
  const playedCats = new Set(attempts.map(a => a.category).filter(Boolean));
  const unplayed = DISCOVER_CATEGORIES.filter(c => !playedCats.has(c.id));

  let targetCat = unplayed.length > 0 ? unplayed[0] : DISCOVER_CATEGORIES[0];
  let headline = unplayed.length > 0 ? "New Frontier to Explore" : "Recommended for You";
  let promptText = unplayed.length > 0
    ? `You haven't played ${targetCat.name} yet! Dive into 45 curated questions to expand your knowledge breadth.`
    : `Strengthen your mastery in ${targetCat.name} with a high-speed 5-question sprint.`;

  card.innerHTML = `
    <div>
      <span class="discover-recommend-badge">✦ ${headline}</span>
      <h3 class="discover-recommend-title">${targetCat.icon} ${targetCat.name} Challenge</h3>
      <p class="discover-recommend-desc">${promptText}</p>
      <div class="discover-recommend-meta">
        <span>📚 45 Curated Questions</span>
        <span>⏱️ 5-Question Sprint</span>
        <span>🪙 +20 Coins / Question</span>
      </div>
    </div>
    <button type="button" class="btn btn-primary" id="discoverRecommendPlayBtn" style="white-space: nowrap; align-self: flex-start; padding: 12px 24px;">Start Challenge ⚡</button>
  `;

  const btn = document.getElementById("discoverRecommendPlayBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      playGameSound("click");
      appState.quizConfig.category = targetCat.id;
      appState.quizConfig.difficulty = "medium";
      appState.quizConfig.count = 5;
      appState.quizConfig.mode = "learning";
      switchView("viewSetup");
    });
  }
}

function renderDiscoverRecent() {
  const section = document.getElementById("discoverRecentSection");
  const list = document.getElementById("discoverRecentList");
  if (!section || !list) return;

  const attempts = getStoredAttempts();
  if (!attempts || attempts.length === 0) {
    section.style.display = "none";
    return;
  }

  section.style.display = "block";
  const recentCategories = [];
  const seen = new Set();
  for (const a of attempts) {
    if (a.category && !seen.has(a.category)) {
      seen.add(a.category);
      recentCategories.push(a);
      if (recentCategories.length >= 3) break;
    }
  }

  const icons = {
    technology: "💻",
    academics: "📐",
    general: "🌍",
    competitive: "🎯",
    sports: "⚽",
    entertainment: "🎬"
  };

  list.innerHTML = recentCategories.map(att => {
    const icon = icons[att.category] || "📚";
    const catName = CATEGORY_NAMES[att.category] || att.category;
    const score = att.scorePercentage !== undefined ? att.scorePercentage : (att.percentage || 0);

    return `
      <div class="panel-card" style="padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;" data-cat="${att.category}">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="font-size: 1.5rem;">${icon}</span>
          <div>
            <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--primary-dark); margin: 0;">${catName}</h4>
            <span style="font-size: 0.76rem; color: var(--text-muted);">Last Score: ${score}% • ${att.difficulty.toUpperCase()}</span>
          </div>
        </div>
        <button type="button" class="btn btn-secondary" style="padding: 6px 14px; font-size: 0.8rem;">Retake ↺</button>
      </div>
    `;
  }).join("");

  list.querySelectorAll("[data-cat]").forEach(el => {
    el.addEventListener("click", () => {
      playGameSound("click");
      const catKey = el.getAttribute("data-cat");
      appState.quizConfig.category = catKey;
      switchView("viewSetup");
    });
  });
}

function resetDiscoverFilters() {
  discoverSelectedCategory = "all";
  discoverSelectedDiff = "all";
  discoverSelectedFormat = "all";

  const searchInput = document.getElementById("discoverSearchInput");
  if (searchInput) searchInput.value = "";

  document.querySelectorAll("#discoverCategoryFilterBar .discover-chip").forEach(c => c.classList.toggle("active-chip", c.getAttribute("data-cat") === "all"));
  document.querySelectorAll("#discoverDiffFilterBar .discover-chip").forEach(c => c.classList.toggle("active-chip", c.getAttribute("data-diff") === "all"));
  document.querySelectorAll("#discoverFormatFilterBar .discover-chip").forEach(c => c.classList.toggle("active-chip", c.getAttribute("data-format") === "all"));

  renderDiscoverScreen();
}

// ==========================================================================
// 10C. Gallery Photo Upload & Canvas Resizing
// ==========================================================================
let pendingPhotoDataUrl = null;

function handleGalleryPhotoSelected(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  // Validate format
  const validTypes = ["image/jpeg", "image/png", "image/webp"];
  if (!validTypes.includes(file.type)) {
    alert("Please select a valid image file (JPG, PNG, or WebP).");
    e.target.value = "";
    return;
  }

  // Validate file size limit (5MB)
  if (file.size > 5 * 1024 * 1024) {
    alert("Selected image is too large (maximum 5MB). Please choose a smaller photo.");
    e.target.value = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = function(evt) {
    const img = new Image();
    img.onload = function() {
      // Resize to square 200x200 canvas
      const canvas = document.createElement("canvas");
      const size = 200;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");

      // Center crop to square
      const minDim = Math.min(img.width, img.height);
      const startX = (img.width - minDim) / 2;
      const startY = (img.height - minDim) / 2;

      ctx.drawImage(img, startX, startY, minDim, minDim, 0, 0, size, size);

      // Export as compressed WebP or JPEG
      try {
        pendingPhotoDataUrl = canvas.toDataURL("image/webp", 0.85);
      } catch (err) {
        pendingPhotoDataUrl = canvas.toDataURL("image/jpeg", 0.85);
      }

      // Show in Preview Modal
      const previewImg = document.getElementById("photoPreviewImg");
      const previewModal = document.getElementById("photoPreviewModal");
      if (previewImg) previewImg.src = pendingPhotoDataUrl;
      if (previewModal) previewModal.style.display = "flex";
    };
    img.src = evt.target.result;
  };
  reader.readAsDataURL(file);
}

function saveGalleryPhoto() {
  if (!pendingPhotoDataUrl) return;
  try {
    localStorage.setItem("quizup_custom_avatar_img", pendingPhotoDataUrl);
    playGameSound("victory");
  } catch (err) {
    console.warn("Storage quota exceeded when saving photo:", err);
    alert("Could not save photo to local browser storage due to storage limits.");
  }
  const previewModal = document.getElementById("photoPreviewModal");
  if (previewModal) previewModal.style.display = "none";
  pendingPhotoDataUrl = null;
  syncProfileUI();
}

function cancelGalleryPhoto() {
  pendingPhotoDataUrl = null;
  const previewModal = document.getElementById("photoPreviewModal");
  if (previewModal) previewModal.style.display = "none";
  const input = document.getElementById("profilePhotoInput");
  if (input) input.value = "";
}

function removeCustomPhoto() {
  if (confirm("Remove custom profile picture and revert to your emoji avatar?")) {
    try {
      localStorage.removeItem("quizup_custom_avatar_img");
    } catch (e) {}
    playGameSound("click");
    syncProfileUI();
  }
}

// ==========================================================================
// 10D. QuizBuddy Concept & Learning Assistant
// ==========================================================================
const QUIZBUDDY_STORAGE_KEY = "quizup_quizbuddy_history";
let quizBuddyMessages = [];

function initQuizBuddy() {
  try {
    const raw = localStorage.getItem(QUIZBUDDY_STORAGE_KEY);
    if (raw) {
      quizBuddyMessages = JSON.parse(raw);
    }
  } catch (e) {}

  if (!quizBuddyMessages || quizBuddyMessages.length === 0) {
    quizBuddyMessages = [
      {
        sender: "bot",
        text: "👋 Hi there! I'm **QuizBuddy**, your QuizUp learning assistant. Ask me to explain a concept simply, break down a tricky question, or quiz you on any topic!",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
  }
  renderQuizBuddyMessages();
}

function renderQuizBuddyMessages() {
  const container = document.getElementById("quizBuddyMessages");
  if (!container) return;

  container.innerHTML = quizBuddyMessages.map(msg => {
    const isBot = msg.sender === "bot";
    return `
      <div class="qb-message ${isBot ? 'bot-msg' : 'user-msg'}">
        <div class="qb-msg-bubble">${escapeHtml(msg.text).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>')}</div>
        <span class="qb-msg-time">${msg.time || ''}</span>
      </div>
    `;
  }).join("");

  container.scrollTop = container.scrollHeight;
}

function toggleQuizBuddy(forceOpen = null) {
  const panel = document.getElementById("quizBuddyChatPanel");
  if (!panel) return;

  const isOpen = panel.style.display === "flex";
  const shouldOpen = forceOpen !== null ? forceOpen : !isOpen;

  panel.style.display = shouldOpen ? "flex" : "none";
  if (shouldOpen) {
    playGameSound("click");
    const input = document.getElementById("quizBuddyInput");
    if (input) setTimeout(() => input.focus(), 100);
    renderQuizBuddyMessages();
  }
}

function sendQuizBuddyMessage(customText = null) {
  const input = document.getElementById("quizBuddyInput");
  const text = (customText || (input ? input.value : "")).trim();
  if (!text) return;

  if (input) input.value = "";

  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  quizBuddyMessages.push({
    sender: "user",
    text: text,
    time: timeStr
  });
  renderQuizBuddyMessages();

  // Show typing indicator
  const typing = document.getElementById("quizBuddyTyping");
  if (typing) typing.style.display = "flex";

  setTimeout(() => {
    if (typing) typing.style.display = "none";
    const answer = processQuizBuddyQuery(text);
    quizBuddyMessages.push({
      sender: "bot",
      text: answer,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    try {
      localStorage.setItem(QUIZBUDDY_STORAGE_KEY, JSON.stringify(quizBuddyMessages.slice(-20)));
    } catch (e) {}
    renderQuizBuddyMessages();
  }, 450);
}

function processQuizBuddyQuery(query) {
  const qLower = query.toLowerCase().trim();

  // 1. "Why is my answer incorrect?" or mistake review
  if (qLower.includes("incorrect") || qLower.includes("why is my answer") || qLower.includes("mistake") || qLower.includes("wrong")) {
    const attempts = getStoredAttempts();
    if (appState.activeQuiz && appState.activeQuiz.questions && appState.activeQuiz.userAnswers) {
      const questions = appState.activeQuiz.questions;
      const userAnswers = appState.activeQuiz.userAnswers;
      for (let i = 0; i < questions.length; i++) {
        const u = userAnswers[i];
        const q = questions[i];
        if (u && !u.isCorrect && u.selectedIndex !== -1) {
          const userChoice = q.options[u.selectedIndex];
          const correctChoice = q.options[q.correctIndex !== undefined ? q.correctIndex : q.correctAnswer];
          return `In your recent quiz question: **"${q.question}"**\n\n• Your answer was: *${userChoice}*\n• Correct answer is: **${correctChoice}**\n\n💡 **Educational Explanation:** ${q.explanation}`;
        }
      }
    }
    if (attempts.length > 0) {
      const last = attempts[0];
      const catName = CATEGORY_NAMES[last.category] || last.category;
      return `In your last ${catName} sprint, you scored ${last.scorePercentage || last.percentage}%. Remember, you can always review every question's complete explanation on the dedicated **Quiz Answer Review** screen!`;
    }
    return "You don't have any recent mistake records! Everything you've answered was either 100% correct or you haven't attempted a quiz yet.";
  }

  // 2. "Quiz me" or practice question drill
  if (qLower.includes("quiz me") || qLower.includes("test me") || qLower.includes("practice question")) {
    // Pick a random question from technology or academics
    const categories = ["technology", "academics", "general", "competitive", "sports", "entertainment"];
    const cat = categories[Math.floor(Math.random() * categories.length)];
    const pool = getQuestions(cat, "easy");
    if (pool && pool.length > 0) {
      const q = pool[Math.floor(Math.random() * pool.length)];
      const letters = ["A", "B", "C", "D"];
      const opts = q.options.map((opt, i) => `${letters[i]}. ${opt}`).join("\n");
      const correctLetter = letters[q.correctIndex !== undefined ? q.correctIndex : q.correctAnswer];
      return `🎯 **Quick Practice Question (${cat.toUpperCase()}):**\n\n${q.question}\n\n${opts}\n\n*(Think about your answer! The correct answer is **${correctLetter}**: ${q.explanation})*`;
    }
  }

  // 3. Search QUESTION_BANK for concept keywords
  const stopWords = new Set(["what", "which", "how", "why", "when", "where", "who", "the", "and", "this", "that", "from", "with", "have", "has", "are", "can", "for", "about", "explain", "tell", "give", "some", "more", "does", "will", "would", "could", "should", "topic", "simply", "concept", "know", "please"]);
  const searchTerms = qLower.replace(/[?!.,;:'"()]/g, " ").split(/\s+/).filter(w => w.length > 2 && !stopWords.has(w));
  const allQuestions = [];
  ["technology", "academics", "general", "competitive", "sports", "entertainment"].forEach(c => {
    allQuestions.push(...getQuestions(c, "all"));
  });

  let bestMatch = null;
  let highestScore = 0;

  if (searchTerms.length > 0) {
    for (const q of allQuestions) {
      let score = 0;
      const textToSearch = " " + (q.question + " " + q.explanation + " " + q.category).toLowerCase().replace(/[^a-z0-9]/g, " ") + " ";
      for (const term of searchTerms) {
        if (textToSearch.includes(" " + term + " ")) {
          score += 2;
        } else if (textToSearch.includes(term)) {
          score += 1;
        }
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = q;
      }
    }
  }

  // Meaningful relevance threshold: require whole word match or multiple matching terms
  const minThreshold = searchTerms.length >= 3 ? 3 : 2;
  if (bestMatch && highestScore >= minThreshold) {
    const correctAns = bestMatch.options[bestMatch.correctIndex !== undefined ? bestMatch.correctIndex : bestMatch.correctAnswer];
    return `📚 **Concept Explanation:**\n\nRegarding *"${bestMatch.question}"*:\n\n**Key Takeaway:** ${bestMatch.explanation}\n\n• Core Answer: **${correctAns}**\n• Discipline: ${bestMatch.category.toUpperCase()}`;
  }

  // 4. Default / Out of Scope Fallback
  return `I don't have detailed notes on that specific topic in our offline study bank yet. 📚\n\nI can help you with:\n• **Technology**: HTML, CSS, JavaScript, CPUs, Memory, Algorithms\n• **Academics**: Math, Physics, Chemistry, Biology\n• **General Knowledge**: World Geography, Capitals, History\n• **Competitive Exams**: Aptitude, Logical Reasoning, Verbal\n• **Sports & Entertainment**: Cricket, Olympics, Cinema, Pop Culture\n\nTry asking: *"Explain HTML simply"* or *"Quiz me on science"*!`;
}

function clearQuizBuddyChat() {
  quizBuddyMessages = [
    {
      sender: "bot",
      text: "Chat cleared! How can I assist your quiz learning journey today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ];
  try {
    localStorage.removeItem(QUIZBUDDY_STORAGE_KEY);
  } catch (e) {}
  renderQuizBuddyMessages();
}


// ==========================================================================
// 10C. QuizUp Theme Studio, Font Settings, Avatar Studio & Puzzle Engines
// ==========================================================================

const THEME_ACTIVE_KEY = "quizup_active_theme";
const FONT_FAMILY_KEY = "quizup_font_family";
const FONT_SIZE_KEY = "quizup_font_size";

// 8 Complete Curated Themes
const THEME_PRESETS = [
  { id: "lavender-dream", name: "Lavender Dream", desc: "Classic purple & lavender base with soft violet cards", swatches: ["#7c3aed", "#ede9fe", "#ffffff", "#f97316"] },
  { id: "neon-arcade", name: "Neon Arcade", desc: "Electric cyan & neon magenta on midnight arcade canvas", swatches: ["#06b6d4", "#f43f5e", "#191730", "#0a0a14"] },
  { id: "ocean-glow", name: "Ocean Glow", desc: "Deep marine teal, cyan waves & clean seafoam accents", swatches: ["#0d9488", "#2dd4bf", "#ffffff", "#0284c7"] },
  { id: "sunset-pop", name: "Sunset Pop", desc: "Warm coral, amber orange & energetic magenta sunsets", swatches: ["#ea580c", "#ffedd5", "#ffffff", "#db2777"] },
  { id: "mint-fresh", name: "Mint Fresh", desc: "Crisp emerald, refreshing mint & forest jade highlights", swatches: ["#16a34a", "#dcfce7", "#ffffff", "#f59e0b"] },
  { id: "midnight-galaxy", name: "Midnight Galaxy", desc: "Deep nebula indigo, violet radiance & starlight white", swatches: ["#9333ea", "#221c47", "#110e24", "#38bdf8"] },
  { id: "rose-quartz", name: "Rose Quartz", desc: "Elegant blush pink, rose gold & warm violet hues", swatches: ["#db2777", "#fce7f3", "#ffffff", "#8b5cf6"] },
  { id: "minimal-light", name: "Minimal Light", desc: "Monochrome slate, high-contrast charcoal & modern clarity", swatches: ["#334155", "#e2e8f0", "#ffffff", "#64748b"] }
];

// -------------------------------------------------------------
// Theme Studio Functions
// -------------------------------------------------------------
function getActiveTheme() {
  try {
    return localStorage.getItem(THEME_ACTIVE_KEY) || "lavender-dream";
  } catch (err) {
    return "lavender-dream";
  }
}

function applyTheme(themeId) {
  document.body.setAttribute("data-theme", themeId);
  if (themeId === "midnight-galaxy") {
    document.body.classList.add("theme-midnight");
  } else {
    document.body.classList.remove("theme-midnight");
  }
  try {
    localStorage.setItem(THEME_ACTIVE_KEY, themeId);
  } catch (err) {}
  renderThemeStudio();
}

function renderThemeStudio() {
  const grid = document.getElementById("themeCardsGrid");
  if (!grid) return;
  const currentTheme = getActiveTheme();

  grid.innerHTML = THEME_PRESETS.map(t => {
    const isActive = (t.id === currentTheme);
    return `
      <div class="theme-card ${isActive ? 'active-theme' : ''}" data-theme-id="${t.id}" tabindex="0" role="button" aria-label="${t.name} theme: ${t.desc}">
        <div class="theme-swatches">
          ${t.swatches.map(c => `<div class="theme-swatch" style="background: ${c};"></div>`).join("")}
        </div>
        <h4 class="theme-card-title">${t.name} ${isActive ? '✓' : ''}</h4>
        <p class="theme-card-desc">${t.desc}</p>
        ${isActive ? '<span class="badge badge-accent" style="margin-top: 8px;">Active Theme</span>' : ''}
      </div>
    `;
  }).join("");

  grid.querySelectorAll(".theme-card").forEach(card => {
    card.addEventListener("click", () => {
      playGameSound("click");
      const tid = card.getAttribute("data-theme-id");
      applyTheme(tid);
    });
  });
}

function openThemeStudio() {
  renderThemeStudio();
  switchView("viewThemeStudio");
}

// -------------------------------------------------------------
// Font & Display Settings Functions
// -------------------------------------------------------------
let selectedFontFamily = "plus-jakarta";
let selectedFontSize = "medium";

function loadFontSettings() {
  try {
    selectedFontFamily = localStorage.getItem(FONT_FAMILY_KEY) || "plus-jakarta";
    selectedFontSize = localStorage.getItem(FONT_SIZE_KEY) || "medium";
    document.body.setAttribute("data-font", selectedFontFamily);
    document.body.setAttribute("data-font-size", selectedFontSize);
  } catch (err) {}
}

function renderFontSettings() {
  const fontGrid = document.getElementById("fontChoiceGrid");
  if (fontGrid) {
    fontGrid.querySelectorAll("[data-font]").forEach(btn => {
      const f = btn.getAttribute("data-font");
      btn.classList.toggle("active-chip", f === selectedFontFamily);
    });
  }

  const sizeGroup = document.getElementById("fontSizeChoiceGroup");
  if (sizeGroup) {
    sizeGroup.querySelectorAll("[data-size]").forEach(btn => {
      const s = btn.getAttribute("data-size");
      btn.classList.toggle("active-chip", s === selectedFontSize);
    });
  }
}

function openFontSettings() {
  loadFontSettings();
  renderFontSettings();
  switchView("viewFontSettings");
}

// -------------------------------------------------------------
// Avatar Studio Engine with Coin Unlocks
// -------------------------------------------------------------
const STUDIO_BASE_AVATARS = ["🦊", "🦉", "🚀", "🦁", "🐼", "🤖", "⚡", "👑", "🦄", "🐲", "🐱", "🐶"];

const STUDIO_ACCESSORIES = [
  { id: "none", name: "None", icon: "✨", price: 0 },
  { id: "crown", name: "Golden Crown", icon: "👑", price: 100 },
  { id: "shades", name: "Cool Shades", icon: "🕶️", price: 60 },
  { id: "headset", name: "Gaming Headset", icon: "🎧", price: 80 },
  { id: "cap", name: "Scholar Cap", icon: "🎓", price: 75 },
  { id: "halo", name: "Diamond Halo", icon: "💎", price: 150 },
  { id: "jetpack", name: "Jetpack Aura", icon: "🚀", price: 120 }
];

let studioDraftAvatar = "🦊";
let studioDraftAccessory = "none";

function openAvatarStudio() {
  const prof = getPlayerProfile();
  studioDraftAvatar = prof.avatar || "🦊";
  studioDraftAccessory = prof.equippedAccessory || "none";

  const nameInput = document.getElementById("studioNameInput");
  if (nameInput) nameInput.value = prof.name || "QuizMaster";

  syncStudioPreview();
  renderStudioShelves();
  switchView("viewAvatarStudio");
}

function syncStudioPreview() {
  const charEl = document.getElementById("studioAvatarChar");
  if (charEl) charEl.textContent = studioDraftAvatar;

  const overlayEl = document.getElementById("studioAccessoryOverlay");
  if (overlayEl) {
    const acc = STUDIO_ACCESSORIES.find(a => a.id === studioDraftAccessory);
    overlayEl.textContent = (acc && acc.id !== "none") ? acc.icon : "";
  }

  const coinCountEl = document.getElementById("studioCoinCount");
  if (coinCountEl) {
    const prof = getPlayerProfile();
    coinCountEl.textContent = prof.coins || 0;
  }
}

function renderStudioShelves() {
  const prof = getPlayerProfile();
  const owned = new Set(prof.ownedAccessories || ["none"]);

  // 1. Base Avatars
  const baseGrid = document.getElementById("studioBasePickerGrid");
  if (baseGrid) {
    baseGrid.innerHTML = STUDIO_BASE_AVATARS.map(av => `
      <button type="button" class="avatar-pick-btn ${av === studioDraftAvatar ? 'selected' : ''}" data-base="${av}" aria-label="Select avatar ${av}">
        <span>${av}</span>
      </button>
    `).join("");

    baseGrid.querySelectorAll("[data-base]").forEach(btn => {
      btn.addEventListener("click", () => {
        playGameSound("click");
        studioDraftAvatar = btn.getAttribute("data-base");
        syncStudioPreview();
        renderStudioShelves();
      });
    });
  }

  // 2. Accessories
  const accShelf = document.getElementById("studioAccessoriesShelf");
  if (accShelf) {
    accShelf.innerHTML = STUDIO_ACCESSORIES.map(acc => {
      const isOwned = owned.has(acc.id);
      const isEquipped = (acc.id === studioDraftAccessory);
      return `
        <div class="accessory-item-card ${isEquipped ? 'equipped' : ''} ${!isOwned ? 'locked' : ''}" data-acc-id="${acc.id}" tabindex="0" role="button">
          <div class="accessory-icon">${acc.icon}</div>
          <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary);">${acc.name}</div>
          ${isOwned ? `
            <span class="badge" style="background: var(--primary-light); color: var(--primary); font-size: 0.72rem; margin-top: 4px;">${isEquipped ? 'Equipped' : 'Owned'}</span>
          ` : `
            <div class="accessory-price-tag">🪙 ${acc.price} Coins</div>
          `}
        </div>
      `;
    }).join("");

    accShelf.querySelectorAll("[data-acc-id]").forEach(card => {
      card.addEventListener("click", () => {
        const accId = card.getAttribute("data-acc-id");
        const acc = STUDIO_ACCESSORIES.find(a => a.id === accId);
        if (!acc) return;

        const currentProf = getPlayerProfile();
        const currentOwned = new Set(currentProf.ownedAccessories || ["none"]);

        if (currentOwned.has(accId)) {
          // Already owned: equip it
          playGameSound("click");
          studioDraftAccessory = accId;
          syncStudioPreview();
          renderStudioShelves();
        } else {
          // Needs purchase with coins
          if ((currentProf.coins || 0) < acc.price) {
            alert(`Insufficient coins! You need ${acc.price} coins for ${acc.name}. Complete quizzes to earn more coins.`);
          } else {
            const confirmed = confirm(`Unlock ${acc.name} for ${acc.price} Coins?`);
            if (confirmed) {
              currentProf.coins -= acc.price;
              currentOwned.add(accId);
              currentProf.ownedAccessories = Array.from(currentOwned);
              currentProf.equippedAccessory = accId;
              savePlayerProfile(currentProf);
              studioDraftAccessory = accId;
              playGameSound("victory");
              triggerCelebration();
              syncStudioPreview();
              renderStudioShelves();
            }
          }
        }
      });
    });
  }
}

// -------------------------------------------------------------
// XP & Level Progression System
// -------------------------------------------------------------
function addPlayerXp(amount) {
  const prof = getPlayerProfile();
  prof.xp = (prof.xp || 50) + amount;
  const currentLevel = Math.floor(prof.xp / 200) + 1;

  if (currentLevel > (prof.level || 1)) {
    prof.level = currentLevel;
    playGameSound("victory");
    triggerCelebration();
    alert(`🎉 Level Up! You reached Level ${currentLevel}!`);
  }
  savePlayerProfile(prof);
  syncProfileUI();
}

// -------------------------------------------------------------
// Puzzle Engine: 1. Speed Sprint Challenge (10s Countdown)
// -------------------------------------------------------------
const speedState = {
  questions: [],
  currentIndex: 0,
  score: 0,
  timer: null,
  timeLeft: 10
};

function startSpeedSprint() {
  speedState.questions = selectQuizQuestions("all", "all", 5);
  speedState.currentIndex = 0;
  speedState.score = 0;
  renderSpeedQuestion();
  switchView("viewSpeedChallenge");
}

function renderSpeedQuestion() {
  if (speedState.timer) clearInterval(speedState.timer);

  const q = speedState.questions[speedState.currentIndex];
  if (!q) {
    finishSpeedSprint();
    return;
  }

  const catTag = document.getElementById("speedCategoryTag");
  if (catTag) catTag.textContent = q.category.toUpperCase();
  const progText = document.getElementById("speedProgressText");
  if (progText) progText.textContent = `Question ${speedState.currentIndex + 1} of 5`;
  const liveScore = document.getElementById("speedLiveScore");
  if (liveScore) liveScore.textContent = speedState.score;
  const qText = document.getElementById("speedQuestionText");
  if (qText) qText.textContent = q.question;

  const optionsContainer = document.getElementById("speedOptionsContainer");
  if (!optionsContainer) return;
  optionsContainer.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.innerHTML = `<span class="opt-prefix">${String.fromCharCode(65 + idx)}</span> <span class="opt-text">${escapeHtml(opt)}</span>`;
    btn.addEventListener("click", () => handleSpeedAnswer(idx));
    optionsContainer.appendChild(btn);
  });

  // Start 10s Countdown
  speedState.timeLeft = 10;
  const timeText = document.getElementById("speedTimeLeft");
  const timeFill = document.getElementById("speedTimerFill");
  if (timeText) timeText.textContent = "10s";
  if (timeFill) timeFill.style.width = "100%";

  speedState.timer = setInterval(() => {
    speedState.timeLeft--;
    if (timeText) timeText.textContent = speedState.timeLeft + "s";
    if (timeFill) timeFill.style.width = (speedState.timeLeft * 10) + "%";

    if (speedState.timeLeft <= 0) {
      clearInterval(speedState.timer);
      playGameSound("incorrect");
      // Advance to next
      speedState.currentIndex++;
      renderSpeedQuestion();
    }
  }, 1000);
}

function handleSpeedAnswer(chosenIdx) {
  if (speedState.timer) clearInterval(speedState.timer);
  const q = speedState.questions[speedState.currentIndex];
  const isCorrect = (chosenIdx === q.correctAnswer);

  if (isCorrect) {
    const bonus = speedState.timeLeft > 5 ? 15 : 10;
    speedState.score += bonus;
    playGameSound("correct");
  } else {
    playGameSound("incorrect");
  }

  const liveScore = document.getElementById("speedLiveScore");
  if (liveScore) liveScore.textContent = speedState.score;

  setTimeout(() => {
    speedState.currentIndex++;
    renderSpeedQuestion();
  }, 800);
}

function finishSpeedSprint() {
  if (speedState.timer) clearInterval(speedState.timer);
  addPlayerCoins(speedState.score * 2);
  addPlayerXp(60);
  playGameSound("victory");
  triggerCelebration();
  alert(`⚡ Speed Sprint Complete! Final Score: ${speedState.score} pts! + ${speedState.score * 2} Coins earned!`);
  switchView("viewPlay");
}

// -------------------------------------------------------------
// Puzzle Engine: 2. True or False Challenge
// -------------------------------------------------------------
const TF_FACTS = [
  { text: "HTML stands for HyperText Markup Language.", isTrue: true, cat: "Technology" },
  { text: "Light travels faster in water than in a vacuum.", isTrue: false, cat: "Academics" },
  { text: "The Vatican City is recognized as the smallest country in the world.", isTrue: true, cat: "General Knowledge" },
  { text: "A marathon race distance is precisely 30 kilometers.", isTrue: false, cat: "Sports" },
  { text: "JavaScript was originally created in just 10 days by Brendan Eich.", isTrue: true, cat: "Technology" },
  { text: "DNA stands for Deoxyribonucleic Acid.", isTrue: true, cat: "Academics" },
  { text: "Mount Kilimanjaro is the highest peak in the world.", isTrue: false, cat: "General Knowledge" }
];

let tfCurrentIndex = 0;
let tfScore = 0;

function startTrueFalseMode() {
  tfCurrentIndex = 0;
  tfScore = 0;
  renderTrueFalseCard();
  switchView("viewTrueFalse");
}

function renderTrueFalseCard() {
  if (tfCurrentIndex >= 5) {
    addPlayerCoins(tfScore * 10);
    addPlayerXp(50);
    playGameSound("victory");
    alert(`⚖️ True or False Complete! You scored ${tfScore} / 5! +${tfScore * 10} Coins!`);
    switchView("viewPlay");
    return;
  }

  const fact = TF_FACTS[tfCurrentIndex % TF_FACTS.length];
  const catTag = document.getElementById("tfCategoryTag");
  if (catTag) catTag.textContent = fact.cat;
  const progText = document.getElementById("tfProgressText");
  if (progText) progText.textContent = `Statement ${tfCurrentIndex + 1} of 5`;
  const liveScore = document.getElementById("tfLiveScore");
  if (liveScore) liveScore.textContent = tfScore;
  const stmtText = document.getElementById("tfStatementText");
  if (stmtText) stmtText.textContent = `"${fact.text}"`;

  const fbBox = document.getElementById("tfFeedbackBox");
  if (fbBox) fbBox.style.display = "none";
}

function handleTrueFalseAnswer(userGuessedTrue) {
  const fact = TF_FACTS[tfCurrentIndex % TF_FACTS.length];
  const isCorrect = (userGuessedTrue === fact.isTrue);
  const fbBox = document.getElementById("tfFeedbackBox");

  if (isCorrect) {
    tfScore++;
    playGameSound("correct");
    if (fbBox) {
      fbBox.textContent = `✓ Correct! The statement is indeed ${fact.isTrue ? "TRUE" : "FALSE"}.`;
      fbBox.style.background = "#f0fdf4";
      fbBox.style.color = "#166534";
      fbBox.style.display = "block";
    }
  } else {
    playGameSound("incorrect");
    if (fbBox) {
      fbBox.textContent = `✗ Incorrect! The statement is actually ${fact.isTrue ? "TRUE" : "FALSE"}.`;
      fbBox.style.background = "#fef2f2";
      fbBox.style.color = "#991b1b";
      fbBox.style.display = "block";
    }
  }

  const liveScore = document.getElementById("tfLiveScore");
  if (liveScore) liveScore.textContent = tfScore;

  setTimeout(() => {
    tfCurrentIndex++;
    renderTrueFalseCard();
  }, 1200);
}

// -------------------------------------------------------------
// Puzzle Engine: 3. Word Puzzle (Anagram Unscramble)
// -------------------------------------------------------------
const WORD_PUZZLES = [
  { word: "PYTHON", clue: "High-level programming language named after a famous British comedy troupe." },
  { word: "GRAVITY", clue: "Universal fundamental force that pulls objects toward Earth's center." },
  { word: "OLYMPICS", clue: "Prestigious quadrennial global athletic festival originating in Ancient Greece." },
  { word: "ALGORITHM", clue: "A step-by-step procedure or recipe for solving computational problems." }
];

let wordPuzzleIndex = 0;
let userFormedLetters = [];

function startWordPuzzle() {
  wordPuzzleIndex = 0;
  setupWordPuzzle();
  switchView("viewWordPuzzle");
}

function setupWordPuzzle() {
  const p = WORD_PUZZLES[wordPuzzleIndex % WORD_PUZZLES.length];
  userFormedLetters = [];

  const clueEl = document.getElementById("wordPuzzleClue");
  if (clueEl) clueEl.innerHTML = `<strong>Clue:</strong> ${p.clue}`;

  const slotsContainer = document.getElementById("wordAnswerSlots");
  if (slotsContainer) {
    slotsContainer.innerHTML = p.word.split("").map(() => '<div class="word-slot">_</div>').join("");
  }

  const scrambled = p.word.split("").sort(() => 0.5 - Math.random());
  const row = document.getElementById("scrambledLettersRow");
  if (row) {
    row.innerHTML = scrambled.map((char, idx) => `
      <button type="button" class="letter-tile-btn" data-letter="${char}" data-idx="${idx}">${char}</button>
    `).join("");

    row.querySelectorAll(".letter-tile-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        playGameSound("click");
        btn.classList.add("used");
        userFormedLetters.push(btn.getAttribute("data-letter"));
        updateWordSlots();
      });
    });
  }

  const fb = document.getElementById("wordFeedbackBox");
  if (fb) fb.style.display = "none";
}

function updateWordSlots() {
  const p = WORD_PUZZLES[wordPuzzleIndex % WORD_PUZZLES.length];
  const slotsContainer = document.getElementById("wordAnswerSlots");
  if (!slotsContainer) return;
  const slots = slotsContainer.querySelectorAll(".word-slot");

  slots.forEach((slot, i) => {
    slot.textContent = userFormedLetters[i] || "_";
  });
}

function checkWordAnswer() {
  const p = WORD_PUZZLES[wordPuzzleIndex % WORD_PUZZLES.length];
  const formed = userFormedLetters.join("");
  const fb = document.getElementById("wordFeedbackBox");

  if (formed === p.word) {
    playGameSound("victory");
    triggerCelebration();
    addPlayerCoins(30);
    addPlayerXp(40);
    if (fb) {
      fb.textContent = `🎉 Brilliant! "${p.word}" is correct! +30 Coins earned!`;
      fb.style.color = "#16a34a";
      fb.style.display = "block";
    }
    setTimeout(() => {
      wordPuzzleIndex++;
      setupWordPuzzle();
    }, 1800);
  } else {
    playGameSound("incorrect");
    if (fb) {
      fb.textContent = "Not quite! Check the letters and try again.";
      fb.style.color = "#dc2626";
      fb.style.display = "block";
    }
  }
}

// -------------------------------------------------------------
// Puzzle Engine: 4. Memory Match Card Challenge
// -------------------------------------------------------------
const MEMORY_SYMBOLS = ["💻", "🔬", "🌍", "📐", "⚽", "🎬"];
let memoryCards = [];
let memoryFlipped = [];
let memoryMatchedCount = 0;
let memoryMoves = 0;

function startMemoryMatch() {
  memoryMatchedCount = 0;
  memoryMoves = 0;
  memoryFlipped = [];

  const deck = [...MEMORY_SYMBOLS, ...MEMORY_SYMBOLS].sort(() => 0.5 - Math.random());
  memoryCards = deck.map((sym, id) => ({ id, sym, matched: false }));

  const grid = document.getElementById("memoryCardGrid");
  const moveEl = document.getElementById("memoryMoveCount");
  const pairEl = document.getElementById("memoryPairsFound");
  if (moveEl) moveEl.textContent = "0";
  if (pairEl) pairEl.textContent = "0 / 6";

  if (grid) {
    grid.innerHTML = memoryCards.map((c, i) => `
      <div class="memory-card" data-card-idx="${i}" tabindex="0" role="button" aria-label="Card ${i + 1}">
        <div class="memory-card-inner">
          <div class="memory-card-front">✦</div>
          <div class="memory-card-back">${c.sym}</div>
        </div>
      </div>
    `).join("");

    grid.querySelectorAll(".memory-card").forEach(card => {
      card.addEventListener("click", () => handleMemoryFlip(card));
    });
  }

  switchView("viewMemoryMatch");
}

function handleMemoryFlip(cardEl) {
  const idx = parseInt(cardEl.getAttribute("data-card-idx"), 10);
  if (memoryCards[idx].matched || cardEl.classList.contains("flipped") || memoryFlipped.length >= 2) {
    return;
  }

  playGameSound("click");
  cardEl.classList.add("flipped");
  memoryFlipped.push({ idx, cardEl });

  if (memoryFlipped.length === 2) {
    memoryMoves++;
    const moveEl = document.getElementById("memoryMoveCount");
    if (moveEl) moveEl.textContent = memoryMoves;

    const [c1, c2] = memoryFlipped;
    if (memoryCards[c1.idx].sym === memoryCards[c2.idx].sym) {
      // Match found
      playGameSound("correct");
      memoryCards[c1.idx].matched = true;
      memoryCards[c2.idx].matched = true;
      c1.cardEl.classList.add("matched");
      c2.cardEl.classList.add("matched");
      memoryMatchedCount++;
      const pairEl = document.getElementById("memoryPairsFound");
      if (pairEl) pairEl.textContent = `${memoryMatchedCount} / 6`;
      memoryFlipped = [];

      if (memoryMatchedCount === 6) {
        addPlayerCoins(50);
        addPlayerXp(60);
        playGameSound("victory");
        triggerCelebration();
        setTimeout(() => {
          alert(`🧠 Memory Master! All 6 pairs found in ${memoryMoves} moves! +50 Coins earned!`);
          switchView("viewPlay");
        }, 600);
      }
    } else {
      // Not a match
      setTimeout(() => {
        c1.cardEl.classList.remove("flipped");
        c2.cardEl.classList.remove("flipped");
        memoryFlipped = [];
      }, 900);
    }
  }
}

// -------------------------------------------------------------
// Puzzle Engine: 5. Survival Arena (3 Hearts Mode)
// -------------------------------------------------------------
let survivalStreak = 0;
let survivalLives = 3;
let survivalQuestions = [];
let survivalIdx = 0;

function startSurvivalMode() {
  survivalStreak = 0;
  survivalLives = 3;
  survivalIdx = 0;
  survivalQuestions = selectQuizQuestions("all", "all", 15);
  renderSurvivalQuestion();
  switchView("viewSurvival");
}

function renderSurvivalQuestion() {
  const q = survivalQuestions[survivalIdx];
  if (!q || survivalLives <= 0) {
    finishSurvivalMode();
    return;
  }

  const streakEl = document.getElementById("survivalStreakVal");
  if (streakEl) streakEl.textContent = survivalStreak;

  const heartsMeter = document.getElementById("survivalHeartsMeter");
  if (heartsMeter) {
    heartsMeter.innerHTML = [1, 2, 3].map(h => `
      <span class="heart-icon ${h > survivalLives ? 'lost' : ''}">❤️</span>
    `).join("");
  }

  const qText = document.getElementById("survivalQuestionText");
  if (qText) qText.textContent = q.question;

  const container = document.getElementById("survivalOptionsContainer");
  if (!container) return;
  container.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.innerHTML = `<span class="opt-prefix">${String.fromCharCode(65 + idx)}</span> <span class="opt-text">${escapeHtml(opt)}</span>`;
    btn.addEventListener("click", () => handleSurvivalAnswer(idx));
    container.appendChild(btn);
  });
}

function handleSurvivalAnswer(chosenIdx) {
  const q = survivalQuestions[survivalIdx];
  const isCorrect = (chosenIdx === q.correctAnswer);

  if (isCorrect) {
    survivalStreak++;
    playGameSound("correct");
  } else {
    survivalLives--;
    playGameSound("incorrect");
  }

  setTimeout(() => {
    survivalIdx++;
    renderSurvivalQuestion();
  }, 700);
}

function finishSurvivalMode() {
  addPlayerCoins(survivalStreak * 15);
  addPlayerXp(50);
  playGameSound("victory");
  alert(`🛡️ Survival Run Complete! Streak of ${survivalStreak} correct! +${survivalStreak * 15} Coins earned!`);
  switchView("viewPlay");
}

// -------------------------------------------------------------
// Puzzle Engine: 6. Riddles Challenge
// -------------------------------------------------------------
const RIDDLES_DATA = [
  { q: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", hint: "You hear it bounce back in a cavern.", ans: "An Echo! 🔊" },
  { q: "The more of this there is, the less you see. What is it?", hint: "Turn on the light to banish it.", ans: "Darkness! 🌑" },
  { q: "What has keys, but no locks; space, but no room; and you can enter, but not go inside?", hint: "You're likely touching one right now.", ans: "A Keyboard! ⌨️" },
  { q: "What belongs to you, but other people use it much more than you do?", hint: "It is how people refer to you.", ans: "Your Name! 🏷️" }
];

let riddleIdx = 0;

function startRiddleMode() {
  riddleIdx = 0;
  renderRiddle();
  switchView("viewRiddles");
}

function renderRiddle() {
  const r = RIDDLES_DATA[riddleIdx % RIDDLES_DATA.length];
  const qEl = document.getElementById("riddleQuestionText");
  if (qEl) qEl.textContent = r.q;

  const hintBox = document.getElementById("riddleHintBox");
  if (hintBox) {
    hintBox.style.display = "none";
    hintBox.innerHTML = `<strong>Hint:</strong> ${r.hint}`;
  }

  const ansBox = document.getElementById("riddleAnswerBox");
  if (ansBox) {
    ansBox.style.display = "none";
    ansBox.textContent = `Answer: ${r.ans}`;
  }
}

function setupEventListeners() {
  const logoLink = document.getElementById("logoLink");
  const navHomeBtn = document.getElementById("navHomeBtn");
  const navNewQuizBtn = document.getElementById("navNewQuizBtn");

  if (logoLink) {
    logoLink.addEventListener("click", (e) => {
      e.preventDefault();
      switchView("viewHome");
    });
  }

  if (navHomeBtn) {
    navHomeBtn.addEventListener("click", () => switchView("viewHome"));
  }

  if (navNewQuizBtn) {
    navNewQuizBtn.addEventListener("click", () => switchView("viewSetup"));
  }

  // Hero Section Buttons
  const heroStartBtn = document.getElementById("heroStartBtn");
  if (heroStartBtn) {
    heroStartBtn.addEventListener("click", () => switchView("viewSetup"));
  }

  const heroDailyBtn = document.getElementById("heroDailyBtn");
  if (heroDailyBtn) {
    heroDailyBtn.addEventListener("click", startDailySparkQuiz);
  }

  // Mode Showcase Buttons on Dashboard
  const dashStartLearningBtn = document.getElementById("dashStartLearningBtn");
  if (dashStartLearningBtn) {
    dashStartLearningBtn.addEventListener("click", () => {
      appState.quizConfig.mode = "learning";
      switchView("viewSetup");
    });
  }

  const dashStartExamBtn = document.getElementById("dashStartExamBtn");
  if (dashStartExamBtn) {
    dashStartExamBtn.addEventListener("click", () => {
      appState.quizConfig.mode = "exam";
      switchView("viewSetup");
    });
  }

  // Category Cards on Home
  const categoryCards = document.querySelectorAll(".category-card");
  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const selectedCategory = card.dataset.category;
      if (selectedCategory) {
        appState.quizConfig.category = selectedCategory;
      }
      switchView("viewSetup");
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.click();
      }
    });
  });

  // Clear History Button
  const clearHistoryBtn = document.getElementById("clearHistoryBtn");
  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to clear your quiz attempts history?")) {
        clearStoredAttempts();
        renderDashboardStats();
      }
    });
  }

  // Setup Form: Back & Cancel buttons
  const setupBackBtn = document.getElementById("setupBackBtn");
  const setupCancelBtn = document.getElementById("setupCancelBtn");

  if (setupBackBtn) {
    setupBackBtn.addEventListener("click", () => switchView("viewHome"));
  }

  if (setupCancelBtn) {
    setupCancelBtn.addEventListener("click", () => switchView("viewHome"));
  }

  // Setup Form: Input change listeners
  const categoryInputs = document.querySelectorAll('input[name="setupCategory"]');
  categoryInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      appState.quizConfig.category = e.target.value;
      updateSetupSidebarPreview();
    });
  });

  const difficultyInputs = document.querySelectorAll('input[name="setupDifficulty"]');
  difficultyInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      appState.quizConfig.difficulty = e.target.value;
      updateSetupSidebarPreview();
    });
  });

  const modeInputs = document.querySelectorAll('input[name="setupMode"]');
  modeInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      appState.quizConfig.mode = e.target.value;
      updateSetupSidebarPreview();
    });
  });

  const countInputs = document.querySelectorAll('input[name="setupCount"]');
  countInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      appState.quizConfig.count = parseInt(e.target.value, 10);
      updateSetupSidebarPreview();
    });
  });

  // Begin Quiz Button
  const startQuizBtn = document.getElementById("startQuizBtn");
  if (startQuizBtn) {
    startQuizBtn.addEventListener("click", () => {
      startQuiz();
    });
  }

  // Active Quiz: Next & Previous
  const quizNextBtn = document.getElementById("quizNextBtn");
  if (quizNextBtn) {
    quizNextBtn.addEventListener("click", handleNextQuestion);
  }

  const quizPrevBtn = document.getElementById("quizPrevBtn");
  if (quizPrevBtn) {
    quizPrevBtn.addEventListener("click", handlePrevQuestion);
  }

  // Quit Quiz Modal Interactions
  const quitQuizBtn = document.getElementById("quitQuizBtn");
  const quitModal = document.getElementById("quitModal");
  const cancelQuitBtn = document.getElementById("cancelQuitBtn");
  const confirmQuitBtn = document.getElementById("confirmQuitBtn");

  if (quitQuizBtn && quitModal) {
    quitQuizBtn.addEventListener("click", () => {
      quitModal.style.display = "flex";
      if (cancelQuitBtn && typeof cancelQuitBtn.focus === "function") {
        cancelQuitBtn.focus();
      }
    });
  }

  if (cancelQuitBtn && quitModal) {
    cancelQuitBtn.addEventListener("click", () => {
      quitModal.style.display = "none";
      if (quitQuizBtn && typeof quitQuizBtn.focus === "function") {
        quitQuizBtn.focus();
      }
    });
  }

  if (confirmQuitBtn && quitModal) {
    confirmQuitBtn.addEventListener("click", () => {
      quitModal.style.display = "none";
      if (appState.activeQuiz.timerInterval) {
        clearInterval(appState.activeQuiz.timerInterval);
      }
      switchView("viewHome");
    });
  }

  // Unanswered Questions Modal Interactions (Exam Mode)
  const unansweredModal = document.getElementById("unansweredModal");
  const reviewUnansweredBtn = document.getElementById("reviewUnansweredBtn");
  const confirmSubmitUnansweredBtn = document.getElementById("confirmSubmitUnansweredBtn");

  if (reviewUnansweredBtn && unansweredModal) {
    reviewUnansweredBtn.addEventListener("click", () => {
      unansweredModal.style.display = "none";
      const nextBtn = document.getElementById("quizNextBtn");
      if (nextBtn && typeof nextBtn.focus === "function") {
        nextBtn.focus();
      }
    });
  }

  if (confirmSubmitUnansweredBtn && unansweredModal) {
    confirmSubmitUnansweredBtn.addEventListener("click", () => {
      unansweredModal.style.display = "none";
      finishQuiz();
    });
  }

  // Close modals when clicking darkened backdrop
  const playerDetailModalEl = document.getElementById("playerDetailModal");
  const badgeDetailModalEl = document.getElementById("badgeDetailModal");
  const resetModalEl = document.getElementById("resetModal");
  [quitModal, unansweredModal, resetModalEl, playerDetailModalEl, badgeDetailModalEl].forEach((m) => {
    if (m) {
      m.addEventListener("click", (e) => {
        if (e.target === m) {
          m.style.display = "none";
        }
      });
    }
  });

  // Results Actions
  const retakeQuizBtn = document.getElementById("retakeQuizBtn");
  if (retakeQuizBtn) {
    retakeQuizBtn.addEventListener("click", () => {
      startQuiz();
    });
  }

  const resultsHomeBtn = document.getElementById("resultsHomeBtn");
  
  // -------------------------------------------------------------
  // QuizUp Gaming Bottom Navigation Wire-up
  // -------------------------------------------------------------
  const bottomNavRankings = document.getElementById("bottomNavRankings");
  if (bottomNavRankings) {
    bottomNavRankings.addEventListener("click", () => {
      playGameSound("click");
      // Load active theme & font settings
  const activeTheme = getActiveTheme();
  document.body.setAttribute("data-theme", activeTheme);
  if (activeTheme === "midnight-galaxy") {
    document.body.classList.add("theme-midnight");
  }
  loadFontSettings();

  switchView("viewLeaderboard");
    });
  }

  const bottomNavDiscover = document.getElementById("bottomNavDiscover");
  if (bottomNavDiscover) {
    bottomNavDiscover.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewDiscover");
    });
  }

  const bottomNavPlay = document.getElementById("bottomNavPlay");
  if (bottomNavPlay) {
    bottomNavPlay.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewPlay");
    });
  }

  const bottomNavRewards = document.getElementById("bottomNavRewards");
  if (bottomNavRewards) {
    bottomNavRewards.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewRewards");
    });
  }

  const bottomNavProfile = document.getElementById("bottomNavProfile");
  if (bottomNavProfile) {
    bottomNavProfile.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewProfile");
    });
  }

  // -------------------------------------------------------------
  // Header Gaming Badges Wire-up
  // -------------------------------------------------------------
  const headerCoinBadge = document.getElementById("headerCoinBadge");
  if (headerCoinBadge) {
    headerCoinBadge.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewRewards");
    });
  }

  const headerStreakBadge = document.getElementById("headerStreakBadge");
  if (headerStreakBadge) {
    headerStreakBadge.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewRewards");
    });
  }

  const headerAvatarBtn = document.getElementById("headerAvatarBtn");
  if (headerAvatarBtn) {
    headerAvatarBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewProfile");
    });
  }

  const headerSettingsBtn = document.getElementById("headerSettingsBtn");
  if (headerSettingsBtn) {
    headerSettingsBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewSettings");
    });
  }

  const headerSoundBtn = document.getElementById("headerSoundBtn");
  if (headerSoundBtn) {
    headerSoundBtn.addEventListener("click", () => {
      const prof = getPlayerProfile();
      prof.soundEnabled = !prof.soundEnabled;
      savePlayerProfile(prof);
      const settingsToggle = document.getElementById("settingsSoundToggle");
      if (settingsToggle) settingsToggle.checked = prof.soundEnabled;
      if (prof.soundEnabled) playGameSound("click");
    });
  }

  const navAuthBtn = document.getElementById("navAuthBtn");
  if (navAuthBtn) {
    navAuthBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewLogin");
    });
  }

  const profileAccountBtn = document.getElementById("profileAccountBtn");
  if (profileAccountBtn) {
    profileAccountBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewLogin");
    });
  }

  initAuthScreen();

  // -------------------------------------------------------------
  // Play Hub Mode Cards
  // -------------------------------------------------------------
  const playModeSoloCard = document.getElementById("playModeSoloCard");
  if (playModeSoloCard) {
    playModeSoloCard.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewSetup");
    });
    playModeSoloCard.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        playModeSoloCard.click();
      }
    });
  }

  const playModeBotCard = document.getElementById("playModeBotCard");
  if (playModeBotCard) {
    playModeBotCard.addEventListener("click", () => {
      playGameSound("click");
      startComputerMatch();
    });
    playModeBotCard.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        playModeBotCard.click();
      }
    });
  }

  const playModeFriendCard = document.getElementById("playModeFriendCard");
  if (playModeFriendCard) {
    playModeFriendCard.addEventListener("click", () => {
      playGameSound("click");
      startFriendMatch();
    });
    playModeFriendCard.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        playModeFriendCard.click();
      }
    });
  }

  const playModeMultiCard = document.getElementById("playModeMultiCard");
  if (playModeMultiCard) {
    playModeMultiCard.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewMultiplayer");
    });
    playModeMultiCard.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        playModeMultiCard.click();
      }
    });
  }

  // -------------------------------------------------------------
  // Leaderboard Timeframe Tabs & Category Filter Pills
  // -------------------------------------------------------------
  const tabToday = document.getElementById("tabToday");
  if (tabToday) {
    tabToday.addEventListener("click", () => {
      playGameSound("click");
      renderLeaderboard("today", currentLeaderboardCategory);
    });
  }
  const tabWeekly = document.getElementById("tabWeekly");
  if (tabWeekly) {
    tabWeekly.addEventListener("click", () => {
      playGameSound("click");
      renderLeaderboard("weekly", currentLeaderboardCategory);
    });
  }
  const tabAllTime = document.getElementById("tabAllTime");
  if (tabAllTime) {
    tabAllTime.addEventListener("click", () => {
      playGameSound("click");
      renderLeaderboard("alltime", currentLeaderboardCategory);
    });
  }

  // Leaderboard Category Filter Pills (Arrow Keys & Click Navigation)
  const lbCatPills = Array.from(document.querySelectorAll("#leaderboardCategoryBar .lb-category-pill"));
  lbCatPills.forEach((pill, idx) => {
    pill.addEventListener("click", () => {
      playGameSound("click");
      const cat = pill.getAttribute("data-cat") || "all";
      renderLeaderboard(currentLeaderboardTimeframe, cat);
      if (typeof pill.scrollIntoView === "function") {
        try {
          pill.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        } catch (err) {}
      }
    });

    pill.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        pill.click();
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        const nextIdx = (idx + 1) % lbCatPills.length;
        lbCatPills[nextIdx].focus();
        lbCatPills[nextIdx].click();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        const prevIdx = (idx - 1 + lbCatPills.length) % lbCatPills.length;
        lbCatPills[prevIdx].focus();
        lbCatPills[prevIdx].click();
      }
    });
  });

  // Leaderboard "Play Now" Button
  const lbPlayBtn = document.getElementById("leaderboardPlayNowBtn");
  if (lbPlayBtn) {
    lbPlayBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewPlay");
    });
  }

  // Leaderboard Search Input & Clear
  const lbSearchInput = document.getElementById("leaderboardSearchInput");
  const lbSearchClearBtn = document.getElementById("leaderboardSearchClearBtn");
  if (lbSearchInput) {
    lbSearchInput.addEventListener("input", (e) => {
      currentLeaderboardSearchQuery = e.target.value;
      renderLeaderboard(currentLeaderboardTimeframe, currentLeaderboardCategory);
    });
  }
  if (lbSearchClearBtn) {
    lbSearchClearBtn.addEventListener("click", () => {
      playGameSound("click");
      if (lbSearchInput) lbSearchInput.value = "";
      currentLeaderboardSearchQuery = "";
      renderLeaderboard(currentLeaderboardTimeframe, currentLeaderboardCategory);
    });
  }

  // Leaderboard Refresh Button
  const lbRefreshBtn = document.getElementById("leaderboardRefreshBtn");
  if (lbRefreshBtn) {
    lbRefreshBtn.addEventListener("click", () => {
      refreshLeaderboardData();
    });
  }

  // Sticky "Your Rank" Strip
  const userRankStripEl = document.getElementById("userRankStrip");
  if (userRankStripEl) {
    userRankStripEl.addEventListener("click", () => {
      const profile = getPlayerProfile();
      const attempts = getStoredAttempts();
      const userAttempts = currentLeaderboardCategory === "all" ? attempts : attempts.filter(a => a.category === currentLeaderboardCategory);
      const acc = userAttempts.length ? Math.round(userAttempts.reduce((s, a) => s + (a.percentage || 0), 0) / userAttempts.length) + "%" : "0%";
      openPlayerDetailModal({
        rank: parseInt(userRankStripEl.getAttribute("data-user-rank"), 10) || 1,
        name: profile.name,
        avatar: profile.avatar,
        accuracy: acc,
        coins: profile.coins,
        badge: "Level " + (profile.level || 1) + " Cadet",
        discipline: currentLeaderboardCategory === "all" ? "Multi-Discipline" : currentLeaderboardCategory,
        streak: (profile.streak || 1) + " Days",
        isUser: true
      });
    });
  }

  // Player Detail Modal Close & Action
  const closePlayerModalBtn = document.getElementById("closePlayerModalBtn");
  if (closePlayerModalBtn) {
    closePlayerModalBtn.addEventListener("click", () => {
      playGameSound("click");
      const modal = document.getElementById("playerDetailModal");
      if (modal) modal.style.display = "none";
    });
  }
  const playerModalPlayBtn = document.getElementById("playerModalPlayBtn");
  if (playerModalPlayBtn) {
    playerModalPlayBtn.addEventListener("click", () => {
      playGameSound("click");
      const modal = document.getElementById("playerDetailModal");
      if (modal) modal.style.display = "none";
      switchView("viewSetup");
    });
  }

  // Badge Detail Modal Close & Action
  const closeBadgeModalBtn = document.getElementById("closeBadgeModalBtn");
  if (closeBadgeModalBtn) {
    closeBadgeModalBtn.addEventListener("click", () => {
      playGameSound("click");
      const modal = document.getElementById("badgeDetailModal");
      if (modal) modal.style.display = "none";
    });
  }
  const badgeModalActionBtn = document.getElementById("badgeModalActionBtn");
  if (badgeModalActionBtn) {
    badgeModalActionBtn.addEventListener("click", () => {
      const isUnl = badgeModalActionBtn.getAttribute("data-unlocked") === "true";
      const modal = document.getElementById("badgeDetailModal");
      if (modal) modal.style.display = "none";
      if (isUnl) {
        playGameSound("victory");
        triggerCelebration();
      } else {
        playGameSound("click");
        switchView("viewSetup");
      }
    });
  }

  // -------------------------------------------------------------
  // Discover Screen Search & Filter Chips
  // -------------------------------------------------------------
  const discoverSearchInput = document.getElementById("discoverSearchInput");
  if (discoverSearchInput) {
    discoverSearchInput.addEventListener("input", () => {
      renderDiscoverScreen();
    });
  }

  ["filterDiffAll", "filterDiffEasy", "filterDiffMedium", "filterDiffHard"].forEach(id => {
    const chip = document.getElementById(id);
    if (chip) {
      chip.addEventListener("click", () => {
        playGameSound("click");
        document.querySelectorAll("[data-diff-filter]").forEach(c => c.classList.remove("active-chip"));
        chip.classList.add("active-chip");
        discoverSelectedDiff = chip.getAttribute("data-diff-filter");
      });
    }
  });

  // -------------------------------------------------------------
  // Profile Name Saving
  // -------------------------------------------------------------
  const saveProfileNameBtn = document.getElementById("saveProfileNameBtn");
  if (saveProfileNameBtn) {
    saveProfileNameBtn.addEventListener("click", () => {
      playGameSound("click");
      const nameInput = document.getElementById("profileNameInput");
      if (nameInput && nameInput.value.trim()) {
        const prof = getPlayerProfile();
        prof.name = nameInput.value.trim();
        savePlayerProfile(prof);
        saveProfileNameBtn.textContent = "Saved! ✓";
        setTimeout(() => {
          saveProfileNameBtn.textContent = "Save";
        }, 1500);
      }
    });
  }

  // -------------------------------------------------------------
  // Rewards: Daily Bonus Claim
  // -------------------------------------------------------------
  const claimBonusBtn = document.getElementById("claimBonusBtn");
  if (claimBonusBtn) {
    claimBonusBtn.addEventListener("click", () => {
      const prof = getPlayerProfile();
      const todayStr = new Date().toISOString().slice(0, 10);
      if (prof.dailyBonusClaimedDate === todayStr) {
        alert("You have already claimed today's daily bonus! Come back tomorrow for more coins.");
      } else {
        prof.dailyBonusClaimedDate = todayStr;
        prof.coins = (prof.coins || 0) + 50;
        savePlayerProfile(prof);
        playGameSound("victory");
        triggerCelebration();
        alert("✨ Daily Bonus Claimed! +50 Gold Coins added to your treasury!");
      }
    });
  }

  // -------------------------------------------------------------
  // Multiplayer Demo Room
  // -------------------------------------------------------------
  const copyRoomCodeBtn = document.getElementById("copyRoomCodeBtn");
  if (copyRoomCodeBtn) {
    copyRoomCodeBtn.addEventListener("click", () => {
      playGameSound("click");
      const codeEl = document.getElementById("demoRoomCode");
      if (codeEl && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(codeEl.textContent.trim()).catch(() => {});
      }
      copyRoomCodeBtn.textContent = "Copied! ✓";
      setTimeout(() => {
        copyRoomCodeBtn.textContent = "Copy Code";
      }, 1500);
    });
  }

  const joinRoomBtn = document.getElementById("joinRoomBtn");
  if (joinRoomBtn) {
    joinRoomBtn.addEventListener("click", () => {
      const input = document.getElementById("joinRoomInput");
      if (!input || !input.value.trim()) {
        alert("Please enter a room code (e.g. QZ-8842).");
        return;
      }
      playGameSound("click");
      alert(`Connecting to room "${input.value.trim()}"... Connected! Host will launch match shortly.`);
    });
  }

  const startDemoMultiMatchBtn = document.getElementById("startDemoMultiMatchBtn");
  if (startDemoMultiMatchBtn) {
    startDemoMultiMatchBtn.addEventListener("click", () => {
      playGameSound("click");
      appState.quizConfig.category = "all";
      appState.quizConfig.difficulty = "all";
      appState.quizConfig.mode = "learning";
      appState.quizConfig.count = 5;
      startQuiz();
    });
  }

  const multiBackBtn = document.getElementById("multiBackBtn");
  if (multiBackBtn) {
    multiBackBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewPlay");
    });
  }

  // -------------------------------------------------------------
  // Settings & Midnight Theme
  // -------------------------------------------------------------
  const settingsSoundToggle = document.getElementById("settingsSoundToggle");
  if (settingsSoundToggle) {
    settingsSoundToggle.addEventListener("change", (e) => {
      const prof = getPlayerProfile();
      prof.soundEnabled = e.target.checked;
      savePlayerProfile(prof);
      if (prof.soundEnabled) playGameSound("click");
    });
  }

  const settingsThemeToggle = document.getElementById("settingsThemeToggle");
  if (settingsThemeToggle) {
    settingsThemeToggle.addEventListener("change", (e) => {
      const isDark = e.target.checked;
      document.body.classList.toggle("theme-midnight", isDark);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
      } catch (err) {}
      playGameSound("click");
    });
  }

  const openResetModalBtn = document.getElementById("openResetModalBtn");
  const resetModal = document.getElementById("resetModal");
  const cancelResetBtn = document.getElementById("cancelResetBtn");
  const confirmResetBtn = document.getElementById("confirmResetBtn");

  if (openResetModalBtn && resetModal) {
    openResetModalBtn.addEventListener("click", () => {
      playGameSound("click");
      resetModal.style.display = "flex";
    });
  }

  if (cancelResetBtn && resetModal) {
    cancelResetBtn.addEventListener("click", () => {
      resetModal.style.display = "none";
    });
  }

  if (confirmResetBtn && resetModal) {
    confirmResetBtn.addEventListener("click", () => {
      playGameSound("click");
      clearStoredAttempts();
      try {
        localStorage.removeItem("quizup_best_scores");
        localStorage.removeItem(GAMING_STORAGE_KEY);
      } catch (err) {}
      resetModal.style.display = "none";
      syncProfileUI();
      renderDashboardStats();
      renderRewardsBadges();
      alert("Career progress has been safely reset to factory defaults.");
    });
  }

  // -------------------------------------------------------------
  // Splash Screen Skip Button
  // -------------------------------------------------------------
  const splashScreen = document.getElementById("splashScreen");
  const splashSkipBtn = document.getElementById("splashSkipBtn");
  if (splashSkipBtn && splashScreen) {
    splashSkipBtn.addEventListener("click", () => {
      playGameSound("click");
      splashScreen.style.opacity = "0";
      splashScreen.style.pointerEvents = "none";
      setTimeout(() => {
        splashScreen.style.display = "none";
      }, 400);
    });
  }

  // -------------------------------------------------------------
  // Daily Challenge Screen
  // -------------------------------------------------------------
  const startDailyChallengeBtn = document.getElementById("startDailyChallengeBtn");
  if (startDailyChallengeBtn) {
    startDailyChallengeBtn.addEventListener("click", () => {
      playGameSound("click");
      appState.quizConfig.category = "all";
      appState.quizConfig.difficulty = "all";
      appState.quizConfig.mode = "learning";
      appState.quizConfig.count = 5;
      appState.quizConfig.isDailyChallenge = true;
      startQuiz();
    });
  }

  // -------------------------------------------------------------
  // Computer Match Rematch / Return
  // -------------------------------------------------------------
  const botRematchBtn = document.getElementById("botRematchBtn");
  if (botRematchBtn) {
    botRematchBtn.addEventListener("click", () => {
      playGameSound("click");
      startComputerMatch();
    });
  }

  const botReturnPlayBtn = document.getElementById("botReturnPlayBtn");
  if (botReturnPlayBtn) {
    botReturnPlayBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewPlay");
    });
  }

  // -------------------------------------------------------------
  // Friend Match Handover / Rematch / Return
  // -------------------------------------------------------------
  const friendReadyNextPlayerBtn = document.getElementById("friendReadyNextPlayerBtn");
  if (friendReadyNextPlayerBtn) {
    friendReadyNextPlayerBtn.addEventListener("click", () => {
      playGameSound("click");
      const handoverCard = document.getElementById("friendHandoverCard");
      if (handoverCard) handoverCard.style.display = "none";
      const qCard = document.getElementById("friendQuestionCard");
      if (qCard) qCard.style.display = "block";
      friendMatchState.currentTurn = 2;
      renderFriendRound();
    });
  }

  const friendRematchBtn = document.getElementById("friendRematchBtn");
  if (friendRematchBtn) {
    friendRematchBtn.addEventListener("click", () => {
      playGameSound("click");
      startFriendMatch();
    });
  }

  const friendReturnPlayBtn = document.getElementById("friendReturnPlayBtn");
  if (friendReturnPlayBtn) {
    friendReturnPlayBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewPlay");
    });
  }

  // -------------------------------------------------------------
  // Dedicated Review Screen Wire-up
  // -------------------------------------------------------------
  const openDedicatedReviewBtn = document.getElementById("openDedicatedReviewBtn");
  if (openDedicatedReviewBtn) {
    openDedicatedReviewBtn.addEventListener("click", () => {
      playGameSound("click");
      openDedicatedReviewScreen();
    });
  }

  const reviewBackToResultsBtn = document.getElementById("reviewBackToResultsBtn");
  if (reviewBackToResultsBtn) {
    reviewBackToResultsBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewResults");
    });
  }

  const dedicatedReviewFilterAllBtn = document.getElementById("dedicatedReviewFilterAllBtn");
  if (dedicatedReviewFilterAllBtn) {
    dedicatedReviewFilterAllBtn.addEventListener("click", () => {
      playGameSound("click");
      renderDedicatedReviewList("all");
    });
  }

  const dedicatedReviewFilterMistakesBtn = document.getElementById("dedicatedReviewFilterMistakesBtn");
  if (dedicatedReviewFilterMistakesBtn) {
    dedicatedReviewFilterMistakesBtn.addEventListener("click", () => {
      playGameSound("click");
      renderDedicatedReviewList("incorrect");
    });
  }

  const dedicatedReviewHomeBtn = document.getElementById("dedicatedReviewHomeBtn");
  if (dedicatedReviewHomeBtn) {
    dedicatedReviewHomeBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewHome");
    });
  }

  const dedicatedReviewRetryBtn = document.getElementById("dedicatedReviewRetryBtn");
  if (dedicatedReviewRetryBtn) {
    dedicatedReviewRetryBtn.addEventListener("click", () => {
      playGameSound("click");
      startQuiz();
    });
  }

  // -------------------------------------------------------------
  // Onboarding Start
  // -------------------------------------------------------------
  const onboardingStartBtn = document.getElementById("onboardingStartBtn");
  if (onboardingStartBtn) {
    onboardingStartBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewPlay");
    });
  }

  
  
  // -------------------------------------------------------------
  // Theme Studio & Font Settings Wire-up
  // -------------------------------------------------------------
  const themeStudioBackBtn = document.getElementById("themeStudioBackBtn");
  if (themeStudioBackBtn) {
    themeStudioBackBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewSettings");
    });
  }

  const resetThemeDefaultBtn = document.getElementById("resetThemeDefaultBtn");
  if (resetThemeDefaultBtn) {
    resetThemeDefaultBtn.addEventListener("click", () => {
      playGameSound("click");
      applyTheme("lavender-dream");
    });
  }

  const settingsOpenThemesBtn = document.getElementById("settingsOpenThemesBtn");
  if (settingsOpenThemesBtn) {
    settingsOpenThemesBtn.addEventListener("click", () => {
      playGameSound("click");
      openThemeStudio();
    });
  }

  const openThemeStudioBtn = document.getElementById("openThemeStudioBtn");
  if (openThemeStudioBtn) {
    openThemeStudioBtn.addEventListener("click", () => {
      playGameSound("click");
      openThemeStudio();
    });
  }

  const settingsOpenFontsBtn = document.getElementById("settingsOpenFontsBtn");
  if (settingsOpenFontsBtn) {
    settingsOpenFontsBtn.addEventListener("click", () => {
      playGameSound("click");
      openFontSettings();
    });
  }

  const fontSettingsBackBtn = document.getElementById("fontSettingsBackBtn");
  if (fontSettingsBackBtn) {
    fontSettingsBackBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewSettings");
    });
  }

  const fontChoiceGrid = document.getElementById("fontChoiceGrid");
  if (fontChoiceGrid) {
    fontChoiceGrid.querySelectorAll("[data-font]").forEach(btn => {
      btn.addEventListener("click", () => {
        playGameSound("click");
        selectedFontFamily = btn.getAttribute("data-font");
        document.body.setAttribute("data-font", selectedFontFamily);
        renderFontSettings();
      });
    });
  }

  const fontSizeChoiceGroup = document.getElementById("fontSizeChoiceGroup");
  if (fontSizeChoiceGroup) {
    fontSizeChoiceGroup.querySelectorAll("[data-size]").forEach(btn => {
      btn.addEventListener("click", () => {
        playGameSound("click");
        selectedFontSize = btn.getAttribute("data-size");
        document.body.setAttribute("data-font-size", selectedFontSize);
        renderFontSettings();
      });
    });
  }

  const saveFontBtn = document.getElementById("saveFontBtn");
  if (saveFontBtn) {
    saveFontBtn.addEventListener("click", () => {
      try {
        localStorage.setItem(FONT_FAMILY_KEY, selectedFontFamily);
        localStorage.setItem(FONT_SIZE_KEY, selectedFontSize);
      } catch (err) {}
      playGameSound("victory");
      alert("Typography preferences saved!");
      switchView("viewSettings");
    });
  }

  const resetFontBtn = document.getElementById("resetFontBtn");
  if (resetFontBtn) {
    resetFontBtn.addEventListener("click", () => {
      playGameSound("click");
      selectedFontFamily = "plus-jakarta";
      selectedFontSize = "medium";
      document.body.setAttribute("data-font", "plus-jakarta");
      document.body.setAttribute("data-font-size", "medium");
      try {
        localStorage.removeItem(FONT_FAMILY_KEY);
        localStorage.removeItem(FONT_SIZE_KEY);
      } catch (err) {}
      renderFontSettings();
    });
  }

  // -------------------------------------------------------------
  // Avatar Studio Wire-up
  // -------------------------------------------------------------
  const openAvatarStudioBtn = document.getElementById("openAvatarStudioBtn");
  if (openAvatarStudioBtn) {
    openAvatarStudioBtn.addEventListener("click", () => {
      playGameSound("click");
      openAvatarStudio();
    });
  }

  const avatarStudioBackBtn = document.getElementById("avatarStudioBackBtn");
  if (avatarStudioBackBtn) {
    avatarStudioBackBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewProfile");
    });
  }

  const cancelAvatarStudioBtn = document.getElementById("cancelAvatarStudioBtn");
  if (cancelAvatarStudioBtn) {
    cancelAvatarStudioBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewProfile");
    });
  }

  const randomizeAvatarBtn = document.getElementById("randomizeAvatarBtn");
  if (randomizeAvatarBtn) {
    randomizeAvatarBtn.addEventListener("click", () => {
      playGameSound("click");
      studioDraftAvatar = STUDIO_BASE_AVATARS[Math.floor(Math.random() * STUDIO_BASE_AVATARS.length)];
      const prof = getPlayerProfile();
      const owned = prof.ownedAccessories || ["none"];
      studioDraftAccessory = owned[Math.floor(Math.random() * owned.length)];
      syncStudioPreview();
      renderStudioShelves();
    });
  }

  const saveAvatarStudioBtn = document.getElementById("saveAvatarStudioBtn");
  if (saveAvatarStudioBtn) {
    saveAvatarStudioBtn.addEventListener("click", () => {
      const prof = getPlayerProfile();
      prof.avatar = studioDraftAvatar;
      prof.equippedAccessory = studioDraftAccessory;
      const nameInput = document.getElementById("studioNameInput");
      if (nameInput && nameInput.value.trim()) {
        prof.name = nameInput.value.trim();
      }
      savePlayerProfile(prof);
      playGameSound("victory");
      alert("Avatar persona saved successfully!");
      switchView("viewProfile");
    });
  }

  // -------------------------------------------------------------
  // Leaderboard Play Now Button
  // -------------------------------------------------------------
  const leaderboardPlayNowBtn = document.getElementById("leaderboardPlayNowBtn");
  if (leaderboardPlayNowBtn) {
    leaderboardPlayNowBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewPlay");
    });
  }

  // -------------------------------------------------------------
  // Discover Format Chips (Speed, True/False, Word, Memory, Survival, Riddles)
  // -------------------------------------------------------------
  const discoverFormatChips = document.getElementById("discoverFormatChips");
  if (discoverFormatChips) {
    discoverFormatChips.querySelectorAll("[data-format]").forEach(chip => {
      chip.addEventListener("click", () => {
        playGameSound("click");
        const fmt = chip.getAttribute("data-format");
        if (fmt === "speed") startSpeedSprint();
        else if (fmt === "tf") startTrueFalseMode();
        else if (fmt === "word") startWordPuzzle();
        else if (fmt === "memory") startMemoryMatch();
        else if (fmt === "survival") startSurvivalMode();
        else if (fmt === "riddles") startRiddleMode();
      });
    });
  }

  // Speed Sprint Exit
  const speedBackBtn = document.getElementById("speedBackBtn");
  if (speedBackBtn) {
    speedBackBtn.addEventListener("click", () => {
      if (speedState.timer) clearInterval(speedState.timer);
      playGameSound("click");
      switchView("viewDiscover");
    });
  }

  // True/False Exit & Buttons
  const tfBackBtn = document.getElementById("tfBackBtn");
  if (tfBackBtn) {
    tfBackBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewDiscover");
    });
  }
  const tfTrueBtn = document.getElementById("tfTrueBtn");
  if (tfTrueBtn) {
    tfTrueBtn.addEventListener("click", () => handleTrueFalseAnswer(true));
  }
  const tfFalseBtn = document.getElementById("tfFalseBtn");
  if (tfFalseBtn) {
    tfFalseBtn.addEventListener("click", () => handleTrueFalseAnswer(false));
  }

  // Word Puzzle Buttons
  const wordBackBtn = document.getElementById("wordBackBtn");
  if (wordBackBtn) {
    wordBackBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewDiscover");
    });
  }
  const clearWordBtn = document.getElementById("clearWordBtn");
  if (clearWordBtn) {
    clearWordBtn.addEventListener("click", () => {
      playGameSound("click");
      setupWordPuzzle();
    });
  }
  const submitWordBtn = document.getElementById("submitWordBtn");
  if (submitWordBtn) {
    submitWordBtn.addEventListener("click", checkWordAnswer);
  }

  // Memory Match Buttons
  const memoryBackBtn = document.getElementById("memoryBackBtn");
  if (memoryBackBtn) {
    memoryBackBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewDiscover");
    });
  }
  const restartMemoryBtn = document.getElementById("restartMemoryBtn");
  if (restartMemoryBtn) {
    restartMemoryBtn.addEventListener("click", () => {
      playGameSound("click");
      startMemoryMatch();
    });
  }

  // Survival Mode Exit
  const survivalBackBtn = document.getElementById("survivalBackBtn");
  if (survivalBackBtn) {
    survivalBackBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewDiscover");
    });
  }

  // Riddles Mode Buttons
  const riddlesBackBtn = document.getElementById("riddlesBackBtn");
  if (riddlesBackBtn) {
    riddlesBackBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewDiscover");
    });
  }
  const showRiddleHintBtn = document.getElementById("showRiddleHintBtn");
  if (showRiddleHintBtn) {
    showRiddleHintBtn.addEventListener("click", () => {
      playGameSound("click");
      const hint = document.getElementById("riddleHintBox");
      if (hint) hint.style.display = "block";
    });
  }
  const revealRiddleAnswerBtn = document.getElementById("revealRiddleAnswerBtn");
  if (revealRiddleAnswerBtn) {
    revealRiddleAnswerBtn.addEventListener("click", () => {
      playGameSound("click");
      const ans = document.getElementById("riddleAnswerBox");
      if (ans) ans.style.display = "block";
    });
  }
  const nextRiddleBtn = document.getElementById("nextRiddleBtn");
  if (nextRiddleBtn) {
    nextRiddleBtn.addEventListener("click", () => {
      playGameSound("click");
      riddleIdx++;
      renderRiddle();
    });
  }

  // Reduced Motion Setting
  const settingsReducedMotionToggle = document.getElementById("settingsReducedMotionToggle");
  if (settingsReducedMotionToggle) {
    settingsReducedMotionToggle.addEventListener("change", (e) => {
      playGameSound("click");
      if (e.target.checked) {
        document.body.classList.add("reduced-motion");
      } else {
        document.body.classList.remove("reduced-motion");
      }
    });
  }

  // -------------------------------------------------------------
  // Comprehensive Results Screen Actions Wire-up
  // -------------------------------------------------------------
  if (resultsHomeBtn) {
    resultsHomeBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewHome");
    });
  }

  if (newQuizFromResultsBtn) {
    newQuizFromResultsBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewSetup");
    });
  }

  const reviewAllBtn = document.getElementById("reviewAllBtn");
  if (reviewAllBtn) {
    reviewAllBtn.addEventListener("click", () => {
      playGameSound("click");
      appState.reviewFilter = "all";
      const filterPills = document.querySelectorAll(".review-filter-pill");
      filterPills.forEach((p) => p.classList.toggle("active", p.dataset.filter === "all"));
      renderReviewList("all");
      const reviewSec = document.querySelector(".review-section");
      if (reviewSec && typeof reviewSec.scrollIntoView === "function") {
        reviewSec.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  const reviewMistakesBtn = document.getElementById("reviewMistakesBtn");
  if (reviewMistakesBtn) {
    reviewMistakesBtn.addEventListener("click", () => {
      playGameSound("click");
      appState.reviewFilter = "incorrect";
      const filterPills = document.querySelectorAll(".review-filter-pill");
      filterPills.forEach((p) => p.classList.toggle("active", p.dataset.filter === "incorrect"));
      renderReviewList("incorrect");
      const reviewSec = document.querySelector(".review-section");
      if (reviewSec && typeof reviewSec.scrollIntoView === "function") {
        reviewSec.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  const tryAnotherChallengeBtn = document.getElementById("tryAnotherChallengeBtn");
  if (tryAnotherChallengeBtn) {
    tryAnotherChallengeBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewPlay");
    });
  }

  // Review Filter Buttons
  const filterPills = document.querySelectorAll(".review-filter-pill");
  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      filterPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      const filterType = pill.dataset.filter;
      appState.reviewFilter = filterType;
      renderReviewList(filterType);
    });
  });

  // Keyboard Shortcuts for Accessible & Fast Answering
  window.addEventListener("keydown", (e) => {
    if (appState.currentView === "viewQuiz") {
      const key = e.key.toUpperCase();
      let optIdx = -1;
      if (key === "1" || key === "A") optIdx = 0;
      else if (key === "2" || key === "B") optIdx = 1;
      else if (key === "3" || key === "C") optIdx = 2;
      else if (key === "4" || key === "D") optIdx = 3;

      if (optIdx !== -1) {
        const optionBtns = document.querySelectorAll(".option-btn");
        if (optionBtns[optIdx] && !optionBtns[optIdx].disabled) {
          optionBtns[optIdx].click();
        }
      } else if (e.key === "Enter") {
        const nextBtn = document.getElementById("quizNextBtn");
        if (nextBtn && !nextBtn.disabled && document.activeElement !== nextBtn) {
          nextBtn.click();
        }
      }
    }

    if (e.key === "Escape") {
      const quitModal = document.getElementById("quitModal");
      if (quitModal && quitModal.style.display === "flex") {
        quitModal.style.display = "none";
      }
      const unansweredModal = document.getElementById("unansweredModal");
      if (unansweredModal && unansweredModal.style.display === "flex") {
        unansweredModal.style.display = "none";
      }
      const playerDetailModal = document.getElementById("playerDetailModal");
      if (playerDetailModal && playerDetailModal.style.display === "flex") {
        playerDetailModal.style.display = "none";
      }
      const badgeDetailModal = document.getElementById("badgeDetailModal");
      if (badgeDetailModal && badgeDetailModal.style.display === "flex") {
        badgeDetailModal.style.display = "none";
      }
      const resetModal = document.getElementById("resetModal");
      if (resetModal && resetModal.style.display === "flex") {
        resetModal.style.display = "none";
      }
      const photoPreviewModal = document.getElementById("photoPreviewModal");
      if (photoPreviewModal && photoPreviewModal.style.display === "flex") {
        cancelGalleryPhoto();
      }
      const qbPanel = document.getElementById("quizBuddyChatPanel");
      if (qbPanel && qbPanel.style.display === "flex") {
        qbPanel.style.display = "none";
      }
    }
  });

  // -------------------------------------------------------------
  // Navigation & Rankings Return to Dashboard
  // -------------------------------------------------------------
  const lbToDashBtn = document.getElementById("leaderboardToDashboardBtn");
  if (lbToDashBtn) {
    lbToDashBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewHome");
    });
  }

  const headerLogo = document.querySelector(".header-brand");
  if (headerLogo) {
    headerLogo.style.cursor = "pointer";
    headerLogo.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewHome");
    });
  }

  // -------------------------------------------------------------
  // Discover Filters & Reset Wiring
  // -------------------------------------------------------------
  document.querySelectorAll("#discoverCategoryFilterBar .discover-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      playGameSound("click");
      document.querySelectorAll("#discoverCategoryFilterBar .discover-chip").forEach(c => c.classList.remove("active-chip"));
      chip.classList.add("active-chip");
      discoverSelectedCategory = chip.getAttribute("data-cat") || "all";
      renderDiscoverScreen();
    });
  });

  document.querySelectorAll("#discoverDiffFilterBar .discover-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      playGameSound("click");
      document.querySelectorAll("#discoverDiffFilterBar .discover-chip").forEach(c => c.classList.remove("active-chip"));
      chip.classList.add("active-chip");
      discoverSelectedDiff = chip.getAttribute("data-diff") || "all";
      renderDiscoverScreen();
    });
  });

  document.querySelectorAll("#discoverFormatFilterBar .discover-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      playGameSound("click");
      document.querySelectorAll("#discoverFormatFilterBar .discover-chip").forEach(c => c.classList.remove("active-chip"));
      chip.classList.add("active-chip");
      discoverSelectedFormat = chip.getAttribute("data-format") || "all";
      renderDiscoverScreen();
    });
  });

  const discClearBtn = document.getElementById("discoverSearchClearBtn");
  if (discClearBtn) {
    discClearBtn.addEventListener("click", () => {
      playGameSound("click");
      const s = document.getElementById("discoverSearchInput");
      if (s) s.value = "";
      renderDiscoverScreen();
    });
  }

  const discResetBtn = document.getElementById("discoverResetSearchBtn");
  if (discResetBtn) {
    discResetBtn.addEventListener("click", () => {
      playGameSound("click");
      resetDiscoverFilters();
    });
  }

  // -------------------------------------------------------------
  // Profile Photo Upload & Management
  // -------------------------------------------------------------
  const choosePhotoBtn = document.getElementById("choosePhotoBtn");
  const photoInput = document.getElementById("profilePhotoInput");
  if (choosePhotoBtn && photoInput) {
    choosePhotoBtn.addEventListener("click", () => {
      photoInput.click();
    });
    photoInput.addEventListener("change", handleGalleryPhotoSelected);
  }

  const savePhotoBtn = document.getElementById("savePhotoPreviewBtn");
  if (savePhotoBtn) savePhotoBtn.addEventListener("click", saveGalleryPhoto);

  const cancelPhotoBtn = document.getElementById("cancelPhotoPreviewBtn");
  if (cancelPhotoBtn) cancelPhotoBtn.addEventListener("click", cancelGalleryPhoto);

  const closePhotoModalBtn = document.getElementById("closePhotoPreviewBtn");
  if (closePhotoModalBtn) closePhotoModalBtn.addEventListener("click", cancelGalleryPhoto);

  const removePhotoBtn = document.getElementById("removePhotoBtn");
  if (removePhotoBtn) removePhotoBtn.addEventListener("click", removeCustomPhoto);

  // Profile Edit Display Name
  const profileEditNameBtn = document.getElementById("profileEditNameBtn");
  const profileSaveNameBtn = document.getElementById("profileSaveNameBtn");
  const profileNameInput = document.getElementById("profileNameInput");
  if (profileEditNameBtn && profileNameInput) {
    profileEditNameBtn.addEventListener("click", () => {
      const isHidden = profileNameInput.style.display === "none" || !profileNameInput.style.display;
      profileNameInput.style.display = isHidden ? "block" : "none";
      if (profileSaveNameBtn) profileSaveNameBtn.style.display = isHidden ? "inline-block" : "none";
      if (isHidden) profileNameInput.focus();
    });
  }

  if (profileSaveNameBtn && profileNameInput) {
    profileSaveNameBtn.addEventListener("click", () => {
      const val = profileNameInput.value.trim();
      if (val) {
        const p = getPlayerProfile();
        p.name = val;
        savePlayerProfile(p);
        playGameSound("victory");
        profileNameInput.style.display = "none";
        profileSaveNameBtn.style.display = "none";
        syncProfileUI();
      }
    });
  }

  // Profile Settings Quick Access
  const profileOpenSettingsBtn = document.getElementById("profileOpenSettingsBtn");
  if (profileOpenSettingsBtn) {
    profileOpenSettingsBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewSettings");
    });
  }

  const settingsBackToProfileBtn = document.getElementById("settingsBackToProfileBtn");
  if (settingsBackToProfileBtn) {
    settingsBackToProfileBtn.addEventListener("click", () => {
      playGameSound("click");
      switchView("viewProfile");
    });
  }

  const profileSoundToggle = document.getElementById("profileSoundToggle");
  if (profileSoundToggle) {
    profileSoundToggle.addEventListener("change", (e) => {
      const p = getPlayerProfile();
      p.soundEnabled = e.target.checked;
      savePlayerProfile(p);
      const sToggle = document.getElementById("settingsSoundToggle");
      if (sToggle) sToggle.checked = p.soundEnabled;
      if (p.soundEnabled) playGameSound("click");
    });
  }

  const profileThemeToggle = document.getElementById("profileThemeToggle");
  if (profileThemeToggle) {
    profileThemeToggle.addEventListener("change", (e) => {
      const isDark = e.target.checked;
      document.body.classList.toggle("theme-midnight", isDark);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
      } catch (err) {}
      const sToggle = document.getElementById("settingsThemeToggle");
      if (sToggle) sToggle.checked = isDark;
      playGameSound("click");
    });
  }

  const profileReducedMotionToggle = document.getElementById("profileReducedMotionToggle");
  if (profileReducedMotionToggle) {
    profileReducedMotionToggle.addEventListener("change", (e) => {
      playGameSound("click");
      if (e.target.checked) {
        document.body.classList.add("reduced-motion");
      } else {
        document.body.classList.remove("reduced-motion");
      }
      const sToggle = document.getElementById("settingsReducedMotionToggle");
      if (sToggle) sToggle.checked = e.target.checked;
    });
  }

  const profileResetDataBtn = document.getElementById("profileResetDataBtn");
  if (profileResetDataBtn) {
    profileResetDataBtn.addEventListener("click", () => {
      playGameSound("click");
      const resetModal = document.getElementById("resetModal");
      if (resetModal) resetModal.style.display = "flex";
    });
  }

  // -------------------------------------------------------------
  // QuizBuddy Assistant Controls
  // -------------------------------------------------------------
  const qbFloatingBtn = document.getElementById("quizBuddyFloatingBtn");
  if (qbFloatingBtn) {
    qbFloatingBtn.addEventListener("click", () => toggleQuizBuddy());
  }

  const dashQbBtn = document.getElementById("dashboardQuizBuddyOpenBtn");
  if (dashQbBtn) {
    dashQbBtn.addEventListener("click", () => toggleQuizBuddy(true));
  }


  const qbCloseBtn = document.getElementById("quizBuddyCloseBtn");
  if (qbCloseBtn) {
    qbCloseBtn.addEventListener("click", () => toggleQuizBuddy(false));
  }

  const qbClearBtn = document.getElementById("quizBuddyClearBtn");
  if (qbClearBtn) {
    qbClearBtn.addEventListener("click", () => {
      playGameSound("click");
      clearQuizBuddyChat();
    });
  }

  const qbSendBtn = document.getElementById("quizBuddySendBtn");
  if (qbSendBtn) {
    qbSendBtn.addEventListener("click", () => sendQuizBuddyMessage());
  }

  const qbInput = document.getElementById("quizBuddyInput");
  if (qbInput) {
    qbInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendQuizBuddyMessage();
      }
    });
  }

  document.querySelectorAll(".qb-prompt-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      playGameSound("click");
      const p = chip.getAttribute("data-prompt");
      toggleQuizBuddy(true);
      sendQuizBuddyMessage(p);
    });
  });
}

// ==========================================================================
// 11. Application Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Restore Midnight Theme preference
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === "dark") {
      document.body.classList.add("theme-midnight");
      const toggle = document.getElementById("settingsThemeToggle");
      if (toggle) toggle.checked = true;
    }
  } catch (err) {}

  // Sync initial sound preferences
  const profile = getPlayerProfile();
  const soundToggle = document.getElementById("settingsSoundToggle");
  if (soundToggle) soundToggle.checked = profile.soundEnabled;

  setupEventListeners();
  renderDashboardStats();
  renderDailyGrowthTip();
  initQuizBuddy();
  syncProfileUI();
  syncAuthUI();

  // Initial Screen Routing:
  // Show Welcome & Login screen before main app for users who have not signed in or selected Guest mode.
  // Returning visitors or active guest sessions proceed to the Leaderboard screen.
  try {
    const hasSession = localStorage.getItem(AUTH_SESSION_KEY);
    if (!hasSession) {
      switchView("viewLogin");
    } else {
      switchView("viewLeaderboard");
    }
  } catch (err) {
    switchView("viewLeaderboard");
  }

  // Screen 11: Auto-dismiss Splash Screen after 1.5s
  const splash = document.getElementById("splashScreen");
  if (splash) {
    setTimeout(() => {
      splash.style.transition = "opacity 0.4s ease, visibility 0.4s ease";
      splash.style.opacity = "0";
      splash.style.pointerEvents = "none";
      setTimeout(() => {
        splash.style.display = "none";
      }, 400);
    }, 1500);
  }
});
