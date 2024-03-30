//api produnt 18 

// "use client"
// import Link from "next/link"

// export default function Home() {
  
//   return (
//     <main>
//       <h1>Fatch data from the apis</h1>
//       <Link href= "/productlist">Go To product list</Link>
//     </main>

//   )
// }

//api product 2 19 

// import Link from "next/link"

// export default function Home() {
  
//   return (
//     <main>
//       <h1>Fatch data from the apis as server component</h1>
//       <Link href= "/productlist2">Go To product list 2</Link>
//     </main>

//   )
// }

// // for 20 
// import Link from "next/link"

// export default function Home() {
  
//   return (
//     <main>
//       <h1>client componet with server component</h1>
//       <Link href= "/productlist2">Go To product list 2</Link>
//     </main>

//   )
// }


// // image for 24
import Image from "next/image";
import Profile from '../../public/vercel.svg'
export default function Home(){
  console.log(Profile)
  return(
    <main>
      <h1>please load the images</h1>
      <Image src={Profile} 
        // width={500}
        // height={500}
      />
      </main>
  )
}