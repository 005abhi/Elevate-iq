"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sidebar } from "../components/Sidebar";
import "./globals.css";

interface Article {
  urlToImage?: string;
  title?: string;
  url?: string;
  description?: string;
  author?: string;
  publishedAt?: string;
}

const NewsPage: React.FC = () => {
  const [latestNews, setLatestNews] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=computer%20OR%IOT%20OR%20companies%20OR%20technology%20OR%20industry&apiKey=${apiKey}`
        );

        const filteredArticles = response.data.articles.filter(
          (article: Article) => article.title && article.urlToImage
        );

        setLatestNews(filteredArticles);
      } catch (error) {
        console.error("Error fetching the news:", error);
        setError("Failed to fetch news.");
      }
    };

    fetchNews();
  }, [apiKey]);

  const formatDate = (dateString: string | undefined): string =>
    dateString ? new Date(dateString).toLocaleDateString() : "Unknown";

  return (
    <main className="layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="byte">
        <div className="relative bg-gray w-full h-auto overflow-hidden text-left text-base text-lavenderblush-300 font-poppins">
          <div className="gameit-container flex items-center justify-center">
            <div className="gameit-box p-6 rounded-xl text-white shadow-lg transform transition duration-300 ease-out hover:scale-105 hover:shadow-2xl">
              <h1 className="gameit-title text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Bytebriefs
              </h1>
            </div>
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
            {latestNews.map((news, index) => (
              <div
                key={index}
                className="relative bg-[#6A7B8C] text-black rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={news.urlToImage}
                  alt={news.title || "News Image"}
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold">
                    {news.title || "No Title"}
                  </h2>
                  <p className="text-sm text-gray-400">
                    By: {news.author || "Unknown"}
                  </p>
                  <p className="text-sm text-gray-400">
                    Published: {formatDate(news.publishedAt)}
                  </p>
                  <p className="mt-2">
                    {news.description || "No description available."}
                  </p>
                  <a
                    href={news.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-white inline-flex items-center"
                  >
                    Show More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      className="w-6 h-6 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 z-20 flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 text-white w-48 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4H9m1 4h1v-4h3l1.586 2.586a2 2 0 11-1.707 1.707L13 16zm6 0h3m-3 0h3m-6 0h3m-3 0H9m3-4V6h3"
            />
          </svg>
        </span>
        <span className="font-semibold text-sm">TEAMBOTS</span>
      </div>
    </main>
  );
};

export default NewsPage;
