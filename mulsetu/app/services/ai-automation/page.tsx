import ServicePage from "@/components/services/ServicePage";
import { serviceMetadata } from "@/lib/seo";

export const metadata = serviceMetadata("ai-automation");

export default function Page() {
  return <ServicePage slug="ai-automation" />;
}
