import AnimateInput from "./AnimateInput";

const NewsLetterSection = () => {
  return (
    <section className="sm:container">
      <div className="shadow-xl dark:shadow-none bg-gradient-to-r from-[var(--white-color)] dark:from-[var(--glass-color)] via-[var(--white-color)] dark:via-[var(--glass-color)] to-[var(--primary-color)] dark:to-[var(--primary-color-2)] py-6 md:py-10 lg:py-20 px-2.5 md:px-20 sm:rounded-xl flex flex-col items-center xl:items-start justify-center text-left gap-3.5">
        <h6 className="text-2xl md:text-4xl font-bold text-center xl:text-start">
          {newsLetter?.title}
        </h6>
        <p className="max-w-2xl text-center xl:text-start text-balance sm:text-pretty">
          {newsLetter?.description}
        </p>
        <AnimateInput
          className="w-full max-w-2xl mt-2"
          onBlurTitle="Đăng ký nhận tin tức mới nhất từ chúng tôi"
          onFocusTitle="Chúng tôi sẽ không làm phiền bạn!"
          buttonTitle={newsLetter?.subscribe_button.label}
        />
      </div>
    </section>
  );
};

export default NewsLetterSection;

const newsLetter = {
  title: "Đăng ký nhận tin tức về DeepSentry",
  description:
    "Nhận thông báo mới nhất về giải pháp bảo mật AI của DeepSentry – bảo vệ bạn khỏi Deepfake và giả mạo khuôn mặt.",
  subscribe_button: {
    label: "Đăng ký",
    action: "subscribe",
  },
  input_field: {
    placeholder: "Đăng ký nhận tin tức mới nhất từ chúng tôi",
    onFocus: {
      action: "setPlaceholder",
      value: "Chúng tôi sẽ không làm phiền bạn!",
    },
    onBlur: {
      action: "setPlaceholder",
      value: "Đăng ký nhận tin tức mới nhất từ chúng tôi",
    },
  },
};
