class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(char){
    const code = char.toUpperCase().charCodeAt(0);

    const isLetter = code >= 65 && code <= 90;
    const isNumber = code >= 48 && code <= 57;

    return isLetter || isNumber;
}

    isPalindrome(s) {
  s = s.toUpperCase();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!this.isAlphaNumeric(s[left])) {
      left++;
      continue;
    }

    if (!this.isAlphaNumeric(s[right])) {
      right--;
      continue;
    }

    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
}
