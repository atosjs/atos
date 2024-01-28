import l from "git-url-parse";
import { simpleGit as n } from "simple-git";
const i = n(), r = async () => (await i.remote(["get-url", "origin"])).trim(), s = async (t) => {
  await i.remote(["set-url", "origin", t]);
}, e = async () => {
  const t = await r();
  console.log(t);
  const o = l(t);
  o.protocol === "ssh" ? s(o.toString("https")) : o.protocol === "https" && s(o.toString("ssh")), console.log(await r());
};
e();
