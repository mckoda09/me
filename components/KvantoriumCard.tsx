import { TbArrowUpRight } from "@preact-icons/tb";

export default function KvantoriumCard() {
  return (
    <a
      target="_blank"
      href="https://github.com/mckoda09/kvantorium-admin-bot"
      class="flex flex-col gap-5"
    >
      <div class="grow bg-neutral-800 border border-neutral-700 rounded-lg">
        <div class="py-1 px-2 flex justify-between items-center border-b border-neutral-700 text-neutral-400">
          <div class="text-sm font-tiny">BROADCAST</div>
          <div>•••</div>
        </div>
        <div class="p-2">
          <div class="space-y-3 text-sm">
            <div class="space-y-1">
              <div class="text-neutral-500">Title</div>
              <div class="py-1 px-2 bg-neutral-700 text-neutral-400 rounded">
                📢 Announcment
              </div>
            </div>
            <div class="space-y-1">
              <div class="text-neutral-500">Message</div>
              <div class="py-1 px-2 bg-neutral-700 text-neutral-400 rounded">
                Hello, today we're starting learning IT! Prepare your laptops
                and have fun!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-3 items-center">
        <div>
          <div class="text-lg">Kvantorium Admin Bot</div>
          <div class="text-neutral-500">
            Broadcast bot for Kvantorium, built using Deno and Grammy.
          </div>
        </div>
        <TbArrowUpRight class="text-3xl text-neutral-500" />
      </div>
    </a>
  );
}
