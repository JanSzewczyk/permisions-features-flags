import { murmurhash } from "~/lib/murmurhash";
import { type Role, type User } from "~/types/auth";

export const FeatureFlag = {
  TEST_NEW_PRODUCTS_QUERY: "TEST_NEW_PRODUCTS_QUERY",
  ADVANCED_ANALYTICS: "ADVANCED_ANALYTICS",
  DISABLED_FEATURE: "DISABLED_FEATURE",
  EXPERIMENTAL_FEATURE: "EXPERIMENTAL_FEATURE",
  MULTIPLE_ALLOWANCES: "MULTIPLE_ALLOWANCES"
} as const;
export type FeatureFlag = (typeof FeatureFlag)[keyof typeof FeatureFlag];

type FeatureFlagRule = {
  percentageOfUsers?: number;
  userRoles?: Role[];
} & (
  | {
      percentageOfUsers: number;
    }
  | { userRoles: Role[] }
);

export const FEATURE_FLAGS = {
  [FeatureFlag.TEST_NEW_PRODUCTS_QUERY]: true,
  [FeatureFlag.ADVANCED_ANALYTICS]: true,
  [FeatureFlag.DISABLED_FEATURE]: false,
  [FeatureFlag.EXPERIMENTAL_FEATURE]: false,
  [FeatureFlag.MULTIPLE_ALLOWANCES]: [
    { percentageOfUsers: 0.25, userRoles: ["user"] },
    { userRoles: ["admin", "moderator"] }
  ]
} as const satisfies Record<string, FeatureFlagRule[] | boolean>;

export function canViewFeature(featureName: FeatureFlag, user: User) {
  const rules = FEATURE_FLAGS[featureName];
  if (typeof rules === "boolean") return rules;
  return rules.some((rule) => checkRule(rule, featureName, user));
}

function checkRule({ userRoles, percentageOfUsers }: FeatureFlagRule, featureName: FeatureFlag, user: User) {
  return userHasValidRole(userRoles, user.roles) && userIsWithinPercentage(featureName, percentageOfUsers, user.id);
}

function userHasValidRole(allowedRoles: Array<Role> | undefined, userRole: Array<Role>) {
  return allowedRoles == null || allowedRoles.some((role) => userRole.includes(role));
}

const MAX_UINT_32 = 4294967295;
function userIsWithinPercentage(featureName: FeatureFlag, allowedPercent: number | undefined, flagId: string) {
  if (allowedPercent == null) return true;

  return murmurhash(`${featureName}-${flagId}`) / MAX_UINT_32 < allowedPercent;
}
