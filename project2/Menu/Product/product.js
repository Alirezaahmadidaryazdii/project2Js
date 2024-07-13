
let params = new URLSearchParams(window.location.search);
let id = params.get('id');

let Data = [
    {id: 1, src: '../image/pexels-chevanon-312418.jpg', title: 'lead Energy', value: 100},
    {id: 2, src: '../image/pexels-isabella-mendes-107313-338713.jpg', title: 'Hot Coffees', value: 150},
    {id: 3, src: '../image/pexels-markusspiske-128242.jpg', title: 'Cold Coffees', value: 300},
    {id: 4, src: '../image/pexels-wdnet-103566.jpg', title: 'Hot Teas', value: 200},
]

let dataMain = Data.filter(item=>{
    return item.id == Number(id)
})

let addCard = document.querySelector('#add-card')

let txtHtmlElement = `
    <div class="col-12 col-md-6 d-flex justify-content-end align-items-end parts-body">
        <img src="${dataMain[0].src}" width="100px" alt="">
    </div>
    <div class="col-12 col-md-6 d-flex justify-content-center align-items-center justify-content-md-start align-items-md-start flex-column mt-5">
        <h3>${dataMain[0].title}</h3>
        <h5 class="d-flex">Price: <p class="d-inline">${dataMain[0].value}</p></h5>
        <button class="btn btn-danger">Buy Now</button>
    </div>
`
addCard.insertAdjacentHTML('beforeend', txtHtmlElement)