const items = Array.from({length: 99}, (_, i) => i + 1)

/**
 * Binary search is an efficient algorithm for finding an item from a sorted list of items.
 * It works by repeatedly dividing in half the portion of the list that could contain the item,
 * until you've narrowed down the possible locations to just one.
 * @param items
 * @param item
 */
function binarySearch(items: number[], item: number) {
    let low = 0
    let high = items.length - 1
    let i = 1
    console.log("max iterations count: ", Math.ceil(Math.log2(items.length)))
    while (low <= high) {
        const middle = Math.floor((low + high) / 2)
        const guess = items[middle]
        if (guess == item) {
            console.log("actual iterations count: ", i)
            return middle
        } else if (guess > item) {
            high = guess - 1
        } else low = guess + 1
        i++
    }

    return null
}

const result = binarySearch(items, 57)
console.log(result)