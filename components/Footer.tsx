import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="w-screen flex items-center justify-around px-10 py-10">
      <h1 className="text-lg font-light uppercase">Designer's Consortium</h1>
      <p className="text-sm">© Copyright 2021. All Rights Reserved.</p>
      <div className="flex items-center justify-center space-x-10">
        <AiOutlineLinkedin size={30} />
        <AiOutlineInstagram size={30} />
      </div>
    </div>
  );
}
