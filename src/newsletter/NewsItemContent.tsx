import "./NewsItemContent.css";
import { NewsItemContentSectionProps } from "./NewsItemContentSectionProps";

interface NewsItemContentProps {
  content: NewsItemContentSectionProps[];
}

export default function NewsItemContent({ content }: NewsItemContentProps) {
  return (
    <div className="NewsItemContent">
      <div className="NewsItemContentBody">
        {content.map(({ header, body }, i) => (
          <div key={i}>
            {header && <p className="NewsItemContentHeader">{header}</p>}
            <div className="NewsItemContentBody">{body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
