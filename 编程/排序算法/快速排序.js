var arr = [24, 15, 32, 28, 19, 10, 40]

function sort(arr,l,r,) {
    var i=l,j=r,tmp;
    if(l<r){
        tmp=arr[i];
        while(i<j){
            while(i<j && arr[j]>tmp) j--;
            if(i<j){
                arr[i]=arr[j];
                i++;
            }
            while(i<j && arr[i]<tmp) i++;
            if(i<j){
                arr[j]=arr[i];
                j--;
            }
        }
        arr[i]=tmp;
        sort(arr, l, i-1);
        sort(arr, i+1, r)
    }
}

sort(arr, 0, arr.length-1);
console.log(arr);