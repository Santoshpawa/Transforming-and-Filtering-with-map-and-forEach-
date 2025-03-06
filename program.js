items= [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]

let result=items.map((ele)=>(
        (ele.price>50)?
             `${ele.name} is above 50`:
         
            `${ele.name} is below 50`
));

console.log(result)

