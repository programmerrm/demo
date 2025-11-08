import Image from "next/image";
import PaymentLogo from "../../../public/images/Container2.png";

export default function Banner() {
    return (
        <>
            <section
                className="relative pb-11 w-full overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/video/home-page-bg.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className="container relative z-10">
                    <div className="max-w-[754px] pt-[211px] pb-12 md:pb-[260px]">
                        <h1 className="text-body uppercase">Simplifying Cybersecurity & Compliance</h1>
                        <p
                            className="w-full max-w-[606px] text-base sm:text-xl md:text-2xl md:leading-8 font-normal text-[#245E86] font-spacegrotesk my-4 sm:my-8">
                            Your trusted cybersecurity service provider safeguarding data and ensuring compliance with clarity and
                            confidence.</p>
                        <div className="flex flex-col sm:flex-row items-center gap-2">
                            <button className="btn-primary group">Secure my Business
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
                            <button className="btn-secondary group">Company Profile
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
            </section>

            <section className="relative z-10 pb-5 md:pb-10">
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
            </section>
        </>
    );
}