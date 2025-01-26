import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-csharp.min.js";
import "prismjs/components/prism-bash.min.js";
import "prismjs/components/prism-json.min.js";
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/toolbar/prism-toolbar.min.js';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js';

export default function CodeSnippet({ code, language }) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <pre className="code-snippet">
            <code className={`language-${language} line-numbers`}>
                {code}
            </code>
        </pre>
    );
}
