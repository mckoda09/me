import { cn } from "../utils/cn.ts";
import TMPermCard from "../components/TMPermCard.tsx";
import KvantoriumCard from "../components/KvantoriumCard.tsx";
import { TbArrowUpRight, TbDiamond, TbDiamondFilled } from "@preact-icons/tb";
import MCEventCard from "../components/MCEventCard.tsx";

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <div
        className={cn(
          "container p-5 flex items-center justify-between",
          "font-tiny text-lg",
        )}
      >
        <div>ALEKSII NIKITIN</div>
        <div className="flex items-center gap-3 text-neutral-500">
          <a
            class="sm:hover:text-neutral-300"
            target="_blank"
            href="https://github.com/mckoda09"
          >
            GITHUB
          </a>
          <a
            class="sm:hover:text-neutral-300"
            target="_blank"
            href="https://t.me/mckoda09"
          >
            TELEGRAM
          </a>
        </div>
      </div>

      {/* HERO */}
      <div className="container px-5 py-32 space-y-5">
        <div class="text-3xl sm:text-4xl">Develop great products.</div>
        <div class="text-neutral-500">
          Hi, I'm Aleksii Nikitin,<br />
          Senior Typescript Developer from Russia.
        </div>
      </div>

      <div class="container p-5 grid sm:grid-cols-2 md:grid-cols-3 gap-14 sm:gap-5 select-none">
        <TMPermCard />
        <KvantoriumCard />
        <MCEventCard />
      </div>

      <div class="text-center text-neutral-700 font-tiny text-sm py-16">
        ROSES ARE RED. VIOLETS ARE BLUE.<br />
        WELCOME TO MY WEBSITE AT VERSION 0.2.
      </div>
    </main>
  );
}
