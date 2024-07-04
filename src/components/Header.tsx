import { FunctionComponent } from "react";
import styles from "./header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.image1Parent}>
        <img
          className={styles.image1Icon}
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
        <div className={styles.needAnyHelpParent}>
          <a className={styles.needAnyHelp}>Need any help?</a>
          <div className={styles.searchIconButtonParent}>
            <div className={styles.searchIconButton}>
              <img
                className={styles.iconamoonsearch}
                loading="lazy"
                alt=""
                src="/iconamoonsearch.svg"
              />
              <img
                className={styles.iconamoonsearch}
                loading="lazy"
                alt=""
                src="/mynauibell.svg"
              />
              <img
                className={styles.iconamoonsearch}
                loading="lazy"
                alt=""
                src="/mynauibell-1.svg"
              />
              <img
                className={styles.iconamoonsearch}
                loading="lazy"
                alt=""
                src="/mynauibell-2.svg"
              />
            </div>
            <img
              className={styles.avatarIcon}
              loading="lazy"
              alt=""
              src="/avatar@2x.png"
            />
          </div>
          <div className={styles.engParent}>
            <a className={styles.eng}>ENG</a>
            <img alt="" src="/vector-1366.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

