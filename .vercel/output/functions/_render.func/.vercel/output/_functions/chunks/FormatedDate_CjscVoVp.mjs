import { k as createAstro, l as createComponent, m as renderTemplate, o as maybeRenderHead, p as addAttribute } from './astro/server_KoqgSCIg.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("http://localhost:4321");
const $$FormatedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormatedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")} class="mt-6 text-sm text-zinc-400"> ${date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })}</time>`;
}, "C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/components/FormatedDate.astro", void 0);

export { $$FormatedDate as $ };
