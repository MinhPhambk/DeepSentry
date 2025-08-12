"use client";
import QuestionAnswer from "@/components/common/QuestionAnswer";
import { useState } from "react";

const FaqSection = () => {
  const [openKey, setOpenKey] = useState<number>(1);
  const [activeCategoryKey, setActiveCategoryKey] = useState<number>(1);

  const roundedButton = (id: number, category: string) => (
    <button
      key={id}
      className={`${
        activeCategoryKey === id
          ? "bg-[var(--glass-color-3)] text-[var(--white-color)] border border-[var(--glass-color-3)]"
          : "border border-[var(--border-color)]"
      } font-semibold cursor-pointer rounded-full px-3.5 py-2.5 capitalize text-xl`}
      onClick={() => setActiveCategoryKey(id)}
    >
      {category}
    </button>
  );

  return (
    <section className="container flex flex-col xl:flex-row gap-10 xl:gap-20">
      {/* Tiêu đề và nút chọn danh mục */}
      <div className="xl:w-1/3 space-y-5 text-center xl:text-start">
        <h3 className="text-4xl xl:text-5xl font-bold">Câu hỏi thường gặp</h3>
        <p className="text-xl">
          Tất cả thông tin bạn cần biết về tính năng, bảo mật và cách sử dụng DeepSentry.
        </p>
        <div className="flex flex-wrap justify-center xl:justify-start gap-x-4 gap-y-5 pt-1">
          {faqsData.map((data) => roundedButton(data?.id, data?.category))}
        </div>
      </div>
      {/* Danh sách câu hỏi */}
      <div className="xl:w-2/3 space-y-5">
        {faqsData?.[activeCategoryKey - 1]?.questions?.map((faqData, i) => (
          <QuestionAnswer
            key={i}
            questionNumber={faqData?.number}
            question={faqData?.question}
            answer={faqData?.answer}
            openKey={openKey}
            setOpenKey={() =>
              setOpenKey(faqData?.number === openKey ? 0 : faqData?.number)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;

const faqsData = [
  {
    category: "Bắt đầu",
    id: 1,
    questions: [
      {
        number: 1,
        question: "DeepSentry là gì?",
        answer:
          "DeepSentry là nền tảng bảo mật AI giúp phát hiện deepfake và ngăn chặn giả mạo khuôn mặt, bảo vệ người dùng và doanh nghiệp khỏi các mối đe dọa số."
      },
      {
        number: 2,
        question: "Làm sao để cài đặt DeepSentry?",
        answer:
          "Bạn có thể tích hợp DeepSentry qua API hoặc cài đặt phần mềm máy chủ/ứng dụng tùy theo nhu cầu. Tài liệu hướng dẫn chi tiết có sẵn trên trang web chính thức."
      },
      {
        number: 3,
        question: "Có cần cấu hình gì sau khi cài đặt không?",
        answer:
          "Chỉ cần cấu hình thông tin API, quyền truy cập và các tuỳ chọn cảnh báo. DeepSentry sẽ tự động tối ưu cho môi trường của bạn."
      },
      {
        number: 4,
        question: "DeepSentry có miễn phí không?",
        answer:
          "DeepSentry cung cấp gói miễn phí với các tính năng cơ bản. Các gói nâng cao có thêm tính năng phân tích chuyên sâu và báo cáo chi tiết."
      },
      {
        number: 5,
        question: "DeepSentry hỗ trợ nền tảng nào?",
        answer:
          "DeepSentry hỗ trợ tích hợp trên web, ứng dụng di động, hệ thống máy chủ và nền tảng đám mây."
      }
    ]
  },
  {
    category: "Tích hợp",
    id: 2,
    questions: [
      {
        number: 1,
        question: "DeepSentry có thể tích hợp với hệ thống hiện tại không?",
        answer:
          "Có. DeepSentry hỗ trợ API và SDK cho nhiều ngôn ngữ, dễ dàng tích hợp vào hệ thống sẵn có."
      },
      {
        number: 2,
        question: "Có hỗ trợ kết nối với phần mềm bảo mật khác không?",
        answer:
          "Có, DeepSentry tương thích với nhiều nền tảng bảo mật và SIEM như Splunk, Elastic Security."
      },
      {
        number: 3,
        question: "DeepSentry có hỗ trợ đa ngôn ngữ không?",
        answer:
          "Có. Hệ thống hỗ trợ nhiều ngôn ngữ để dễ dàng triển khai toàn cầu."
      },
      {
        number: 4,
        question: "Có thể tùy chỉnh tính năng AI không?",
        answer:
          "Hoàn toàn có thể. Bạn có thể điều chỉnh mức độ nhạy, bộ lọc và thuật toán phù hợp với nhu cầu."
      },
      {
        number: 5,
        question: "Có thể triển khai trên đám mây và tại chỗ cùng lúc không?",
        answer:
          "Có. DeepSentry hỗ trợ triển khai hybrid để tối ưu hiệu suất và bảo mật."
      }
    ]
  },
  {
    category: "Tính năng",
    id: 3,
    questions: [
      {
        number: 1,
        question: "DeepSentry phát hiện deepfake như thế nào?",
        answer:
          "Hệ thống sử dụng mô hình AI phân tích đặc điểm khuôn mặt, giọng nói và dữ liệu hình ảnh để phát hiện dấu hiệu giả mạo."
      },
      {
        number: 2,
        question: "Có cảnh báo theo thời gian thực không?",
        answer:
          "Có. Khi phát hiện mối đe dọa, hệ thống gửi cảnh báo ngay lập tức qua email, SMS hoặc dashboard."
      },
      {
        number: 3,
        question: "Có hỗ trợ báo cáo chi tiết không?",
        answer:
          "Có. Báo cáo bao gồm thông tin phân tích, thống kê mối đe dọa và khuyến nghị xử lý."
      },
      {
        number: 4,
        question: "Hệ thống có đảm bảo quyền riêng tư không?",
        answer:
          "DeepSentry tuân thủ tiêu chuẩn bảo mật quốc tế và không lưu trữ dữ liệu cá nhân quá thời gian cần thiết."
      }
    ]
  },
  {
    category: "Tài liệu & Hỗ trợ",
    id: 4,
    questions: [
      {
        number: 1,
        question: "Tài liệu hướng dẫn ở đâu?",
        answer:
          "Bạn có thể truy cập tài liệu đầy đủ, bao gồm hướng dẫn cài đặt và ví dụ tích hợp, trên trang web DeepSentry."
      },
      {
        number: 2,
        question: "Có hỗ trợ kỹ thuật không?",
        answer:
          "Có. Chúng tôi cung cấp hỗ trợ qua email, chat trực tiếp và cộng đồng trên Discord."
      },
      {
        number: 3,
        question: "Có thể đóng góp phát triển không?",
        answer:
          "Có. Chúng tôi chào đón mọi đóng góp thông qua GitHub."
      },
      {
        number: 4,
        question: "Có bản demo hoặc mẫu thử không?",
        answer:
          "Có. DeepSentry cung cấp demo trực tuyến và gói thử nghiệm để bạn kiểm tra trước khi triển khai."
      }
    ]
  },
  {
    category: "Bản quyền & Giấy phép",
    id: 5,
    questions: [
      {
        number: 1,
        question: "DeepSentry có mã nguồn mở không?",
        answer:
          "Phiên bản lõi của DeepSentry là mã nguồn mở, giấy phép Apache. Một số tính năng nâng cao thuộc gói thương mại."
      },
      {
        number: 2,
        question: "Có thể dùng trong dự án thương mại không?",
        answer:
          "Có. Bạn có thể sử dụng DeepSentry trong cả dự án cá nhân và thương mại."
      },
      {
        number: 3,
        question: "Có gói bản quyền vĩnh viễn không?",
        answer:
          "Có. Gói doanh nghiệp có thể mua bản quyền vĩnh viễn với hỗ trợ nâng cấp trong 3 năm."
      },
      {
        number: 4,
        question: "Có giới hạn số lượng người dùng không?",
        answer:
          "Tùy gói dịch vụ. Gói miễn phí giới hạn 1 người dùng, các gói trả phí hỗ trợ không giới hạn số lượng người dùng."
      },
      {
        number: 5,
        question: "Có chính sách hoàn tiền không?",
        answer:
          "Có. Bạn có thể yêu cầu hoàn tiền trong vòng 14 ngày nếu không hài lòng."
      }
    ]
  }
];
