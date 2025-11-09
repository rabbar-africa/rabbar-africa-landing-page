import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFeaturedBlogPosts } from "@/lib/blog-data";
import Link from "next/link";
import { Car, Wrench, FileText, Shield, Clock, User } from "lucide-react";

export default function Home() {
  const featuredPosts = getFeaturedBlogPosts(3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Rabbar Africa
              </h1>
              <p className="text-xl text-blue-600 font-medium">
                Your Trusted Automobile Partner
              </p>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional automobile services across Nigeria. From repairs and
              maintenance to documentation and insurance, we keep you moving
              with confidence on every journey.
            </p>

            <div className="flex gap-4 items-center justify-center flex-wrap pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Service Quote
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/blogs">Read Our Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive automobile solutions for all your vehicle needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Repair & Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expert repair services and preventive maintenance to keep your
                  vehicle running smoothly
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Complete paperwork assistance including registration,
                  licensing, and legal compliance
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Insurance Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Insurance guidance and processing to protect your investment
                  and comply with regulations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Vehicle Inspection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive vehicle inspections and roadworthiness
                  certifications
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Latest from Our Blog
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Expert insights, maintenance tips, and industry updates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readingTime} min read
                    </div>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">
                    <Link
                      href={`/${post.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <Link
                      href={`/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Read more →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/blogs">View All Blog Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">
            Ready to Service Your Vehicle?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get expert automobile services from Nigeria&apos;s trusted
            professionals. Contact us today for a consultation.
          </p>
          <div className="flex gap-4 items-center justify-center flex-wrap">
            <Button size="lg" variant="secondary">
              Schedule Service
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600"
            >
              Call Now: +234 XXX XXXX XXX
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
