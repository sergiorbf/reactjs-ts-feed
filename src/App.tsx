import { Post } from "./components/post";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import styles from "./App.module.css";
import "./global.css";
import React from "react";
import { PostType } from "./components/post";

const posts: Array<PostType> = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/sergiorbf.png",
      name: "Sergio Filho",
      role: "Junior Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-05-31 22:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/eryk-vieira.png",
      name: "Eryk Vieira",
      role: "Tech Lead",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-05-25 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
