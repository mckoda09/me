export default function Home() {
  return (
    <main>
      <div class="container p-5 flex justify-between">
        <a href="/" className="flex gap-3 items-center">
          {
            /* <div class="border border-neutral-500 rounded-full overflow-hidden">
            <img
              src="/avatar.jpg"
              alt="Avatar"
              width={24}
            />
          </div> */
          }
          <div class="font-tiny">ALEKSII NIKITIN</div>
        </a>
        <div class="font-tiny text-neutral-500 flex gap-3">
          <a target="_blank" href="https://t.me/mckoda09">TELEGRAM</a>
          <a target="_blank" href="https://github.com/mckoda09">GITHUB</a>
        </div>
      </div>

      <div class="container px-5 py-32">
        <div class="space-y-3">
          <div class="text-3xl">Develop great products.</div>
          <div class="text-neutral-500">
            Senior web developer from Perm, Russia.
          </div>
        </div>
      </div>

      <div class="container p-5 space-y-5 grid sm:grid-cols-2 gap-5">
      </div>
    </main>
  );
}
