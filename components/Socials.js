import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDiscordFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-4 text-lg">
      <Link
        href={"https://www.youtube.com/channel/UCdMjNGnzjo36AYD35LVEtYw"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
      {/* <Link
        href={"https://www.instagram.com/sifu__u/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link> */}
      <Link
        href={"https://www.facebook.com/sifo.abid.12"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://discord.com/users/668799987160711198"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiDiscordFill />
      </Link>
    </div>
  );
};

export default Socials;
