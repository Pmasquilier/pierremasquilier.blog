import Image from "next/image";
import { Fragment } from "react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Fragment>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
    </Fragment>
  );
}
