//Your Code Goes Here
const fs = require('fs');
const path = require('path');


// Declaring the two file paths........
const file1Path = path.join(__dirname, 'text1.txt');
const file2Path = path.join(__dirname, 'text2.txt');



function countDuplicateWords(file1Path, file2Path) {
    
     // Read the content of the two files
    const text1 = fs.readFileSync(file1Path, 'utf-8');
    const text2 = fs.readFileSync(file2Path, 'utf-8');


    // Combining the two contents of both files
    const combinedText = text1 + ' ' + text2;


    // Remove special characters and split the text into words
    const words = combinedText.toLowerCase().match(/\b\w+\b/g);


    // Count the occurrences of each word
    const wordCount = {};
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });


    // Filter words with count greater than 1 (duplicates)
    const duplicates = {};
    for (const word in wordCount) {
        if (wordCount[word] > 1) {
            duplicates[word] = wordCount[word];
        }
    }

    return duplicates;
}


//Declaring the counts.....
const result = countDuplicateWords(file1Path, file2Path);


console.log(result);
