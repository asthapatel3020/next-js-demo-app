import Link from "next/link";
import logoImg from "@/assets/logo.png";
import headerStyle from "./main-header.module.css";
import Image from "next/image";
import MainLayoutBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <>
      <MainLayoutBackground />
      <header className={headerStyle.header}>
        <Link href=".." className={headerStyle.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={headerStyle.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
