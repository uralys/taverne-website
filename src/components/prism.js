import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import PrismJS from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

const CodeContainer = styled.div`
  pre {
    font-size: calc(7px + 1vmin);
  }
`;

const Prism = ({
  code,
  component: Component = 'pre',
  className = 'language-javascript'
}) => {
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      PrismJS.highlightElement(container.current);
    }
  }, []);

  return (
    <CodeContainer>
      <Component ref={container} className={className}>
        {code}
      </Component>
    </CodeContainer>
  );
};

export default Prism;
