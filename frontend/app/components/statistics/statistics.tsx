import BG from "../../../public/images/global-map.svg";
export default function Statistics() {
    return (
        <section className="pt-12 md:pt-[100px] bg-blue text-white">
            <div className="container">
                <div className="pb-12 md:pb-[100px] bg-center md:bg-bottom bg-contain bg-no-repeat"
                    style={{
                        backgroundImage: `url(${BG.src})`,
                    }}>
                    <div
                        className="flex flex-col lg:flex-row text-center lg:text-start items-center lg:items-start justify-between gap-5">
                        <h2 className="text-white w-full max-w-3xl">Delivering Excellence in Digital Security Solutions</h2>
                        <p className="w-full max-w-[480px] text-base sm:text-xl md:text-2xl font-normal font-spacegrotesk md:leading-8">
                            A cybersecurity services company with a global footprint and local understanding.</p>
                    </div>
                    <div className="pt-12 md:pt-[100px] grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 xl:gap-[74px]">
                        <div className="items-info">
                            <span
                                className="text-2xl sm:text-3xl md:text-[40px] md:leading-[72px] font-bold font-spacegrotesk tracking-[-2%] mb-3 inline-block">40+</span>
                            <h4 className="text-white mb-2">Global <br /> Partners</h4>
                            <p>Trusted across industries</p>
                        </div>
                        <div className="items-info">
                            <span
                                className="text-3xl md:text-[40px] md:leading-[72px] font-bold font-spacegrotesk tracking-[-2%] mb-3 inline-block">09+</span>
                            <h4 className="text-white mb-2">Years of <br /> Experience</h4>
                            <p>In IT and cybersecurity</p>
                        </div>
                        <div className="items-info">
                            <span
                                className="text-3xl md:text-[40px] md:leading-[72px] font-bold font-spacegrotesk tracking-[-2%] mb-3 inline-block">100%</span>
                            <h4 className="text-white mb-2">Successful project complete</h4>
                            <p>Because in cybersecurity, 99% isn’t enough.</p>
                        </div>
                        <div className="items-info">
                            <span
                                className="text-3xl md:text-[40px] md:leading-[72px] font-bold font-spacegrotesk tracking-[-2%] mb-3 inline-block">95%</span>
                            <h4 className="text-white mb-2">Client <br /> Retention</h4>
                            <p> Because of our reliability and transparency</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}