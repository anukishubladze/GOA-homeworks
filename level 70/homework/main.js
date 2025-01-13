//Create a function that returns a 2D array (of increasing numbers) by column ds rows, e.g.: func(2,2) --> [ [1,2], [3,4] ]
function createMatrix(rows, cols) {
    // Create empty 2D array
    let matrix = Array(rows).fill().map(() => Array(cols));
    let count = 1;
    
    // Fill by columns
    for(let col = 0; col < cols; col++) {
        for(let row = 0; row < rows; row++) {
            matrix[row][col] = count++;
        }
    }
    
    return matrix;
}

console.log(createMatrix(2, 2));  // [[1,2], [3,4]]
console.log(createMatrix(3, 2));  // [[1,2], [3,4], [5,6]]
console.log(createMatrix(2, 3));  // [[1,2,3], [4,5,6]]

function createMatrix(rows, cols) {
    return Array(rows)
        .fill()
        .map((_, row) => Array(cols)
            .fill()
            .map((_, col) => col * rows + row + 1)
        );
}