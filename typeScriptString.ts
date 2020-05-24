//String Operation
class Paragraph {
  constructor(private para: any) {
    this.para = para;
  }

  occurances(): void {
    const myString = this.para;
    let count: any = {};
    myString
      .toLowerCase()
      .split("")
      .forEach(function(s) {
        count[s] ? count[s]++ : (count[s] = 1);
      });
    console.log(count);
  }

  noWords(): void {
    let wordsArray: (any)[]; //generic array
    wordsArray = this.para.split(" "); // split with space
    // for(let index in wordsArray)
    // {
    //     console.log(wordsArray[index]);  // output: Array elements
    // }
    console.log("Number of words are==>>" + wordsArray.length);
  }
  noSentences(): void {
    let sentencesArray: (any)[]; //generic array
    sentencesArray = this.para.split("."); // split with space
    // for(let index in sentencesArray)
    // {
    //     console.log(sentencesArray[index]);  // output: Array elements
    // }
    console.log("Number of sentences are==>>" + sentencesArray.length);
  }
  tranformText(): void {}
}

let obj = new Paragraph(
  "Typescript is a ES 6 based programming langugae. This is developed by Microsoft. This language is used for modern front-end programming. The Angular uses this language for its development. Typescript has data types, object oriented programming, etc. This language improves the productivity of JavaScript programming and gives power to it. The TypeScript is transpiled into JavaScript."
);
obj.occurances();
obj.noWords();
obj.noSentences();
obj.tranformText();
