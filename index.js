const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (arr) => {
  let record = arr.find(obj => obj.result === "W")
  return record != undefined ? record.year:undefined
}
