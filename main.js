const input = 'Hi hooman you';
const vowels = ['a', 'e', 'i','o','u'];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
  //console.log("I is " + i)
for (let vowel = 0; vowel < vowels.length; vowel++) {
  //console.log('Vowel is ' + vowel)
  if ( input[i] === vowels[vowel]) {
    if (input[i] === 'e') {
      resultArray.push('ee');
    }
    else if (input[i] === 'u') {
       resultArray.push('uu');

    }
      else{ 
        resultArray.push(input[i]);
      }
     }
}
}
console.log(resultArray.join('').toUpperCase());

    
  
