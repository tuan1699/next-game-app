import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./Games.module.css";
import { Button, Form, Pagination } from "react-bootstrap";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import qs from "query-string";

const categories = ["mmorpg", "shooter", "strategy", "moba"];

const platform = ["pc", "browser", "all"];

const GamesList = ({ page, data, totalPage, filter, games, url }) => {
  const router = useRouter();
  const items = [];
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      genre: filter.genre,
      platform: filter.platform,
    },
  });

  for (let i = 1; i <= totalPage; i++) {
    items.push(
      <Pagination.Item
        key={i}
        active={i == page}
        onClick={() => {
          router.push({
            url: "/games",
            query: {
              page: i,
              genre: getValues("genre"),
              platform: getValues("platform"),
            },
          });
        }}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <div className="container">
      <Head>
        <title>Danh sách game</title>
      </Head>
      <div className="row">
        <div className="col-9">
          <div className="row">
            {games.map((game) => (
              <div className="mb-4 col-sm-6 col-lg-4" key={game.id}>
                <Link
                  href={{
                    pathname: "games/[gameId]",
                    query: { gameId: game.id },
                  }}
                >
                  <div className={styles["game-item"]} key={game.id}>
                    <div className={styles["thumb"]}>
                      <img src={game.thumbnail} alt="" />
                    </div>
                    <div className={styles["game-info"]}>
                      <div className={styles["name"]}>{game.title}</div>
                      <div className={styles["decr"]}>
                        {game.short_description}
                      </div>
                      <div className={styles["genre"]}>{game.genre}</div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="row">
            <Pagination>{items}</Pagination>
          </div>
        </div>

        <div className="col-3">
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
              router.push({
                pathname: "/games",
                query: data,
              });
            })}
          >
            <div className="filter-field">
              <div className="title fs-4">Genre</div>
              <div className="d-flex flex-column">
                {categories.map((cate) => (
                  <Form.Check
                    key={cate}
                    type="checkbox"
                    label={cate}
                    value={cate}
                    {...register("genre", {
                      required: true,
                    })}
                  />
                ))}
              </div>
            </div>
            <div className="filter-field my-3">
              <div className="title fs-4">Platform</div>
              <div className="d-flex flex-column">
                {platform.map((platform) => (
                  <Form.Check
                    key={platform}
                    type="radio"
                    label={platform}
                    value={platform}
                    {...register("platform", {
                      required: true,
                    })}
                  />
                ))}
              </div>
            </div>
            <div>
              {" "}
              <Button type="submit">Lọc</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GamesList;

export const getServerSideProps = async (context) => {
  const { page = 1, genre = [], platform = "all" } = context.query;

  const url = qs.stringifyUrl(
    {
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      query: {
        tag: genre,
        platform,
      },
    },
    {
      skipEmptyString: true,
      skipNull: true,
      arrayFormat: "separator",
      arrayFormatSeparator: ".",
    }
  );

  console.log(url);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e6947f61d3mshc439afda6c59e21p11695fjsn3fb291e01c2d",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options, { mode: "no-cors" });

  const data = await res.json();

  return {
    props: {
      url,
      data,
      page,
      totalPage: Math.ceil(data.length / 12),
      total: data.length,
      games: data.slice((page - 1) * 12, page * 12),
      filter: {
        genre,
        platform,
      },
    },
  };
};
