import { TbUsersGroup, TbCalendarTime } from "react-icons/tb";
import { MdOutlineEmojiEvents } from "react-icons/md";

export default function AboutSection() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center px-48 py-28">
      <h1 className="text-4xl mx-auto my-10 font-black tracking-[4px] uppercase font-[montserrat]">
        About us
      </h1>
      <div>
        <div>
          <p className="text-xl text-center font-[poppins] leading-10">
            We are a cross-disciplinary club of Rajalakshmi Engineering College
            created with a vision to bring together ardent students through a
            series of hackathons, ideathons, workshops, guest lectures and other
            technical events to showcase their work and knowledge and enhance
            their industrial skillset We also establish a forum to foster
            student-faculty interaction outside the world of regular academics.
          </p>
        </div>
        <div className="flex items-center justify-evenly mt-10">
          <div className="space-y-5 flex flex-col items-center justify-center p-5">
            <TbCalendarTime size={50} />
            <h1>4 years</h1>
          </div>
          <div className="space-y-5 flex flex-col items-center justify-center p-5">
            <TbUsersGroup size={50} />
            <h1 className="text-center">150 Members</h1>
          </div>
          <div className="space-y-5 flex flex-col items-center justify-center p-5">
            <MdOutlineEmojiEvents size={50} />
            <h1>25 events</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
