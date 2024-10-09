import { TbArrowUpRight, TbDiamondFilled } from "@preact-icons/tb";

export default function MCEventCard() {
  return (
    <div class="flex flex-col gap-5">
      <div class="grow bg-neutral-800 border border-neutral-700 rounded-lg">
        <div class="py-1 px-2 flex justify-between items-center border-b border-neutral-700 text-neutral-400">
          <div class="text-sm font-tiny">MCEVENT.RU</div>
          <div>•••</div>
        </div>

        <div className="p-2 flex flex-col gap-3">
          <TbDiamondFilled class="text-neutral-500" />
          <div class="grow py-4 text-center space-y-2">
            <div>
              <div class="font-tiny">MINECRAFT EVENT</div>
              <div class="text-sm text-neutral-500">
                All about the largest MCEvent in CIS
              </div>
            </div>
            <div class="flex items-center justify-center gap-1 text-sm font-tiny text-center text-neutral-300">
              <div class="bg-neutral-700 px-2 py-px rounded">Discord</div>
              <div class="bg-neutral-700 px-2 py-px rounded">Support</div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex gap-3 items-center justify-between">
        <div>
          <div class="text-lg">MCEvent</div>
          <div class="text-neutral-500">
            Website for the largest MCEvent<br />
            in CIS, built using Deno and Fresh.
          </div>
        </div>
        <TbArrowUpRight class="text-xl text-neutral-500" />
      </div>
    </div>
  );
}
