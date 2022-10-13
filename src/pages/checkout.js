import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, seletctTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(seletctTotal);
  const { data: session } = useSession();
  
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text:3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon cart is empty!"
                : "Shopping Cart"}
            </h1>
            {items.map((items, i) => (
              <CheckoutProduct
                key={i}
                id={items.id}
                title={items.title}
                price={items.price}
                ratings={items.ratings}
                category={items.category}
                description={items.description}
                image={items.image}
                hasPrime={items.hasPrime}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="white-space-nowrap">
                Subtotal ({items.length} items): {" "}
                <span className="font-bold">
                  #{total}
                </span>
              </h2>

              <button
              disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
