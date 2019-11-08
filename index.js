superbowlWin = records => {
  let win = records.find(record => record.result === "W");
  return win ? win.year : undefined;
};
