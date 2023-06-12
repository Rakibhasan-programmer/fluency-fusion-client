import { Elements } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51NGkG6Iy3s0p8WtXjeeDNhVHgnUQnCNtnkHDobiVg4AwdxatRhc6tIbKivtWeMuqk5CeOCcKT7HlLo6HcRI4Vitw00M5Hb4bHc"
);
const Payment = () => {
  const [course, setCourse] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [id]);

  return (
    <div className="py-3">
      <Elements stripe={stripePromise}>
        <CheckoutForm course={course} price={course?.price} />
      </Elements>
    </div>
  );
};

export default Payment;
