const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (objArray) => {
  let obj = objArray.find((x) =>  {
    return x.result === 'W'
  })

  return obj ? obj['year'] :obj
}
