import sanitizeHtml from "sanitize-html"
import ContentEditable from 'react-contenteditable';
import { useState , useCallback, useEffect} from "react";
import styles from './editable.module.css';

export default function Editable({contentExternal,id}) {
	const [content, setContent] = useState("");

	useEffect(() => setContent(contentExternal),[]);

	const onContentChange = useCallback(evt => {
		const sanitizeConf = {
			allowedTags: ["b", "i", "a", "p"],
			allowedAttributes: { a: ["href"] }
		};
		// evt.currentTarget.innerHTML
		setContent(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf))
	}, [])

	return (
		<ContentEditable className={styles.textEditor}
			onChange={onContentChange}
			onBlur={onContentChange}
			html={content}
		/>
	)
}