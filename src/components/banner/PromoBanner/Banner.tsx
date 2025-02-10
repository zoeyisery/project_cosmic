"use client";

import { useEffect, useState } from "react";
import styles from "./Banner.module.css";

interface Banner {
  id: number;
  product: string;
  imageUrl: string;
  detailUrl?: string;
  adTitle: string;
  adText: string;
}

const Banner = () => {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch("/api/banners");
        const data = await response.json();
        setBanners(data);
      } catch (error) {
        console.error("배너 데이터를 불러오는 중 오류 발생:", error);
      }
    };
    fetchBanners();
  }, []);

  return (
    <div className={styles.bannerContainer}>
      {banners.map((banner) => (
        <div key={banner.id} className={styles.banner}>
          <div className={styles.bannerText}>
            <h4>{banner.adTitle}</h4>
            <p>{banner.adText}</p>
          </div>
          <img
            src={banner.imageUrl}
            alt={banner.product}
            className={styles.bannerImage}
          />
        </div>
      ))}
    </div>
  );
};

export default Banner;
