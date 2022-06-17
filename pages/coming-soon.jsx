import Image from "next/image";

import loading from "../assets/loading.png";

const ComingSoon = () => {
  return (
    <div
      className="w-full h-screen px-20 py-6 flex flex-col justify-center items-center bg-black text-white/95"
      style={{ imageRendering: "pixelated" }}
    >
      <h1 className="text-8xl">Post Redemption</h1>
      <h2 className="text-6xl">save world together</h2>
      <div className="mt-10 w-[800px] h-auto text-xl leading-10">
        <p>
          After humans have ravaged the earth for thousands of years, they have
          finally succeeded in &quot;transforming&quot; the earth into a barren
          land: nuclear pollution, plastic waste, electronic fog, dust smog ...
          All the pollution crises you can think of are in this land. In this
          game you will play as a robot produced by the D.U.S.T -- dangerous
          union of science &amp; technology, which were cast before the last
          humans left the earth, and in the vast years after humans left, you
          still faithfully perform your most core and most original work:
          resource recycling
        </p>
      </div>
      <Image src={loading} alt="" />
    </div>
  );
};

export default ComingSoon;
