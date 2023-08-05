let numbers = [0, 10, 2, 3, 1, 20, 30];
numbers.sort((a, b) => a - b);

console.log(numbers);

function ordenaArray(array)
{
  for (let i=0 ; i < array.length; i++)
  {
      for (let j = i + 1; j < array.length; j++) 
       {  
           let tmp = 0;                           
           if (array[i] > array[j]) 
           {          
               tmp = array[i];               
               array[i] = array[j];           
               array[j] = tmp;
           }
       }
   
        
    }
    //for (let i = 0; i < array.length; i++) 
      //{
        console.log(array);  
       //}

}
let array = [0, 5, 7, 4, 1, 2, 3, 6]
ordenaArray(array)