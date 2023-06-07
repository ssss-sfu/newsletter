import React from "react";
import "./NewsItem.css";

import { NewsItemContentSectionProps } from "./NewsItemContentSectionProps";
import NewsItemContent from "./NewsItemContent";

export interface NewsItemProps {
  title: string;
  newsItems: NewsItemContentSectionProps[];
}

export default function NewsItem({ title, newsItems }: NewsItemProps) {
  return (
    <>
      <p className="NewsItemTitle">{title}</p>
      <NewsItemContent content={newsItems} />
    </>
  );
}
