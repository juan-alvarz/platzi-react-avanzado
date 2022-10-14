import React from "react";
import { gql, useQuery } from "@apollo/client";
import { PhotoCard } from "../PhotoCard";

const withPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListOfPhotoCards = () => {
  const { data, loading, error } = useQuery(withPhotos);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  return (
    <ul>
      {data.photos.map(photo => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};

/* const ListOfPhotoCardsComponent = props => {
  console.log(props);
  return (
    <ul>
      {[1, 2, 3, 4, 5, 6].map(id => (
        <PhotoCard key={id} id={id} />
      ))}
    </ul>
  );
};

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent);
 */
