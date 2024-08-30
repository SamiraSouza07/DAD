import styles from "./Grid.module.css";
import mulher from "../../assets/mulher.jpeg"

function Grid() {
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <img className={styles.imagem1} src="https://s3-alpha-sig.figma.com/img/1c36/0f79/0c1817d3afa266b3c9f8c81ff0ed4428?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TzDQ~uvYA0Za7bf8CRtXCvSlnn2jYHP63aZW-UbW0A94CBtyY-BHprwU-7uJhcJJBBURlt8QfnLOaJ53pQeSph14RrpBWiWy98bmySMP9CcEAIqSpSfDVERwVxZtYhdY2FtUih9jejRRV1HCZBeTvkGBchG7TcRe6mYvupdlniPTIDU7G0h5AS-8qgE3g8n51x-TQ5g~vn8m8jhHb7T1ifg5EmxY1zU8PDHhCRVqhTDq97KfuRi4Kiex3UUGZwyaDjqlBdUGnnzx3W6VOcY1V87LRyLTxJZU~5FVRIvaHSr9gE8cyL0izXWn-MKISoJMWFb~XXJBg-d0T3I0w~DHMA__" alt="" />
          <div className={styles.textos}>
              <h3 className={styles.principal}>PlayStation 5</h3>
              <p className={styles.principal}>Black and White version of the PS5 coming out on sale.</p>
              <p className={styles.principal}>Shop Now</p>
          </div>
        </div>
        <div className={styles.gridItem}>
          <img className={styles.imagem2} src= {mulher}alt="" />
          <div>
              <h3 className={styles.secundario}>Women's Collections</h3>
              <p className={styles.secundario}>Featured woman collections that give you another vibe.</p>
              <p className={styles.secundario}>Shop Now</p>
          </div>
        </div>
        <div className={styles.gridItem}>
          <img className={styles.imagem3} src="https://s3-alpha-sig.figma.com/img/e565/9d57/2977438364a41d7e8c9d1e9a794d43ed?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YSXCj7AdnPp7tv-dTyeNY-62bJ65YV-w7S8GUJQmDulH9zwig0Ga3xdkjjEhz~u~jBLQoJjU3CZYQAg1B7CRjNwiOtBUEzhe~MxqwZ0Y4tqoHdFOkZzZLeE6HzwgWW5mRFgzHgMBzjYkbL3A3-ZiaM3FHeiH4OV9gj7p0WfcMqU7nyZFgNbsuPuyM7qD3PQn0bKYHIYCYm2T7v2SGgOsENYX0J19rs3lNU~q2c5IkCLdLCyVMCOAWaJ9Kiad9lwkG18uEEXGbyoWJ1qDGg8n0G88E51AcpKxSTVF3qb4MmOVzH7RjaAGooIcaq8Lptz35FJbGX~P5V6Bv-PNTdJIhg__"  alt="" />
          <div className={styles.textos}>
              <h3 className={styles.terciario1}>Speakers</h3>
              <p className={styles.terciario1}>Amazon wireless speakers</p>
              <p className={styles.terciario1}>Shop Now</p>
          </div>
        </div>
        <div className={styles.gridItem}>
          <img className={styles.imagem4} src="https://s3-alpha-sig.figma.com/img/1531/5cd1/5102562cf220504d288fa568eaa816dd?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ouecw-eksLVG-qFE2Hg~kuUCeKSK3vKmwcLhRzOCa3LkQ8i5jmfm2zHKjyTNhjcV7xStObydHoTE2ASE-fMkjCtGVS1KEiuOJfdVWVnX~Kcu1zKkRuDRPebkphIZxEjabY0sAQwq-npful~yEB5VXtYpH08AaNk0RokFDjPXTx0-SpSiuD5iyBG7jJbn5fA9UbSM6FdTe-~uNjy8ivJa2e8YD0Sc51xh2hsF7XTBn5Ysl2tWKzX-7e46mWZYhGE3lHbUrdX~tHX1zu5AbrEss507K5qQDIUWYV~ZXj1WhD1VRyuqqCCCz5JV-G8t0bOTRpd7CkGP0uQ9YVedXojnaA__" alt="" />
          <div className={styles.textos}>
              <h3 className={styles.terciario2}>Perfume</h3>
              <p className={styles.terciario2}>GUCCI INTENSE OUD EDP</p>
              <p className={styles.terciario2}>Show Now</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grid;
