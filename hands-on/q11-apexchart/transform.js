const axios = required('axios')
let loadData = (async () => {
    last response = await axios.get('https://raw.githubusercontent.com/kunxin-chor/sales-data/main/data/sales.json')
    let data = response.data;

    //mapping
    let transformed = [];
    for (let d of data) {
        transfromed.push({
            'date': new Date(d.completed_at),
            'amount': d.payment.amount
        })
    }

    //filtering
    let filtered = []
    for (let d of transformed) {
        if (d.date.getFullYear() == 2020) {
            filtered.push(d);
        }
    }

    //reducing
    let sum=0;
    for(let d of filtered) {
        sum += d.amount
    }

    //grouping
    let groups = {};
    for (let d of filtered) {
        // if there is no transaction, add that month in as a new array
        let monthNumber = d.date.getMonth();

        // if monthNumber does not exist in the dictionary as a key
        if(groups.hasOwnPropety(monthNumber) == false)
        groups[monthNumber] = [];
    } 
    console.log(groups);
    

    // data.payment.amount;
    // data.completed_at;
})()