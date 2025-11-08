import BG from "../../../public/images/banner-img.svg";

export default function Hero() {
    return (
        <section
            className="banner-section bg-blue [clip-path:polygon(0_0,100%_0,100%_calc(100%-50px),calc(100%-60px)_100%,0_100%)] md:[clip-path:polygon(0_0,100%_0,100%_calc(100%-100px),calc(100%-150px)_100%,0_100%)]">
            <div className="container">
                <div className="bg-bottom bg-contain bg-no-repeat" style={{
                backgroundImage: `url(${BG.src})`,
            }}>
                    <div className="max-w-[675px] mx-auto py-10 sm:py-20 md:py-40 lg:py-[232px] text-white text-center ">
                        <h1 className="uppercase">About EIC</h1>
                        <p className="text-base sm:text-lg md:text-2xl md:leading-8 font-spacegrotesk mt-4 sm:mt-8">EIC is a global
                            digital security firm dedicated to protecting businesses with advanced cybersecurity managed services,
                            including expert consulting.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
