import Image from "next/image";
import Link from "next/link";
import about1 from "../about/about-1.jpg";
import about2 from "../about/about-2.jpg";
export const metadata = {
  title: "About",
};
const About = () => {
  return (
    <div className="lg:grid lg:grid-cols-5 pb-10 mt-15 lg:mt-20 gap-x-24 lg:gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className=" text-xl lg:text-4xl mb-10 text-amber-300 font-medium">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-3  text-gray-300 lg:space-y-8 text-[0.9rem] lg:text-[1rem]">
          <p>
            Where nature beauty and comfortable living blend seamlessly. Hidden
            away in the heart of the Italian Dolomites, this is your paradise
            away from home. But it&apos;s not just about the luxury cabins.
            It&apos;s about the experience of reconnecting with nature and
            enjoying simple pleasures with family.
          </p>
          <p>
            Our 8 luxury cabins provide a cozy base, but the real freedom and
            peace you&apos;ll find in the surrounding mountains. Wander through
            lush forests, breathe in the fresh air, and watch the stars twinkle
            above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="hidden lg:block col-span-2 relative aspect-square">
        <Image
          src={about1}
          // width={900}
          // height={900}
          alt="Family sitting around a fire pit in front of cabin"
        />
      </div>

      <div className="lg:col-span-2 hidden lg:block">
        <Image
          src={about2}
          width={700}
          height={700}
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-xl lg:text-3xl mb-10 mt-10 text-amber-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-3 lg:space-y-8 text-gray-300 text-[0.9rem] lg:text-[1rem]">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at The
            Wild Oasis soon, where tradition meets tranquility, and every visit
            is like coming home.
          </p>

          <Link href="/cabin">
            <button className="bg-amber-200 text-sm cursor-pointer px-6 lg:px-12 py-2 lg:py-4 mt-7 rounded-sm  text-black">
              Explore luxury cabins
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
