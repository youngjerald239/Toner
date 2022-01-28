import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import { refreshAccessToken } from "spotify-web-api-node/src/server-methods"
import spotifyApi, { LOGIN_URL } from "../../../lib/spotify"

async function refreshAccessToken(token) {
  try {

    spotifyApi.setAccessToken(token.accessToken)
    spotifyApi.refreshAccessToken(token.refreshAccessToken)

  } catch (error) {
      console.error(error)

      return {
        ...token,
        error: 'RefreshAccessTokenError'
      }
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/Login'
  },
  callbacks: {
    async jwt({ token, account, user }){

      //initial sign in
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000, // expiring times in Milliseconds
        }
      }

      //Return previous token if the access token has not yet expired
      if (Date.now() < token.accessTokenExpires) {
          console.log("EXISTING ACCESS TOKEN IS VALID")
          return token
      }

      // Access token has expired, need to refresh
      console.log("ACCESS TOKEN HAS EXPIRED, REFRESHING...")
      return await refreshAccessToken(token)
    }
  }
})