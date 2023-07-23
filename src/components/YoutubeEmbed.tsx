interface Props {
  embedId: string;
}

export const YoutubeEmbed: React.FC<Props> = ({ embedId }: Props) => (
  <div className="w-full mt-8 mb-12 self-center lg:w-3/4">
    <iframe
      width="100%"
      height="400px"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
