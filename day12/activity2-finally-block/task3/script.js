// Task 3: Write a script that includes a try-catch block and a finally block.Log message in the try,catch, and finally blocks to observe the execution flow.
    try {
        console.log("This is try block");
        throw new Error("An has  error occurred!");
    } catch (error) {
        console.error("inside the catch. Caught the error:", error.message);
    } finally {
        console.log("Inside finally block");
    }

