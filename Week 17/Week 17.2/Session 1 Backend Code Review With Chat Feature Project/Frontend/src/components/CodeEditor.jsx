import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const CodeEditor = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const sampleCode = `function hello() { return "Hello World"; }`;

  return (
    <pre className="bg-gray-800 p-4 rounded-lg">
      <code className="language-javascript">{sampleCode}</code>
    </pre>
  );
};

export default CodeEditor;
