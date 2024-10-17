// import { PrismaClient } from '@prisma/client';
import { NextAuthConfig } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';

// const prisma = new PrismaClient();
const authConfig = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub
      }
    })
  },
  providers: [
    CredentialProvider({
      type: 'credentials',
      credentials: {
        email: {
          type: 'email'
        },
        password: {
          type: 'password'
        }
      },
      authorize(credentials, req) {
        if (credentials.email === 'test@mail.com' && credentials.password === '@Test123') {
          return { email: credentials.email, id: 'asdf' };
        }
        return null;
        // const userData = await prisma.users.findFirst({
        //   where: {
        //     email: credentials.email ?? ''
        //   }
        // });
        // console.log(userData);
        // if (!userData) return null;

        // const checkPasswordCorrect = await compare(credentials.password as string, userData.password);

        // if (checkPasswordCorrect) {
        //   return userData;
        // } else {
        //   return null;
        // }
      }
    })
  ],
  pages: {
    signIn: '/',
    error: '/'
  }
} satisfies NextAuthConfig;

export default authConfig;
