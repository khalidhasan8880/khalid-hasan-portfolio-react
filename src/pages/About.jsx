import SectionTitle from "../components/SectionTitle/SectionTitle";

const About = () => {
  return (
    <section id="about" className="flex-center flex-col">
      <SectionTitle title="About"></SectionTitle>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 banner py-5 px-2 items-center">
        <div>
          <img
            className="rounded-2xl w-full min-w-[100px]"
            src="https://i.ibb.co/qFFBD5b/Khalid-Hasan-React-developer.jpg"
          />
        </div>
        <div className="lg:col-span-2 rounded-2xl glass sm:p-6 p-3 ">
          <p className="max-w-2xl">
            Welcome to my portfolio! I am a passionate junior web developer
            based in Faridpur, Bangladesh. With a focus on continuous learning
            and skill enhancement, I strive to create dynamic and responsive web
            applications while staying updated with the latest industry trends.
            My goal is to write clean and organized code that delivers
            exceptional user experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div>
              <p className="font-bold">Education</p>
              <hr className="border-[#0091ff] border-1" />
              Diploma in Mechanical Engineering <br /> Faridpur Polytechnic
              Institute <br />
              (2018-2022)
            </div>

            <div>
              <p className="font-bold">Language</p>
              <hr className="border-[#0091ff] border-1" />
              <p>
                Native: Bangla <br /> Fluent: Hindi <br /> Familiar: English
              </p>
            </div>
          </div>
           <div>
              <p className="font-bold">Skills</p>
              <hr className="border-[#0091ff] border-1" />
              <p>
                Expertise: React, CSS, Tailwind, Bootstrap, HeadlessUi, DaisyUi,
                JWT, Firebase- Auth & Hosting
                <br />
                Comfortable: JavaScript, MongoDB,
                ExpressJs, Stripe 
                <br />
                Familiar: NextJs, Node Js, Mongodb Aggregation
                <br />
                Tools: Chat-GPT, Github, Figma, Surge, Netlify, Vercel, VS Code,
                NPM, Chrome Devtool, React Devtool
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
