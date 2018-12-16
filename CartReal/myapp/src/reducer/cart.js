import * as types from '../constain/ActionTypes'


//var data= JSON.parse(localStorage.getItem('CART'));
var initialState = [
    {
        phone : {
            id :4,
            name : "Samsung Galaxy Note 9",
            image: "https://cdn.tgdd.vn/Products/Images/42/154897/samsung-galaxy-note-9-black-600x600-600x600-400x400.jpg",
            des : "xx",
            price : 1700,
            inventory : 10,
            rating : 3,
            numberReview : 30,
            promotions : [
                {
                    content: "- Khuyến mãi 1",
                },
                
            ]
        },
        quantity :1
    },
    {
        phone : {
            id :5,
            name : "Samsung Galaxy Note 9",
            image: "https://cdn.tgdd.vn/Products/Images/42/154897/samsung-galaxy-note-9-black-600x600-600x600-400x400.jpg",
            des : "xx",
            price : 250,
            inventory : 10,
            rating : 3,
            numberReview : 30,
            promotions : [
                {
                    content: "- Khuyến mãi 1",
                },
                
            ]
        },
        quantity :3
    }
]
    
const cart = (state = initialState, action)=>{
    switch(action.type){
        case types.ADD_TO_CART :
            console.log(action);
            return [...state];
        default : return [...state];
    }
}
export default cart;

