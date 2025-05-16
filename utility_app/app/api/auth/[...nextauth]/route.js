import NextAuth from "next-auth/next";

export const authOptions = {
  providers: [
    {
      id: "descope",
      name: "Descope",
      type: "oauth",
      wellKnown: "https://api.descope.com/P2x2dgSs6kXV55pmWMTYSX3uZX5x/.well-known/openid-configuration",
      authorization: {
        params: {
          scope: "openid email profile",
          prompt: "login"
        }
      },
      idToken: true,
      clientId: "P2x2dgSs6kXV55pmWMTYSX3uZX5x",
      clientSecret: "<Descope Access Key>",
      checks: ["pkce", "state"],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      },
    }]
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }