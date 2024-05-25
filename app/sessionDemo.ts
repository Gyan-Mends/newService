import { createCookieSessionStorage } from "@remix-run/node";

//decalring our session data
type SessionData = {
    email: string;
  };

//declaring sessionFlashData
type SessionFlashData = {
    error: string;
    message: {
      title: string;
      description?: string;
      status: string;
    };
  };

//declaring our secret key
const secret = "asfafasfasjfhasf";
if (!secret) {
  throw new Error("No session secret provided");
}

//creating the cookies storage
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