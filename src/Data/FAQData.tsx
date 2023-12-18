type ListQuestions = {
  header: string;
  texts: string[];
};

type TextQuestions = {
  header: string;
  text: string;
};

export const ListQuestions: ListQuestions[] = [
  {
    header: "Account and Login",
    texts: [
      "To create a new account, click on the 'Sign Up' button and follow the instructions.",
      "If you forgot your password, click 'Forgot Password' on the login page and follow the reset process.",
      "Unfortunately, username changes are not allowed at this time.",
      "To update your account information, go to 'My Account' and edit the relevant details.",
      "We employ industry-standard security measures to protect your account, including encryption and two-factor authentication.",
    ],
  },
  {
    header: "Product Information",
    texts: [
      "Key features include [list key features].",
      "Yes, you can customize various settings through the 'Settings' menu.",
      "To track your order, go to 'Order History' in your account.",
      "All products come with a standard warranty. Check the product documentation for details.",
      "We accept payments through [list accepted payment methods].",
    ],
  },
  {
    header: "Shipping and Delivery",
    texts: [
      "Shipping times vary. Check the estimated delivery date during checkout.",
      "Yes, we offer international shipping. Additional fees may apply.",
      "If your order is delayed, contact our customer support for assistance.",
      "Contact customer support immediately to update your shipping address.",
      "Shipping fees depend on your location and the selected shipping method.",
    ],
  },
];

export const TextQuestions: TextQuestions[] = [
  {
    header: "Returns and Refunds",
    text: "Our return policy allows returns within 30 days of purchase. Contact customer support for return instructions.",
  },
  {
    header: "Technical Support",
    text: "For common technical issues, refer to our troubleshooting guide at [link]. If issues persist, contact our technical support team at [contact details].",
  },
  {
    header: "Privacy and Security",
    text: "Your personal information is securely stored and never shared with third parties. Review our privacy policy for details.",
  },
  {
    header: "Product Usage",
    text: "Refer to the product manual for detailed instructions on proper usage and guidelines.",
  },
  {
    header: "Contact Information",
    text: "You can reach our customer support team via email at [email] or by calling [phone number].",
  },
];
