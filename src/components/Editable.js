import sanitizeHtml from "sanitize-html"
import ContentEditable from 'react-contenteditable';
import { useState , useCallback, useEffect} from "react";
import styles from './editable.module.css';

export default function Editable({setContentE,contentExternal}) {
	// const [content, setContent] = useState(contentExternal);

	// useEffect(() => setContent(contentExternal),[]);

	const onContentChange = useCallback(evt => {
		const sanitizeConf = {
			allowedTags: ["b", "i", "a", "p"],
			allowedAttributes: { a: ["href"] }
		};
		// evt.currentTarget.innerHTML
		setContentE(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf));
	}, [])

	return (
		<ContentEditable className={styles.textEditor}
			onChange={onContentChange}
			onBlur={onContentChange}
			html={contentExternal}
		/>
	)
}