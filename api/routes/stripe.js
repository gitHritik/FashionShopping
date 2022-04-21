// const { default: Stripe } = require("stripe");

const router = require("express").Router();
const KEY =
  "sk_test_51KaimASI6i4F9vZj7kLYhduPufxAxRcXDFick0u7DO9YD6vP7zcqgRKnlVY9lQ8HfBU75n3CSQJvOnjuLJ4upET5004CaT4CGE";
const stripe = require("stripe")(KEY);

// $(document).ready(function () {
//   Stripe.setPublishableKey($('meta[name="stripe-key"]').attr("content"));
// });

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "INR",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
