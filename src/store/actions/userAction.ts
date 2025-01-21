import { useRouter } from "next/navigation";

export const loginRedirect = (
  isLoggedIn: boolean,
  router: ReturnType<typeof useRouter>
) => {
  if (!isLoggedIn) {
    router.push("/user");
  } else {
    router.push("/user/profile");
  }
};
