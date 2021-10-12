var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 44, 86];

function search(arr, key) {
    var low = 0,
        high = arr.length - 1,
        mid;
    while (low <= high) {
        mid = parseInt((low + high) / 2);
        if (arr[mid] === key) {
            return mid;
        } else if (arr[mid] < key) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}

console.log(search(arr, 8));