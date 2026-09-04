import { createFileRoute } from "@tanstack/react-router";
import { AsmanLanding } from "@/components/asman/landing";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <AsmanLanding />;
}
