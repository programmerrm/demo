import Banner from "./components/banner/banner";
import Commitments from "./components/commitments/commitments";
import ComperehensiveCybersecurIty from "./components/comperehensive-cybersecurIty/comperehensive-cybersecurIty";
import CyberSecurity from "./components/cyber-security/cyber-security";
import Globally from "./components/globally/globally";
import LatestNews from "./components/latest-news/latest-news";
import OurProven from "./components/our-proven/our-proven";
import Security from "./components/security/security";
import SuccessStoriec from "./components/success-storiec/success-storiec";
import TrustedForProven from "./components/trusted-for-proven/trusted-for-proven";
import WhyChooseUs from "./components/why-choose-us/why-choose-us";

export default function Home() {
  return (
    <>
      <Banner />
      <Security />
      <Commitments />
      <CyberSecurity />
      <ComperehensiveCybersecurIty />
      <OurProven />
      <WhyChooseUs />
      <TrustedForProven />
      <SuccessStoriec />
      <Globally />
      <LatestNews />
    </>
  );
}
