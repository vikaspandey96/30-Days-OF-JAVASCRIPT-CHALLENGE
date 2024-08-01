// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few cases. 
function isPalindrome(str) {
    str = str.toLowerCase();
    if (str.length <= 1) {
      return true;
    }
    if (str[0] === str[str.length - 1]) {
      return isPalindrome(str.slice(1, -1));
    } else {
      return false;
    }
  }
  
  console.log(isPalindrome("some"));
  console.log(isPalindrome("level"));
  console.log(isPalindrome("madam"));
