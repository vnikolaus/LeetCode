/**
 * @param {Array<>} grid 
 * @param {number} k 
 * @returns {Array<>}
 */
function rotateGrid(grid, k) {
    let lengthRows = grid.length -1, lengthCols = grid[0].length - 1
    let startRow = 0, startCol = 0
    while(lengthRows > 0 && lengthCols > 0) {
      const endRow = lengthRows + startRow, endCol = lengthCols + startCol
      const aroundLength = (lengthRows * 2) + (lengthCols * 2)
      const rotations = k % aroundLength
      const indexes = {}, tempArray = [], rotatedElements = []
      let row = startRow, col = startCol
      for (let i = 0; i < aroundLength; i++) {
        indexes[i] = [row, col]
        if (i >= rotations) {
          tempArray.push(grid[row][col])
        } else {
          rotatedElements.push(grid[row][col])
        }
        if (row === startRow && col < endCol) col++
        else if (col === endCol && row < endRow) row++
        else if (row === endRow && col > startCol) col--
        else row--
      }
      tempArray.push(...rotatedElements)
      tempArray.forEach((el, i) => {
        const [row, col] = indexes[i]
        grid[row][col] = el
      })
      startRow++; startCol++; lengthRows -= 2; lengthCols -= 2
    }
    return grid
  }
