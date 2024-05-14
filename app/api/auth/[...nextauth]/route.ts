import NextAuth, {AuthOptions} from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from '../../../../lib/prisma';

const authOptions:AuthOptions = {
    adapter: PrismaAdapter(prisma),
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
}

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };

