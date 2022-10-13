import { StarIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import {addItemToBasket, addToBasket, removeFromBasket, removeItemFromBasket} from "../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  description,
  price,
  rating,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();

const addItemToBasket = () => {
const product = {
  id,
  title,
  description,
  price,
  rating,
  category,
  image,
  hasPrime,
};
dispatch(addToBasket(product));
};

const removeItemFromBasket = () => {
dispatch(removeFromBasket({id}));
}

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />

      <div className="col-span-3 mx-5">
        <div className="flex">
          <p>{title}</p>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-sm my-2 line-clamp-3">{description}</p>
        <p>#{price}</p>
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt="prime"
            />
            <p className="text-xs text-gray-500">Free Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-items-end">
        <button className="button " onClick={addItemToBasket}>
          Add to Cart
        </button>
        <button className="button " onClick={removeItemFromBasket}>Remove from Cart </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
