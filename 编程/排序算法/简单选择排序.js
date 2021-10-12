var arr = [24, 15, 32, 28, 19, 10, 40]

function sort(arr) {
    var i,j,k,tmp;
    for(i=0; i<arr.length; i++){
        k=i;
        for(j=i+1; j<arr.length; j++) {
            if(arr[j]<arr[k])
                k=j;
        }
        if(k!=i){
            tmp=arr[i];
            arr[i]=arr[k];
            arr[k]=tmp;
        }
    }
}

sort(arr);
console.log(arr);