import React from "react";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Cart = ({ cart: { id, productId, quantity } }) => {
  const { products } = useProductStore();
  const { increaseQuantity, decreaseQuantity,removeCart } = useCartStore();
  const product = products.find((el) => el.id === productId);
  const cost = product.price * quantity

  const handleIncreaseQuantity = () => {
    increaseQuantity(id)
  }

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      decreaseQuantity(id)
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, remove it!",
      }).then((result) => {
        if (result.isConfirmed) {
          removeCart(id)
          toast.success("Item removed !!!")
        }
      });
    }
  }
  



  return (
    <div className=" border mb-5 border-black xs:p-1 md:p-5 grid grid-cols-6 md:gap-4 xl:gap-5 xs:gap-[2px] items-center">
      <div className="col-span-1">
        <img
          src={product.image}
          alt={product.title}
          className="h-24 block mx-auto object-contain"
        />
      </div>
      <div className="xs:scale-75 md:scale-100 col-span-3">
        <p className="truncate">{product.title}</p>
        <p className="text-gray-400">Price ({product.price})</p>
      </div>
      <div className="xs:scale-75 md:scale-100 col-span-1 flex flex-col items-center gap-1">
        <p>Quantity</p>
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={handleDecreaseQuantity}
            className="border border-black px-2 bg-black text-white font-bold py-1"
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            onClick={handleIncreaseQuantity}
            className="border border-black px-2 bg-black text-white font-bold py-1"
          >
            +
          </button>
        </div>
      </div>
      <div className="xs:scale-[0.75] md:scale-100 col-span-1">
        <p className="font-bold md:text-xl lg:text-2xl text-end">
          $ {cost.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
