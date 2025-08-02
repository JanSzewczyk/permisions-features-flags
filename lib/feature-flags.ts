import { env } from "~/data/env/server";

export const FeatureFlag = { ADVANCED_ANALYTICS: "ADVANCED_ANALYTICS" } as const;
export type FeatureFlag = (typeof FeatureFlag)[keyof typeof FeatureFlag];

export const FEATURE_FLAGS = {
  ADVANCED_ANALYTICS: env.FEATURE_FLAG_ADVANCED_ANALYTICS
} as const;
