// app/sessions.ts
import { createCookieSessionStorage } from "@remix-run/node";

type SessionData = {
  cart?: Array<{ serviceId: string; quantity: number; price: number }> | [];
};

type SessionFlashData = {
  error: string;
  message: {
    title: string;
    description?: string;
    status: string;
  };
};

const secret = "asfafasfasjfhasf";
if (!secret) {
  throw new Error("No session secret provided");
}

export const { getSession, commitSession, destroySession } = createCookieSessionStorage<SessionData, SessionFlashData>({
  cookie: {
    name: "psgh-admion-session",
    httpOnly: true,
    maxAge: 60 * 60 * 45,
    path: "/",
    sameSite: "lax",
    secrets: [secret],
  },
});
