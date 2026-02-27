export type PolicyAction =
  | 'dashboard.identity.read'
  | 'dashboard.operations.read'
  | 'dashboard.communications.read'
  | 'dashboard.intel.read'
  | 'dashboard.fleet.read'
  | 'dashboard.notifications.read'
  | 'dashboard.command.read'

export interface PolicyUser {
  id: string
  name?: string | null
  email?: string | null
}

export interface PolicyContext {
  orgId: string
  orgTag: string
  isOfficer: boolean
}

export class PolicyError extends Error {
  readonly code: 'AUTH_DENIED'
  readonly action: PolicyAction

  constructor(action: PolicyAction) {
    super(`Authorization denied for action: ${action}`)
    this.name = 'PolicyError'
    this.code = 'AUTH_DENIED'
    this.action = action
  }
}

function isOfficerUser(user: PolicyUser) {
  const identity = `${user.name ?? ''} ${user.email ?? ''}`.toLowerCase()
  const officerTokens = ['admin', 'officer', 'command', 'lead']
  return officerTokens.some((token) => identity.includes(token))
}

export function buildPolicyContext(user: PolicyUser): PolicyContext {
  return {
    // Placeholder org context until dedicated membership tables are available.
    orgId: 'nhtsc',
    orgTag: 'NHTSC',
    isOfficer: isOfficerUser(user),
  }
}

export function can(_user: PolicyUser, action: PolicyAction, context: PolicyContext) {
  const baselineActions: PolicyAction[] = [
    'dashboard.identity.read',
    'dashboard.operations.read',
    'dashboard.communications.read',
    'dashboard.intel.read',
    'dashboard.fleet.read',
    'dashboard.notifications.read',
  ]

  if (baselineActions.includes(action)) {
    return true
  }

  if (action === 'dashboard.command.read') {
    return context.isOfficer
  }

  return false
}

export function assertCan(user: PolicyUser, action: PolicyAction, context: PolicyContext) {
  if (!can(user, action, context)) {
    throw new PolicyError(action)
  }
}
