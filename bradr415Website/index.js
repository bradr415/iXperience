


document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("fibonacci-btn"); // Corrected button ID

    button.addEventListener("click", function() {
        // Calculate Fibonacci sequence
        function fibonacciSequence(){
            let list = [0, 1];
            
            for (let i = 2; i < 10; i++) {
              list[i] = list[i - 1] + list[i - 2];
            }
            
            return list;
        }
        
        // Get the container to display the sequence
        var sequenceContainer = document.getElementById("fibonacciSequence");

        // Generate the Fibonacci sequence
        var sequence = fibonacciSequence();

        // Display the sequence in the container
        sequenceContainer.textContent = "Fibonacci Sequence: " + sequence.join(", ");
    });
});