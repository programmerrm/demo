import Image from "next/image";
import BG from "../../../public/images/compliance-bg.svg";

export default function ComSer() {
    return (
        <section className="py-12 md:py-[100px] bg-contain bg-bottom-right bg-no-repeat" style={{
                backgroundImage: `url(${BG.src})`,
            }}>
            <div className="container">
                <div className="flex flex-col sm:flex-row justify-between mb-10 md:mb-20 gap-5">
                    <h2 className="sm:max-w-[636px] w-full">More Than <span className="text-[#2E78AC]">Compliance -</span>
                        Our Unique Commitments</h2>
                    <div className="flex items-center sm:max-w-[300px] w-full justify-center sm:justify-end">
                        <button className="btn-primary group">Secure your data with us
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

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" >
                    <div className="p-4 md:p-8 bg-white border border-[#E6E7EB] rounded-[10px] transition-all protection-active hover:shadow-[25px_36px_18px_rgba(0,0,0,0.01),14px_20px_15px_rgba(0,0,0,0.05),6px_9px_11px_rgba(0,0,0,0.09),2px_2px_6px_rgba(0,0,0,0.1)]">
                        <div className="max-w-10 md:max-w-[60px] w-full">
                            <Image src="/images/compliance-1.svg" alt="protection" width={60} height={66} />
                        </div>

                        <h4 className="mt-4">Strategic Roadmaps</h4>
                        <ul className="protection-list mt-4">
                            <li>Operational Context Integration</li>
                            <li>Scope & CDE Precision Mapping</li>
                            <li>Risk-Prioritized</li>
                            <li>Technology Stack Alignment</li>
                            <li>Business-Objective Synergy</li>
                        </ul>
                    </div>
                    <div className="p-4 md:p-8 border bg-white border-[#E6E7EB] rounded-[10px] transition-all hover:shadow-[25px_36px_18px_rgba(0,0,0,0.01),14px_20px_15px_rgba(0,0,0,0.05),6px_9px_11px_rgba(0,0,0,0.09),2px_2px_6px_rgba(0,0,0,0.1)]">
                        <div className="max-w-10 md:max-w-[60px] w-full">
                            <Image src="/images/compliance-2.svg" alt="protection" width={60} height={66} />
                        </div>

                        <h4 className="mt-4">Expert Partnership</h4>
                        <ul className="protection-list mt-4">
                            <li>Top-Tier Cybersecurity Experts</li>
                            <li>Tailored Security Strategies</li>
                            <li>24/7 Incident Response</li>
                            <li>Proactive Threat Hunting</li>
                            <li>Audit Reports</li>
                        </ul>
                    </div>
                    <div className="p-4 md:p-8 border bg-white border-[#E6E7EB] rounded-[10px] transition-all hover:shadow-[25px_36px_18px_rgba(0,0,0,0.01),14px_20px_15px_rgba(0,0,0,0.05),6px_9px_11px_rgba(0,0,0,0.09),2px_2px_6px_rgba(0,0,0,0.1)]">
                        <div className="max-w-10 md:max-w-[60px] w-full">
                            <Image src="/images/compliance-3.svg" alt="protection" width={60} height={66} />
                        </div>


                        <h4 className="mt-4">Pristine Interactions</h4>
                        <ul className="protection-list mt-4">
                            <li>Single-Point-of-Contact Liaison</li>
                            <li>Unified Compliance Center</li>
                            <li>Streamlined Evidence Collection</li>
                            <li>Transparent Bundled Pricing</li>
                            <li>Minimal Internal Workload Design</li>
                        </ul>
                    </div>
                    <div className="p-4 md:p-8 border bg-white border-[#E6E7EB] rounded-[10px] transition-all hover:shadow-[25px_36px_18px_rgba(0,0,0,0.01),14px_20px_15px_rgba(0,0,0,0.05),6px_9px_11px_rgba(0,0,0,0.09),2px_2px_6px_rgba(0,0,0,0.1)]">
                        <div className="max-w-10 md:max-w-[60px] w-full">
                            <Image src="/images/compliance-4.svg" alt="protection" width={60} height={66} />
                        </div>

                        <h4 className="mt-4">Data Assurance</h4>
                        <ul className="protection-list mt-4">
                            <li>Certified Secure Data Handling</li>
                            <li>Real-Time Audit Trail Visibility</li>
                            <li>Strict Confidentiality Protocols</li>
                            <li>Encrypted Evidence Repositories</li>
                            <li>Integrity Verification Controls</li>
                        </ul>
                    </div>
                    <div className="p-4 md:p-8 border bg-white border-[#E6E7EB] rounded-[10px] transition-all hover:shadow-[25px_36px_18px_rgba(0,0,0,0.01),14px_20px_15px_rgba(0,0,0,0.05),6px_9px_11px_rgba(0,0,0,0.09),2px_2px_6px_rgba(0,0,0,0.1)]">
                        <div className="max-w-10 md:max-w-[60px] w-full">
                            <Image src="/images/compliance-5.svg" alt="protection" width={60} height={66} />
                        </div>



                        <h4 className="mt-4">Data Insights</h4>
                        <ul className="protection-list mt-4">
                            <li>Business-Aligned Risk Strategy</li>
                            <li>Actionable Mitigation Blueprints</li>
                            <li>Holistic Security Intelligence</li>
                            <li>Strategic C-Suite Dashboards</li>
                            <li>Proactive Security Trend Analysis</li>
                        </ul>
                    </div>
                    <div className="p-4 md:p-8 border bg-white border-[#E6E7EB] rounded-[10px] transition-all hover:shadow-[25px_36px_18px_rgba(0,0,0,0.01),14px_20px_15px_rgba(0,0,0,0.05),6px_9px_11px_rgba(0,0,0,0.09),2px_2px_6px_rgba(0,0,0,0.1)]">
                        <div className="max-w-10 md:max-w-[60px] w-full">
                            <Image src="/images/compliance-6.svg" alt="protection" width={60} height={66} />
                        </div>

                        <h4 className="mt-4">Total Integration</h4>
                        <ul className="protection-list mt-4">
                            <li>Certification Management</li>
                            <li>Policy & Documentation Crafting</li>
                            <li>Team Awareness & Training</li>
                            <li>Multi-Factor Authentication</li>
                            <li>Privacy Vault Customization</li>
                        </ul>
                    </div>
                    <div className="p-4 md:p-8 border bg-white border-[#E6E7EB] rounded-[10px] transition-all hover:shadow-[25px_36px_18px_rgba(0,0,0,0.01),14px_20px_15px_rgba(0,0,0,0.05),6px_9px_11px_rgba(0,0,0,0.09),2px_2px_6px_rgba(0,0,0,0.1)]">
                        <div className="max-w-10 md:max-w-[60px] w-full">
                            <Image src="/images/compliance-7.svg" alt="protection" width={60} height={66} />
                        </div>

                        <h4 className="mt-4">Cyber Certainty</h4>
                        <ul className="protection-list mt-4">
                            <li>Data Breach Response Services</li>
                            <li>Network Security Monitoring</li>
                            <li>Ransomware Protection Solutions</li>
                            <li>Vendor Risk Management</li>
                            <li>Regulatory Compliance Assistance</li>
                        </ul>
                    </div>
                    <div className="p-4 md:p-8 border bg-white border-[#E6E7EB] rounded-[10px] transition-all hover:shadow-[25px_36px_18px_rgba(0,0,0,0.01),14px_20px_15px_rgba(0,0,0,0.05),6px_9px_11px_rgba(0,0,0,0.09),2px_2px_6px_rgba(0,0,0,0.1)]">
                        <div className="max-w-10 md:max-w-[60px] w-full">
                            <Image src="/images/compliance-8.svg" alt="protection" width={60} height={66} />
                        </div>

                        <h4 className="mt-4">Growth Mindset</h4>
                        <ul className="protection-list mt-4">
                            <li>Agile Transformation Strategies</li>
                            <li>Digital Capability Development</li>
                            <li>Cloud Migration Best Practices</li>
                            <li>Data-Driven Decision Making</li>
                            <li>Improved Customer Experience</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}