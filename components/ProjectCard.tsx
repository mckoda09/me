import { TbChevronRight, TbRosetteDiscountCheckFilled } from "@preact-icons/tb";
import { cn } from "../lib/cn.ts";

interface Props {
  img: string;
  title: string;
  description: string;
  url: string;
  deprecated?: boolean;
  dev?: boolean;
}

function DeprecatedBadge() {
  return (
    <div class="inline-block text-sm text-yellow-500 bg-yellow-500/10 px-2 rounded-full">
      Deprecated
    </div>
  );
}

function DevBadge() {
  return (
    <div class="inline-block text-sm text-green-500 bg-green-500/10 px-2 rounded-full">
      Preview
    </div>
  );
}

export default function ProjectCard(
  { img, title, description, url, deprecated, dev }: Props,
) {
  return (
    <a
      href={url}
      class={cn(
        "flex items-center gap-3 rounded-xl p-3",
        "bg-neutral-800 border border-neutral-700",
        "md:hover:scale-105 active:scale-95 transition-transform",
      )}
    >
      <div class="aspect-square h-16 p-3">
        <img src={img} alt={title} class="rounded-lg" />
      </div>
      <div class="grow space-y-1">
        <div class="flex items-center gap-2">
          {title} {deprecated ? <DeprecatedBadge /> : null}
          {dev ? <DevBadge /> : null}
          </div>
        <div class="text-neutral-400 text-sm">{description}</div>
      </div>
      <div class="text-neutral-500">
        <TbChevronRight />
      </div>
    </a>
  );
}
