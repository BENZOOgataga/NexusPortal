import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { nextCookies } from 'better-auth/next-js'
import { prisma } from '@nexus/db'
import { getDiscordProviderCredentials } from '@/lib/discord-provider'

const authSecret = process.env.BETTER_AUTH_SECRET
const authUrl = process.env.BETTER_AUTH_URL

if (!authSecret) {
  throw new Error('Missing BETTER_AUTH_SECRET environment variable')
}

if (!authUrl) {
  throw new Error('Missing BETTER_AUTH_URL environment variable')
}

const discordCredentials = getDiscordProviderCredentials()

export const auth = betterAuth({
  secret: authSecret,
  baseURL: authUrl,
  emailAndPassword: {
    enabled: true,
  },
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  socialProviders:
    discordCredentials
      ? {
          discord: {
            clientId: discordCredentials.clientId,
            clientSecret: discordCredentials.clientSecret,
          },
        }
      : {},
  plugins: [nextCookies()],
})
