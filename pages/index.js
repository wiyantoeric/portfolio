import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Head from "next/dist/shared/lib/head";

export default function Home() {
  return (
    <div className="w-screen h-screen dark:bg-gray-800">
      <Head>
        <title>eric wiyanto</title>
      </Head>
      <main>
        <div className="flex flex-col gap-y-24 p-12">
          <div className="w-full flex justify-center">
            <div className="aspect-square bg-blue-400 rounded-full px-12 py-8 m-auto">
              <Player autoplay loop src="https://assets1.lottiefiles.com/packages/lf20_mdiaxdju.json" style={{ height: "300px", width: "300px" }}>
                <Controls visible={false} buttons={["play", "repeat", "frame", "debug"]} />
              </Player>
            </div>
          </div>
          <div className="flex flex-grow w-full items-center justify-center">
            <p className="text-5xl font-semibold bg-clip-text dark:text-gray-200 ">Under construction</p>
          </div>
        </div>
      </main>
    </div>
  );
}
