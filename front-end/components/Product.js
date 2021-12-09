import { Link } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";
import { Card } from "react-bootstrap";
// import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div className="my-3 p-3 rounded">
      <Link href={`/product/${product._id}`}>
        <Image
          alt={title}
          src={getStrapiMedia(product.image)}
          width={720}
          height={400}
          objectFit="cover"
          quality={100}
          className="shadow-lg  max-w-full mx-auto hover:scale-100"
        />
      </Link>

      <div>
        <Link href={`/product/${product._id}`}>
          <div>
            <strong>{product.name}</strong>
          </div>
        </Link>

        <div>
          {/* <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
         />*/}
        </div>

        <h3>${product.price}</h3>
      </div>
    </div>
  );
};

export default Product;
