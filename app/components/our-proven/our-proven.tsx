import Image from "next/image";

export default function OurProven() {
    return (
        <section className="bg-[#F4F8FB] py-12 md:py-[100px]">
            <div className="container">
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    <div
                        className="w-full max-w-[480px] mx-auto lg:mx-0 text-center lg:text-start flex flex-col items-center lg:items-start">
                        <h2 className="mb-3 lg:mb-6">Our <span className="text-blue">Proven</span> Process for Total Security</h2>
                        <p className="mb-6 lg:mb-11">Stay protected by using the top cybersecurity service to prevent threats.</p>
                        <div className="max-w-[200px] lg:max-w-full">
                            <Image src="/images/our-proven-security.svg" alt="Our Proven Security" width={240} height={340} />
                        </div>
                    </div>
                    <div className="w-full max-w-[444px] mx-auto lg:mx-0">
                        <div
                            className=" text-center lg:text-start flex flex-col items-center lg:items-start mb-4 lg:mb-8 last-of-type:mb-0">
                            <div className="mb-2 lg:mb-[18px] max-w-20 lg:max-w-full">
                                <Image src="/images/risk-assesment.svg" alt="Risk-Assesment" width={100} height={100} />
                            </div>
                            <h3 className="mb-2 lg:mb-4">Risk Assessment</h3>
                            <p>Access customized, prioritized intelligence for the risks that matter most to you.</p>
                        </div>
                        <div
                            className=" text-center lg:text-start flex flex-col items-center lg:items-start mb-4 lg:mb-8 last-of-type:mb-0">
                            <div className="mb-2 lg:mb-[18px] max-w-20 lg:max-w-full">
                                <Image src="/images/thred-detication.svg" alt="Thred Detication" width={100} height={100} />
                            </div>
                            <h3 className="mb-2 lg:mb-4">Threat Detection</h3>
                            <p>Combining VAPT expertise with real-time SOC intelligence for continuous threat detection and rapid
                                response</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
