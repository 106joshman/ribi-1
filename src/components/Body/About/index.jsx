import React from "react";
import styles from "../NeedBlood/need.module.css";
import hero from "../../../assets/hero.png";

const About = () => {
  return (
    <div>
      <>
        <section className={styles.newBloodSection}>
          <div className={styles.imageContainer}>
            <img className={styles.heroImg} src={hero} alt="hero" />
            <p className={styles.heroText}>ABOUT US</p>
          </div>
        </section>
        {/* Card Sections */}
        <section className="my-16">
          {/* First card */}
          <section className=" mx-6 lg:mx-12  bg-green-100 py-12">
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
          <section className="mx-6 lg:mx-12  bg-yellow-100 py-12">
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
              <div className="px-4 lg:px-8 lg:flex md:flex sm:flex hidden flex-center items-center">
                <img src="/assets/donate.jpg" alt="donate" className="w-full" />
              </div>
            </div>
          </section>
        </section>
      </>
    </div>
  );
};

export default About;
