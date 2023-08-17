import Image from "next/image";

interface MemberCardProps {
  name: string;
  designation: string;
  comment: string;
}

export default function MemberCard(props: MemberCardProps) {
  return (
    <div className="flex items-center justify-center h-96">
      <div className="flex items-center justify-center bg-white mx-20 h-fit drop-shadow-2xl rounded-xl border border-black w-full p-5">
        <div className="flex items-center justify-between p-4">
          <div className="rounded-full">
            <Image
              src={"/user.png"}
              alt="profile"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="space-y-5 pl-10">
            <h1 className="text-2xl uppercase font-bold font-[poppins]">
              {props.name}
            </h1>
            <h2 className="text-xl">{props.designation}</h2>
            <p className="text-lg">{props.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
