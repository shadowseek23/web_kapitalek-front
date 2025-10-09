import NextLink from "next/link";

// Navbar Item with Dropdown
interface NavDropdownItemProps {
  label: string;
  href: string;
  dropdown: Array<{
    label?: string;
    href?: string;
    separator?: boolean;
    isExtra?: boolean;
  }>;
  isActive?: boolean;
}

export const NavDropdownItem = ({ label, href, dropdown, isActive = false }: NavDropdownItemProps) => {
  const containerClasses = ["navbar__item", "navbar__item--has-dropdown", "is-hoverable"];
  if (isActive) containerClasses.push("is-active");

  return (
    <div className={containerClasses.join(" ")}>
      <NextLink
        href={href}
        className="navbar__item-inner-link navbar__item--nowrap"
      >
        {label}
      </NextLink>

      <div className="navbar__dropdown">
        {dropdown.map((dropdownItem, index) => {
          if (dropdownItem.separator) {
            return (
              <div
                key={`separator-${index}`}
                className="navbar__separator"
              />
            );
          }

          const itemClasses = ["navbar__dropdown-item"];
          if (dropdownItem.isExtra) itemClasses.push("navbar__dropdown-item--extra-item");

          return (
            <NextLink
              key={dropdownItem.href || index}
              href={dropdownItem.href || "#"}
              className={itemClasses.join(" ")}
            >
              {dropdownItem.label}
            </NextLink>
          );
        })}
      </div>
    </div>
  );
};
