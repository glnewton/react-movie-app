export default function Movie({ element }){
    return (
        <div className="each">
          <br />
          <h1>{element.Title}</h1>
          <h2>{element.Genre}</h2>
          <img src={element.Poster} alt={element.Title}/>
          <h2>{element.Year}</h2>
        </div>
      );
}




