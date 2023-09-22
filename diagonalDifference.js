let ar = [
    [3],
    [-1,1,-7,-8],
    [-10,-8,-5,-2],
    [0,9,7,-1],
    [4,4,-2,1]]

    let rightDiagonal = 0
    let leftDiagonal = 0
    
    function diagonalDifference(ar, rightDiagonal, leftDiagonal) {
        for (var i = 1; i < ar.length; i+=1) {
            rightDiagonal += ar[i][i-1]
            leftDiagonal += ar[i][ar.length-1-i]
        }
        let diff = Math.abs(rightDiagonal-leftDiagonal)

        return diff
    }
    console.log(diagonalDifference(ar, rightDiagonal, leftDiagonal))