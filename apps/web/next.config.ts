import type { NextConfig } from 'next'
import fs from 'node:fs'
import path from 'node:path'

const workspaceRoot = path.resolve(process.cwd(), '..', '..')

function parseEnvFile(content: string): Record<string, string> {
  const result: Record<string, string> = {}

  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#')) continue

    const separatorIndex = line.indexOf('=')
    if (separatorIndex <= 0) continue

    const key = line.slice(0, separatorIndex).trim()
    let value = line.slice(separatorIndex + 1).trim()

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }

    result[key] = value
  }

  return result
}

function loadWorkspaceRootPublicEnv() {
  const nodeEnv = process.env.NODE_ENV ?? 'development'
  const envCandidates = [
    '.env',
    `.env.${nodeEnv}`,
    '.env.local',
    `.env.${nodeEnv}.local`,
  ]

  const mergedEnv: Record<string, string> = {}
  for (const filename of envCandidates) {
    const fullPath = path.join(workspaceRoot, filename)
    if (!fs.existsSync(fullPath)) continue
    Object.assign(mergedEnv, parseEnvFile(fs.readFileSync(fullPath, 'utf8')))
  }

  const publicKeys = ['NEXT_PUBLIC_TOLGEE_API_KEY', 'NEXT_PUBLIC_TOLGEE_API_URL'] as const
  for (const key of publicKeys) {
    if (!process.env[key] && mergedEnv[key]) {
      process.env[key] = mergedEnv[key]
    }
  }
}

loadWorkspaceRootPublicEnv()

const nextConfig: NextConfig = {
  output: 'standalone',
  turbopack: {
    root: workspaceRoot,
  },
}

export default nextConfig
