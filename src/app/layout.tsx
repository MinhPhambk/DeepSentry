import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Nunito } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import "../styles/footer.css";
import "../styles/hero.css";
import ThemeProvider from "../provider/ThemeProvider";
import NProgressProvider from "@/components/common/NProgressProvider";
import MainContent from "../components/common/MainContent";
import { AppProvider } from "@/context/AppContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SplashCursorDemo from "@/components/common/SplashCursorDemo";

const nunito = Nunito({
  variable: "--font-nunito",
  weight: ["400", "600", "900", "1000"],
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
});

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: {
      default: "DeepSentry",
      template: "%s",
    },
    icons: {
      icon: [
        { url: "/favicon.png", type: "image/png" }
      ],
    },
    description:
      "DeepSentry - Nền tảng bảo mật ứng dụng trí tuệ nhân tạo cho phát hiện Deepfake, với các mô hình huấn luyện sẵn, tích hợp API và suy luận thời gian thực.",
    applicationName: "DeepSentry",
    creator: "Pham Ngoc Minh",
    authors: [
      {
        name: "Pham Ngoc Minh",
        url: "https://www.linkedin.com/in/pham-ngoc-minh-896713232/",
      },
    ],
    keywords: [
      "DeepSentry",
      "Phát hiện Deepfake",
      "Bảo mật AI",
      "Chống giả mạo khuôn mặt",
      "API bảo mật",
      "Websocket real-time",
      "DeepSentry",
    ],
    openGraph: {
      title: "DeepSentry",
      description:
        "DeepSentry - Nền tảng bảo mật ứng dụng trí tuệ nhân tạo cho phát hiện Deepfake, với các mô hình huấn luyện sẵn, tích hợp API và suy luận thời gian thực.",
      url: "deepsentry.cloud",
    },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body
        className={`${nunito.variable} antialiased bg-[var(--background-color)] flex flex-col min-h-screen font-nunito`}
      >
        <AppProvider>
          <ThemeProvider>
            <Toaster />
            <NProgressProvider />
            <SplashCursorDemo />
            {/* <Banner /> */}
            <Navbar />
            <MainContent>{children}</MainContent>
            <Footer />
            <Analytics />
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
