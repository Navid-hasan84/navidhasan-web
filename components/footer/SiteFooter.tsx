import { site } from "@/lib/site";

import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <span>
        © {new Date().getFullYear()} {site.name}
      </span>

      <span className={styles.message}>
        Independent development for practical digital products.
      </span>
    </footer>
  );
}
