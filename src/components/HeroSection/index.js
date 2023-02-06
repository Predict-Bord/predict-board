import styles from "../../styles/HeroSection.module.sass";
import banner from "../../assets/banner.png";


const HeroSection = () => (
  <div className={styles.container}>
    <div className={styles.textContainer}>
      {/* <h1 className={styles.heading} style={{color:"#03e9f4"}}>Future Trends</h1>
      <p className={styles.para}>
        Future Trends is a decentralized market where users can stake on a question and get exciting and high returns. We can provide you more returns with the help of external network staking clients.
        What are you waiting for? Lets stake some tFIL with minimal gas fee!🥳
      </p> */}
                        <img width={"1000px"} src={banner} alt="banner"  style={{borderRadius:"10px"}}/>

    </div>
  </div>
);

export default HeroSection;
