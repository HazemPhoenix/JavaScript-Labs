function toPascalCase(fullname) {
  return fullname
    .split(" ")
    .map((str) => str[0].toUpperCase() + str.substring(1))
    .join(" ");
}
