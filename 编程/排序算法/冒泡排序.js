var arr = [24, 15, 32, 28, 19, 10, 40]

function sort(arr) {
    var i,j,tmp,flag;
    for(i=arr.length-1; i>=1; i--){
        flag=0;
        for(j=0; j<i; j++){
            if(arr[j]>arr[j+1]){
                tmp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=tmp;
                flag=1;
            }
        }
        if(flag===0)
            return
    }
}

sort(arr);
console.log(arr);