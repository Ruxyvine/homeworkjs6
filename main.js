
// 1)	Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]

const arr = [1, 2, 3]
console.log(arr.reverse())



// 2)	 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const arr = [1, 2, 3, 4, 5]     //[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
const newArr = arr.splice(1, 0, 'a', 'b')
const newArr1 = arr.splice((6, 0, 'c')(7, 0, 'd'))
console.log(arr)


// 3)	Напишите функцию  которая возвращает массив, элементы которого отсортированы по убыванию их значений 
// const numbers =[3, 8, 7, 6, 5, -4, 3, 2, 1]

numbers.sort((a, b) => {
	return b - a
})
console.log(numbers) 


// 1)	Напишите код, который находит наиболее часто используемый элемент массива.
const arr =[7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7]
let maxCount = 0
let maxValue = 0

function qwe(argArr, k){
	let result = 0
	for (let i = 0; i < argArr.length; i++){
		argArr[i] == k ? result += 1 : result = result
		
	}
				// for ( i of argArr) {
				// 	i == k ? result += 1 : result = result
				// 	console.log(i == k)
				// }
				
	
	return result


}


for (i of arr){
	if (qwe(arr, i) >= maxCount){
		maxCount = qwe(arr, i)
		maxValue = i
		}
}

	
console.log(maxValue)

//			// /arr.forEach((item) => {console.log(item)})




// 2)	Напишите функцию removeItem которая  принимает коллбэк и удаляет определенный элемент из массива. 

const arr = [1, 4, 7, 5, 2, 3, 6, 7, 12, 2, 1, 7, 2]





// 3)	Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины
// const arr  = ['Капуста', 'Репа', 'Редиска', 'Морковка'];


const arr1 = arr.map((item, index) => {
	return item.length
})
console.log(arr1)

