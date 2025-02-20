import { card } from "../assets";
import styles, { layout } from "../constants/style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Understand Social Media Sentiment <br className="sm:block hidden" /> in a Few Easy Steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Get real-time insights into audience opinions and trends.  
        Our AI-powered sentiment analysis helps you track emotions,  
        identify patterns, and make data-driven decisions effortlessly.
      </p>

     </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="sentiment analysis" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
