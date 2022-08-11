function quickSort(arr: number[]): any {
    if (arr.length < 2) return arr

    const base = arr[0]
    const excluded = arr.slice(1)
    const lessThanBase = excluded.filter(n => n < base)
    const greaterThanBase = excluded.filter(n => n > base)

    console.log({initial: arr})
    console.log({lessThanBase, base, greaterThanBase})
    console.log('__________________')

    return [...quickSort(lessThanBase), base, ...quickSort(greaterThanBase)]
}

const sorted = quickSort([10, 5, 2, 3])
console.log(sorted)