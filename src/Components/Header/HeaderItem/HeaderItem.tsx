import { Fragment } from "react";

export default function HeaderItem(props: {
  isHeaderSelected: any;
  setIsHeaderSelected: any;
  default_selectedHeader: any;
  setIsActive?: any;
}) {
  return (
    <>
      {["home", "about", "skills", "projects", "contact"].map(
        (item: string, index: number) => {
          return (
            <Fragment key={index}>
              <li>
                <a
                  className={
                    "underline" +
                    ((props.isHeaderSelected as any)[item] ? " selected" : "")
                  }
                  href={"#" + (item !== "home" ? item : "")}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.nativeEvent.stopImmediatePropagation();

                    // Code below fixes padding problems with elements fading-in on scroll.
                    // Get the href
                    const _href = (e.target as any).href.split("#")[1];
                    // Get the element using href and check if it is visible
                    const isVisible = document
                      .getElementById(_href)
                      ?.parentElement?.className.includes("is-visible");

                    // Only add scroll-padding-top if element is not visible yet
                    document.documentElement.style.setProperty(
                      "--scroll-padding",
                      isVisible ? "0" : "20vh"
                    );

                    if (props.setIsActive) props.setIsActive(false);

                    return props.setIsHeaderSelected({
                      ...props.default_selectedHeader,
                      [item]: true,
                    });
                  }}
                >
                  {item}
                </a>
              </li>
            </Fragment>
          );
        }
      )}
    </>
  );
}
