var arr = [12,2,1,6,15,13,8,14,3,9,16,5,10,4,7,11]

func bubbleSort(var input: [Int]) -> [Int] {
    var passes, item, next: Int
    let max = input.count - 1
    
    for x in 0...max {
        passes = max - x
        for y in 0..<passes {
            item = input[y]
            next = input[y + 1]
            if item > next {
                input[y + 1] = item
                input[y] = next
            }
        }
    }
    
    return input
}

print(bubbleSort(arr))
