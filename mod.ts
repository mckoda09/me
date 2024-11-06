Deno.serve(
  () =>
    new Response(null, {
      status: 302,
      headers: {
        Location: "https://github.com/mckoda09",
      },
    }),
);
