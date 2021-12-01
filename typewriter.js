const numbers = [14, 78, 100, 5, 13, 9, 673, 4567]
const sampleSentence = "hello there from lighthouse labs";

const mystery = (sentence, index = 0) => {

    if(sentence.length === index) {
      process.stdout.write('\n');
    return;

    }
    
    process.stdout.write(sentence[index]);

    setTimeout(() => {
      mystery(sentence, index+1);
    }, 100);
    
}

mystery(sampleSentence);


// // for (const char of sentence) {
// //  setTimeout(() => {
// //  }, 3000)
// //  process.stdout.write(char);
// }
