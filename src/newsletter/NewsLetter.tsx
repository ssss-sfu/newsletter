import NewsItem, { NewsItemProps } from "./NewsItem";
import "./NewsLetter.css";

import IMAGE_LINKS from "../img/imageLinks";
import NewsLetterFooter from "./NewsLetterFooter";
import AuthorProfile from "./AuthorProfile";

export interface NewsLetterProps {
  newsletterTitle: string;
  newsletterSummary: string;
  newsItems: NewsItemProps[];
  authorName: string;
  authorPosition: string;
  flair?: string;
}

export default function NewsLetter({
  newsletterTitle,
  newsletterSummary,
  newsItems,
  authorName,
  authorPosition,
  flair,
}: NewsLetterProps) {
  return (
    <div className="newsletter">
      <img
        className="newsletter-banner"
        src={IMAGE_LINKS.BANNER}
        alt="SSSS Newsletter Banner"
      />
      <div className="newsletter-content">
        <h1 className="newsletter-title">{newsletterTitle}</h1>
        <p className="newsletter-summary">{newsletterSummary}</p>
        <table className="newsletter-newsitems">
          <tbody>
            {newsItems.map((newsItem, i) => (
              <tr key={i}>
                <td>
                  {
                    <NewsItem
                      title={newsItem.title}
                      newsItems={newsItem.newsItems}
                    />
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {flair && <p className="newsletter-flair">{flair}</p>}
        <AuthorProfile name={authorName} position={authorPosition} />
      </div>
      <NewsLetterFooter />
    </div>
  );
}
