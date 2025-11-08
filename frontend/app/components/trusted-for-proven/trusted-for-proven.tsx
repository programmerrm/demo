"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BG from "../../../public/images/trusted-for-proven.png";

export default function TrustedForProven() {
    return (
        <section
            className="bg-contain bg-left bg-no-repeat pb-12 md:pb-56 pt-12 md:pt-[380px]"
            style={{
                backgroundImage: `url(${BG.src})`,
            }}
        >
            <div className="container">
                <div className="max-w-md w-full mx-auto text-center mb-12 sm:mb-[98px]">
                    <h2>
                        Trusted for <span className="text-blue">proven</span> cybersecurity
                    </h2>
                </div>
            </div>

            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                centeredSlides={true}
                spaceBetween={36}
                loop={true}
                grabCursor={true}
                initialSlide={2}
                onInit={(swiper) => swiper.slideToLoop(1, 0)}
                breakpoints={{
                    1024: { slidesPerView: 2.5 },
                    768: { slidesPerView: 1.5 },
                    0: { slidesPerView: 1.1 },
                }}
                className="mySwiper"
            >
                {/* --- Slide 1 --- */}
                <SwiperSlide>
                    <div className="slide-content max-w-[800px] flex flex-col gap-6 items-start bg-white border border-[#C0D9EB] rounded-2xl px-4 md:px-8 py-5 md:py-11">
                        <div className="flex flex-col sm:flex-row items-center gap-8">
                            <div className="max-w-28 md:max-w-[173px] w-full p-5 md:p-10 bg-blue flex items-center justify-center text-blue">
                                <Image
                                    src="/images/trudted-slider-image.svg"
                                    alt="trusted-slider-image"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <p className="text-body text-lg sm:text-xl md:text-2xl md:leading-8 text-center sm:text-start">
                                “Since implementing their services, we’ve seen a remarkable
                                improvement in our security posture, and their support is
                                exceptional.”
                            </p>
                        </div>
                        <div className="content w-full flex flex-col sm:flex-row gap-5 sm:gap-12 md:gap-[90px] mt-4 sm:mt-8 md:mt-14">
                            <div className="max-w-16 md:max-w-24 mx-auto md:mx-0 flex items-center justify-center w-full">
                                <Image
                                    src="/images/slider-icon.png"
                                    alt="icon"
                                    width={95}
                                    height={75}
                                />
                            </div>
                            <div className="text-center sm:text-start">
                                <h4 className="sm:text-start leading-8">Alyssa McKenzie</h4>
                                <p>CEO at Schaefer Group</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* --- Slide 2 --- */}
                <SwiperSlide>
                    <div className="slide-content max-w-[800px] flex flex-col gap-6 items-start bg-white border border-[#C0D9EB] rounded-2xl px-4 md:px-8 py-5 md:py-11">
                        <div className="flex flex-col sm:flex-row items-center gap-8">
                            <div className="max-w-28 md:max-w-[173px] w-full p-5 md:p-10 bg-blue flex items-center justify-center text-blue">
                                <Image
                                    src="/images/trudted-slider-image.svg"
                                    alt="trusted-slider-image"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <p className="text-body text-lg sm:text-xl md:text-2xl md:leading-8 text-center sm:text-start">
                                “They made complex compliance feel simple and stress-free.”
                            </p>
                        </div>
                        <div className="content w-full flex flex-col sm:flex-row gap-5 sm:gap-12 md:gap-[90px] mt-4 sm:mt-8 md:mt-14">
                            <div className="max-w-16 md:max-w-24 mx-auto md:mx-0 flex items-center justify-center w-full">
                                <Image
                                    src="/images/slider-icon.png"
                                    alt="icon"
                                    width={95}
                                    height={75}
                                />
                            </div>
                            <div className="text-center sm:text-start">
                                <h4 className="sm:text-start leading-8">Md. Sanaullah</h4>
                                <p>Team Lead, shurjoMukhi Limited</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* --- Slide 3 --- */}
                <SwiperSlide>
                    <div className="slide-content max-w-[800px] flex flex-col gap-6 items-start bg-white border border-[#C0D9EB] rounded-2xl px-4 md:px-8 py-5 md:py-11">
                        <div className="flex flex-col sm:flex-row items-center gap-8">
                            <div className="max-w-28 md:max-w-[173px] w-full p-5 md:p-10 bg-blue flex items-center justify-center text-blue">
                                <Image
                                    src="/images/trudted-slider-image.svg"
                                    alt="trusted-slider-image"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <p className="text-body text-lg sm:text-xl md:text-2xl md:leading-8 text-center sm:text-start">
                                “Their proactive approach and attention to detail make them our
                                go-to cybersecurity partner.”
                            </p>
                        </div>
                        <div className="content w-full flex flex-col sm:flex-row gap-5 sm:gap-12 md:gap-[90px] mt-4 sm:mt-8 md:mt-14">
                            <div className="max-w-16 md:max-w-24 mx-auto md:mx-0 flex items-center justify-center w-full">
                                <Image
                                    src="/images/slider-icon.png"
                                    alt="icon"
                                    width={95}
                                    height={75}
                                />
                            </div>
                            <div className="text-center sm:text-start">
                                <h4 className="sm:text-start leading-8">John Doe</h4>
                                <p>CTO at SecureTech</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                 {/* --- Slide 3 --- */}
                <SwiperSlide>
                    <div className="slide-content max-w-[800px] flex flex-col gap-6 items-start bg-white border border-[#C0D9EB] rounded-2xl px-4 md:px-8 py-5 md:py-11">
                        <div className="flex flex-col sm:flex-row items-center gap-8">
                            <div className="max-w-28 md:max-w-[173px] w-full p-5 md:p-10 bg-blue flex items-center justify-center text-blue">
                                <Image
                                    src="/images/trudted-slider-image.svg"
                                    alt="trusted-slider-image"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <p className="text-body text-lg sm:text-xl md:text-2xl md:leading-8 text-center sm:text-start">
                                “Their proactive approach and attention to detail make them our
                                go-to cybersecurity partner.”
                            </p>
                        </div>
                        <div className="content w-full flex flex-col sm:flex-row gap-5 sm:gap-12 md:gap-[90px] mt-4 sm:mt-8 md:mt-14">
                            <div className="max-w-16 md:max-w-24 mx-auto md:mx-0 flex items-center justify-center w-full">
                                <Image
                                    src="/images/slider-icon.png"
                                    alt="icon"
                                    width={95}
                                    height={75}
                                />
                            </div>
                            <div className="text-center sm:text-start">
                                <h4 className="sm:text-start leading-8">John Doe</h4>
                                <p>CTO at SecureTech</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                 {/* --- Slide 3 --- */}
                <SwiperSlide>
                    <div className="slide-content max-w-[800px] flex flex-col gap-6 items-start bg-white border border-[#C0D9EB] rounded-2xl px-4 md:px-8 py-5 md:py-11">
                        <div className="flex flex-col sm:flex-row items-center gap-8">
                            <div className="max-w-28 md:max-w-[173px] w-full p-5 md:p-10 bg-blue flex items-center justify-center text-blue">
                                <Image
                                    src="/images/trudted-slider-image.svg"
                                    alt="trusted-slider-image"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <p className="text-body text-lg sm:text-xl md:text-2xl md:leading-8 text-center sm:text-start">
                                “Their proactive approach and attention to detail make them our
                                go-to cybersecurity partner.”
                            </p>
                        </div>
                        <div className="content w-full flex flex-col sm:flex-row gap-5 sm:gap-12 md:gap-[90px] mt-4 sm:mt-8 md:mt-14">
                            <div className="max-w-16 md:max-w-24 mx-auto md:mx-0 flex items-center justify-center w-full">
                                <Image
                                    src="/images/slider-icon.png"
                                    alt="icon"
                                    width={95}
                                    height={75}
                                />
                            </div>
                            <div className="text-center sm:text-start">
                                <h4 className="sm:text-start leading-8">John Doe</h4>
                                <p>CTO at SecureTech</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* --- Navigation Buttons --- */}
            <div className="swiper-btn-wrap mt-10 flex justify-center gap-8">
                <button className="swiper-button-prev hover:text-blue transition-all">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="16"
                        fill="none"
                        viewBox="0 0 20 16"
                    >
                        <g clipPath="url(#a)">
                            <g clipPath="url(#b)">
                                <g
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    clipPath="url(#c)"
                                >
                                    <path d="M1.408 8H18.47M11.469 1l7 7-7 7" />
                                </g>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="a">
                                <path fill="currentColor" d="M0 0h20v16H0z" />
                            </clipPath>
                            <clipPath id="b">
                                <path fill="currentColor" d="M0 0h20v16H0z" />
                            </clipPath>
                            <clipPath id="c">
                                <path fill="currentColor" d="M0 0h20v16H0z" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>

                <button className="swiper-button-next hover:text-blue transition-all">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="16"
                        fill="none"
                        viewBox="0 0 19 16"
                    >
                        <g clipPath="url(#a)">
                            <g clipPath="url(#b)">
                                <g
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    clipPath="url(#c)"
                                >
                                    <path d="M18.061 8H1M8 1 1 8l7 7" />
                                </g>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="a">
                                <path fill="currentColor" d="M0 0h19v16H0z" />
                            </clipPath>
                            <clipPath id="b">
                                <path fill="currentColor" d="M0 0h19v16H0z" />
                            </clipPath>
                            <clipPath id="c">
                                <path fill="currentColor" d="M0 0h19v16H0z" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
        </section>
    );
}
