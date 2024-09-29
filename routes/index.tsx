import ProjectCard from "../components/ProjectCard.tsx";
import { cn } from "../lib/cn.ts";
import { TbRosetteDiscountCheckFilled } from "@preact-icons/tb";

export default function Home() {
  const socials = [
    { title: "Telegram", url: "https://t.me/mckoda09" },
    { title: "Github", url: "https://github.com/mckoda09" },
  ];

  return (
    <main>
      <div class="p-5 flex items-center justify-between mx-auto md:max-w-3xl">
        <div>@mckoda09</div>
        <a
          href="https://t.me/mckoda09"
          class={cn(
            "px-2 py-1",
            "bg-neutral-800 border border-neutral-700 rounded-lg",
            "active:scale-95 hover:scale-105 transition-transform",
          )}
        >
          Hire me
        </a>
      </div>

      <div class="mx-auto md:max-w-3xl p-5 py-16 space-y-3">
        <img
          src="/avatar.jpg"
          alt="Avatar"
          class="rounded-full ring ring-neutral-500 ring-offset-4 ring-offset-neutral-900"
          width={72}
        />
        <br />
        <div class="text-3xl font-bold flex gap-3 items-center">
          Aleksii Nikitin
          <TbRosetteDiscountCheckFilled class="text-neutral-500" size={24} />
        </div>
        <div>Senior TS Developer from Perm, Russia.</div>
      </div>

      <div class="mx-auto md:max-w-3xl p-5 space-y-3">
        <div class="grid md:grid-cols-2 gap-5">
          <ProjectCard
            img="/projects/avatar.png"
            title="Avatar"
            description="Simple avatar generator for another project"
            url="https://avatar.mckoda09.ru/"
          />
          <ProjectCard
            img="/projects/kvantorium.jpg"
            title="KvantoriumAdminBot"
            description="Mailing bot for Kvantorium"
            url="https://github.com/mckoda09/kvantorium-admin-bot"
          />
          <ProjectCard
            img="/projects/tmperm.jpg"
            title="TMPerm"
            description="Order management for TMPerm"
            url="https://github.com/mckoda09/tmperm-bot"
          />
          <ProjectCard
            img="/projects/mcevent.png"
            title="MCEvent"
            description="Website for the largest Minecraft Event"
            url="https://mcevent.ru"
          />
          <ProjectCard
            img="/projects/npcamp.svg"
            title="NPRadioBot"
            description="Feedback bot for New Generation Camp"
            url="https://t.me/npradiobot"
          />
          <ProjectCard
            img="/projects/tapee.png"
            title="Tapee.su"
            description="Food organization for schools"
            url="https://tapee.su"
          />
        </div>
      </div>

      <footer class="py-16 text-center text-neutral-500 text-sm flex gap-3 items-center justify-center">
        {socials.map((social) => (
          <a href={social.url} class="hover:underline">{social.title}</a>
        ))}
      </footer>
    </main>
  );
}
