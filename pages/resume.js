import Head from "next/head";

export default function Resume() {
  return (
    <div>
      <Head>
        <title>Resume</title>
      </Head>

      <main className="bg-white px-10">
        <section className=" min-h-screen">

          {/* Title */}
          <div class="text-center p-10">
            <h1 className="text-3xl">Resume</h1>
          </div>

          {/* Front-end */}
          <div className="pl-20">
            <h2 className="text-xl">Front-end Proficiencies</h2>
            <ul className="list-disc pl-10 pt-3">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>responsive design</li>
              <li>React</li>
              <li>TailwindCSS</li>
            </ul>
          </div>

          {/* Back-end */}
          <div className="pl-20 pt-10">
            <h2 className="text-xl">Back-end Proficiencies</h2>
            <ul className="list-disc pl-10 pt-3">
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
            </ul>
          </div>

          {/* Resume download link */}
          <div className="pl-20 pt-10">
          <h2 className="text-xl">You can download my resume <a className=" text-blue-500" href="./public/resume-briangee.pdf" download>here</a>.</h2>
          </div>

        </section>
      </main>
    </div>
  );
}
