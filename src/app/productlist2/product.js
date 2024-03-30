//for video 20
"use client"

export default function Product({price}){
    console.log(price);
    return(
        <div>
            <button onClick={() =>alert(price)}>Check price</button>
        </div>
    )
}