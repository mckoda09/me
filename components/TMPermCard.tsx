import { TbArrowUpRight } from "@preact-icons/tb";

export default function TMPermCard() {
  return (
    <a target="_blank" href="https://github.com/mckoda09/tmperm-bot" class="space-y-5">
      <div class="bg-neutral-800 border border-neutral-700 rounded-lg">
        <div class="py-1 px-2 flex justify-between items-center border-b border-neutral-700 text-neutral-400">
          <div class="text-sm font-tiny">ORDERS</div>
          <div>•••</div>
        </div>
        <div class="p-2">
          <div class="border border-neutral-700 rounded-xl text-neutral-400">
            <div class="px-2 py-1 border-b border-neutral-700 flex items-center justify-between text-sm">
              <div>
                <span class="text-red-500">•</span> Hartman 072
              </div>
              <div>
                New
              </div>
            </div>
            <div class="px-2 py-1 border-b border-neutral-700 flex items-center justify-between text-sm">
              <div>
                <span class="text-yellow-500">•</span> Winters 455
              </div>
              <div>
                Processing
              </div>
            </div>
            <div class="px-2 py-1 border-b border-neutral-700 flex items-center justify-between text-sm">
              <div>
                <span class="text-yellow-500">•</span> Gardner 173
              </div>
              <div>
                Processing
              </div>
            </div>
            <div class="px-2 py-1 border-b border-neutral-700 flex items-center justify-between text-sm">
              <div>
                <span class="text-green-500">•</span> Mueller 284
              </div>
              <div>
                Ready
              </div>
            </div>
            <div class="px-2 py-1 border-neutral-700 flex items-center justify-between text-sm">
              <div>
                <span class="text-purple-500">•</span> Pearson 935
              </div>
              <div>
                Hand out
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-3 items-center">
        <div>
          <div class="text-lg">TMPerm</div>
          <div class="text-neutral-500">
            Order management system, built using Deno and Grammy.
          </div>
        </div>
        <TbArrowUpRight class="text-3xl text-neutral-500" />
      </div>
    </a>
  );
}
