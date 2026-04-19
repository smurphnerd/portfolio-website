import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-invert max-w-none prose-a:text-bodyFg prose-a:font-bold prose-a:no-underline hover:prose-a:text-linkHoverColor prose-blockquote:border-l-linkSelected prose-blockquote:text-bodyQuietColor">
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        img: ({ node, alt, ...props }) => (
          <img
            {...props}
            alt={alt || ''}
            className="w-full mb-4 self-center lg:w-3/4 mx-auto max-h-[600px] object-contain"
            style={{ display: 'block' }}
          />
        ),
        table: ({ node, ...props }) => (
          <table {...props} className="w-full mb-4 lg:w-3/4 mx-auto" />
        ),
        a: ({ node, href, children, ...props }) => {
          const isExternal = !!href && /^https?:\/\//.test(href);
          return (
            <a
              {...props}
              href={href}
              className="hover:text-linkHoverColor cursor-pointer font-bold"
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noreferrer' : undefined}
            >
              {children}
            </a>
          );
        },
        p: ({ node, children, ...props }) => {
          // Check if this paragraph contains only an image + em (caption)
          const hasImage = node?.children?.some(
            (child: any) => child.tagName === 'img'
          );

          if (hasImage) {
            return (
              <div className="flex flex-col items-center [&>em]:text-center [&>em]:text-sm [&>em]:mb-8 [&>em]:block [&>em]:text-[var(--color-body-quiet,#888)]">
                {children}
              </div>
            );
          }

          return <p {...props}>{children}</p>;
        },
      }}
    >
      {content}
    </ReactMarkdown>
    </div>
  );
}
