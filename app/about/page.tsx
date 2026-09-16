
export const metadata = {
  title: 'About',
  description: 'Experience',
}

export default function Page() {
  return (
    <section>
      
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Work Experience
      </h1>

      <div className="mb-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
          <h2 className="font-medium text-lg">
            Software Engineer - Glue Reply 
          </h2>
          <p className="text-neutral-200 text-sm">Aug 2024 – Aug 2025</p>
        </div>

        <ul className="list-disc pl-6 space-y-2 text-neutral-200">
          <li>
            Modernised the log forwarder system for a fleet of ships at
            Carnival UK (P&O Cruises, Cunard), building React frontend
            components that cut log retrieval time from 6 minutes to 1
            second — a 360x improvement.
          </li>
          <li>
            Developed a production-ready Django microservice with full CRUD
            functionality to support chat and conversation features in an
            internal AI assistant, enabling clients to interact with their
            own knowledge bases.
          </li>
          <li>
            Shipped bug fixes and new features with a group of 7 on the
            React front-end of the redesigned company website, viewable by
            thousands of clients and partners, and presented live to 100
            colleagues.
          </li>
          <li>
            Coordinated with external clients to clarify requirements,
            resolve production issues, and handle certificate renewals and
            logging changes across multiple REST APIs.
          </li>
          <li>
            Built, updated and integrated backend microservices and REST
            APIs for Wella Company, a global beauty and personal care group
            operating in over 100 countries, enabling reliable stock
            ordering across its international warehouse network.
          </li>
          <li>
            Wrote unit and integration tests across Django services and
            reviewed pull requests, using Azure for automated builds.
          </li>
          <li>
            Assisted with deployment and monitoring of services on Jenkins
            and AWS, debugging production incidents through Splunk.
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
          <h2 className="font-medium text-lg">
            ML Engineer Intern - AquaZoo Consulting Partners
          </h2>
          <p className="text-neutral-200 text-sm">May 2024 – Jul 2024</p>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-neutral-200">
          <li>
            Collaborated with a team of 10 to preprocess the iNaturalist 12k
            dataset, handling thousands of animal species specific to zoos
            and aquariums.
          </li>
          <li>
            Experimented with transfer learning models such as ResNet50 and
            constructed pipelines to process data and match client
            requirements.
          </li>
          <li>
            Conducted literature reviews and authored a report on optimal
            pre-trained image classification models and their compatibility
            with TensorFlow and Keras, resulting in the adoption of 4 of my
            selected models.
          </li>
        </ul>
      </div>

      <h2 className="font-semibold text-xl mb-4 tracking-tighter mt-12">
        Skills & Certifications
      </h2>
      <div className="space-y-2 text-neutral-200">
        <p>
          <span className="text-neutral-200">Languages:</span> Java, Python,
          Scala, C++, JavaScript, HTML/CSS
        </p>
        <p>
          <span className="text-neutral-200">Frameworks:</span> Django,
          Spring Boot, React, Next.js
        </p>
        <p>
          <span className="text-neutral-200">Cloud & Infra:</span> AWS,
          Git/GitHub, Docker, Jenkins, Azure, Splunk
        </p>
        <p>
          <span className="text-neutral-200">Testing:</span> Pytest, JUnit,
          Postman
        </p>
      </div>
    </section>
  )
}