let SequenceList = [49, 38, 65, 97, 76, 13, 27]

function BubbleSort(List) {
    let l_item = 0
    let r_item = 1
    let SortedNum = 0
    let length = List.length
    while (SortedNum <= 7) {
        if (List[l_item] > List[r_item]) {
            let sup_item = List[l_item]
            List[l_item] = List[r_item]
            List[l_item + 1] = sup_item
        }
        l_item++
        r_item++
        if (r_item === length) {
            SortedNum++
            l_item = 0
            r_item = 1
        }
    }
    return List
}

console.log(BubbleSort(SequenceList))