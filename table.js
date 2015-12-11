var data = [
["Student", "Jim", "Joe", "Sally", "Susan"],
["Science", 57, 90, 100, 75],
["Math", 95, 73, 67, 85],
["English", 75, 70, 67, 89]
];

var container = document.getElementById('table');
var hot = new Handsontable(container, {
data: data,
minSpareRows: 1,
rowHeaders: true,
colHeaders: true,
contextMenu: true
});