var arr = [12,2,1,6,15,13,8,14,3,9,16,5,10,4,7,11]

func insertionSort(var input: [Int]) -> [Int] {
    var item, i: Int
    
    for x in 0..<input.count {
        item = input[x]
        for i = x; i >= 0; i-- {
            if item < input[i] {
                input.removeAtIndex(i + 1)
                input.insert(item, atIndex: i)
            }
        }
    }
    
    return input
}

print(insertionSort(arr))
