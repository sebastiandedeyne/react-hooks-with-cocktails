import "../styles/app.css";

import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Hooks & Cocktails</title>
      </Head>
      <div
        className="max-w-lg mx-auto bg-white px-12"
        style={{ minHeight: "calc(100vh - 2rem)" }}
      >
        <div className="text-paper">
          <img src="/static/thingamajig.svg" />
        </div>
        <h1 className="font-sans font-black text-brown uppercase tracking-widest text-center text-2xl -mt-6">
          Hooks & Cocktails
        </h1>
        {children}
      </div>
    </>
  );
}
