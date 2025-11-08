import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo.png"

export default function Header() {
    return (
        <header id="header-section"
            className="py-[54px] fixed top-0 left-0 right-0 bg-transparent z-50 transition-all duration-500 ease-in-out">
            <div className="container">
                <div className="flex items-center justify-between gap-2">
                    <Link href="/" className="w-16 md:w-auto">
                        <Image
                            src={Logo}
                            alt="Logo icon"
                            width={90}
                            height={50}
                        />
                    </Link>
                    <nav id="nav-area"
                        className="absolute top-0 left-[-9999px] right-0 bg-white lg:bg-transparent w-full h-screen lg:h-auto lg:w-auto lg:static flex items-center flex-col justify-between lg:block py-10 lg:py-0 transition-all duration-500 ease-in-ou overflow-y-auto">
                        <ul className="header-nav flex flex-col lg:flex-row items-center justify-center flex-wrap">
                            <li><Link href="/" className="active-item">Home</Link></li>
                            <li><Link href="/about-us">About Us</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/">Case Studies</Link></li>
                            <li><Link href="/">Blog</Link></li>
                            <li><Link href="/">Contact</Link></li>
                        </ul>
                        <div className="lg:hidden flex items-center justify-center">
                            <button className="btn-primary group">Schedule a Call
                                <svg
                                    className="transition-all duration-500 group-hover:rotate-45 w-5 md:w-6 h-5 md:h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M6 18 18 6m0 0H9m9 0v9"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div id="close-icon" className="w-6 absolute top-5 right-5 lg:hidden">
                            <button className="w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full">
                                    <path
                                        fill="none"
                                        stroke="#000000"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </nav>
                    <div className="hidden lg:block min-w-[210px]">
                        <button className="btn-primary group">Schedule a Call
                            <svg
                                className="transition-all duration-500 group-hover:rotate-45 w-5 md:w-6 h-5 md:h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M6 18 18 6m0 0H9m9 0v9"
                                />
                            </svg>
                        </button>
                    </div>
                    <div id="hambargur-icon" className="block lg:hidden w-8">
                        <button className="w-8">
                            <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    fill="none"
                                    stroke="#000000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 12h18M3 6h18M3 18h18"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
