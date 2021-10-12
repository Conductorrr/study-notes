// 直接插入排序
// 希尔排序

// 冒泡排序
// 快速排序

// 简单选择排序
// 堆排序

var arr = [24, 15, 32, 28, 19, 10, 40]

function sort(arr) {
    var i,j,tmp;
    for(i=1; i<arr.length; i++){
        tmp=arr[i];
        j=i-1;
        while(tmp<arr[j] && j>=0){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=tmp;
    }
}

sort(arr);
console.log(arr);