import {NextAuthOptions} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {PrismaAdapter} from '@auth/prisma-adapter'
import prisma from '@/lib/prisma'

const ALLOWED_EMAILS = [
  'muhmakbul6@gmail.com',
  'vververra@gmail.com',
  'dimasjayakusuma2907@gmail.com',
]

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({user}) {
      if (!user.email || !ALLOWED_EMAILS.includes(user.email)) {
        return false // Reject sign in
      }
      return true
    },
    async jwt({token, user}) {
      if (user) {
        token.isAdmin = user.email ? ALLOWED_EMAILS.includes(user.email) : false
        token.id = user.id

        // Try updating DB asynchronously without awaiting, so it doesn't block or crash
        if (user.email && token.isAdmin) {
          prisma.user
            .update({
              where: {email: user.email},
              data: {isAdmin: true},
            })
            .catch(console.error)
        }
      }
      return token
    },
    async session({session, token}) {
      if (session.user) {
        ;(session.user as any).isAdmin = token.isAdmin
        ;(session.user as any).id = token.id
      }
      return session
    },
  },
  debug: true,
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
}
