import { Card, CardHeader, CardTitle } from "@szum-tech/design-system";
import { FeatureEnabled } from "~/components/ui/feature-enabled";
import { FeatureFlag } from "~/lib/feature-flags";

export default async function FeatureFlagsPage() {
  return (
    <main className="container mx-auto flex flex-col items-center py-10">
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Product Management</CardTitle>
          </CardHeader>
        </Card>

        <FeatureEnabled featureFlag={FeatureFlag.ADVANCED_ANALYTICS}>
          <Card>
            <CardHeader>
              <CardTitle>Advance Analytics</CardTitle>
            </CardHeader>
          </Card>
        </FeatureEnabled>
      </div>
    </main>
  );
}
