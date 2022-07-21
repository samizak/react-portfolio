import { Fragment } from "react";

export default function HeaderItem(props: {
  isHeaderSelected: any;
  setIsHeaderSelected: any;
  default_selectedHeader: any;
}) {
  return (
    <>
      {["home", "about", "projects", "skills", "contact"].map(
        (item: string, index: number) => {
          return (
            <Fragment key={index}>
              <li>
                <a
                  className={
                    "underline" +
                    ((props.isHeaderSelected as any)[item] ? " selected" : "")
                  }
                  href={"#" + item}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.nativeEvent.stopImmediatePropagation();

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
