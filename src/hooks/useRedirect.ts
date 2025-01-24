import { useRouter } from "next/navigation";

export const useRedirect = (
  isLoggedIn: boolean,
  router: ReturnType<typeof useRouter>
) => {
  if (!isLoggedIn) {
    router.push("/user");
  } else {
    router.push("/user/profile");
  }
};
