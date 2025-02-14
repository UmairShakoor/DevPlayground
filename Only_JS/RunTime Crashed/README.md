# RunTime Crashed 💥

This JavaScript project demonstrates a common error: an infinite loop, which leads to a runtime crash (or at least freezes the browser tab).

## What Happened 💡

The `for` loop in this code is missing the increment/decrement part.  It initializes `i` to 0 and checks if `i` is less than 100. However, there's no code to *change* the value of `i` inside the loop.  This means the condition `i < 100` is *always* true, so the loop runs forever, trying to print numbers to the console. Eventually, the browser or Node.js will run out of resources and crash (or become unresponsive).

## How to Run (and Stop!) 🏃‍♂️

1.  Open the `index.js` file in your web browser's developer console (F12).
2.  Run the code.  You'll see numbers rapidly printing to the console.
3.  **To stop the infinite loop:** You'll likely have to close the browser tab or stop the Node.js process.  Be careful!

## What I Learned 📈

This project (and the crash!) helped me understand:

*   The importance of the increment/decrement part of a `for` loop.
*   How infinite loops can cause runtime errors.
*   Why it's crucial to have a way for a loop's condition to eventually become false.

## The Corrected Code (so it doesn't crash) ✅

```javascript
for (var i = 0; i < 100; i++) {  // Added i++ to increment i
    console.log(i);
}
```

## Get in touch 📫

*   [LinkedIn](https://www.linkedin.com/in/umair-shakoor/)
*   [Email](mailto:umairshakoor.pro@gmail.com)