import React from "react";
import { useState, useEffect } from "react";
// import unsplash from "../api/unsplash";
// import SearchBar from "./SearchBar";
import YouTube from "react-youtube";

export default function App() {
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [query, setQuery] = useState("");

  //   ------- Works -------
  //   https://yrgo-assignment.herokuapp.com/entries
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts`).then((response) =>
  //     console.log(response)
  //   );
  // }, []);
  // return <div className="App">App</div>;

  //   Does not work

  //   useEffect(() => {
  //     fetch(
  //       `https://api.unsplash.com/photos/?client_id=rz1sOP9m_lUkfn_RWgGzR7KwkugLex27v-Kscv3i8m0`
  //     ).then((response) => console.log(response));
  //   }, []);
  //   return <div className="App">App</div>;

  //   ------- Works -------

  // useEffect(() => {
  //   fetch(`https://api.unsplash.com/search/photos?page=1&query=cars`, {
  //     headers: {
  //       Authorization: "Client-ID rz1sOP9m_lUkfn_RWgGzR7KwkugLex27v-Kscv3i8m0",
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(
  //           `This is an HTTP error: The status is ${response.status}`
  //         );
  //       }
  //       return response.json();
  //     })
  //     .then((json) => console.log(json))
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);
  // return <div className="App">App</div>;

  //   ------- Works -------
  //   https://jsonplaceholder.typicode.com/posts?_limit=8
  //   https://api.unsplash.com/photos/?client_id=rz1sOP9m_lUkfn_RWgGzR7KwkugLex27v-Kscv3i8m0
  //   https://yrgo-assignment.herokuapp.com/entries

  // fetch(`https://api.unsplash.com/photos/`, {
  //   headers: {
  //     Authorization: "Client-ID rz1sOP9m_lUkfn_RWgGzR7KwkugLex27v-Kscv3i8m0",
  //   },
  // })

  // works to search images

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=${query}`, {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.results);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      });
    // .finally(() => {
    //   setLoading(false);
    // });
  }, [query]);

  return (
    <div>
      {/* onSubmit={this.handleSubmit} */}
      <form>
        <label>
          <input
            placeholder="Search"
            type="text"
            // value={this.state.value}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

      {data &&
        data.map(({ id, description, urls }) => (
          <img key={id} alt={description} src={urls.regular} />
        ))}
    </div>
  );

  // END

  // return (
  //   <div className="App">
  //     <h1>API Posts</h1>
  //     {loading && <div>A moment please...</div>}
  //     {error && (
  //       <div>{`There is a problem fetching the post data - ${error}`}</div>
  //     )}
  //     <ul>
  //       {data &&
  //         data.map(({ id, title, body }) => (
  //           <li key={id}>
  //             <h3>{title}</h3>
  //             <p>{body}</p>
  //           </li>
  //         ))}
  //     </ul>
  //   </div>
  // );

  // videos
  // useEffect(() => {
  //   fetch(`https://yrgo-assignment.herokuapp.com/entries`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(
  //           `This is an HTTP error: The status is ${response.status}`
  //         );
  //       }
  //       return response.json();
  //     })
  //     .then((actualData) => {
  //       console.log(actualData);
  //       setData(actualData);
  //       setError(null);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       setData(null);
  //     });
  //   // .finally(() => {
  //   //   setLoading(false);
  //   // });
  // }, []);

  // if (!data) {
  //   return <div> Loading... </div>;
  // }
  // return (
  //   <div>
  //     {data &&
  //       data.map(({ _id, youtubeId }) => (
  //         // <iframe
  //         //   key={_id}
  //         //   className="video"
  //         //   title="Youtube player"
  //         //   sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
  //         //   src={`https://youtube.com/embed/${youtubeId}?autoplay=0`}
  //         // ></iframe>
  //         <YouTube videoId={youtubeId} />
  //       ))}
  //   </div>
  // );
}

// import React from 'react';
// import unsplash from '../api/unsplash';
// import SearchBar from './SearchBar';
// import ImageList from './ImageList';

// class App extends React.Component {
//     state = {images: []};

//     onSearchSubmit = async (term) => {
//         const response = await unsplash.get('https://api.unsplash.com/search/photos', {
//             params: { query: term }
//         });
//         this.setState({ images: response.data.results });
//     }

//     render() {
//         return (
//             <div className="ui container" style={{ marginTop: '10px' }} >
//                 <SearchBar onSubmit={this.onSearchSubmit} />
//                 <ImageList images={this.state.images} />
//             </div>
//         );
//     }
// }

// export default App;
