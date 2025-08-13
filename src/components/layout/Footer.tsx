"use client";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { navigationActive } from "@/utils/navigationActive";
import { usePathname } from "next/navigation";
import Nurui from "@/components/common/Nurui";
import RocketScrollToTop from "@/components/common/RocketScrollToTop";
import LinkWithProgress from "@/components/common/LinkWithProgress";

const Footer = () => {
  const pathName = usePathname();
  if (pathName.includes("docs") || pathName.includes("preview")) return null;

  return (
    <div className="bg-[var(--white-color)] dark:bg-transparent border-t border-[var(--border-color)] w-full text-[var(--text-primary-color)] mt-auto rounded-tl-[50px] lg:rounded-tl-[80px] xl:rounded-tl-[110px] rocket-animation">
      <RocketScrollToTop className=" bg-[var(--background-color)] max-w-24 mx-auto  rounded-full -mt-16 hidden md:block" />
      <div className="container">
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 xl:flex flex-col md:flex-row 2xl:justify-between gap-10 xl:gap-14 2xl:gap-24 py-7 xl:py-16 pl-1 xl:pl-0">
          <div className="space-y-3 lg:space-y-4 xl:space-y-6 max-w-80 col-span-full">
            <Nurui textSize="text-2xl lg:text-3xl" />
            <p>
              Giải pháp bảo mật trí tuệ nhân tạo tiên tiến, bảo vệ bạn trước deepfake và tấn công giả mạo khuôn mặt.
            </p>
          </div>

          <nav className="space-y-4 max-w-80 flex flex-col">
            <h6 className="font-semibold text-lg">Các sản phẩm</h6>
            <a
              href="/preview"
              target="_blank"
              className="cursor-pointer"
            >
              Phát hiện Deepfake
            </a>
            <a
              href="/preview"
              target="_blank"
              className="cursor-pointer"
            >
              Phát hiện giả mạo khuôn mặt
            </a>
          </nav>

          <nav className="space-y-4 max-w-80 flex flex-col">
            <h6 className="font-semibold text-lg">Khám phá</h6>
            <a
              href="/about-us"
              className="cursor-pointer"
            >
              Giới thiệu
            </a>
            <a
              href="/docs/installation"
              className="cursor-pointer"
            >
              Hướng dẫn sử dụng
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61576988226742"
              className="cursor-pointer"
            >
              Về chúng tôi
            </a>
          </nav>

          <nav className="space-y-4 max-w-80 flex flex-col">
            <h6 className="font-semibold text-lg">Liên hệ</h6>
            <a className="flex items-start gap-2.5 max-w-48">
              <IoLocationOutline className="flex-shrink-0" />
              Hà Nội, Việt Nam
            </a>
            <a className="flex gap-2.5 items-center cursor-pointer">
              <MdOutlineMail className="flex-shrink-0" /> phamngocminh1230@gmail.com
            </a>
          </nav>
        </div>

        <div className="border-t border-[var(--border-color)] border-opacity-20 p-5 flex items-center justify-center lg:justify-between">
          <div className="hidden lg:flex flex-wrap items-center justify-between gap-4">
            {navigation.map((data, i) => (
              <LinkWithProgress
                key={data?.id + i}
                href={data?.url}
                className={`${
                  navigation?.length === i + 1
                    ? ""
                    : "border-r border-[var(--black-color-2)]"
                } pr-4 font-semibold ${
                  navigationActive(data?.url, pathName)
                    ? "text-[var(--primary-color)] font-bold"
                    : "text-[--copy-right-color]"
                }`}
              >
                {data?.name}
              </LinkWithProgress>
            ))}
          </div>
          <p className="text-[--copy-right-color]">
            © {new Date().getFullYear()} Bản quyền thuộc về{" "}
            <a href="https://www.facebook.com/profile.php?id=61576988226742">
              <span className="text-[var(--primary-color)] font-semibold hover:underline cursor-pointer transition-all duration-200">
                AI & Cybersecurity Team
              </span>
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const navigation = [
  {
    id: 1,
    name: "Trang chủ",
    url: "/",
  },
  {
    id: 2,
    name: "Hướng dẫn sử dụng",
    url: "/docs/installation",
  },
  {
    id: 2,
    name: "Phát hiện Deepfake",
    url: "/preview",
  },
  {
    id: 3,
    name: "Nâng cấp gói",
    url: "/billing",
  },
  {
    id: 4,
    name: "Giới thiệu",
    url: "/about-us",
  },
];
