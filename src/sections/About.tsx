import Globe from "react-globe.gl";

import { Button } from "../components/Button";

export const About = () => {
  return (
    <section className="c-space my-20" id="about">
      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="Grid 1"
              className="h-fit w-full object-contain sm:h-[276px]"
            />

            <div>
              <p className="grid-headtext">Hi, I&apos;m Abhinav Jaiswal</p>
              <p className="grid-subtext">
                I&apos;m a second-year B.Tech CSE student and applied ML / full-stack
                builder, shipping Flutter, Web3 and machine learning projects.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="Grid 2"
              className="h-fit w-full object-contain sm:w-[276px]"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I work with Python, C++ and JavaScript, using React and Node.js on
                the web, Scikit-Learn for ML and Solidity for Web3.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-6">
          <div className="grid-container">
            <div className="flex h-fit w-full items-center justify-center rounded-3xl sm:h-[326px]">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                showAtmosphere
                globeImageUrl="/assets/earth-night.jpg"
                bumpImageUrl="/assets/earth-topology.png"
                labelsData={[
                  {
                    lat: 26.8467,
                    lng: 80.9462,
                    text: "I'm here!",
                    color: "white",
                    size: 20,
                  },
                ]}
              />
            </div>

            <div>
              <p className="grid-headtext">
                I&apos;m open to remote work.
              </p>

              <p className="grid-subtext">
                I&apos;m based in India.
              </p>

              <Button href="#contact" containerClass="w-full mt-10" isBeam>
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="Grid 3"
              className="h-fit w-full object-contain sm:h-[266px]"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. I have
                solved 55+ DSA problems on LeetCode and I am an active
                Codeforces participant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
