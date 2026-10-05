import classNames from "classnames";

const Link: React.FC<{
  href: string;
  backgroundImageUrl?: string;
  className?: string;
  children: React.ReactNode;
}> = ({ href, backgroundImageUrl, children, className }) => {
  return (
    <a
      href={href}
      className={classNames(
        backgroundImageUrl && `bg-no-repeat bg-center bg-cover`,
        className,
        "rounded-xl border-4 light:border-light-on-secondary dark:border-dark-on-secondary shadow-[0_0_32px] light:shadow-light-secondary-container dark:shadow-dark-secondary-container",
      )}
      style={{
        backgroundImage: backgroundImageUrl
          ? `url(/${backgroundImageUrl})`
          : undefined,
      }}
    >
      {children}
    </a>
  );
};

export default Link;
