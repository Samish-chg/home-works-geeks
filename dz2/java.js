//var arr =['10', '20', '30', '50', '235', '3000']
for (var i =0; i<arr.length;i++ ) {
 if ( i===1 || i===2 || i===5)
console.log (arr[i])}

for( let i=20; i>=0;i--){
 console.log(i)
}
var color=prompt('Введите цвет')
switch (color) {
 case 'красный':
  alert('Стоп');
  break;
 case 'желтый':
  alert('Приготовьтесь');
  break;
 case 'зеленый':
  alert('Идите');
  break;
 default:
  alert('Введите корректный цвет светофора (красный, желтый или зеленый)');
}
var svetofor= prompt(' выберите цвет ')
if (svetofor==='red' ){
 console.log('stop!')
} else if (svetofor === 'yellow'){
 console.log('wait')
}else if (svetofor === 'green'){
 console.log('go')
}else{
 console.error('error')
}

var arr=[]
 for (let i = 0; i < 10; i++) {
  arr.push(i)
 }
console.log(arr)











