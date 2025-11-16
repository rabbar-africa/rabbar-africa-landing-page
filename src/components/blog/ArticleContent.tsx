import { PortableText } from "next-sanity";
import { PortableTextBlock } from "sanity";
import { parseMarkdownToHTML } from "@/lib/markdown-parser";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface ArticleContentProps {
  content: string | PortableTextBlock[];
}

export function ArticleContent({ content }: ArticleContentProps) {
  const isPortableText = Array.isArray(content);

  return (
    <>
      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        {isPortableText ? (
          <PortableText
            value={content}
            components={{
              types: {
                image: ({ value }) => {
                  const imageUrl = urlFor(value).width(800).url();
                  return (
                    <Image
                      src={imageUrl}
                      alt={value.alt || "Blog image"}
                      width={800}
                      height={450}
                      className="rounded-lg my-8"
                    />
                  );
                },
              },
              block: {
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
                    {children}
                  </h3>
                ),
                normal: ({ children }) => (
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    {children}
                  </p>
                ),
              },
              list: {
                bullet: ({ children }) => (
                  <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
                ),
                number: ({ children }) => (
                  <ol className="list-decimal pl-6 mb-4 space-y-2">
                    {children}
                  </ol>
                ),
              },
              listItem: {
                bullet: ({ children }) => (
                  <li className="text-gray-700">{children}</li>
                ),
                number: ({ children }) => (
                  <li className="text-gray-700">{children}</li>
                ),
              },
              marks: {
                strong: ({ children }) => (
                  <strong className="font-semibold text-gray-900">
                    {children}
                  </strong>
                ),
                em: ({ children }) => <em className="italic">{children}</em>,
                link: ({ value, children }) => (
                  <a
                    href={value?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {children}
                  </a>
                ),
              },
            }}
          />
        ) : (
          <div
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: parseMarkdownToHTML(content),
            }}
          />
        )}
      </div>

      {/* CTA within article */}
      <div className="bg-blue-50 rounded-lg p-6 my-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Need Professional Auto Services?
        </h3>
        <p className="text-gray-600 mb-4">
          Put this knowledge to work with expert services from Rabbar Africa.
          Our certified technicians are ready to help with all your automobile
          needs.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Contact Us Today
        </Button>
      </div>
    </>
  );
}
