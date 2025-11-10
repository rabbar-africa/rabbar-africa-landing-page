import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Car } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center px-8">
          <div className="mb-8">
            <Car className="w-16 h-16 mx-auto text-blue-600 mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Page Not Found
            </h2>
            <p className="text-gray-600">
              Sorry, the page you&apos;re looking for doesn&apos;t exist or has
              been moved.
            </p>
          </div>

          <div className="space-y-4">
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
              <Link href="/">Go to Homepage</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href="/blogs">Browse Our Blog</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
