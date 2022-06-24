import Link from 'next/link'
import { Button, DatePicker, version, Divider } from "antd";
import "antd/dist/antd.css";

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.App}>



<ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/About">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>Blog Post</a>
        </Link>
      </li>
    </ul>

    <Divider orientation="left">Antd Component</Divider>

      <h1>Antd version: {version}</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>


     
     
    </div>
  );
}
