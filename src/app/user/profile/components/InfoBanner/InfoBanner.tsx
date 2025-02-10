"use client";
import { useEffect, useState } from "react";
import "@fontsource/material-icons";
import { Icon } from "@/components/common/Icon/Icon";
import styles from "./InfoBanner.module.css";

interface InfoBanner {
  id: string;
  nickName?: string;
  profilePicture?: string;
  bio?: string;
}

const InfoBanner: React.FC = () => {
  const [infoBanners, setInfoBanners] = useState<InfoBanner[]>([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setInfoBanners(data);
      } catch (error) {
        console.error("배너 데이터를 불러오는 중 오류 발생:", error);
      }
    };
    fetchBanners();
  }, []);

  return (
    <div className={styles.bannerContianer}>
      {infoBanners.map((infoBanner) => (
        <div className={styles.banner}>
          <div className={styles.bannerPart}>
            <div className={styles.infoPart}>
              <img
                src={infoBanner.profilePicture}
                className={styles.infoImage}
              />
              <div className={styles.infoText}>
                <h4>{infoBanner.nickName}</h4>
                <p>{infoBanner.id}</p>
              </div>
            </div>
            <div className={styles.bioPart}>
              <div className={styles.bioText}>
                <p>{infoBanner.bio}</p>
              </div>
            </div>
          </div>
          <div className={styles.iconPart}>
            <Icon name="chevron_right" size="30px"></Icon>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoBanner;
