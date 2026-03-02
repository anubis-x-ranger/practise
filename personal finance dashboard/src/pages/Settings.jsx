import Layout from "@/components/dashboard/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Settings() {
  return (
    <Layout title="Settings">

      <div className="bg-white rounded-2xl shadow p-6 max-w-xl space-y-4">

        <h2 className="text-lg font-semibold">
          Profile Settings
        </h2>

        <div>
          <Label>Name</Label>
          <Input placeholder="Michael Scott" />
        </div>

        <div>
          <Label>Email</Label>
          <Input placeholder="email@example.com" />
        </div>

        <Button>Save Changes</Button>

      </div>

    </Layout>
  );
}