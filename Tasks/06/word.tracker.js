function wordTracker(array) {
    // Get the first string from the array as the words to track
    let searchedWords = array.shift().split(' ');
    
    // Initialize word counters
    let wordsEncounter = {};
    searchedWords.forEach(word => (wordsEncounter[word] = 0));

    // Count occurrences of the searched words in the rest of the array
    array.forEach(word => {
        if (wordsEncounter.hasOwnProperty(word)) {
            wordsEncounter[word]++;
        }
    });

    // Sort the words by their count in descending order
    let sortedWords = Object.entries(wordsEncounter).sort((a, b) => b[1] - a[1]);

    // Print the results
    sortedWords.forEach(([word, count]) => {
        console.log(`${word} - ${count}`);
    });
}
wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])	
    // this - 3
    // sentence - 2
wordTracker( [
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])	
    // the – 3
    // is - 1