var initialState = [{
    id :1,
    name : "Samsung Galaxy A7 (2018) 128GB",
    image: "https://cdn.tgdd.vn/Products/Images/42/192003/samsung-galaxy-a9-2018-blue-400x400.jpg",
    des : "xx",
    price : 500,
    inventory : 10,
    rating : 4,
    numberReview : 40,
    promotions : [
        {
            content: "- Cơ hội trúng 61 xe Wave Alpha khi trả góp Home Credit",
        },
        {
            content: "- Ưu đãi Galaxy uống cafe & xem phim cuối tuần trị giá 900.000đ",
        },
        {
            content: "- Giảm 1.5 triệu cho khách hàng sử dụng điện thoại Samsung chính hãng",
        },
        {
            content: "- Thu cũ đổi mới tiết kiệm đến 5 triệu (10 - 31/12)",
        }
    ]
    
},
{
    id :2,
    name : "OPPO A3s 32GB",
    image: "https://cdn.tgdd.vn/Products/Images/42/183994/oppo-a3s-32gb-400x400.jpg",
    des : "xx",
    price : 500,
    inventory : 10,
    rating : 2,
    numberReview : 21,
    promotions : [
        {
            content: "- t3",
        }
    ]
},
{
    id :3,
    name : "Samsung Galaxy Note 9",
    image: "https://cdn.tgdd.vn/Products/Images/42/154897/samsung-galaxy-note-9-black-600x600-600x600-400x400.jpg",
    des : "xx",
    price : 500,
    inventory : 10,
    rating : 3,
    numberReview : 30,
    promotions : [
        {
            content: "- t3",
        },
        
    ]
},
{
    id :3,
    name : "Samsung Galaxy Note 9",
    image: "https://cdn.tgdd.vn/Products/Images/42/154897/samsung-galaxy-note-9-black-600x600-600x600-400x400.jpg",
    des : "xx",
    price : 500,
    inventory : 10,
    rating : 3,
    numberReview : 30,
    promotions : [
        {
            content: "- Tặng Phiếu mua hàng 100.000đ"
        },
       
        
    ]
}
,
{
    id :4,
    name : "Samsung Galaxy Note 9",
    image: "https://cdn.tgdd.vn/Products/Images/42/154897/samsung-galaxy-note-9-black-600x600-600x600-400x400.jpg",
    des : "xx",
    price : 500,
    inventory : 10,
    rating : 3,
    numberReview : 30,
    promotions : [
        {
            content: "- t3",
        },
        
    ]
}
,
{
    id :5,
    name : "Samsung Galaxy Note 9",
    image: "https://cdn.tgdd.vn/Products/Images/42/154897/samsung-galaxy-note-9-black-600x600-600x600-400x400.jpg",
    des : "xx",
    price : 500,
    inventory : 10,
    rating : 3,
    numberReview : 30,
    promotions : [
        {
            content: "- t3",
        },
        
    ]
}
]
const phones = (state = initialState, action)=>{
    switch(action.type){
        default :  return [...state];
    }
}
export default phones;

