function takeANumber (line, name) {
  line.push(name)
    // appends name to line

  return `Welcome, ${name}. You are number ${line.length} in line.`
    // template literal allows you to interpolate expressions
}

function takeANumberAlt (line, ) {

}

function nowServing (line) {
  if (!line.length) {
      // i.e. if line has 0 length

    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
    // shift() returns the value removed from the beginning of the array
}

function currentLine (line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  // var newLine = line.map((name, index) => (index + 1) + '. ' + name)
    /* instead of looping through array, can use map() to
       to run a function on each element
       in this case adding "index + 1" and ". "
    */

  var newLine = []
    // creates a second array

  for (let i = 0; i < line.length; i++) {
      // loops through all array elements

    newLine.push(`${i + 1}. ${line[i]}`)
      // append a string literal with "array index + 1" and "array value"
  }

  return `The line is currently: ${newLine.join(", ")}`
    // join() concatenates array elements, ", " specifies the separator
}
