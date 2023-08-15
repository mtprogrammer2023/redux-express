import { useEffect } from "react";
import { getAllPopularMovie } from "../stateManagement/actions/popularMovieActions";
import { connect } from "react-redux";
const PopularListWithThunk = (props) => {
  useEffect(() => {
    props.getAll();
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
        {props.movies &&
          props.movies.map(({ id, title, poster_path, vote_average }) => (
            <div
              key={id}
              className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
              style={{
                height: "450px",
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
              }}
            >
              <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
              <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                <a
                  href="#"
                  className="flex flex-col text-xs bg-[#f5de50] text-black px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500"
                >
                  <span className="text-2xl leading-0 font-semibold">
                    {vote_average}
                  </span>
                  <span className="-mt-2">IMDB</span>
                </a>
              </div>
              <main className="p-5 z-10">
                <a
                  href="#"
                  className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
                >
                  {title}
                </a>
              </main>
            </div>
          ))}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state.popularMovieThunkState.items.results);
  return {
    movies: state.popularMovieThunkState.items.results,
    isLoading: state.popularMovieThunkState.isLoading,
    message: state.popularMovieThunkState.message,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: (id) => getAllPopularMovie(dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularListWithThunk);
