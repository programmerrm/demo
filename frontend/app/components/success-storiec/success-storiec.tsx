import Image from "next/image";

export default function SuccessStoriec() {
    return (
        <section className="-mb-[113px] -mt-9 md:-mt-[120px]">
            <div className="container">
                <h2 className="max-w-[393px] w-full mx-auto text-center">Case studies & <span className="text-blue">success</span> stories
                </h2>
                <div className="grid sm:grid-cols-2 gap-6 my-6 sm:my-12">
                    <div className="group">
                        <div className="mb-3 sm:mb-6">
                            <Image src="/images/case-studies-1.png" alt="case studies image" width={670} height={520} />
                        </div>
                        <span>Enhanced data integrity for fintech firms.</span>
                        <h3 className="mt-1 sm:mt-2 transition-all group-hover:text-blue"><a href="#">Endpoint Protection Upgrade</a></h3>
                    </div>
                    <div className="group">
                        <div className="mb-3 sm:mb-6">
                            <Image src="/images/case-studies-1.png" alt="case studies image" width={670} height={520} />
                        </div>
                        <span>Reduced threat exposure by 65% in 6 months.</span>
                        <h3 className="mt-1 sm:mt-2 transition-all group-hover:text-blue"><a href="#">Security System Overhaul</a></h3>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button className="btn-primary group">Explore All
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
    );
}
