function matrixMultiplication(a, b) {
  var aNumRows = a.length,
    aNumCols = a[0].length,
    bNumCols = b[0].length,
    m = new Array(aNumRows);
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols);
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  return m;
}

var a = [
  [1, 2, 3],
  [4, 5, 6],
];
var b = [
  [2, 4, 1, 2],
  [1, 3, 2, 4],
  [2, 1, 4, 1],
];

console.log(matrixMultiplication(a, b));
