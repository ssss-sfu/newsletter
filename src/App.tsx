import { NewsItemProps } from "./newsletter/NewsItem";
import NewsLetter from "./newsletter/NewsLetter";
import "./style.css";

function App() {
  const temporaryNewsItems: NewsItemProps[] = [
    {
      title: "News Item 1",
      newsItems: [{ header: "January 1, 2024", body: <p>Happy new year</p> }],
    },
    {
      title: "News Item 2",
      newsItems: [
        { header: "December 31, 2024", body: <p>End of the year</p> },
      ],
    },
  ];

  // https://stackoverflow.com/questions/1643320/get-month-name-from-date/18648314#18648314
  const currentDate = new Date(Date.now()).toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  const newsletterTitle: string = `SSSS ${currentDate} Newsletter`;

  const newsletterSummary: string =
    "Hi Sosy! Welcome to the first newsletter of the summer! We've got some awesome upcoming events for y'all... PLUS some things you may have missed out on during the break!";

  const authorName = "Gahee Kim";
  const authorPosition = "Secretary";
  const newsletterFlair = "And that's all from me! Peace!";

  return (
    <div id="letter-page">
      <NewsLetter
        newsletterTitle={newsletterTitle}
        newsletterSummary={newsletterSummary}
        newsItems={temporaryNewsItems}
        authorName={authorName}
        authorPosition={authorPosition}
        flair={newsletterFlair}
      />
    </div>
  );
}

export default App;
