import Image from "next/image";

type Props = {};

export default function MyProfilePic({}: Props) {
  return (
    <section className="w-full mx-auto ">
      <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        alt="Profile Pic"
        src="/images/images.png"
        width={200}
        height={200}
        priority={true}
      ></Image>
    </section>
  );
}
