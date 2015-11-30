var arr = [1,2,3,4,5,6,7,8]

func binarySearch(input: [Int], key: Int, inputMax: Int, inputMin: Int = 0) {
    let midIndex : Double = round(Double((inputMax + inputMin) / 2))
    let midNumber = input[Int(midIndex)]
    
    if midNumber > key {
        binarySearch(input, key: key, inputMax: Int(midIndex) - 1, inputMin: inputMin)
    }
    else if (midNumber < key ) {
        binarySearch(input, key: key, inputMax: inputMax, inputMin: Int(midIndex) + 1)
    }
    else {
        print("\(key) found")
    }
    
}

binarySearch(arr, key: 3, inputMax: arr.count)
