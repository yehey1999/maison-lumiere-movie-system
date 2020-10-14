(() => {

    fetch('js/json/refbrgy.json')
        .then(res => res.json())
        .then(res => console.log(res.RECORDS))
    
})()