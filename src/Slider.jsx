
import React, { useEffect } from 'react';

export default function Slider({ rawHtml }) {
  // We can implement Framer Motion logic here later.
  // For now, we just render the raw HTML of the exact slider so we don't lose the design.
  // Since we want NO DEVIATION, we output the exact HTML.
  return (
    <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
  );
}
