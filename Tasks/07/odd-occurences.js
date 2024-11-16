function oddOccurences(words) {
    // Split the input string into an array of words
    let array = words.split(' ');

    // Create an object to count occurrences
    let occurences = {};

    // Count occurrences of each word (case-insensitive)
    array.forEach(word => {
        let lowerWord = word.toLowerCase(); // Normalize case
        occurences[lowerWord] = (occurences[lowerWord] || 0) + 1; // Increment count
    });

    // Track the order of words with odd occurrences
    let oddOccurences = [];
    array.forEach(word => {
        let lowerWord = word.toLowerCase();
        if (occurences[lowerWord] % 2 !== 0 && !oddOccurences.includes(lowerWord)) {
            oddOccurences.push(lowerWord); // Add only if it's not already in the result
        }
    });

    // Join and return the result
    console.log(oddOccurences.join(' '));
}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')	//c# php 1 5
oddOccurences('Cake IS SWEET is Soft CAKE sweet Food')	//soft food