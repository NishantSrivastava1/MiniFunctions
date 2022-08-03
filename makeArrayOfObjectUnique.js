let data = [
    { id: 1, name: "Nishant" },
    { id: 2, name: "Srivastava" },
    { id: 3, name: "Alpha" },
    { id: 1, name: "Nishant" },
    { id: 3, name: "Alpha" },
    { id: 4, name: "Anonymous" },
]


uniqueDataArr = [...new Map(data.map((item) => [item["id"], item])).values()];

console.log("Unique Data Array Is Here ====>", uniqueDataArr)

/**
    OUTPUT ========>

    Unique Data Array Is Here ====> [
    { id: 1, name: 'Nishant' },
    { id: 2, name: 'Srivastava' },
    { id: 3, name: 'Alpha' },
    { id: 4, name: 'Anonymous' }
]


 */