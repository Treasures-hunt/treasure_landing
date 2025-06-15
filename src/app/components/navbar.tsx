"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { ArrowRight, ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { useState, MouseEvent } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import Logo from "../ui/logo";

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleNavClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setNavOpen((prev) => !prev);
  };

  const handleOtherInfoClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50  shadow-md">
      {/* top navigation */}
      <div className="hidden w-full md:flex bg-primary  px-[20px] lg:px-[50px] ">
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-2">
            <span>
              <Mail className="w-[11px] h-[16px]" />
            </span>
            <p className="text-[13px] font-normal ">info@abc.com</p>
          </div>
          <div className="flex items-center gap-x-2">
            <span>
              <MapPin className="w-[11px] h-[16px]" />
            </span>
            <p className="text-[13px] font-normal ">Ikeja,Lagos</p>
          </div>
        </div>
        <div className="flex items-center gap-x-[32px] ml-auto bg-secondary">
          <div className="flex items-center gap-x-2 px-[21px] py-[13px]">
            <div className="w-[24px] h-[24px] bg-white rounded-full flex items-center justify-center">
              <Image
                src="/assets/svg/facebook.svg"
                alt="Facebook"
                width={10}
                height={10}
              />
            </div>
            <div className="w-[24px] h-[24px] bg-white rounded-full flex items-center justify-center">
              <Image
                src="/assets/svg/linkedin.svg"
                alt="Linkedin"
                width={10}
                height={10}
              />
            </div>
            <div className="w-[24px] h-[24px] bg-white rounded-full flex items-center justify-center">
              <Image
                src="/assets/svg/instagram.svg"
                alt="Instagram"
                width={10}
                height={10}
              />
            </div>
          </div>
        </div>
      </div>

      {/* bottom navigation */}
      <div className=" hidden md:flex justify-between items-center gap-x-[80px] py-[10px] pt-[25px] px-[20px] lg:gap-x-[80px] lg:px-[50px] ">
        {/* Logo */}
        <div className=" ">
          <Logo className="md:h-[50px] md:w-[50px] lg:h-[75px] lg:w-[75px] " />
        </div>
        <div className="hidden md:flex items-center gap-x-[115px] lg:gap-x-[80px] lg:justify-between xl:gap-x-[180] ">
          {/* NavLInks */}
          <div className=" flex items-center ">
            <ul className="flex md:space-x-[41px] lg:space-x-[41px] text-black">
              <li>
                <Link
                  href="/our-programs"
                  className="md:text-[12px] lg:text-[16px] hover:text-primary"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="md:text-[12px] lg:text-[16px] hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="md:text-[12px] lg:text-[16px] hover:text-primary"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className=" md:text-[12px] lg:text-[16px] hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Authentication Button */}
          <div className=" flex gap-x-[32px]   ">
            <Button
              variant="primary"
              className="flex items-center px-[12px] py:[8px] md:text-[12px] md:font-semibold lg:px-[12px] lg:py-[10px] lg:text-[16px] lg:font-semibold rounded-[24px]"
            >
              Log in{" "}
              <span>
                <ArrowRight />
              </span>
            </Button>
            <Button className="md:hidden items-center px-[12px] py:[8px] md:text-[12px] md:font-semibold lg:flex lg:px-[12px] lg:py-[10px] lg:text-[16px] lg:font-semibold rounded-[24px]">
              {" "}
              Sign up{" "}
              <span>
                <ArrowRight />
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden">
        <div className="flex justify-between items-center bg-primary px-[20px] py-[10px]">
          {/* Logo and menu icon */}
          <div>
            <Logo className="h-[50px] w-[50px]  " />
          </div>
          <Button onClick={handleNavClick} className="z-40">
            {/* Toggle icon */}
            {navOpen ? (
              <X className="text-white text-[24px] transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="text-white text-[24px] transition-transform duration-300 rotate-0" />
            )}
          </Button>
        </div>
        {/* Mobile menu */}
        {navOpen && (
          <div className="fixed inset-0 w-full h-full bg-primary opacity-85 z-30 flex justify-start">
            
            <div className="w-full  bg-primary py-[30px] px-[20px] rounded-l-2xl shadow-lg text-white relative">
              <ul className="divide-y-1 flex flex-col gap-y-4">
                <li className="p-2 text-text-light hover:text-secondary">
                  <Link href="/">Home</Link>
                </li>
                <li className="p-2 text-text-light active:text-secondary">
                  <Link href="/our-programs">Our Programs</Link>
                </li>
                <li className="p-2 text-text-light active:text-secondary">
                  <Link href="/about-us">About Us</Link>
                </li>
                <li className="p-2 text-text-light active:text-secondary">
                  <Link href="/resources">Resources</Link>
                </li>
                <li className="p-2 text-text-light active:text-secondary">
                  <Link href="/contact-us">Contact Us</Link>
                </li>
                <li
                  className="relative p-2 text-text-light"
                  onClick={handleOtherInfoClick}
                >
                  <div className="flex gap-x-1.5 items-center">
                    <Link href="/">Other Info</Link>{" "}
                    <span>{isClicked ? <ChevronUp /> : <ChevronDown />}</span>
                  </div>
                  {isClicked && (
                    <div className="bg-bg-primary border rounded-2xl mt-6 z-30">
                      <ul className="w-full flex flex-col gap-y-2 h-[40p] p-5">
                        {/* social media links */}
                        <div className="flex items-center gap-x-2">
                          <li className="bg-secondary p-2 rounded-full">
                            <Link href="/">
                              <FaFacebookF />
                            </Link>
                          </li>
                          <li className="bg-secondary p-2 rounded-full">
                            <Link href="/">
                              <RiInstagramFill />
                            </Link>
                          </li>
                          <li className="bg-secondary p-2 rounded-full">
                            <Link href="/">
                              <RiLinkedinFill />
                            </Link>
                          </li>
                        </div>
                        {/* address and email */}
                        <div className="flex flex-col gap-y-2 ">
                          <div className="flex items-center gap-x-2">
                            <span>
                              <Mail className="w-[11px] h-[16px]" />
                            </span>
                            <p className="text-[13px] font-normal ">
                              info@abc.com
                            </p>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <span>
                              <MapPin className="w-[11px] h-[16px]" />
                            </span>
                            <p className="text-[13px] font-normal ">
                              Ikeja,Lagos
                            </p>
                          </div>
                        </div>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  <div className="flex gap-x-2.5">
                    <Button variant="secondary" className="rounded-[10px]">
                      <Link href="/sign-up" className="  ">
                        Sign up
                      </Link>
                    </Button>
                    <Button variant="secondary" className="rounded-[10px]">
                      <Link href="/login" className=" ">
                        Login
                      </Link>
                    </Button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
