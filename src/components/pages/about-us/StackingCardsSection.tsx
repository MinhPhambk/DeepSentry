"use client";
import { useState } from "react";
import StackingCards, {
  StackingCardItem,
} from "@/components/common/StackingCards";
import SectionIntro from "@/components/common/SectionIntro";
import designAnimationData from "../../../../public/json/design-animation-lottie.json";
import developerAnimationData from "../../../../public/json/developer-lottie.json";
import communityAnimationData from "../../../../public/json/community-lottie.json";
import visionAnimationData from "../../../../public/json/vision-lottie.json";
import missionAnimationData from "../../../../public/json/mission-lottie.json";
import Lottie from "lottie-react";

export default function StackingCardsSection() {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  return (
    <section
      className="container pb-14 xl:pb-0"
      ref={(node) => setContainer(node)}
    >
      <SectionIntro
        title={{
          highLiteWords: "DeepSentry?",
          normalWords: "Điểm đặc biệt của",
          highlightColor: "text-[var(--secondary-color)]",
        }}
        sectionGap="pb-2.5 xl:pb-3"
        description="DeepSentry ứng dụng trí tuệ nhân tạo tiên tiến để phát hiện và 
        ngăn chặn deepfake và tấn công giả mạo khuôn mặt. Chúng tôi mang đến 
        sự an tâm và bảo mật tối đa cho cá nhân và doanh nghiệp."
      />
      <StackingCards
        totalCards={cards.length}
        scrollOptons={{ container: { current: container } }}
      >
        {cards.map(({ description, icon, title }, index) => {
          return (
            <StackingCardItem
              key={index}
              index={index}
              className="h-96 xl:h-[700px]"
            >
              <div
                className="h-96 xl:h-[600px] aspect-video w-full  shadow-xl dark:shadow-none mx-auto relative rounded-2xl bg-gradient-to-t from-white dark:from-white/5 via-white dark:via-white/5 to-white dark:to-[var(--secondary-color-4)] border 
              border-[white]/20 backdrop-blur-2xl flex items-center justify-between text-center xl:text-left"
              >
                <div className="xl:w-1/2 space-y-4 lg:space-y-5 px-6 xl:px-16">
                  <h2 className="text-3xl xl:text-5xl font-semibold bg-[var(--secondary-color-1)] dak:bg-[var(--secondary-color-2)] w-fit py-2 px-3 rounded">
                    {title}
                  </h2>
                  <p className="text-xl text-balance xl:text-pretty">
                    {description}
                  </p>
                </div>
                <div className="bg-[var(--secondary-color-1)] dark:bg-[var(--secondary-color-4)] h-full flex items-center justify-center rounded-r-2xl">
                  <Lottie
                    animationData={icon}
                    loop={true}
                    className="size-[510px] hidden xl:block"
                  />
                </div>
              </div>
            </StackingCardItem>
          );
        })}
      </StackingCards>
    </section>
  );
}

const cards = [
  {
    title: "Sứ mệnh rõ ràng",
    description:
      "Bảo vệ người dùng trước các mối đe dọa AI ngày càng tinh vi, từ deepfake đến tấn công mạng phức tạp.",
    icon: missionAnimationData,
  },
  {
    title: "Công nghệ AI tiên tiến",
    description:
      "Sử dụng các mô hình học sâu và hệ thống phát hiện đa tầng để phân tích, định danh và chặn đứng các nội dung giả mạo.",
    icon: designAnimationData,
  },
  {
    title: "Bảo mật toàn diện",
    description:
      "Kết hợp nhiều lớp phòng thủ: phân tích dữ liệu thời gian thực, giám sát liên tục và phản ứng nhanh với mối nguy.",
    icon: developerAnimationData,
  },
  {
    title: "Trải nghiệm người dùng thân thiện",
    description:
      "Thiết kế giao diện dễ sử dụng, hiển thị cảnh báo rõ ràng và cung cấp báo cáo chi tiết giúp người dùng hiểu và xử lý sự cố.",
    icon: communityAnimationData,
  },
  {
    title: "Cộng đồng & Hợp tác",
    description:
      "Kết nối với các nhà nghiên cứu, chuyên gia bảo mật và cộng đồng mã nguồn mở để liên tục nâng cấp giải pháp.",
    icon: visionAnimationData,
  },
];
