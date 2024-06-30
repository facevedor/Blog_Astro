import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './astro/server_KoqgSCIg.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/auth/[...auth]","pattern":"^\\/api\\/auth(?:\\/(.*?))?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"...auth","dynamic":true,"spread":true}]],"params":["...auth"],"component":"node_modules/auth-astro/src/api/[...auth].ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.YJ1l3FOK.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.BNfAmGTg.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n@font-face{font-family:DistantGalaxy;src:url(/fonts/ProductSans-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:DistantGalaxy;src:url(/fonts/ProductSans-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:DistantGalaxy;src:url(/fonts/ProductSans-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:DistantGalaxy;src:url(/fonts/ProductSans-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:DistantGalaxy;src:url(/fonts/ProductSans-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal;font-display:swap}h1{font-family:ProductSans}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.YJ1l3FOK.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.BNfAmGTg.css"},{"type":"inline","content":"@font-face{font-family:DistantGalaxy;src:url(/fonts/ProductSans-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:DistantGalaxy;src:url(/fonts/ProductSans-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:DistantGalaxy;src:url(/fonts/ProductSans-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:DistantGalaxy;src:url(/fonts/ProductSans-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:DistantGalaxy;src:url(/fonts/ProductSans-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal;font-display:swap}h1{font-family:ProductSans}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"http://localhost:4321","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/components/Article.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/pages/blog/tag/[tag].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/tag/[tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/layouts/BlogPost.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/utils/getAllTags.ts",{"propagation":"in-tree","containsHead":false}],["C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/components/TagSelector.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/layouts/ArticleList.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/auth-astro/src/api/[...auth]@_@ts":"pages/api/auth/_---auth_.astro.mjs","\u0000@astro-page:src/pages/blog/tag/[tag]@_@astro":"pages/blog/tag/_tag_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/generic_LRYmTue-.mjs","/node_modules/auth-astro/src/api/[...auth].ts":"chunks/_...auth__BcsY1H5I.mjs","/src/pages/blog/tag/[tag].astro":"chunks/_tag__KtqP5aRT.mjs","/src/pages/blog/index.astro":"chunks/index_Be3vMV7U.mjs","/src/pages/blog/[...slug].astro":"chunks/_...slug__DBkNRYNf.mjs","/src/pages/rss.xml.js":"chunks/rss.xml_CdnDH2nr.mjs","/src/pages/index.astro":"chunks/index_DBaO7PD4.mjs","C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/content/blog/first-post.md?astroContentCollectionEntry=true":"chunks/first-post_Tne9_G0b.mjs","C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/content/blog/hkj.md?astroContentCollectionEntry=true":"chunks/hkj_DbKwm40R.mjs","C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/content/blog/post4.md?astroContentCollectionEntry=true":"chunks/post4_CaggeNJa.mjs","C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/content/blog/post_3.md?astroContentCollectionEntry=true":"chunks/post_3_BP6kukHK.mjs","C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/content/blog/second-post.md?astroContentCollectionEntry=true":"chunks/second-post_CWOsQ72R.mjs","C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/content/blog/first-post.md?astroPropagatedAssets":"chunks/first-post_CyeCYCgi.mjs","C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/content/blog/hkj.md?astroPropagatedAssets":"chunks/hkj_Aq19cns7.mjs","C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/content/blog/post4.md?astroPropagatedAssets":"chunks/post4_CeTNX5sT.mjs","C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/content/blog/post_3.md?astroPropagatedAssets":"chunks/post_3_NIY3RslD.mjs","C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/content/blog/second-post.md?astroPropagatedAssets":"chunks/second-post_BSO1PiZi.mjs","C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/content/blog/first-post.md":"chunks/first-post_Bg1zb9ST.mjs","C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/content/blog/hkj.md":"chunks/hkj_3p9XCAb5.mjs","C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/content/blog/post4.md":"chunks/post4_Cs1w3W2R.mjs","C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/content/blog/post_3.md":"chunks/post_3_DDnLhcNA.mjs","C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/content/blog/second-post.md":"chunks/second-post_DhNArpFs.mjs","\u0000@astrojs-manifest":"manifest_OycdATOm.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.YJ1l3FOK.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.BNfAmGTg.css","/favicon.svg","/assets/bistecEspinacas.png","/assets/bistecMantequilla.png","/assets/bowldeCarne.png","/assets/corazon.png","/assets/ensaladaAguacate.png","/assets/imagenI1.png","/assets/img1.png","/assets/informativo2.png","/assets/salmonEsparragos.png","/fonts/ProductSans-Black.ttf","/fonts/ProductSans-BlackItalic.ttf","/fonts/ProductSans-Bold.ttf","/fonts/ProductSans-BoldItalic.ttf","/fonts/ProductSans-Italic.ttf","/fonts/ProductSans-Light.ttf","/fonts/ProductSans-LightItalic.ttf","/fonts/ProductSans-Medium.ttf","/fonts/ProductSans-MediumItalic.ttf","/fonts/ProductSans-Regular.ttf","/fonts/ProductSans-Thin.ttf","/fonts/ProductSans-ThinItalic.ttf","/_astro/hoisted.YJ1l3FOK.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest as m };
