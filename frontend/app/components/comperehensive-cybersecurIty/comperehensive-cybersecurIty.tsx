import Image from "next/image";
import BG from "../../../public/images/finger.svg";

export default function ComperehensiveCybersecurIty() {
    return (
        <section className="pt-12 md:pt-[100px] pb-6 md:pb-12 mb-12 lg:mb-24 bg-contain bg-top-right bg-no-repeat"
            style={{
                backgroundImage: `url(${BG.src})`,
            }}>
            <div className="container">
                <div className="w-full max-w-[588px] mx-auto">
                    <h2 className="text-center">Comprehensive Cybersecurity Solutions</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    <div
                        className="h-full transition-all security-active hover:filter hover:drop-shadow-[6px_6px_8px_rgba(50,50,0,0.1)]">
                        <div
                            className="h-full security-inner transition-all hover:bg-blue p-0.5 rounded-2xl [clip-path:polygon(0_0,100%_0,100%_calc(100%-50px),calc(100%-50px)_100%,0_100%)] relative">
                            <div
                                className="h-full bg-white rounded-2xl pt-5 xl:pt-8 pb-5 xl:pb-6 px-6 xl:px-10 [clip-path:polygon(0_0,100%_0,100%_calc(100%-49px),calc(100%-49px)_100%,0_100%)]">
                                <div className="text-center sm:text-start">
                                    <div className="flex items-center justify-center px-16">
                                        <Image src="/images/pci.svg" alt="pci" width={220} height={200} />
                                    </div>
                                    <h3 className="mt-2.5">PCI DSS Compliance </h3>
                                    <p className=" mt-3 w-full max-w-[309px] mx-auto sm:mx-0">
                                        Comprehensive assessments for cardholder data environments, ensuring compliance from scoping to
                                        attestation.
                                    </p>
                                    <a href="service-details.html"
                                        className="btn-primary group inline-flex p-0 bg-transparent text-body text-sm capitalize underline border-0 underline-offset-6 mt-4">Read
                                        More
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
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-full transition-all hover:filter hover:drop-shadow-[6px_6px_8px_rgba(50,50,0,0.1)]">
                        <div
                            className="h-full bg-[#E6E7EB] transition-all hover:bg-blue p-0.5 rounded-2xl [clip-path:polygon(0_0,100%_0,100%_calc(100%-50px),calc(100%-50px)_100%,0_100%)] relative">
                            <div
                                className="h-full bg-white rounded-2xl pt-5 xl:pt-8 pb-5 xl:pb-6 px-6 xl:px-10  [clip-path:polygon(0_0,100%_0,100%_calc(100%-49px),calc(100%-49px)_100%,0_100%)]">
                                <div className="text-center sm:text-start">
                                    <div className="flex items-center justify-center px-16">
                                        <Image src="/images/iso.svg" alt="iso" width={220} height={200} />
                                    </div>
                                    <h3 className="mt-2.5">ISO 27001 ISMS</h3>
                                    <p className=" mt-3 w-full max-w-[309px] mx-auto sm:mx-0">Thorough guidance to manage information security,
                                        ensuring organizations protect data systematically and cost-effectively.
                                    </p>
                                    <a href="service-details.html"
                                        className="btn-primary group inline-flex p-0 bg-transparent text-body text-sm capitalize underline border-0 underline-offset-6 mt-4">Read
                                        More
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
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-full transition-all hover:filter hover:drop-shadow-[6px_6px_8px_rgba(50,50,0,0.1)]">
                        <div
                            className="h-full bg-[#E6E7EB] transition-all hover:bg-blue p-0.5 rounded-2xl [clip-path:polygon(0_0,100%_0,100%_calc(100%-50px),calc(100%-50px)_100%,0_100%)] relative">
                            <div
                                className="h-full bg-white rounded-2xl pt-5 xl:pt-8 pb-5 xl:pb-6 px-6 xl:px-10 [clip-path:polygon(0_0,100%_0,100%_calc(100%-49px),calc(100%-49px)_100%,0_100%)]">
                                <div className="text-center sm:text-start">
                                    <div className="flex items-center justify-center px-16">
                                        <Image src="/images/swift.svg" alt="swift" width={220} height={200} />
                                    </div>
                                    <h3 className="mt-2.5 2xl:whitespace-nowrap">Swift CSP Assessment</h3>
                                    <p className=" mt-3 w-full max-w-[309px] mx-auto sm:mx-0"> Security evaluation & remediation aligning with
                                        control objectives to secure cross-border transactions.
                                    </p>
                                    <a href="service-details.html"
                                        className="btn-primary group inline-flex p-0 bg-transparent text-body text-sm capitalize underline border-0 underline-offset-6 mt-4">Read
                                        More
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
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-6 md:mt-12">
                    <button className="btn-primary group">more services
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
        </section>
    )
}