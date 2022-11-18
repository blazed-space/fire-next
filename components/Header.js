import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { Bounded } from "./Bounded";

export const Header = ({ navigation, settings }) => {
  return (
    <Bounded as="header" yPadding="sm">
      <div className="flex flex-wrap justify-between gap-x-6 gap-y-3 leading-none">
        <PrismicLink href="/" className="text-xl font-semibold tracking-tight">
          <img src="https://blazed.sirv.com/logo/Beaker-Cobalt.png?w=50&h=50" title="Blazed World" className="hover:opacity-75 pt-3" />
        </PrismicLink>
        <nav className="pt-8">
          <ul className="flex flex-wrap gap-6 md:gap-10 pb-5">
            {navigation.data?.links.map((item) => (
              <li
                key={prismicH.asText(item.label)}
                className="hover:underline font-semibold tracking-tight text-slate-800"
              >
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
};