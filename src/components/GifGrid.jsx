import { GifItem } from "./GifItem";
import { UseFetchGifts } from "../hooks/UseFetchGifts";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = UseFetchGifts(category);



  return (
    <>
      <h3>{category}</h3>

      {
        //       and
        isLoading && ( <h2>Cargando...</h2> )
      }

      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={image.id}
            // image={image}
            {...image} // para mandar todas las propiedades de un arreglo como props
          />
        ))}
      </div>
    </>
  );
};
