import React from "react";
import styles from "./LandingPage.module.css";
import {
  LandingNavbar,
  CtaButton,
  CtaSection,
  IntroSection,
  FeatureSection,
  LogoBar,
  FactCard,
  HireDevSection,
  HireAgencySection,
  SourceBaeProcessSteps,
  ConnectPlansSection,
  TestimonialsSection,
  FooterSection,
} from "./Components/index";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [featureCardRef, featureCardInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const [factRef, factRefInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const variants = {
    show: { opacity: 1 },
  };

  return (
    <div className={styles.landing_page_wrapper}>
      <LandingNavbar />
      <div className={styles.intro_container}>
        <IntroSection />
        <CtaSection>
          <CtaButton text="Hire Now - it's Free" />
          <span className={styles.cta_subtext}>Active jobs requirement</span>
        </CtaSection>
      </div>
      <LogoBar />
      <motion.div
        className={styles.feature_section_wrapper}
        ref={featureCardRef}
        style={{ opacity: 0 }}
        animate={featureCardInView && "show"}
        variants={variants}
        transition={{ duration: 1 }}
      >
        <FeatureSection />
        <FactCard />
      </motion.div>
      <motion.div
        className={styles.fact_action}
        ref={factRef}
        style={{ opacity: 0 }}
        animate={factRefInView && "show"}
        variants={variants}
        transition={{ duration: 1 }}
      >
        <span className={styles.action_text}>
          {" "}
          Get Hiring Done With SourceBae
        </span>
        <span className={styles.text_button}>Hire Now</span>
      </motion.div>
      <HireDevSection />
      <HireAgencySection />
      <SourceBaeProcessSteps />
      <ConnectPlansSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
}
