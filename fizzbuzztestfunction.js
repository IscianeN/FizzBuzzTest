

function FizzBuzz(){
    arr = [];
    let i = 0;
    while(i <= 100){
        if(i%3 == 0 && i%5 == 0){
            arr.push("FizzBuzz"), i++
        }
        else if (i % 3 == 0){
           arr.push("Fizz"), i++
        }
        else if(i %5 == 0){
            arr.push("Buzz"),i++
        }
        else{
            arr.push(i), i++
        }
    } 
        return arr
}

let output = FizzBuzz()
console.log(output)

let arrayTestError =[0,1,2,3,4,5,"Buzz"]

const testFunction = (arr) => {
    let i = 0
    while(i <= arr.length){
        if((i%3 ==0 && i%5==0) && (arr[i] !== 'FizzBuzz')){
            console.log("FizzBuzz Error",arr[i],i);
           
        } else if(i%3 == 0 ){
            switch(arr[i]){
                case "Fizz" : 
                console.log("c'est juste",arr[i], i)
                    break 
                    case "Buzz":
                        console.log("FizzError",arr[i], i)
                        break
            default : console.log("Miss fizz")
            };

           

        } else if(i%5 == 0){
            switch(arr[i]){
                case "Buzz" :
                    console.log("c'est good")
                    break
                case "Fizz" :
                    console.log("c'est faux")
                    break
            default : console.log("miss buzz")
                }
           

        } else{
           console.log("bien joué",arr[i], i);
            
        } 
        i++
        };
        return
    }

    console.log(testFunction(output))

  