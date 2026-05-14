import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-200">404</h1>
        <p className="mt-4 text-lg text-gray-600">
          Page not found / 页面未找到
        </p>
        <Link
          href="/en"
          className="mt-6 inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          Back to Home / 返回首页
        </Link>
      </div>
    </div>
  );
}
