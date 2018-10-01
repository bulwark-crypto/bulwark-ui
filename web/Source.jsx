import PropTypes from 'prop-types'
import React from 'react'

import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/prism-light";
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import prism from 'react-syntax-highlighter/styles/prism/prism';

registerLanguage('jsx', jsx);

const Source = ({code, type}) => (
  <SyntaxHighlighter
    language={type}
    showLineNumbers
    startingLineNumber={1}
    style={prism}>{code}</SyntaxHighlighter>
)

Source.defaultProps = {
  type: 'jsx'
}

Source.propTypes = {
  code: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['css', 'html', 'javascript', 'jsx']).isRequired
}

export default Source
