import Image from "next/image";
import Hero from "../components/hero/hero";
import globe from "../../public/images/globe.png";
import PaymentLogo from "../../public/images/Container2.png";
import HappyJourney from "../components/happy-journey/happy-journey";
import StayCompliant from "../components/stay-compliant/stay-compliant";
import Statistics from "../components/statistics/statistics";
import ReadyToSecure from './../components/ready-to-secure/ready-to-secure';

export default function About() {
    return (
        <section>
            <Hero />
            <section className="bg-[#EBF3F8] py-12 md:py-[100px]">
                <div className="container">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:max-w-[52.058%] lg:pt-8">
                            <h2>
                                <span className="text-blue">A Global</span>
                                Security Firm You Can Trust
                            </h2>
                            <div className="relative mt-16 flex items-center justify-center">
                                <Image src="/images/security.svg" alt="security" width={500} height={600} />
                            </div>
                        </div>

                        <div className="w-full md:max-w-[calc(100%-52.058%)] bg-contain bg-no-repeat mb-16"
                            style={{
                                backgroundImage: `url(${globe.src})`,
                            }}>

                            <div className="pt-10 lg:pt-[152px] pl-16 lg:pl-40">
                                <div className=" text-body">
                                    <h3>Our mission</h3>
                                    <p className="mt-3.5">Creating a secure and reliable cyber environment for Business Success.</p>
                                </div>
                                <div className="mt-8 text-body">
                                    <h3>Our vision</h3>
                                    <p className="mt-3.5">To be the most trusted partner that makes cybersecurity, compliance, and process
                                        maturity simple, measurable, and growth-accelerating for every business.</p>
                                </div>
                                <div className="pt-12">
                                    <button className="btn-primary group">Get To Know Us
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
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t-2 border-[#C0D9EB] pt-12 md:pt-[100px]">
                    <div className="container">
                        <div className="flex flex-col lg:flex-row  gap-5 justify-between">
                            <div className="w-full lg:max-w-[37.720%] pr-9 mt-8 lg:mt-16 xl:mt-28">
                                <h2 className="text-2xl sm:text-3xl md:text-[40px] md:leading-12 w-full lg:w-[500px] xl:w-[610px]">Securing Top Brands Worldwide</h2>
                                <p
                                    className=" text-base sm:text-xl md:text-2xl md:leading-8 text-[#245E86] mt-2 sm:mt-3 mb-3 sm:mb-6 w-full lg:w-[400px] xl:w-[610px]">Trusted by nearly 200+ Companies</p>

                                <div className="btn-wrap">
                                    <button className="btn-primary group">Get Started
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
                            </div>

                            <div className="w-full lg:max-w-[calc(100%-37.720%)] flex flex-col items-end">
                                <div className="w-[71.074%] border border-[#F4F4F6] rounded-xl sm:rounded-3xl p-2 sm:p-[17px]">
                                    <div
                                        className="">

                                        <Image src={PaymentLogo} alt="payment" width={770} height={400} />

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <HappyJourney />
            <ReadyToSecure />
            <Statistics />
            <section className="bg-white py-12 md:py-[100px] relative">
                <div className="container">
                    <h2 className="text-center mb-10 sm:-mb-20">The <span className="text-blue">Core Principles</span> We Uphold</h2>
                    <div className="our-core-value">
                        
                        <button
                            className="text-xs sm:text-sm md:text-base lg:text-lg bg-body py-2 md:py-3 lg:py-4 px-4 sm:px-6 md:px-10 rounded-full text-white absolute bottom-27 sm:bottom-46 left-0 md:-left-2 rotate-25">Customer-Centricity</button>
                        <button
                            className="text-xs sm:text-sm md:text-base lg:text-lg bg-body py-2 md:py-3 lg:py-4 px-4 sm:px-6 md:px-10 rounded-full text-white absolute bottom-4 sm:bottom-12 lg:bottom-10 left-1/2 -translate-x-1/2 rotate-0">Reliability</button>
                        <button
                            className="text-xs sm:text-sm md:text-base lg:text-lg bg-body py-2 md:py-3 lg:py-4 px-4 sm:px-6 md:px-10 rounded-full text-white absolute bottom-12 sm:bottom-22 left-46 -rotate-6">Innovation</button>
                        <button
                            className="text-xs sm:text-sm md:text-base lg:text-lg bg-body py-2 md:py-3 lg:py-4 px-4 sm:px-6 md:px-10 rounded-full text-white absolute bottom-13 sm:bottom-26 right-41 rotate-8">Collaboration</button>
                        <button
                            className="text-xs sm:text-sm md:text-base lg:text-lg bg-body py-2 md:py-3 lg:py-4 px-4 sm:px-6 md:px-10 rounded-full text-white absolute bottom-23 sm:bottom-44 right-6 -rotate-21">Transparency</button>
                        <button
                            className="text-xs sm:text-sm md:text-base lg:text-lg bg-body py-2 md:py-3 lg:py-4 px-4 sm:px-6 md:px-10 rounded-full text-white absolute bottom-27 sm:bottom-41 right-24 sm:right-80 -rotate-15">Integrity</button>
                    </div>
                </div>
            </section>
            <StayCompliant />
        </section>
    );
}