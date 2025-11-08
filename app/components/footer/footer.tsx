import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo.png";
import FooterBg from "../../../public/images/footer-bg.png"
import Email from "../../../public/images/email.png"
import Phone from "../../../public/images/phone.png";

export default function Footer() {
    return (
        <footer className="bg-body py-[30px] md:py-[60px]">
            <div className="bg-contain bg-right bg-no-repeat" style={{
                backgroundImage: `url(${FooterBg.src})`,
            }}>
                <div className="container">
                    <div className="flex items-center justify-between border-b border-[#EBF3F833]/20 py-5">
                        <Link className="w-full max-w-20 sm:max-w-[115px]" href="/">
                            <Image className="w-full" src={Logo} alt="logo" width={115} height={60} />
                        </Link>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-7 text-white">
                            <div className="flex items-center gap-2 sm:gap-4">
                                <div className="w-full max-w-6 sm:max-w-full">
                                    <Image src={Phone} alt="phone" width={40} height={40} />
                                </div>
                                <div className="flex flex-col">
                                    <Link className="text-sm sm:text-base" href="tel:+8809617204204">+8809617204204</Link>
                                    <Link className="text-sm sm:text-base" href="tel:+880241082448">+880241082448</Link>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-4">
                                <div className="w-full max-w-6 sm:max-w-full">
                                    <Image src={Email} alt="mail" width={40} height={40} />
                                </div>
                                <div className="flex flex-col items-center">
                                    <Link className="text-sm sm:text-base" href="mailto:info@eic.com.bd">info@eic.com.bd</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between pt-6 border-b border-[#EBF3F8]/20 pb-6 sm:pb-12 gap-10">
                        <div className="w-full max-w-[352px] text-white">
                            <p className="">Subscribe our newsletter for latest security related <br /> knowledge</p>
                            <form action="#" className="mt-6">
                                <div className="flex items-center gap-1">
                                    <input
                                        className="bg-white rounded-full focus:outline-0 text-sm leading-3.5 font-roboto py-[13px] px-4 text-[#142149] w-full max-w-[241px]"
                                        type="email" required placeholder="Enter your email" />
                                        <button className="text-base font-roboto font-medium leading-4 px-6 py-3 rounded-full bg-blue"
                                            type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="w-full max-w-[642px] flex justify-between flex-wrap gap-5 sm:gap-10 text-white">
                            <div className="menu">
                                <h5>Main Page</h5>
                                <ul className="">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Case Studies</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                            <div className="menu">
                                <h5>Services</h5>
                                <ul className="">
                                    <li><a href="#">PCI DSS Compliance </a></li>
                                    <li><a href="#">ISO 27001ISMS</a></li>
                                    <li><a href="#">Swift CSP Assessment</a></li>
                                    <li><a href="#">ISO 22301:2019</a></li>
                                    <li><a href="#">Penetration Testing</a></li>
                                </ul>
                            </div>
                            <div className="menu">
                                <h5>Social link</h5>
                                <ul className="">
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Instagram</a></li>
                                    <li><a href="#">X</a></li>
                                    <li><a href="#">Linkedin</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 items-center justify-between text-white pt-5 sm:pt-10">
                        <span className="text-white text-sm sm:text-base sm:leading-6 font-roboto font-medium">Powered by Ontik
                            Creative</span>
                        <div className="flex items-center gap-4">
                            <Link href="/"
                                className="text-white text-sm sm:text-base sm:leading-6 font-roboto font-medium transition-all hover:text-white/50">Privacy
                                Policy</Link>
                            <span className="w-0.5 h-3 bg-white"></span>
                            <Link href=""
                                className="text-white text-sm sm:text-base sm:leading-6 font-roboto font-medium transition-all hover:text-white/50">Terms
                                & Condition</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}