import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";

const GameDetail = ({ game }) => {
  // const loading = useSelector(loadingDetailSelector);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchDetail(id)); 
  // }, []);

  // const game = useSelector(detailSelector);

  return (
    <div className="">
      <div className="row">
        <div className="col-4">
          <img src={game.thumbnail} alt="" />
          <div className="row my-3">
            <div className="col-3">
              <div className="free-btn">FREE</div>
            </div>
            <div className="col-9">
              <div className="play-btn">PLAY NOW</div>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="game-title">{game.title}</div>
          <div className="game-infomation">
            <div className="info-title">About {game.title}</div>
            <div className="info-decr">{game.description}</div>
          </div>
          <div className="game-infomation">
            <div className="info-title">Addition Information</div>
            <div className="row">
              <div className="col-4">
                <div className="more-info">
                  <div className="more-info-title">Title</div>
                  <div className="more-info-game">{game.title}</div>
                </div>
              </div>
              <div className="col-4">
                <div className="more-info">
                  <div className="more-info-title">Developer</div>
                  <div className="more-info-game">{game.developer}</div>
                </div>
              </div>
              <div className="col-4">
                <div className="more-info">
                  <div className="more-info-title">Publisher</div>
                  <div className="more-info-game">{game.publisher}</div>
                </div>
              </div>
              <div className="col-4">
                <div className="more-info">
                  <div className="more-info-title">Release Date</div>
                  <div className="more-info-game">{game.release_date}</div>
                </div>
              </div>
              <div className="col-4">
                <div className="more-info">
                  <div className="more-info-title">Genre</div>
                  <div className="more-info-game">{game.genre}</div>
                </div>
              </div>
              <div className="col-4">
                <div className="more-info">
                  <div className="more-info-title">Platform</div>
                  <div className="more-info-game">{game.platform}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="game-infomation">
            <div className="info-title">{game.title} Screenshots</div>
            <div className="row">
              {/* <div className="col-4">
                <img src={game.screenshots[0].image} alt="" />
              </div>
              <div className="col-4">
                <img src={game.screenshots[1].image} alt="" />
              </div>
              <div className="col-4">
                <img src={game.screenshots[2].image} alt="" />
              </div> */}
            </div>
          </div>

          <div className="game-infomation">
            <div className="info-title">Minimum System Requirements</div>
            <div className="info-decr-browser">
              {game.title} is a browser based game and should run smoothly on
              practically any PC with a updated web-browser. <br /> <br />
              If you have old hardware or software, you may still be able to
              play Game Of Thrones Winter Is Coming, but your game experience
              may suffer. For the best gameplay experience, we recommend the
              latest versions of Firefox, Chrome, or Internet Explorer.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;

export const getStaticProps = async (context) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e6947f61d3mshc439afda6c59e21p11695fjsn3fb291e01c2d",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const res = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/game?id=" +
      context.params.gameId,
    options,
    { mode: "no-cors" }
  );

  const game = await res.json();

  return {
    props: {
      game,
    },
  };
};

export async function getStaticPaths() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e6947f61d3mshc439afda6c59e21p11695fjsn3fb291e01c2d",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const res = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games",
    options,
    { mode: "no-cors" }
  );

  const data = await res.json();

  const paths = data.map((game) => {
    return {
      params: { gameId: game.id.toString() },
    };
  });

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}
