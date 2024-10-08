import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <title>mckoda09</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" href="/avatar.jpg" />
      </head>
      <body class="bg-neutral-900 text-white">
        <Component />
      </body>
    </html>
  );
}
