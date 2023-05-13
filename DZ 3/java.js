
function getItem(data){
    console.log(typeof data)
}
getItem(5)

function calculator(num1,operator,num2 ) {
    var result
    switch (operator){
        case '+' :
            result=num1+num2
            break
        case '-' :
            result=num1-num2
            break
        case '*' :
            result=num1*num2
            break
        case '/' :
            if (num1 === 0 || num2 === 0){
                alert(' На ноль делить нельзя')
            }
            result=num1/num2
            break
        default:
            return'Неправильный оператор '
    }

  return result
}
var num1=Number(prompt('введите первое число'))
var operator=(prompt('введите  математическое действия(+,-,*,/)'))
var num2=Number(prompt('введите второе число'))
alert(calculator(num1,operator,num2,))

var getPosition= (element, array) =>{
    var leftIndex=0
    var rightIndex=array.length-1

    while (leftIndex<=rightIndex){
        var middleIndex= Math.floor((leftIndex+rightIndex)/2)
        if(array[middleIndex]===element){
            return middleIndex

        } else if (array[middleIndex]<element){
            leftIndex=middleIndex+1
        }else {rightIndex=middleIndex-1}
    }return -1
}
var arr=[1,2,3,4,5,6]
console.log(getPosition(9,arr))

