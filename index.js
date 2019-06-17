const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (record) => {
  let win = record.find(rec => rec.result === "W")
  if (win == undefined) {
		return undefined
	} else {
	return win.year
  }
}
