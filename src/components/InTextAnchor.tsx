interface Props {
  href: string;
  text: string;
  leadingSpace?: boolean;
  afterSpace?: boolean;
  download?: boolean | string;
}

export const InTextAnchor: React.FC<Props> = ({
  href,
  text,
  leadingSpace = true,
  afterSpace = true,
  download,
}: Props) => (
  <>
    {leadingSpace && <>&nbsp;</>}
    <a
      className="hover:text-linkHoverColor cursor-pointer font-bold"
      href={href}
      target="_blank"
      rel="noreferrer"
      download={download}
    >
      {text}
    </a>
    {afterSpace && <>&nbsp;</>}
  </>
);
