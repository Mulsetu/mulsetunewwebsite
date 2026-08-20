import ServicePage from "@/components/services/ServicePage";
import { serviceMetadata } from "@/lib/seo";

export const metadata = serviceMetadata("mvp-development");

export default function Page() {
  return <ServicePage slug="mvp-development" />;
}
