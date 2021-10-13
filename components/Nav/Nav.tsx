import NextLink from "next/link";
import cx from "classnames";
import styles from "./Nav.module.css";
import Image from "next/image";

type NavItemProps = {
  title: string;
  url: string;
};

export type NavProps = {
  items?: NavItemProps[];
  resume?: string;
  email?: string;
  fullscreen?: boolean;
};

export const Nav = ({ items, resume, email, fullscreen }: NavProps) => {
  const navClassName = cx(styles.nav, {
    [styles.fullscreen]: fullscreen,
  });
  return (
    <div className={navClassName}>
      {items &&
        items.map((item, i) => {
          return (
            <div key={i} className={styles.link}>
              <NextLink href={item.url} passHref>
                <a>{item.title}</a>
              </NextLink>
            </div>
          );
        })}
      {resume && (
        <div className={styles.link}>
          <NextLink href={resume} passHref>
            <a target="_blank">
              <Image
                className={styles.image}
                src="/icon-resume.svg"
                width={16}
                height={16}
                alt=""
              />
              Resume
            </a>
          </NextLink>
        </div>
      )}
      {email && (
        <div className={styles.link}>
          <NextLink href={email} passHref>
            <a>
              <Image
                className={styles.image}
                src="/icon-email.svg"
                width={16}
                height={16}
                alt=""
              />
              Email
            </a>
          </NextLink>
        </div>
      )}
    </div>
  );
};

export default Nav;
