import ServicePage from "@/components/services/ServicePage";
import { serviceMetadata } from "@/lib/seo";

export const metadata = serviceMetadata("saas-development");

export default function Page() {
  return <ServicePage slug="saas-development" />;
}
