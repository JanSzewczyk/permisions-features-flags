import type * as React from "react";

import { FEATURE_FLAGS, type FeatureFlag } from "~/lib/feature-flags";

type FeatureEnabledProps = { children: React.ReactNode; featureFlag: FeatureFlag };

export function FeatureEnabled({ children, featureFlag }: FeatureEnabledProps) {
  return FEATURE_FLAGS[featureFlag] ? children : null;
}
