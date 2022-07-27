// code : 이미지 코드

const productList = [
    {
        subject: "아이시스 8.0 생수",
        capacity: "2000",
        count: 24,
        price: 17800,
        score: 4.9,
        score_count: 100602,
        code: 1,
    },
    {
        subject: "아이시스 8.0 ECO",
        capacity: "1500",
        count: 18,
        price: 12120,
        score: 4.8,
        score_count: 16423,
        code: 2,
    },
    {
        subject: "아이시스 8.0 생수",
        capacity: "500",
        count: 40,
        price: 13980,
        score: 4.5,
        score_count: 89069,
        code: 3,
    },
    {
        subject: "아이시스 8.0 생수",
        capacity: "300",
        count: 40,
        price: 11600,
        score: 4.5,
        score_count: 94659,
        code: 4,
    },
    {
        subject: "아이시스 8.0 생수",
        capacity: "200",
        count: 40,
        price: 11950,
        score: 4.9,
        score_count: 43091,
        code: 5,
    },
    {
        subject: "아이시스 8.0 생수",
        capacity: "200",
        count: 80,
        price: 19420,
        score: 4.5,
        score_count: 31429,
        code: 6,
    },
    {
        subject: "아이시스 8.0 생수",
        capacity: "200",
        count: 80,
        price: 12490,
        score: 4.3,
        score_count: 95771,
        code: 7,
    },
    {
        subject: "아이시스 8.0 생수",
        capacity: "300",
        count: 60,
        price: 15520,
        score: 4.4,
        score_count: 38645,
        code: 8,
    },
    {
        subject: "아이시스 지리산 산청수",
        capacity: "1000",
        count: 24,
        price: 11200,
        score: 4.7,
        score_count: 29381,
        code: 9,
    },
    {
        subject: "아이시스 산림수",
        capacity: "2000",
        count: 24,
        price: 16890,
        score: 4.8,
        score_count: 77237,
        code: 10,
    },
]

// 100ml 당 가격을 계산해서 리스트에 각각 추가
for(let i=0; i<productList.length; i++){
    productList[i]['ml_price'] = Math.ceil(productList[i].price/productList[i].capacity/productList[i].count*100)
};