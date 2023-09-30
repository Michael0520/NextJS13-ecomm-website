import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
// import CredentialsProver from 'next-auth/providers/credentials'

export const authConfig: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        // CredentialsProver({
        //     name: 'Credentials',
        //     credentials: {
        //         username: { label: "Username", type: "text", placeholder: "your-cool-username" },
        //         password: { label: "Password", type: "password" }
        //     },
        //     async authorize(credentials) {
        //         const user = { id: '1', name: 'Michael', password: 'nextauth' }
        //         if (credentials?.username === user.name && credentials?.password === user.password) {
        //             return user
        //         } else {
        //             return null
        //         }
        //     }
        // })
    ],
}

export default NextAuth(authConfig)