import Text from '@/components/Atoms/Text';

interface MenuItemProps extends BaseComponent {
  href: string;
  label: string;
}

const MenuItem = ({ href, label, ...props }: MenuItemProps) => {
  return (
    <a {...props} href={href} target="_blank" rel="noopener noreferrer">
      <Text fontWeight={600}>{label}</Text>
    </a>
  );
};

export default MenuItem;
