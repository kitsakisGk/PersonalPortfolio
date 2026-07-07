import ExperienceLayer from "@/components/system/ExperienceLayer";
import HUD from "@/components/system/HUD";
import Hero from "@/components/sections/Hero";
import CapabilityTicker from "@/components/sections/CapabilityTicker";
import Mission from "@/components/sections/Mission";
import DeployLog from "@/components/sections/DeployLog";
import Systems from "@/components/sections/Systems";
import Stack from "@/components/sections/Stack";
import Vault from "@/components/sections/Vault";
import Transmit from "@/components/sections/Transmit";

export default function Home() {
  return (
    <>
      <ExperienceLayer />
      <HUD />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <CapabilityTicker />
        <Mission />
        <DeployLog />
        <Systems />
        <Stack />
        <Vault />
        <Transmit />
      </main>
    </>
  );
}
