let ar = [5,
    1000000001,1000000002,1000000003,1000000004,1000000005]
let sum = 0
    
    function aVeryBigSum(ar, sum) {
        for (var i = 0; i < ar.length; i++) {
            sum+=ar[i]
        }
        return sum
    
    }
    console.log(aVeryBigSum(ar, sum))