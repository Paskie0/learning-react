export const Link = ({href, content}) => {
  return (
    <a href={href} className="px-3 text-gray-500 font-medium hover:text-black transition-[color]">
      {content}
    </a>
  );
};
