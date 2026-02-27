const PLACEHOLDER_DISCORD_CLIENT_ID = 'your_discord_client_id'
const PLACEHOLDER_DISCORD_CLIENT_SECRET = 'your_discord_client_secret'

function normalizeEnvValue(value: string | undefined): string | undefined {
  if (!value) {
    return undefined
  }

  const trimmed = value.trim()
  if (!trimmed) {
    return undefined
  }

  if (trimmed === PLACEHOLDER_DISCORD_CLIENT_ID || trimmed === PLACEHOLDER_DISCORD_CLIENT_SECRET) {
    return undefined
  }

  return trimmed
}

export function getDiscordProviderCredentials() {
  const clientId = normalizeEnvValue(process.env.DISCORD_CLIENT_ID)
  const clientSecret = normalizeEnvValue(process.env.DISCORD_CLIENT_SECRET)

  if ((clientId && !clientSecret) || (!clientId && clientSecret)) {
    throw new Error('DISCORD_CLIENT_ID and DISCORD_CLIENT_SECRET must both be set, or both omitted')
  }

  if (!clientId || !clientSecret) {
    return null
  }

  return { clientId, clientSecret }
}

export function isDiscordProviderEnabled() {
  return Boolean(getDiscordProviderCredentials())
}
