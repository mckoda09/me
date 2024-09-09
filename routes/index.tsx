import TypescriptIcon from "../components/icons/Typescript.tsx";
import DenoIcon from "../components/icons/Deno.tsx";
import FreshIcon from "../components/icons/Fresh.tsx";
import GithubIcon from "../components/icons/Github.tsx";
import GlobeIcon from "../components/icons/Globe.tsx";
import DevBadge from "../components/badges/Dev.tsx";
import TelegramIcon from "../components/icons/Telegram.tsx";

export default function Home() {
  return (
    <main class="p-7 space-y-7">
      <div class="flex items-center justify-between">
        <div>mckoda09</div>
        <div class="flex items-center gap-3 text-2xl">
          <a
            href="https://t.me/mckoda09"
            class="rounded-xl bg-sky-500/10 text-sky-500 p-2 hover:bg-sky-500/20 transition-colors"
          >
            <TelegramIcon />
          </a>
          <a
            href="https://t.me/mckoda09"
            class="rounded-xl bg-neutral-700/50 p-2 hover:bg-neutral-700/70 transition-colors"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
      <div class="text-center py-16 lg:py-32 text-xl md:text-2xl lg:text-3xl">
        <div>
          Hi, I'm <b>Aleksii Nikitin</b>.
        </div>
        <div>I develop great products.</div>
      </div>

      <div class="text-xl">Projects</div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        <div class="border rounded-xl p-3 border-neutral-700 gap-5 flex flex-col justify-between">
          <img
            src="/website.png"
            alt="Website"
            class="rounded-xl aspect-video"
          />
          <div class="space-y-1">
            <div className="flex justify-between items-center">
              <div class="text-xl font-bold">This Website</div>
              <div class="flex gap-1">
                <TypescriptIcon />
                <DenoIcon />
                <FreshIcon />
              </div>
            </div>
            <div class="flex gap-3">
              <a
                href="https://github.com/mckoda09/me"
                class="flex gap-1 items-center text-sm"
              >
                <GithubIcon />
                Github
              </a>
              <DevBadge />
            </div>
          </div>
        </div>

        <div class="border rounded-xl p-3 border-neutral-700 gap-5 flex flex-col justify-between">
          <img
            src="/tmperm.jpg"
            alt="Website"
            class="rounded-xl aspect-video"
          />
          <div class="space-y-1">
            <div className="flex justify-between items-center">
              <div class="text-xl font-bold">TMPerm Bot</div>
              <div class="flex gap-1">
                <TypescriptIcon />
                <DenoIcon />
              </div>
            </div>
            <a
              href="https://github.com/mckoda09/tmperm_bot"
              class="flex gap-1 items-center text-sm"
            >
              <GithubIcon />
              Github
            </a>
          </div>
        </div>

        <div class="border rounded-xl p-3 border-neutral-700 gap-5 flex flex-col justify-between">
          <img
            src="/kvantorium.png"
            alt="Website"
            class="rounded-xl aspect-video"
          />
          <div class="space-y-1">
            <div className="flex justify-between items-center">
              <div class="text-xl font-bold">Kvantorium.Projects</div>
              <div class="flex gap-1">
                <TypescriptIcon />
                <DenoIcon />
                <FreshIcon />
              </div>
            </div>
            <div class="flex items-center gap-3">
              <a
                href="https://github.com/mckoda09/kvantorium-projects"
                class="flex gap-1 items-center text-sm"
              >
                <GithubIcon />
                Github
              </a>
              <DevBadge />
            </div>
          </div>
        </div>

        <div class="border rounded-xl p-3 border-neutral-700 gap-5 flex flex-col justify-between">
          <img
            src="/mcevent.png"
            alt="Website"
            class="rounded-xl aspect-video"
          />
          <div class="space-y-1">
            <div className="flex justify-between items-center">
              <div class="text-xl font-bold">MCEvent</div>
              <div class="flex gap-1">
                <TypescriptIcon />
              </div>
            </div>
            <a
              href="https://mcevent.ru"
              class="flex gap-1 items-center text-sm"
            >
              <GlobeIcon />
              Visit
            </a>
          </div>
        </div>
      </div>

      <div class="text-center text-sm text-neutral-500">
        ... and at least 10 private projects.
        <br />
        Bots, websites, scripts, etc.
      </div>
    </main>
  );
}
