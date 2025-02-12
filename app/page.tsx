import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center">
        Welcome to loading screen demo.
      </div>
      <LoadingScreen />
    </div>
  );
}
