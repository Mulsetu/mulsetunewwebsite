import ServicePage from "@/components/services/ServicePage";
import { serviceMetadata } from "@/lib/seo";

export const metadata = serviceMetadata("custom-software-erp");

export default function Page() {
  return <ServicePage slug="custom-software-erp" />;
}
