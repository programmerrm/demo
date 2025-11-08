import Image from "next/image";
import BG from "../../../public/images/globe.svg";
import Link from "next/link";

export default function LatestNews() {
    return (
        <section
            className="pt-6 md:pt-12 pb-12 md:pb-[100px] bg-bottom 2xl:bg-position-[center_calc(100%+300px)] bg-contain bg-no-repeat -mt-20"
            style={{
                backgroundImage: `url(${BG.src})`,
            }}>
            <div className="container">
                <div className="w-full max-w-[616px] mx-auto text-center">
                    <h2>Browse Our Latest Insights on <span className="text-blue">Cybersecurity</span></h2>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 py-6 md:py-12 gap-5 lg:gap-9">
                    <div className="items">
                        <div className="image-wrap">
                            <Image src="/images/thumbnail-1.jpg" alt="thumbnail" width={420} height={320} />
                        </div>
                        <div className="group">
                            <time className="text-body text-sm font-medium leading-5 -tracking-[0.14px] mt-3 md:mt-7 inline-block transition-all group-hover:text-blue">July 15,
                                2025
                                · 7 min read</time>
                            <h4 className="my-1 md:my-3 font-dmsans transition-all group-hover:text-blue">
                                <Link href="">The Future of Cyber Threat Prevention</Link>
                            </h4>
                            <div className="flex gap-2 flex-wrap">
                                <button
                                    className="bg-[#EBF3F8] px-3 py-1 rounded-lg text-body font-medium text-sm leading-5 -tracking-[0.14px] font-inter cursor-pointer transition-all group-hover:text-blue">Research
                                    Report</button>
                                <button
                                    className="bg-[#EBF3F8] px-3 py-1 rounded-lg text-body font-medium text-sm leading-5 -tracking-[0.14px] font-inter cursor-pointer transition-all group-hover:text-blue">Tech
                                    Insights</button>
                            </div>
                        </div>
                    </div>
                    <div className="items">
                        <div className="image-wrap">
                            <Image src="/images/thumbnail-1.jpg" alt="thumbnail" width={420} height={320} />
                        </div>
                        <div className="group">
                            <time className="text-body text-sm font-medium leading-5 -tracking-[0.14px] mt-3 md:mt-7 inline-block transition-all group-hover:text-blue">September
                                18, 2025 · 8 min read</time>
                            <h4 className="my-1 md:my-3 font-dmsans transition-all group-hover:text-blue"><a href="#">How UX Design Impacts Security Systems</a></h4>
                            <div className="flex gap-2 flex-wrap">
                                <button
                                    className="bg-[#EBF3F8] px-3 py-1 rounded-lg text-body font-medium text-sm leading-5 -tracking-[0.14px] font-inter cursor-pointer transition-all group-hover:text-blue">Feature
                                    Story</button>
                                <button
                                    className="bg-[#EBF3F8] px-3 py-1 rounded-lg text-body font-medium text-sm leading-5 -tracking-[0.14px] font-inter cursor-pointer transition-all group-hover:text-blue">Green
                                    Design</button>
                            </div>
                        </div>
                    </div>
                    <div className="items">
                        <div className="image-wrap">
                            <Image src="/images/thumbnail-1.jpg" alt="thumbnail" width={420} height={320} />
                        </div>
                        <div className="group">
                            <time className="text-body text-sm font-medium leading-5 -tracking-[0.14px] mt-3 md:mt-7 inline-block transition-all group-hover:text-blue">August 30,
                                2025 · 10 min read</time>
                            <h4 className="my-1 md:my-3 font-dmsans tracking-wide transition-all group-hover:text-blue"><a href="#">AI Trends in Modern Cyber Defense</a></h4>
                            <div className="flex gap-2 flex-wrap">
                                <button
                                    className="bg-[#EBF3F8] px-3 py-1 rounded-lg text-body font-medium text-sm leading-5 -tracking-[0.14px] font-inter cursor-pointer transition-all group-hover:text-blue">Article</button>
                                <button
                                    className="bg-[#EBF3F8] px-3 py-1 rounded-lg text-body font-medium text-sm leading-5 -tracking-[0.14px] font-inter cursor-pointer transition-all group-hover:text-blue">Workplace
                                    Innovations</button>
                            </div>
                        </div>
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
