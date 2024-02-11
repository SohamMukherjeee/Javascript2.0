// const MyNum=[1,2,3,4,5,6,7,8,9,10];
// const Numb=MyNum.map((num)=>num+10 )
// console.log(Numb);
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]
// const Numb=MyNum
//                 .map((num)=>num*10 ) --->10,20,30,40,50...
//                 .map((item)=>item+1) ----> 11,21,31,41...
// console.log(Numb);

// const ShopNum=[1,2,3]
// const Total=ShopNum.reduce(function(acc,currVal){
//     console.log(`Accumulator : ${acc} & Current Value :${currVal}`);
//     return acc+currVal;
// },0)

// console.log(Total);

// const Mytotal=ShopNum.reduce((acc,currVal)=>acc+currVal ,0)
// console.log(Mytotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const CourseTotal=shoppingCart.reduce((acc,item)=>item.price+acc,0);
console.log(CourseTotal);