import { Auth } from '@auth/core';
import { parseString } from 'set-cookie-parser';
import '@auth/core/providers/github';
import Google from '@auth/core/providers/google';

const defineConfig = (config) => {
  config.prefix ??= "/api/auth";
  config.basePath = config.prefix;
  return config;
};

const authConfig = defineConfig({
  providers: [
    Google({
      clientId: "45684699114-dhp6tunrduf1gbp1jal5g8frah1u203v.apps.googleusercontent.com",
      clientSecret: "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"
    })
  ]
});

const actions = [
  "providers",
  "session",
  "csrf",
  "signin",
  "signout",
  "callback",
  "verify-request",
  "error"
];
function AstroAuthHandler(prefix, options = authConfig) {
  return async ({ cookies, request }) => {
    const url = new URL(request.url);
    const action = url.pathname.slice(prefix.length + 1).split("/")[0];
    if (!actions.includes(action) || !url.pathname.startsWith(prefix + "/")) return;
    const res = await Auth(request, options);
    if (["callback", "signin", "signout"].includes(action)) {
      const getSetCookie = res.headers.getSetCookie();
      if (getSetCookie.length > 0) {
        getSetCookie.forEach((cookie) => {
          const { name, value, ...options2 } = parseString(cookie);
          cookies.set(name, value, options2);
        });
        res.headers.delete("Set-Cookie");
      }
    }
    return res;
  };
}
function AstroAuth(options = authConfig) {
  const { AUTH_SECRET, AUTH_TRUST_HOST, VERCEL, NODE_ENV } = Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "http://localhost:4321", "ASSETS_PREFIX": undefined}, { AUTH_SECRET: "e8433fbcffac205501387d590906ca30", AUTH_TRUST_HOST: "true", NODE: process.env.NODE, NODE_ENV: process.env.NODE_ENV, OS: process.env.OS });
  options.secret ??= AUTH_SECRET;
  options.trustHost ??= !!(AUTH_TRUST_HOST ?? VERCEL ?? NODE_ENV !== "production");
  const { prefix = "/api/auth", ...authOptions } = options;
  const handler = AstroAuthHandler(prefix, authOptions);
  return {
    async GET(context) {
      return await handler(context);
    },
    async POST(context) {
      return await handler(context);
    }
  };
}
async function getSession(req, options = authConfig) {
  options.secret ??= "e8433fbcffac205501387d590906ca30";
  options.trustHost ??= true;
  const url = new URL(`${options.prefix}/session`, req.url);
  const response = await Auth(new Request(url, { headers: req.headers }), options);
  const { status = 200 } = response;
  const data = await response.json();
  if (!data || !Object.keys(data).length) return null;
  if (status === 200) return data;
  throw new Error(data.message);
}

export { AstroAuth as A, authConfig as a, getSession as g };
