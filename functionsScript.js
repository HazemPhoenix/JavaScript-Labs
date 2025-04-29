function toPascalCase(fullname) {
  return fullname
    .split(" ")
    .map((str) => str[0].toUpperCase() + str.substring(1))
    .join(" ");
}

function longestWord(sentence) {
  const words = sentence.split(" ");
  longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

function sortString(str) {
  return str
    .split("")
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join("");
}
