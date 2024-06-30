import { k as createAstro, l as createComponent, m as renderTemplate, p as addAttribute, n as renderComponent, y as renderHead, o as maybeRenderHead, u as unescapeHTML, F as Fragment, z as defineScriptVars, q as renderSlot, s as spreadAttributes } from './astro/server_KoqgSCIg.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';
import { g as getSession, a as authConfig } from './server_B_KaX6OF.mjs';

const $$Astro$6 = createAstro("http://localhost:4321");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$5 = createAstro("http://localhost:4321");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description = "Nuestro blog de Astro", image = "/assets/img1.png" } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate`<head><!-- Global metadata --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="shortcut icon" href="favicon.ico" type="image/x-icon"><!-- Preloads for fonts --><link rel="preload" href="/fonts/ProductSans-Bold.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="/fonts/ProductSans-BlackItalic.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="/fonts/ProductSans-Black.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="/fonts/ProductSans-BoldItalic.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="/fonts/ProductSans-Italic.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="/fonts/ProductSans-LightItalic.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="/fonts/ProductSans-Medium.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="/fonts/ProductSans-Light.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="/fonts/ProductSans-MediumItalic.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="/fonts/ProductSans-Regular.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="/fonts/ProductSans-Thin.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="/fonts/ProductSans-ThinItalic.ttf" as="font" type="font/ttf" crossorigin><!--Canonical original --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!--Primary meta tag --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(new URL(image, Astro2.url), "content")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head>`;
}, "C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/components/BaseHead.astro", void 0);

const $$Astro$4 = createAstro("http://localhost:4321");
const $$Auth = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Auth;
  const { authConfig: authConfig$1 = authConfig } = Astro2.props;
  let session = await getSession(Astro2.request, authConfig$1);
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(Astro2.slots.render("default", [session]))}` })} </div>`;
}, "C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/node_modules/auth-astro/src/components/Auth.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro("http://localhost:4321");
const $$SignIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SignIn;
  const key = Math.random().toString(36).slice(2, 11);
  const { provider, options, authParams, ...attrs } = Astro2.props;
  attrs.class = `signin-${key} ${attrs.class ?? ""}`;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<button", "> ", " </button>  <script>(function(){", "\n	document\n		.querySelector(`.signin-${key}`)\n		?.addEventListener('click', () => signIn(provider, options, authParams))\n})();<\/script>"], ["", "<button", "> ", " </button>  <script>(function(){", "\n	document\n		.querySelector(\\`.signin-\\${key}\\`)\n		?.addEventListener('click', () => signIn(provider, options, authParams))\n})();<\/script>"])), maybeRenderHead(), spreadAttributes(attrs), renderSlot($$result, $$slots["default"]), defineScriptVars({ provider, options, authParams, key }));
}, "C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/node_modules/auth-astro/src/components/SignIn.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("http://localhost:4321");
const $$SignOut = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SignOut;
  const key = Math.random().toString(36).slice(2, 11);
  const { params, ...attrs } = Astro2.props;
  attrs.class = `signout-${key} ${attrs.class ?? ""}`;
  return renderTemplate(_a || (_a = __template(["", "<button", "> ", " </button>  <script>(function(){", "\n	document.querySelector(`.signout-${key}`)?.addEventListener('click', () => signOut(params))\n})();<\/script>"], ["", "<button", "> ", " </button>  <script>(function(){", "\n	document.querySelector(\\`.signout-\\${key}\\`)?.addEventListener('click', () => signOut(params))\n})();<\/script>"])), maybeRenderHead(), spreadAttributes(attrs), renderSlot($$result, $$slots["default"]), defineScriptVars({ params, key }));
}, "C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/node_modules/auth-astro/src/components/SignOut.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:4321");
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Nav;
  const session = await getSession(Astro2.request);
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(`w-full flex ${session ? "justify-between px-14" : "justify-end pr-14"}  p-2  bg-black`, "class")}> <h3 class="text-white font-medium"> ${session?.user?.email} </h3> <ul class="flex gap-3 text-white"> <a href="/">Inicio</a> ${session ? renderTemplate`<a href="/blog">Recetario</a>
            ${renderComponent($$result, "SignOut", $$SignOut, {}, { "default": ($$result2) => renderTemplate` Cerrar Sesion ` })}` : renderTemplate`${renderComponent($$result, "SignIn", $$SignIn, {}, { "default": ($$result2) => renderTemplate`Login` })}`} </ul> ${renderSlot($$result, $$slots["default"])} </nav>`;
}, "C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/components/Nav.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title })}${maybeRenderHead()}<body class="bg-dark-blue"> <div> ${renderComponent($$result, "Nav", $$Nav, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> <footer></footer> </div> </body></html>`;
}, "C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
