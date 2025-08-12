"use client";
import React from "react";
import {
  TabContents,
  TabContent,
  TabLists,
  TabList,
  TabsProvider,
} from "../../common/ImageTabs";
import SectionIntro from "@/components/common/SectionIntro";
import RadioTabs from "@/components/common/RadioTabs";
import Lottie from "lottie-react";
import designAnimationData from "../../../../public/json/design-animation-lottie.json";
import developerAnimationData from "../../../../public/json/developer-lottie.json";
import {
  FaReact,
  FaCode,
  FaRocket,
  FaCogs,
  FaTools,
  FaLayerGroup,
  FaTerminal,
  FaLaptopCode,
  FaPuzzlePiece,
} from "react-icons/fa";

const ImageTabsSection = () => {
  return (
    <section className="container h-full">
      <SectionIntro
        title={{
          highLiteWords: "Tại sao nên chọn chúng tôi?",
          normalWords: "DeepSentry - ",
          highlightColor: "text-[var(--primary-color)]",
        }}
        sectionNameColor="text-[var(--primary-color)]"
        description="DeepSentry ưu tiên độ chính xác, khả năng tích hợp nhanh và tính bảo mật. Nền tảng của chúng tôi giúp phát hiện deepfake và giả mạo khuôn mặt một cách hiệu quả, giảm rủi ro và bảo vệ người dùng."
      />

      <TabsProvider
        defaultValue="1"
        className="xl:grid xl:grid-cols-12 gap-24 space-y-7"
      >
        <TabLists className="xl:col-span-5">
          {tabs.map((tab, index) => (
            <TabList key={index} value={tab.id} index={index}>
              <div className="flex flex-col xl:flex-row items-center gap-x-5">
                <Lottie
                  animationData={tab?.tabList?.icon}
                  loop={true}
                  className="size-24 hidden xl:block"
                />
                <div className="space-y-1.5 text-center xl:text-left">
                  <p className="text-2xl capitalize font-semibold">
                    {tab?.tabList?.title}
                  </p>
                  <p className="text-[var(--opacity-text-color)]">
                    {tab?.tabList?.description}
                  </p>
                </div>
              </div>
            </TabList>
          ))}
        </TabLists>

        <TabContents className="xl:col-span-7">
          {tabs.map((tab, index) => (
            <TabContent key={index} value={tab.id} index={index}>
              <div className="space-y-3 xl:space-y-4">
                <h2 className="text-xl capitalize text-center lg:text-start">
                  <span className="border-b-2 border-white/35 pb-0.5">
                    Giải pháp
                  </span>
                </h2>
                <h1 className="text-3xl xl:text-5xl font-semibold max-w-2xl mx-auto lg:mx-0 text-center lg:text-start">
                  {tab?.Content?.heading.split(" ").slice(0, tab?.Content?.heading?.split(" ")?.length - 3).join(" ")} {" "}
                  <span className="text-[var(--primary-color)]">
                    {tab?.Content?.heading.split(" ").slice(tab?.Content?.heading?.split(" ")?.length - 3).join(" ")}
                  </span>
                </h1>
                <p className="xl:text-xl max-w-3xl mx-auto lg:mx-0 text-[var(--opacity-text-color)] text-center lg:text-start">
                  {tab?.Content?.description}
                </p>
                <RadioTabs data={tab?.Content?.tabs} />
              </div>
            </TabContent>
          ))}
        </TabContents>
      </TabsProvider>
    </section>
  );
};

export default ImageTabsSection;

