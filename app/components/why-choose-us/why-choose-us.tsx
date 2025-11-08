import Image from "next/image";
import Link from "next/link";
import Bg from "../../../public/images/eic-bg.svg"

export default function WhyChooseUs() {
    return (
        <section className="why-choose pt-20 bg-contain bg-right bg-no-repeat relative md:-mt-[190px] lg:mt-0 md:-mb-[430px] lg:-mb-60 why-choose-image-wrap overflow-hidden" style={{
                backgroundImage: `url(${Bg.src})`,
            }}>
            <div className="container relative z-10 flex flex-col md:flex-row items-center  sm:justify-between md:min-h-[782px]">
                <div className="w-full max-w-[450px] order-2 md:order-1 mt-10 sm:pt-20">
                    <h2>Experience the <span className="text-blue">EIC Impact</span></h2>
                    <ul className="mt-8">
                        <li>Advanced Threat Protection</li>
                        <li>Real-Time Incident Response</li>
                        <li>Dedicated Expert Support</li>
                        <li>Tailored Security Solutions</li>
                        <li>Proven Security Track Record</li>
                    </ul>
                    <Link href="" className="btn-primary group inline-flex mt-10">Secure Your DATA
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
                    </Link>
                </div>
                <div className="-mt-10 order-1 md:order-2">
                    <Image src="/images/eic-impact.svg" alt="EIC Impact" width={690} height={750} />
                </div>
            </div>
        </section>
    );
}
