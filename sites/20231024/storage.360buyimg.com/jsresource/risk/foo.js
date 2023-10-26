const set1 = Object.entries(Object.getOwnPropertyDescriptors(this)).map(_ => _[0])


const set2 = Object.entries(Object.getOwnPropertyDescriptors(this)).map(_ => _[0])

const result = []
for (const key of set2) {
    if (!set1.includes(key)) {
        result.push(key)
    }
}
console.log(result)
