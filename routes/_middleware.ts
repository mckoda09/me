import { FreshContext } from "$fresh/server.ts";
import { kv } from "../lib/kv.ts";

export async function handler(req: Request, ctx: FreshContext) {
  const key = ["analytics", crypto.randomUUID()];
  const value = {
    ip: ctx.remoteAddr.hostname,
    path: ctx.url.pathname,
    ua: req.headers.get("user-agent"),
  };

  await kv.set(key, value);

  const resp = await ctx.next();
  return resp;
}