const tabs = [
  {
    id: "1",
    tabList: {
      icon: designAnimationData,
      title: "Bảo mật AI đa tầng",
      description: "Phát hiện deepfake, giả mạo khuôn mặt và malware trong một nền tảng duy nhất.",
    },
    Content: {
      heading: "Giải pháp AI bảo mật toàn diện cho nhận diện và phân tích mối đe dọa",
      description:
        "DeepSentry cung cấp mô-đun AI chuyên biệt để phát hiện deepfake và malware. Hệ thống có thể triển khai tại chỗ hoặc trên cloud, hỗ trợ API/SDK giúp tích hợp nhanh vào quy trình hiện tại của doanh nghiệp.",
      tabs: [
        {
          id: "real-time-detection",
          title: "Phát hiện thời gian thực",
          content:
            "Sử dụng AI tối ưu để phát hiện deepfake ngay khi dữ liệu được xử lý.",
          items: [
            { icon: <FaRocket />, title: "Phản hồi tức thì", description: "Kết quả phát hiện trong mili-giây." },
            { icon: <FaTools />, title: "Dễ triển khai", description: "Cấu hình đơn giản, hỗ trợ nhiều môi trường." },
            { icon: <FaLayerGroup />, title: "Đa lớp bảo mật", description: "Kết hợp phân tích tĩnh và động." },
          ],
        },
        {
          id: "custom-rules",
          title: "Tùy chỉnh & mở rộng",
          content:
            "Cho phép tạo rule tùy chỉnh, thêm mô-đun AI mới và cập nhật theo nhu cầu.",
          items: [
            { icon: <FaCogs />, title: "Rule Engine", description: "Tạo luật phát hiện riêng cho từng hệ thống." },
            { icon: <FaPuzzlePiece />, title: "Mở rộng AI", description: "Bổ sung mô hình AI mới dễ dàng." },
            { icon: <FaTerminal />, title: "API mở", description: "Kết nối với các hệ thống khác qua API/SDK." },
          ],
        },
        {
          id: "performance",
          title: "Hiệu năng & tối ưu",
          content:
            "Hệ thống tối ưu hóa cho độ chính xác cao và độ trễ thấp, phù hợp với khối lượng dữ liệu lớn.",
          items: [
            { icon: <FaCogs />, title: "Tối ưu AI", description: "Sử dụng mô hình nhẹ nhưng chính xác." },
            { icon: <FaCode />, title: "Kiến trúc gọn nhẹ", description: "Giảm thiểu tài nguyên tiêu thụ." },
            { icon: <FaRocket />, title: "Xử lý tốc độ cao", description: "Đáp ứng nhu cầu thời gian thực." },
          ],
        },
      ],
    },
  },
  {
    id: "2",
    tabList: {
      icon: developerAnimationData,
      title: "Trải nghiệm nhà phát triển",
      description: "Công cụ và API thân thiện, dễ tích hợp và quản lý.",
    },
    Content: {
      heading: "Bộ công cụ hỗ trợ tích hợp AI bảo mật nhanh chóng và hiệu quả",
      description:
        "DeepSentry cung cấp API, SDK, và tài liệu đầy đủ để nhà phát triển nhanh chóng triển khai và mở rộng. Mọi tính năng được thiết kế hướng đến sự đơn giản và hiệu quả.",
      tabs: [
        {
          id: "api-sdk",
          title: "API & SDK",
          content:
            "Tích hợp AI phát hiện deepfake và malware chỉ với vài dòng code.",
          items: [
            { icon: <FaCode />, title: "API REST", description: "Gọi API đơn giản và bảo mật." },
            { icon: <FaLaptopCode />, title: "SDK đa nền tảng", description: "Hỗ trợ nhiều ngôn ngữ lập trình." },
            { icon: <FaTools />, title: "Ví dụ sẵn có", description: "Mẫu code để triển khai nhanh." },
          ],
        },
        {
          id: "cli-tools",
          title: "Công cụ CLI",
          content:
            "Quản lý cấu hình, triển khai và kiểm thử hệ thống ngay từ terminal.",
          items: [
            { icon: <FaTerminal />, title: "Triển khai nhanh", description: "Cài đặt và chạy chỉ với 1 lệnh." },
            { icon: <FaCogs />, title: "Quản lý cấu hình", description: "Tùy chỉnh hệ thống dễ dàng." },
            { icon: <FaRocket />, title: "Kiểm thử tức thì", description: "Thử nghiệm và nhận kết quả ngay." },
          ],
        },
        {
          id: "frameworks",
          title: "Hỗ trợ Framework",
          content:
            "Tương thích với nhiều nền tảng như React, Next.js, Spring Boot, Flask...",
          items: [
            { icon: <FaReact />, title: "React/Next.js", description: "Tích hợp giao diện phát hiện trực tiếp." },
            { icon: <FaCode />, title: "Backend frameworks", description: "Hỗ trợ Java, Python, Node.js..." },
            { icon: <FaTools />, title: "Template mẫu", description: "Cung cấp boilerplate cho nhiều hệ thống." },
          ],
        },
      ],
    },
  },
];
