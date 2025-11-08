import Image from "next/image";
import globe from "../../../public/images/globe.png";

export default function Security() {
    return (
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
                    <div className="flex flex-col md:flex-row items-center gap-8 xl:gap-16">
                        
                        <div
                            className="w-full max-w-[708px] bg-body text-white py-8 xl:py-16 pr-[62px] pl-8 xl:pl-16 [clip-path:polygon(0_0,100%_0,100%_calc(100%-50px),calc(100%-40px)_100%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_calc(100%-80px),calc(100%-56px)_100%,0_100%)] flex flex-col relative">

                            <div className="w-full max-w-[708px] chart relative">
                                <div className="flex flex-col gap-6">

                                    <div className="flex items-center text-white">
                                        <p className=" w-full max-w-20 xl:max-w-[116px]">Security</p>
                                        <div className="relative h-16 lg:h-20 w-72 2xl:w-[400px] bg-white/10">
                                            <div className="absolute h-full bg-[#2E78AC] bar animate-bar" ></div>
                                        </div>
                                    </div>

                                    <div className="flex items-center text-white">
                                        <p className=" w-full max-w-20 xl:max-w-[116px]">Ability</p>
                                        <div className="relative h-16 lg:h-20 w-72 2xl:w-[400px] bg-white/10">
                                            <div className="absolute h-full bg-white bar animate-bar" ></div>
                                        </div>
                                    </div>

                                    <div className="flex items-center text-white">
                                        <p className=" w-full max-w-20 xl:max-w-[116px]">Solving</p>
                                        <div className="relative h-16 lg:h-20 w-72 2xl:w-[400px] bg-white/10">
                                            <div className="absolute h-full bg-[#76ADD3] bar animate-bar" ></div>
                                        </div>
                                    </div>
                                </div>


                                <div
                                    className="absolute -right-10 xl:right-0 top-0 bottom-0 flex flex-col justify-between text-white text-sm py-5 lg:py-8">
                                    <span>90%</span>
                                    <span>43%</span>
                                    <span>70%</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-[605px]">
                            <Image src="/images/security-2.svg" alt="security" width={600} height={400} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}