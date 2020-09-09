import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <img
        className="Home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="Home__row">
        <Product
          id="5464651"
          title="4 in 1 Wireless Charger"
          price={100}
          rating={4.5}
          image="https://m.media-amazon.com/images/I/71kzE1Su6YL._AC_UY218_.jpg"
        />

        <Product
          id="547141"
          title="Apple Watch Series 5 (GPS, 44MM)"
          price={400}
          rating={5}
          image="https://m.media-amazon.com/images/I/71mbZF8PT1L._AC_UY218_.jpg"
        />
      </div>

      <div className="Home__row">
        <Product
          id="68787187"
          title="some dummy title"
          price={214}
          rating={4}
          image="https://m.media-amazon.com/images/I/71eGsUPZm2L._AC_UY218_.jpg"
        />

        <Product
          id="54662252"
          title="iPhone Fast Charger AUKEY USB"
          price={14}
          rating={4.5}
          image="https://m.media-amazon.com/images/I/51DG8mtrC1L._AC_UY218_.jpg"
        />

        <Product
          id="2545124"
          title="Apple 13.3 MacBook Pro - Mid 2019"
          price={1049}
          rating={4.5}
          image="https://m.media-amazon.com/images/I/71i49M4hv2L._AC_UY218_.jpg"
        />
      </div>

      <div className="Home__row">
        <Product
          id="5454154"
          title="some dummy title"
          price={100.5}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
        />
      </div>

      <div className="Home__row">
        <Product
          id="415415"
          title="some dummy title"
          price={830}
          rating={4.5}
          image="https://m.media-amazon.com/images/I/41J4unZuXeL._AC_UY218_.jpg"
        />

        <Product
          id="51541515"
          title="some dummy title"
          price={100.5}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
        />

        <Product
          id="516515616"
          title="some dummy title"
          price={100.5}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
        />

        <Product
          id="516515616"
          title="some dummy title"
          price={100.5}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
