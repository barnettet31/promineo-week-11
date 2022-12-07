import Prism from "prismjs";
import { useEffect } from "react";
import "./styles.css"
interface IProps {
  code: string;
  type: string;
}
export const CodeElement = ({ code, type }: IProps) => {
    useEffect(()=>{
        Prism.highlightAll()
    })
  return (
    <pre>
      <code className={`language-${type}`}>{code}</code>
    </pre>
  );
};
