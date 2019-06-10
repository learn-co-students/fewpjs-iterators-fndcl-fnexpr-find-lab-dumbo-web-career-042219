const testVar = {}

function testFunc() {
  return "hi"
}

// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
//   //...
// ]

const superbowlWin = (record) => {
  let victory = record.find(rec => rec.result === "W")
  if (victory == undefined) {
		return undefined
	} else {
	return victory.year
  }
}
