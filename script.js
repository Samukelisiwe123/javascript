fetch('./data.json')
.then(resp => resp.json())
.then(data =>{
    const datalist = document.getElementById('data-list');
    console.log(data);

    //lets get our items as list from datasource
    data.forEach(item => {
        const itemList = document.createElement('li');
        itemList.innerHTML=`<strong>Name:</strong>${item.name}<br><strong>Email:</strong> ${item.email}`
        datalist.appendChild(itemList)
    });
})
.catch(error=>{
    console.error('Error loading data from data source,error');
})