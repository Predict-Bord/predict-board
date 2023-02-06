import MarketItem from "../MarketItem";
import styles from "../../styles/MarketGrid.module.sass";

const MarketGrid = ({ markets, text }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.marketHeading}>      <h3 style={{color:"white"}}>Trending Quesstions :</h3>
</h3>
      <>
        {markets &&
          markets.map((market, id) => (
            <MarketItem key={market.details.address} market={market} />
          ))}
      </>
    </div>
  );
};

export default MarketGrid;
