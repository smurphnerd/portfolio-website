interface Props {
  href: string;
  text: string;
  leadingSpace?: boolean;
  afterSpace?: boolean;
}

export const InTextAnchor: React.FC<Props> = ({
  href,
  text,
  leadingSpace = true,
  afterSpace = true,
}: Props) => (
  <>
    {leadingSpace && <>&nbsp;</>}
    <a
      className="hover:text-linkHoverColor cursor-pointer font-bold"
      href={href}
      target="blank"
    >
      {text}
    </a>
    {afterSpace && <>&nbsp;</>}
  </>
);
