import {Link} from "./link";

const Header = () => {
  return (
    <header className="sticky top-0 grid place-items-center mx-4 p-4 bg-black/[0.1] backdrop-blur-lg border-x-2 border-b-2 border-black/[0.1] rounded-b-xl text-white">
      <nav className="flex flex-row">
        <Link href="/" content="Home"></Link>
        <Link href="/projects" content="Projects"></Link>
        <Link href="/about" content="About"></Link>
      </nav>
    </header>
  );
};

export default Header;
