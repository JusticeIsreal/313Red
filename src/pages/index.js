import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [redirecting, setRedirecting] = useState(true);

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      setRedirecting(false);
    }, 4000); // 5000 milliseconds = 5 seconds

    // Cleanup function to clear the timeout
    return () => clearTimeout(redirectTimeout);
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const articleURL = urlParams.get("url");
    console.log(articleURL);
    if (articleURL) {
      window.location.href = articleURL;
      // return;
    }
    if (!redirecting) {
      // Redirect only when redirecting is false
      window.location.href = "https://313.red/pages/download-our-app";
    }
  }, [redirecting]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="24Data" content="Redirect for News Article" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./icon.png" />
      </Head>
      <main>
        <div className="phone-main-con">
          <div className="loading">
            <img
              src="./icon.png"
              alt=""
              lazy
              style={{ marginBottom: "300px" }}
            />
          </div>
          {redirecting ? (
            <div className="loading">
              <div className="loader"></div>
            </div>
          ) : (
            <div className="loading">
              <div
                className="loader2"
                style={{ marginTop: "70px", marginBottom: "20px" }}
              ></div>
              <div class="redirect" style={{ margin: "0 auto" }}></div>
            </div>
          )}

          <div className="phone-con">
            <img src="./phone.png" alt="" lazy />
          </div>
        </div>
      </main>
    </>
  );
}
