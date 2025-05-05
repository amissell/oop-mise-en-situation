function alphabetSubsequence(str) {
    let i = 0;
    while (i < str.length - 1) {
      if (str[i] >= str[i + 1]) {
        return false;
      }
      i++;
    }
    return true;
  }
  
  
  
console.log(alphabetSubsequence("ace"));   
console.log(alphabetSubsequence("bxz"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
