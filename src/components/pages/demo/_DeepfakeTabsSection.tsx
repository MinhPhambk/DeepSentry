"use client";
import React from "react";
import {
  TabContents,
  TabContent,
  TabsProvider,
} from "../../common/ImageTabs";
import SectionIntro from "@/components/common/SectionIntro";
import DeepfakeImageTab from "./DeepfakeImageTab";
import DeepfakeVideoTab from "./DeepfakeVideoTab";
import DeepfakeWebcamTab from "./DeepfakeWebcamTab";
import DeepfakeFaceTab from "./DeepfakeFaceTab";

const DeepfakeTabsSection = () => {
  const [activeTab, setActiveTab] = React.useState("0");

  const handleTabChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveTab(e.target.id);
  };

  return (
    <section className="container h-full">
      <SectionIntro
        title={{
          highLiteWords: "Phát hiện Deepfake",
          normalWords: "DeepSentry - ",
          highlightColor: "text-[var(--primary-color)]",
        }}
        sectionNameColor="text-[var(--primary-color)]"
      />

      <TabsProvider
        defaultValue="1"
        className="xl:grid xl:grid-cols-12 gap-24"
      >
        <TabContents className="xl:col-span-12">
          <div className="space-y-3.5 pt-3">
            <div className="flex gap-2 w-fit mx-auto lg:mx-0 border-b border-[var(--primary-color)]">
              <label
                key="0"
                className="flex flex-grow items-center justify-center cursor-pointer"
              >
                <input
                  type="radio"
                  name="radio"
                  id="0"
                  className="peer hidden"
                  onChange={handleTabChange}
                  defaultChecked={activeTab === "0"}
                />
                <span className="tracking-widest capitalize peer-checked:bg-[var(--primary-color)]  dark:peer-checked:bg-[var(--primary-color-3)] peer-checked:border peer-checked:border-b-0 border-[var(--primary-color)] peer-checked:text-[var(--white-color)]  dark:peer-checked:text-[var(--primary-color)] text-[var(--black-color)] dark:text-[var(--white-color)] font-semibold rounded-t-lg p-2 transition duration-150 ease-in-out">
                  Nguồn ảnh
                </span>
              </label>
              <label
                key="1"
                className="flex flex-grow items-center justify-center cursor-pointer"
              >
                <input
                  type="radio"
                  name="radio"
                  id="1"
                  className="peer hidden"
                  onChange={handleTabChange}
                />
                <span className="tracking-widest capitalize peer-checked:bg-[var(--primary-color)]  dark:peer-checked:bg-[var(--primary-color-3)] peer-checked:border peer-checked:border-b-0 border-[var(--primary-color)] peer-checked:text-[var(--white-color)]  dark:peer-checked:text-[var(--primary-color)] text-[var(--black-color)] dark:text-[var(--white-color)] font-semibold rounded-t-lg p-2 transition duration-150 ease-in-out">
                  Nguồn video
                </span>
              </label>
              <label
                key="2"
                className="flex flex-grow items-center justify-center cursor-pointer"
              >
                <input
                  type="radio"
                  name="radio"
                  id="2"
                  className="peer hidden"
                  onChange={handleTabChange}
                />
                <span className="tracking-widest capitalize peer-checked:bg-[var(--primary-color)]  dark:peer-checked:bg-[var(--primary-color-3)] peer-checked:border peer-checked:border-b-0 border-[var(--primary-color)] peer-checked:text-[var(--white-color)]  dark:peer-checked:text-[var(--primary-color)] text-[var(--black-color)] dark:text-[var(--white-color)] font-semibold rounded-t-lg p-2 transition duration-150 ease-in-out">
                  Nguồn camera
                </span>
              </label>
              <label
                key="3"
                className="flex flex-grow items-center justify-center cursor-pointer"
              >
                <input
                  type="radio"
                  name="radio"
                  id="3"
                  className="peer hidden"
                  onChange={handleTabChange}
                />
                <span className="tracking-widest capitalize peer-checked:bg-[var(--primary-color)]  dark:peer-checked:bg-[var(--primary-color-3)] peer-checked:border peer-checked:border-b-0 border-[var(--primary-color)] peer-checked:text-[var(--white-color)]  dark:peer-checked:text-[var(--primary-color)] text-[var(--black-color)] dark:text-[var(--white-color)] font-semibold rounded-t-lg p-2 transition duration-150 ease-in-out">
                  Deepfake khuôn mặt
                </span>
              </label>
            </div>
            <div className="space-y-5 md:space-y-8 max-w-3xl">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <>
                  {activeTab === "0" && <DeepfakeImageTab />}
                  {activeTab === "1" && <DeepfakeVideoTab/>}
                  {activeTab === "2" && <DeepfakeWebcamTab/>}
                  {activeTab === "3" && <DeepfakeFaceTab/>}
                </>
              </div>
            </div>
          </div>
        </TabContents>
      </TabsProvider>
    </section>
  );
};

export default DeepfakeTabsSection;
