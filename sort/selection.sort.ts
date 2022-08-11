/**
 * finds the smallest item in array
 * @param arr
 */
function findSmallest(arr: number[]) {
    let smallest = arr[0]
    let smallestIndex = 0

    arr.forEach((v, i) => {
        if (v < smallest) {
            smallest = v
            smallestIndex = i
        }
    })

    return smallestIndex
}

function selectionSort(arr: number[]) {
    const newArr: number[] = []
    const arrCopy = [...arr]

    arr.forEach((v, i) => {
        const smallest = findSmallest(arrCopy)
        newArr.push(arrCopy[smallest])
        arrCopy.splice(smallest, 1)
    })

    return newArr
}

const nums = [5, 2, 1, 15, 9, 3]
const smallest = findSmallest(nums)
console.log("index", smallest, "value", nums[smallest])

const sortedArr = selectionSort(nums)
console.log(sortedArr)