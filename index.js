const testVar = {};

function testFunc() {
  return "hi";
}

let superbowlWin = arr => {
  let record = arr.find(obj => obj.result === "W");
  return record ? record.year : record;
};
