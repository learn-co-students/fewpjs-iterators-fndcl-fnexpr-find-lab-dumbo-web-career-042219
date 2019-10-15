function superbowlWin(arr) {
  let obj = arr.find(record => record["result"] === "W");

  return obj ? obj["year"] : obj;
}