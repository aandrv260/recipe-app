import scss from './Link.module.scss';

type Props = {
  className?: string;
  href: string;
  rel?: string;
  target?: string;
  children?: React.ReactNode;
};

const Link: React.FC<Props> = props => {
  const { className, href, rel, target, children } = props;

  return (
    <a
      className={className}
      rel={target === '_blank' ? 'noopener noreferrer nofollow' : rel}
      target={target}
      href={href}
    >
      {children}
    </a>
  );
};

export default Link;
