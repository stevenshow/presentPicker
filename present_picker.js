const names = [
    'kayla',
    'steven',
    'bradley',
    'erica',
    'ethan',
    'mia',
    'hamish',
]

const getIndex = (arr) => {
    return Math.floor(Math.random() * arr.length)
}

const present_picker = (names) => {
    const present_list = {}
    const to_give = [...names]
    const to_receive = [...names]
    try {
        while (to_give.length > 0) {
            let gIndex = getIndex(to_give)
            let giver = to_give[gIndex]
            let rIndex = getIndex(to_give)
            let receiver = to_receive[rIndex]
            while (giver === receiver) {
                gIndex = getIndex(to_give)
                giver = to_give[gIndex]
                rIndex = getIndex(to_give)
                receiver = to_receive[rIndex]
                if (to_give.length === 1 && giver === receiver) throw 'Duplicate'
            }
            present_list[to_give[gIndex]] = to_receive[rIndex]
            to_give.splice(gIndex, 1)
            to_receive.splice(rIndex, 1)
        }
        return present_list
    } catch (e) {
        if (e === 'Duplicate') return present_picker(names)
    }
}

const give_list = present_picker(names)
console.table(give_list)

