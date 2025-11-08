import Image from "next/image";
import Bg from "../../../public/images/commitment-item-bg.png";

export default function Commitments() {
    return (
        <section className="py-12 md:py-[100px]">
            <div className="container">
                <div className="flex flex-col sm:flex-row justify-between mb-10 md:mb-20 gap-5">
                    <h2 className="w-full max-w-[841px]">Experience the <span className="text-[#2E78AC]">EIC difference</span>
                        in security and compliance excellence</h2>
                    <div className="flex items-center sm:max-w-[300px] w-full justify-center sm:justify-end">
                        <button className="btn-primary group">See All Features
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
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="border-2 border-[#EBF3F8] rounded-[10px] shadow-3xl bg-bottom bg-contain bg-no-repeat"
                        style={{
                            backgroundImage: `url(${Bg.src})`,
                        }}>
                        <div className="p-8 pb-10">
                            <div className="pr-4 md:pr-7 w-full max-w-[581px]">
                                <h3>Client-centric Approach</h3>
                                <p className="font-medium mt-4">Customized security strategies designed to address the specific challenges and
                                    goals of each client, ensuring comprehensive protection and peace of mind. </p>
                            </div>
                            <div className="flex items-center justify-center mt-[30px]">
                                <div>
                                    <Image src="/images/client.png" alt="client" width={220} height={280} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 border-[#EBF3F8] rounded-[10px] shadow-3xl bg-bottom bg-contain bg-no-repeat"
                        style={{
                            backgroundImage: `url(${Bg.src})`,
                        }}>
                        <div className="p-8 pb-10">
                            <div className="pr-7">
                                <h3>Documentation Support</h3>
                                <p className="font-medium mt-4">Fast, professional support from leading trustworthy cybersecurity consultants.
                                </p>
                            </div>
                            <div className="flex items-center justify-center mt-[30px]">
                                <div>
                                    <Image src="/images/client.png" alt="client" width={220} height={280} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 border-[#EBF3F8] rounded-[10px] shadow-3xl bg-bottom bg-contain bg-no-repeat"
                        style={{
                            backgroundImage: `url(${Bg.src})`,
                        }}>
                        <div className="p-8 pb-10">
                            <div className="pr-7">
                                <h3>On-time Expert Response</h3>
                                <p className="font-medium mt-4">Fast, professional support from leading trustworthy cybersecurity consultants.
                                </p>
                            </div>
                            <div className="flex items-center justify-center mt-[30px]">
                                <div>
                                    <Image src="/images/client.png" alt="client" width={220} height={280} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 border-[#EBF3F8] rounded-[10px] shadow-3xl bg-bottom bg-contain bg-no-repeat"
                        style={{
                            backgroundImage: `url(${Bg.src})`,
                        }}>
                        <div className="p-8 pb-10">
                            <div className="pr-7">
                                <h3>Save Time</h3>
                                <p className="font-medium mt-4">Cybersecurity automation so you can focus on your core competencies.
                                    Compliance workflows so you can focus on revenue, not regulations.</p>
                            </div>
                            <div className="flex items-center justify-center mt-[30px]">
                                <div>
                                    <Image src="/images/client.png" alt="client" width={220} height={280} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}