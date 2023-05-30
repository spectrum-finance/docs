import styles from "./Glow.module.css";
import Prism from "@site/src/pages/prism.svg";
import React from "react";

export const Glow = () => {
    return (
        <div className={styles.glow}>
            <Prism />
        </div>
    )
}