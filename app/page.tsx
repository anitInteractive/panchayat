import Image from "next/image";
import img1 from "@/app/assets/AA1GuwUc.webp";

export default function Home() {
  return (
    <div className="BGText">
      <Image src={img1} width={1200} height={900} alt="" />
      <h2>Coming Soon</h2>
    </div>
  );
}
