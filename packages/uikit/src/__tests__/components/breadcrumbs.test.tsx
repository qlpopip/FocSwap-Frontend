import React from "react";
import { renderWithProvider } from "../../testHelpers";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

it("renders correctly", () => {
  const { asFragment } = renderWithProvider(<Breadcrumbs>Link</Breadcrumbs>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      list-style-type: none;
    }

    .c0 a {
      color: #0171BD;
    }

    .c0 a:hover {
      color: #53DEE9;
    }

    <ul
        class="c0"
      />
    </DocumentFragment>
  `);
});
