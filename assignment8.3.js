/* In this printTimesTable(x) a parameter number value for x must be passed inorder
 to generate a multiplication table of x from 1 time till 10 times */ 
    function printTimesTable(x){ 
        for(var i=1;i<=10;i++) {                //for conditional loop has i value initialized to 1, iterates 1 time to 10 times
        console.log(x +" * "+i+" = "+(x * i)); //prints  multiplication table of the input number from 1 time to 10 times to the browser console 
    }
}
    printTimesTable(5);