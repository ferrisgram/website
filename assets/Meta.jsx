import React from "react";
import Head from "next/head";

export default function Meta() {
  const page = "Ferrisgram - An elegant Rust Client for the Telegram Bot API";
  const description =
    "Ferrisgram is an elegant Rust Client for the Telegram Bot API.";

  const keywords =
    "ferrisgram, telegram, bot, rust, client, api, telegram-bot-api, tg, rust-telegram-bot";

  return (
    <Head>
      <title>{page}</title>
      <meta content="" name={description} />
      <meta content="" name={keywords} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="author" content="Ferrisgram" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={page} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ferrisgram.org" />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Ferrisgram" />
      <meta property="article:author" content="Ferrisgram" />
      <meta property="article:publisher" content="https://ferrisgram.org" />
      <meta
        property="og:image"
        content="/assets/img/favicons/android-icon-192x192.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={page} />
      <meta name="twitter:creator" content={page} />
      <meta name="twitter:title" content={page} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/favicons/android-icon-192x192.png" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/favicons/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicons/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicons/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicons/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicons/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicons/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicons/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicons/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicons/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicons/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/favicons/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin={true.toString()}
      />

      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Noto+Sans:wght@400;900&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
