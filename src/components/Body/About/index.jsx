import React from "react";
import styles from "./about.module.css";
import abouthero from "./assets/abouthero.jpg";
import wegive from "./assets/wegive.jpg";

const About = () => {
  return (
    <div>
      <>
        {/* Top Hero */}
        <section className="shadow border-t-2 border-slate-200">
          {/* <div className={styles.imageContainer}> */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 h-[400px] items-center`}
          >
            {/* <img className={styles.heroImg} src={hero} alt="hero" />
          <p className={styles.heroText}>PRIVACY POLICY AND USER AGREEMENT</p> */}
            <div
              className={`col-span-2 flex items-center justify-center px-12 py-10  h-[400px]`}
            >
              {" "}
              <p className="text-red-500 text-4xl leading-normal font-bold">
                GET TO KNOW MORE ABOUT US
              </p>
            </div>
            <div className={` col-span-3`}>
              <img
                className={`h-[400px] object-fill lg:flex  w-full`}
                src={abouthero}
                alt="hero"
              />
            </div>
          </div>
        </section>
        {/* Top Hero */}
        {/* <section className={styles.newBloodSection}>
          <div className={styles.imageContainer}>
            <img className={styles.heroImg} src={hero} alt="hero" />
            <p className={styles.heroText}>ABOUT US</p>
          </div>
        </section> */}
        {/* Card Sections */}
        <section className={`${styles.aboutBg} mt-32 mb-16`}>
          {/* First card */}
          <section className=" mx-6 lg:mx-12   py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-6">
              <div className="px-4 lg:px-8 lg:flex md:flex sm:flex hidden flex-center items-center">
                <img src="/assets/donate.jpg" alt="donate" className="w-full" />
              </div>
              <div className="px-4 lg:px-8">
                <h2 className="my-2 font-bold text-3xl text-[#f6655f]">
                  What we feel
                </h2>
                <div className="lg:hidden md:hidden sm:hidden my-4 lg:px-8 flex">
                  <img
                    src="/assets/donate.jpg"
                    alt="donate"
                    className="w-full"
                  />
                </div>
                <p>
                  Each day, thousands of people – people just like you – provide
                  compassionate care to those in need. Our network of generous
                  donors, volunteers and employees share a mission of preventing
                  and relieving suffering, here at home and around the world. We
                  roll up our sleeves and donate time, money and blood. We learn
                  or teach life-saving skills so our communities can be better
                  prepared when the need arises. We do this every day because
                  the Red Cross is needed - every day.
                </p>
              </div>
            </div>
          </section>
          {/* second card */}
          <section className="mx-6 lg:mx-12   py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-6">
              <div className="px-4 lg:px-8">
                <h2 className="my-2 font-bold text-3xl text-[#f6655f]">
                  Who we are
                </h2>
                <div className="lg:hidden md:hidden sm:hidden my-4 lg:px-8 flex">
                  <img
                    src="/assets/donate.jpg"
                    alt="donate"
                    className="w-full"
                  />
                </div>
                <p>
                  We are the intermediary between the DOnr, Donee and the
                  Donation Center. We help you connect with each others in view
                  to save life and enable a growing society.
                </p>
              </div>
              <div className="px-4 lg:px-8 lg:flex md:flex sm:flex hidden flex-center items-center">
                <img src={wegive} alt="donate" className="w-full" />
              </div>
            </div>
          </section>
        </section>
      </>
    </div>
  );
};

export default About;
