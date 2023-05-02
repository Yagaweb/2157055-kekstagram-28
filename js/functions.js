function stringLen (testString, maxLen) {
  return testString.length <= maxLen;
}


//облегченный вариант задания
function palindrom (testString) {
  return testString.toLowerCase() === testString.split('').reverse().join('').toLowerCase();
}

function takeNum (testString) {
  if (typeof testString === 'number') {
    return testString;
  }
  let changeStr = '';
  for (let i = 0; i < testString.length; i++) {
    if (parseInt(testString[i], 10) >= 0) {
      changeStr += testString[i];
    }
  }
  return parseInt(changeStr, 10);
}

function addStr (testString, maxLen, add) {
  if (testString.length < maxLen) {
    let answer = '';
    const addCount = maxLen - testString.length;
    if (add.length > addCount) {
      for(let i = 0; i < addCount; i++){
        answer += add[i];
      }
    } else {
      if (addCount % add.length !== 0){
        answer += add.slice(0, addCount % add.length);
        answer += add;
        answer += testString;
        return answer;
      }
      for (let i = 0; i < addCount; i++){
        answer += add;
      }
    }
    answer += testString;
    return answer;
  }
  return testString;
}
