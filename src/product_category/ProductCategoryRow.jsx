import React from "react";

export default function ProductCategoryRow({categories }) {
  return (
    <>
      <tr>
        <th colSpan="2">{categories}</th>
      </tr>
    </>
  );
}
