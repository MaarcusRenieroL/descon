import Link from "next/link";
import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdOutlinePhone,
} from "react-icons/md";

export default function ContactSection() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center px-48 py-28">
      <div>
        <h1 className="text-4xl mx-auto my-10 font-black tracking-[4px] uppercase font-[montserrat]">
          Get In Touch with Us
        </h1>
      </div>
      <div className="mt-10 grid grid-cols-3">
        <div className="p-5 flex items-center justify-center">
          <img src={"/rec.png"} alt="rec-logo" />
        </div>
        <div className="p-5 flex items-center justify-center">
          <img src={"/iic.png"} alt="rec-logo" />
        </div>
        <div className="p-5 flex items-center justify-center">
          <img src={"/ieee.png"} alt="rec-logo" />
        </div>
      </div>
      <div className="mt-10 w-full grid grid-cols-3 text-center">
        <div className="p-5 flex flex-col items-center justify-center space-y-3">
          <MdOutlineLocationOn size={40} />
          <p>
            Vellore - Chennai Rd, Rajalakshmi Nagar, Thandalam, Tamil Nadu
            602105
          </p>
        </div>
        <div className="p-5 flex flex-col items-center justify-center space-y-3">
          <MdOutlineEmail size={40} />
          <Link href={"mailto:designersconsortium@rajalakshmi.edu.in"}>
            designersconsortium@rajalakshmi.edu.in
          </Link>
        </div>
        <div className="p-5 flex flex-col items-center justify-center space-y-3">
          <MdOutlinePhone size={40} />
          <p>
            Mr. ABC <br />
            Event Co-ordinator - 9876543210
          </p>
        </div>
      </div>
    </div>
  );
}
