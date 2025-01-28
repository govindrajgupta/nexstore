# 🛍️ NexStore - Modern eCommerce Platform

NexStore - (https://nexstore-silk.vercel.app)  
![image](https://github.com/user-attachments/assets/924d5693-a093-48d4-8e3f-d02249ccaa99)


NexStore is a **cutting-edge eCommerce platform** designed to deliver a seamless shopping experience. Built with modern technologies like **Next.js**, **Sanity CMS**, **Stripe**, and **Clerk**, it offers a robust, scalable, and user-friendly solution for online stores. With features like secure payments, dynamic product management, and a responsive design, NexStore is the future of eCommerce.

---

## ✨ Features

- **📦 Product Management**: Effortlessly manage products using **Sanity CMS**.
- **💳 Secure Payments**: Integrated with **Stripe** for safe and reliable transactions.
- **🔐 User Authentication**: Seamless login and signup powered by **Clerk**.
- **🎨 Beautiful UI**: Stunning, responsive design built with **Tailwind CSS**.
- **🧑‍💻 TypeScript Support**: Type-safe codebase for fewer bugs and better developer experience.
- **⚡ Optimized Performance**: Advanced caching and state management for lightning-fast performance.
- **🔗 Dynamic Routing**: Leverages **Next.js** dynamic routing for product pages.
- **🔍 SEO Optimized**: Built-in SEO features for better search engine visibility.

---

## 🛠️ Technologies Used

| **Category**       | **Technologies**                                                                 |
|---------------------|---------------------------------------------------------------------------------|
| **Frontend**        | Next.js, Tailwind CSS, TypeScript                                               |
| **Backend**         | Sanity CMS                                                                      |
| **Payment Gateway** | Stripe                                                                          |
| **Authentication**  | Clerk                                                                           |
| **State Management**| React Context API / Redux / Zustand / SWR / React Query (choose what you used)  |
| **Caching**         | Next.js Caching, SWR, or React Query                                            |

---

## 🚀 Getting Started

Follow these steps to set up NexStore on your local machine.

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Sanity CLI (for CMS modifications)
- Stripe account
- Clerk account

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/NexStore.git
   cd NexStore

   npm install
# or
yarn install

NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

and setup sanity and stripe webhook dependency

🌐 Deployment
NexStore is optimized for deployment on Vercel (recommended for Next.js apps). Follow these steps:

Push your code to a GitHub repository.

Import the repository into Vercel.

Add the required environment variables in the Vercel dashboard.

Deploy!

🌐 Deployment
NexStore is optimized for deployment on Vercel (recommended for Next.js apps). Follow these steps:

Push your code to a GitHub repository.

Import the repository into Vercel.

Add the required environment variables in the Vercel dashboard.

Deploy!

🤝 Contributing
We welcome contributions! If you'd like to contribute, please follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature/YourFeatureName).

Commit your changes (git commit -m 'Add some feature').

Push to the branch (git push origin feature/YourFeatureName).

Open a pull request.

📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

🙏 Acknowledgments
Next.js for the powerful React framework.

Sanity for the flexible CMS.

Stripe for secure payment processing.

Clerk for user authentication.

Tailwind CSS for the utility-first CSS framework.

TypeScript for type safety.

NexStore is developed with ❤️ by Govind. Feel free to reach out if you have any questions or feedback!
