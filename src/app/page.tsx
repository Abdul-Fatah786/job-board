// import { getSignInUrl, getSignUpUrl, withAuth } from "@workos-inc/authkit-nextjs";
import Hero from "./comoponents/Hero";
import Jobs from "./comoponents/Jobs";

export default async function Home() {
  // const { user } = await withAuth();

  // Get the URL to redirect the user to AuthKit to sign in
  // const signInUrl = await getSignInUrl();

  // Get the URL to redirect the user to AuthKit to sign up
  // const signUpUrl = await getSignUpUrl();

  return (
    <>
      <Hero />
      <Jobs />
    </>
  );
}
