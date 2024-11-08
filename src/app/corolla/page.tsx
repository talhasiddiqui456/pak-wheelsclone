import Image from "next/image";
import Link from "next/link";
export default function Corolla(){
    return(
        <div>
            <div className="w-full h-screen bg-no-repeat bg-cover ">
            <Link href={"/corolla"}><Image src={"/car-details-2.PNG"} width={1500} height={800} alt=""/></Link> 

            <div>
                <ul>
                    <li>
                      <Link href={"/placeorder"}><button className="flex justify-center bg-blue-600"><Image  src={"/thank-yoy.PNG"} width={1500} height={800} alt="gg"/>   placeorder </button></Link> 
                    </li>
                </ul>
            </div>

            </div>
        </div>
    )
}