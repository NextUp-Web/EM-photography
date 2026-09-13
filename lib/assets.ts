import fs from "node:fs";
import path from "node:path";

const PUBLIC_DIR = path.join(process.cwd(), "public");

function buildManifest(): Set<string> {
  const files = new Set<string>();
  const walk = (dir: string) => {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const abs = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(abs);
      else files.add("/" + path.relative(PUBLIC_DIR, abs).split(path.sep).join("/"));
    }
  };
  walk(PUBLIC_DIR);
  return files;
}

const frozen = process.env.NODE_ENV === "production" ? buildManifest() : null;

/**
 * The photography and logo files are supplied by the client. Until a file is
 * dropped into /public the layout still reserves its exact slot, so adding the
 * asset later needs no code change.
 */
export function assetExists(src: string): boolean {
  return (frozen ?? buildManifest()).has(src);
}
