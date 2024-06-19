"use client";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <>
      <section className="w-full bg-[#fff] py-10">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto px-4 sm:px-0">
          <div className="flex justify-center items-center flex-wrap min-h-screen">
            <div className="content">
              <h1 className="text-lg md:text-4xl text-center font-sans font-bold mb-0">
                Projects
              </h1>
              <div className="flex flex-wrap justify-center">
                {courseData.courses.map((course) => (
                  <CardContainer key={course.id} className="inter-var mx-4">
                    <CardBody className="bg-gray-50 relative group/card  w-auto sm:w-[30rem] h-auto rounded-xl px-6 py-8 cursor-pointer  border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 flex justify-start items-center"
                      >
                        {course.title}{" "}
                        <span className="pt-0.5 ml-2">
                          <MdArrowOutward />
                        </span>
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2"
                      >
                        {course.description}
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                          src={course.image}
                          height="1000"
                          width="1000"
                          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl bg-transparent"
                          alt={course.title}
                        />
                      </CardItem>
                      <div className="stack pl-2 mt-6 flex justify-start items-center flex-wrap gap-x-3 gap-y-2">
                        <div className="language px-3 py-1 text-white text-sm rounded-full bg-gray-800">
                          React JS
                        </div>
                        <div className="language px-3 py-1 text-white text-sm rounded-full bg-gray-800">
                          Node JS
                        </div>
                        <div className="language px-3 py-1 text-white text-sm rounded-full bg-gray-800">
                          Mongoo db
                        </div>
                        <div className="language px-3 py-1 text-white text-sm rounded-full bg-gray-800">
                          Express
                        </div>
                        <div className="language px-3 py-1 text-white text-sm rounded-full bg-gray-800">
                          Tailwind
                        </div>
                        <div className="language px-3 py-1 text-white text-sm rounded-full bg-gray-800">
                          Express
                        </div>
                      </div>
                    </CardBody>
                  </CardContainer>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
