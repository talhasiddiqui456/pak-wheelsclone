import Hero from "@/components/Hero/Hero"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero/>
  <h1 className="font-extrabold text-black">Featured New Cars</h1>

 <div className="flex">

  <div><Link href="/corolla">Corolla<Image src={"/corolla.jpg"} width={450} height={300} alt="corrola"/></Link></div>
  <div><Image src={"/Suzuki_Alto_-_PNG.png"} width={450} height={300} alt="corrola"/></div>
  <div><Image src={"/Honda_City_Front.jpg"} width={450} height={300} alt="corrola"/></div>
  <div><Image src={"/civic.jpg"} width={450} height={300} alt="corrola"/></div>

 </div>

 
    </div>

  );
}
