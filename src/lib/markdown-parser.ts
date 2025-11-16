/**
 * Parses markdown content and converts it to HTML with Tailwind CSS classes
 */
export function parseMarkdownToHTML(content: string): string {
  return content
    .split("\n")
    .map((line) => {
      // Handle headers
      if (line.startsWith("# ")) {
        return `<h1 class="text-3xl font-bold mt-8 mb-4 text-gray-900">${line.substring(2)}</h1>`;
      }
      if (line.startsWith("## ")) {
        return `<h2 class="text-2xl font-semibold mt-6 mb-3 text-gray-800">${line.substring(3)}</h2>`;
      }
      if (line.startsWith("### ")) {
        return `<h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800">${line.substring(4)}</h3>`;
      }

      // Handle bold text
      if (line.includes("**")) {
        line = line.replace(
          /\*\*(.*?)\*\*/g,
          '<strong class="font-semibold text-gray-900">$1</strong>',
        );
      }

      // Handle lists with bold labels
      if (line.match(/^- \*\*(.*?)\*\*:/)) {
        const match = line.match(/^- \*\*(.*?)\*\*:/);
        const label = match?.[1] || "";
        const content = line.split(": ")[1] || "";
        return `<li class="mb-2"><strong class="font-semibold text-gray-900">${label}</strong>: ${content}</li>`;
      }

      // Handle unordered lists
      if (line.startsWith("- ")) {
        return `<li class="mb-1">${line.substring(2)}</li>`;
      }

      // Handle ordered lists
      if (line.match(/^\d+\. /)) {
        return `<li class="mb-1">${line.substring(line.indexOf(". ") + 2)}</li>`;
      }

      // Handle regular paragraphs
      if (line.trim() && !line.startsWith("#")) {
        return `<p class="mb-4">${line}</p>`;
      }

      return line === "" ? "<br>" : line;
    })
    .join("");
}

/**
 * Formats a date string to a readable format
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
