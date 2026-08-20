import ServicePage from "@/components/services/ServicePage";
import { serviceMetadata } from "@/lib/seo";

export const metadata = serviceMetadata("mobile-apps");

export default function Page() {
  return <ServicePage slug="mobile-apps" />;
}
