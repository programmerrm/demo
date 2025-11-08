import Image from "next/image";

export default function ReadyToSecure() {
    return (
        <section className=" py-12 md:py-[100px]">
            <div className="container">
                <h2 className="text-center">Ready to secure your <span className="text-blue">future?</span></h2>
                <div className="mt-[60px]">
                    <div
                        className="flex flex-col lg:flex-row items-center border-t border-[#EDF4F9] py-5 sm:py-10 md:pr-[60px] last-of-type:border-b gap-5 md:gap-10">
                        <div className="w-full max-w-full lg:max-w-[calc(100%-56.770%)] text-center lg:text-start">
                            <h3>Initial Connect</h3>
                        </div>
                        <div
                            className="w-full max-w-full lg:max-w-[56.770%] flex flex-col sm:flex-row text-center sm:text-start items-center gap-5 md:gap-10 lg:gap-14">
                            <div className="w-full max-w-40">
                                <Image src="/images/future-img-1.png" alt="future-img" width={200} height={114} />
                            </div>
                            <p className="text-sm md:text-base leading-[26px] font-poppins font-normal">Your journey to compliance and
                                security begins with a conversation. We listen to your goals, understand your challenges, and align our
                                expertise with your organization’s unique needs.</p>
                        </div>
                    </div>
                    <div
                        className="flex flex-col lg:flex-row items-center border-t border-[#EDF4F9] py-5 sm:py-10 md:pr-[60px] last-of-type:border-b gap-5 md:gap-10">
                        <div className="w-full max-w-full lg:max-w-[calc(100%-56.770%)] text-center lg:text-start">
                            <h3>In-depth Analysis</h3>
                        </div>
                        <div
                            className="w-full max-w-full lg:max-w-[56.770%] flex flex-col sm:flex-row text-center sm:text-start items-center gap-5 md:gap-10 lg:gap-14">
                            <div className="w-full max-w-40">
                                <Image src="/images/future-img-2.png" alt="future-img" width={200} height={114} />
                            </div>
                            <p className="text-sm md:text-base leading-[26px] font-poppins font-normal">Our experts conduct a thorough
                                assessment of your current security posture - identifying gaps, risks, and improvement areas through
                                industry best practices and proven frameworks.</p>
                        </div>
                    </div>
                    <div
                        className="flex flex-col lg:flex-row items-center border-t border-[#EDF4F9] py-5 sm:py-10 md:pr-[60px] last-of-type:border-b gap-5 md:gap-10">
                        <div className="w-full max-w-full lg:max-w-[calc(100%-56.770%)] text-center lg:text-start">
                            <h3>Tailored Strategies</h3>
                        </div>
                        <div
                            className="w-full max-w-full lg:max-w-[56.770%] flex flex-col sm:flex-row text-center sm:text-start items-center gap-5 md:gap-10 lg:gap-14">
                            <div className="w-full max-w-40">
                                <Image src="/images/future-img-3.png" alt="future-img" width={200} height={114} />
                            </div>
                            <p className="text-sm md:text-base leading-[26px] font-poppins font-normal">No two organizations are the same.
                                We design customized roadmaps and implement strategies that align with your business objectives,
                                regulatory requirements, and risk appetite.</p>
                        </div>
                    </div>
                    <div
                        className="flex flex-col lg:flex-row items-center border-t border-[#EDF4F9] py-5 sm:py-10 md:pr-[60px] last-of-type:border-b gap-5 md:gap-10">
                        <div className="w-full max-w-full lg:max-w-[calc(100%-56.770%)] text-center lg:text-start">
                            <h3>Ongoing Assistance</h3>
                        </div>
                        <div
                            className="w-full max-w-full lg:max-w-[56.770%] flex flex-col sm:flex-row text-center sm:text-start items-center gap-5 md:gap-10 lg:gap-14">
                            <div className="w-full max-w-40">
                                <Image src="/images/future-img-4.png" alt="future-img" width={200} height={114} />
                            </div>
                            <p className="text-sm md:text-base leading-[26px] font-poppins font-normal">Our commitment doesn’t end with
                                implementation. We provide continuous support, regular reviews, and adaptive guidance to ensure your
                                organization remains secure, compliant and resilient.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
