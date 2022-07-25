import Head from "next/head";
import Image from "next/image";
import Ferrisgram from "../assets/ferrisgram_text.png";
import ferrisgram from "../public/ferrisgram.png";
import brush from "../assets/brush.svg";
import Navbar from "../assets/Navbar";

export default function Home() {
  const description = "An elegant Rust Client for the Telegram Bot API.";

  const keywords =
    "ferrisgram, telegram, bot, rust, client, api, telegram-bot-api, tg, rust-telegram-bot";

  return (
    <>
      <Head>
        <title>Welcome to Ferrisgram - Ferrisgram</title>
        <meta content="" name={description} />
        <meta content="" name={keywords} />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta name="author" content="Ferrisgram" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />

        <meta
          property="og:title"
          content="Welcome to Ferrisgram - Ferrisgram"
        />
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
        <meta
          name="twitter:site"
          content="Welcome to Ferrisgram - Ferrisgram"
        />
        <meta
          name="twitter:creator"
          content="Welcome to Ferrisgram - Ferrisgram"
        />
        <meta
          name="twitter:title"
          content="Welcome to Ferrisgram - Ferrisgram"
        />
        <meta name="twitter:description" content={description} />

        <meta
          name="twitter:image"
          content="/favicons/android-icon-192x192.png"
        />

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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Noto+Sans:wght@400;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section id="home" className="bg-[url('/main-bg.webp')] min-h-screen">
        <Navbar />
        <div className="container px-8 mx-auto">
          <div className="lg:flex py-10">
            <div className="w-full lg:w-1/2">
              <Image
                src={Ferrisgram.src}
                alt="Ferrisgram"
                width={1116}
                height={223}
              />
              <h1 className="hidden">Ferrisgram</h1>
              <div className="flex flex-col">
                <h2 className="font-notoSans font-xl text-[#d9d9d9] text-2xl lg:pl-10 -pl-3 text-center lg:w-96 w-80">
                  An elegant Rust Client for the Telegram Bot API.
                </h2>

                <div className="2xl:hidden pt-28 lg:flex lg:flex-col lg:-mt-64 lg:min-w-[100vh] lg:items-end relative rotate-[33.24010846deg] select-none">
                  <Image src={brush.src} width={184} height={94} />
                </div>
              </div>

              <div className="lg:pt-32 pl-7">
                <span className="text-4xl font-bold text-[#F8F8F8]">
                  KEY FEATURES
                </span>
                <ul className="pl-10 pt-2 list-disc text-[#F8F8F8] text-lg">
                  <li>
                    <span className="font-bold">Easy to use:</span>{" "}
                    <span>
                      Heavily inspired by the python-telegram-bot, Ferrisgram is
                      designed so that even a beginner can easily make a bot
                      with it.
                    </span>
                  </li>

                  <li>
                    <span className="font-bold">Asynchronous:</span>{" "}
                    <span>
                      Ferrisgram is powered by rust's built-in await async
                      syntax.
                    </span>
                  </li>

                  <li>
                    <span className="font-bold">Typo-Free Docs:</span>{" "}
                    <span>
                      Autogenerated documentation of the native Bot API types
                      and methods make it typo-free.
                    </span>
                  </li>

                  <li>
                    <span className="font-bold">Filters:</span>{" "}
                    <span>
                      Ferrisgram provides filters to make it easy for you to
                      sort different types of updates in a managed way.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex object-cover items-center lg:w-1/2 justify-center -mt-20">
              <div className="object-cover xl:w-[50rem] xl:h-[50rem] rounded-full select-none text-white">
                <Image
                  className="object-cover rounded-full select-none text-white"
                  src={ferrisgram.src}
                  alt="Ferrisgram"
                  width={ferrisgram.width}
                  height={ferrisgram.height}
                />

                {/* For Static Build */}
                {/* <img
                  className="object-cover rounded-full select-none text-white"
                  src={ferrisgram.src}
                  alt="Ferrisgram"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
