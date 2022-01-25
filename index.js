// code your solution here
function superbowlWin(record) {
    if (record.result === "W") {
        return record.year;
    }
    else {
        return undefined;
    }
}
let win = recordList.find(superbowlWin);