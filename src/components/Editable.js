import sanitizeHtml from "sanitize-html"
import ContentEditable from 'react-contenteditable';
import { useCallback } from "react";
import styles from './editable.module.css';

export default function Editable({setContentE,contentExternal}) {
	const onContentChange = useCallback(evt => {
		const sanitizeConf = {
			allowedTags: ["b", "i", "a", "p"],
			allowedAttributes: { a: ["href"] }
		};
		
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