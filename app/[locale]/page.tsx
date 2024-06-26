"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import livlmadness from "./livlmadness.png";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <main className="flex flex-col gap-8 items-center justify-center min-h-screen px-5">
      <Image
        src={livlmadness}
        width={200}
        alt="Livl logo"
        className="absolute top-5 left-5"
      ></Image>

      <a
        className="btn btn-circle fill-black btn-ghost absolute top-5 right-5"
        href="https://dub.sh/livl-madness-repo"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>

      <h1 className="text-3xl lg:text-5xl text-balance font-bold tracking-tight leade max-w-screen-sm text-center text-neutral">
        {t("pageTitle")}
      </h1>

      <div className="bg-slate-300 rounded shadow overflow-hidden">
        <iframe
          className="aspect-video w-96"
          src="https://www.youtube.com/embed/93hBMCC_aoE?si=maZaM9tL7QlynTSu"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <p className="text-base-content max-w-prose text-center">
        {t("pageDescription")}
      </p>

      <div className="flex max-md:flex-col gap-5">
        <div className="indicator">
          <span className="indicator-item badge badge-secondary">
            {t("new")}
          </span>
          <Link className="btn btn-primary" href="play">
            {t("playOnline")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>
          </Link>
        </div>

        <Link
          className="btn btn-secondary"
          href="https://github.com/Livl-Corporation/livl-madness/releases"
          target="_blank"
        >
          {t("download")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </Link>
      </div>
    </main>
  );
}
