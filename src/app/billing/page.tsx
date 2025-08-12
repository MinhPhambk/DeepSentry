import {
  GridBeamPricingPage,
  PricingCardProps,
} from "@/components/nurui/gridbeam-pricing-page";

export const metadata = {
  title: "Nâng cấp gói",
  description:
    "Chọn gói phù hợp với nhu cầu bảo mật của bạn. Phát hiện Deepfake và giả mạo khuôn mặt với công nghệ AI tiên tiến.",
  keywords: [
    "Phát hiện Deepfake",
    "Bảo mật AI",
    "Chống giả mạo khuôn mặt", 
    "API bảo mật",
    "Websocket real-time",
    "DeepSentry",
  ],
};

const myPricingPlans: PricingCardProps[] = [
  {
    planName: "Cơ bản",
    description: "Dành cho các dự án cá nhân và startup nhỏ.",
    price: "0",
    features: [
      "100 lượt kiểm tra/tháng",
      "API cơ bản",
      "Phát hiện Deepfake ảnh",
      "Tài liệu hướng dẫn",
      "Hỗ trợ qua email"
    ],
    buttonText: "Bắt đầu miễn phí",
    buttonVariant: "secondary",
  },
  {
    planName: "Nâng cao",
    description: "Giải pháp toàn diện cho doanh nghiệp vừa và nhỏ.",
    price: "599.000",
    features: [
      "50.000 lượt kiểm tra/tháng",
      "API + WebSocket siêu tốc",
      "Phát hiện Deepfake ảnh & video",
      "Bảng điều khiển phân tích",
      "Hỗ trợ 24/7"
    ],
    buttonText: "Chọn gói nâng cao",
    isPopular: true,
    buttonVariant: "primary",
  },
  {
    planName: "Doanh nghiệp",
    description: "Giải pháp doanh nghiệp lớn với khả năng tùy chỉnh cao.",
    price: "Liên hệ",
    features: [
      "Không giới hạn lượt kiểm tra",
      "API tốc độ cao tùy chỉnh",
      "Mô hình AI chuyên dụng",
      "Tích hợp hệ thống nội bộ",
      "Báo cáo chi tiết & tuân thủ",
      "Kỹ sư hỗ trợ riêng biệt",
      "Cam kết hoạt động 99.9%"
    ],
    buttonText: "Tư vấn miễn phí",
    buttonVariant: "primary",
    isEnterprise: true,
  },
];

const page = () => {
  return (
    <GridBeamPricingPage
      title={
        <>
          Nâng cấp <span className="text-cyan-400">gói của bạn</span>
        </>
      }
      subtitle="Phát hiện Deepfake và giả mạo khuôn mặt trong thời gian thực. API siêu nhanh với WebSocket cho mọi quy mô doanh nghiệp."
      plans={myPricingPlans}
      showAnimatedBackground={true}
    />
  );
};

export default page;