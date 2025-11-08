import BG from "../../public/images/banner-img.svg";
import Commitments from "../components/commitments/commitments";
import ComperehensiveCybersecurIty from "../components/comperehensive-cybersecurIty/comperehensive-cybersecurIty";
import StayCompliant from "../components/stay-compliant/stay-compliant";

export default function Services() {
    return (
        <section>
            <section
                className="banner-section bg-blue [clip-path:polygon(0_0,100%_0,100%_calc(100%-50px),calc(100%-60px)_100%,0_100%)] md:[clip-path:polygon(0_0,100%_0,100%_calc(100%-100px),calc(100%-150px)_100%,0_100%)]">
                <div className="container">
                    <div className="bg-bottom bg-contain bg-no-repeat" style={{
                        backgroundImage: `url(${BG.src})`,
                    }}>
                        <div className="max-w-[675px] mx-auto py-10 sm:py-20 md:py-40 lg:py-[232px] text-white text-center ">
                            <h1 className="uppercase">What we do</h1>
                            <p className="text-base sm:text-lg md:text-2xl md:leading-8 font-spacegrotesk mt-4 sm:mt-8">EIC the digital world by delivering innovative security solutions & promoting cybersecurity awareness.</p>
                        </div>
                    </div>
                </div>
            </section>
            <ComperehensiveCybersecurIty />
            <Commitments />
            <StayCompliant />
        </section>
    )
}